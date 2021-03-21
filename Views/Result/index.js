import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Text } from 'react-native'
import axios from 'axios'
import { Container, BackButton, Block } from './style.js'

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
    <Container>
      {!content && (
        <Block>
          <ActivityIndicator color="#8257E6" size="large" /> 
          <Text style={{ color: '#fff', marginTop: 24 }}> Aguarde enquanto processamos seu pedido </Text>
        </Block>
      )}

      {content && (
        <Block>
          <CardSlider content={content} /> 

          <BackButton onPress={() => { navigation.push('Search') }}>
            <Text style={{color: '#fff'}}> 
              Voltar
            </Text>
          </BackButton>
        </Block>
      )}
    </Container>
  );
}
