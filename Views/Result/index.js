import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Text } from 'react-native'
import axios from 'axios'
import { Container, Title, Disclaimer } from './style.js'

import CardSlider from '../../Components/CardSlider'

export default function Result({ route, navigation }) {

  const { sample } = route.params
  const [ content, setContent ] = useState(null)

  useEffect(() => {
    if(!sample) {
      navigation.push('search')
    }else{
      axios.post('https://smart-gadget-web.herokuapp.com/api/smart', {
        text: sample, 
      })
      .then(response => setContent(response.data))
      .catch(reject => console.log(reject))
    }
  }, [])

  return (
    <> 
    {
      !content && (
        <Container>
          <ActivityIndicator color="#8257E6" size="large" /> 
          <Text style={{ color: '#fff', marginTop: 24 }}> Aguarde enquanto processamos seu pedido </Text>
        </Container>
      )
    }
  {
      content && (
        <Container>
          <Title> Veja as sugestões que separamos para você </Title>
          <CardSlider content={content} /> 
          <Disclaimer> * Os preços podem váriar  de acordo com o mercado. Os preços ilustrados são somente para comparação. </Disclaimer>
        </Container>
      )
    }
    </>
  );
}
