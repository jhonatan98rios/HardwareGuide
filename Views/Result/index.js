import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Text } from 'react-native'
import axios from 'axios'
import { Container, Title, Disclaimer } from './style.js'

import CardSlider from '../../Components/CardSlider'

import { translate } from '../../locales'

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
          <Text style={{ color: '#fff', marginTop: 24 }}> {translate('result.loading')} </Text>
        </Container>
      )
    }
  {
      content && (
        <Container>
          <Title> {translate('result.title')} </Title>
          <CardSlider content={content} /> 
          <Disclaimer> {translate('result.disclaimer')} </Disclaimer>
        </Container>
      )
    }
    </>
  );
}
