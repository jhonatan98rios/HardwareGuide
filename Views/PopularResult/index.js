import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Text } from 'react-native'
import axios from 'axios'
import { Container, Title, Disclaimer } from './style.js'
import CardSlider from '../../Components/CardSlider'

import { translate } from '../../locales'

export default function PopularResults({route}) {

  const [ content, setContent ] = useState(null)

  const { device, spec, purpose } = route.params;
  const endpoint = 'https://hardwareguide-api.herokuapp.com/api/popular'
  
  useEffect(() => {

    /* Products request */
    if(!device || !spec || !purpose) { 
      navigation.push('Popular')

    } else {
      axios.post(endpoint, { device, spec, purpose })
      .then(response => {
        setContent(response.data)
      })
      .catch(reject => console.log(reject))
    }
  }, [])

  return (
    <Container>
      <Title> {translate('popular_result.title')} </Title>
      {
        !content && (
          <Container>
            <ActivityIndicator color="#8257E6" size="large" /> 
            <Text style={{ color: '#fff', marginTop: 24 }}> {translate('result.loading')} </Text>
          </Container>
        )
      }
      {
        content && <CardSlider content={content} />
      }
      <Disclaimer> {translate('popular_result.disclaimer')} </Disclaimer>
    </Container>
  );
}
