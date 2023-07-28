import axios from 'axios'
import { ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react';
import { translate } from '../../locales'
import { Container, ScrollView, Title, View, TouchableOpacity, Text} from './style.js'

import { options_pt } from '../../Mockdata/Popular'
//import { options_en } from '../../Mockdata/Popular_en'
//const options = options_pt //language == 'pt-BR' ? options_pt : options_en


export default function Popular({ navigation }) {

  const [ data, setData ] = useState(null)

  function navigate(itens){
    navigation.navigate('PopularResult', {
      itens,
    });
  }

  async function getData() {
    try {
      const response = await axios.get(translate('popular_result.endpoint'))
      setData(response.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(()=>{
    getData()
  }, [])

  return (
    <Container>
      {
        !data && (
          <Container>
            <ActivityIndicator color="#8257E6" size="large" /> 
            <Text style={{ color: '#fff', marginTop: 24 }}> {translate('result.loading')} </Text>
          </Container>
        )
      }
      {
        data && (
          <View>
            <Title> {translate('popular.title')} </Title>

            <ScrollView>
              { data.map((option, index) => (
                <TouchableOpacity 
                  key={index}
                  onPress={()=> navigate(option.itens)}
                >
                  <Text>
                    { option.name }
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        )
      }

    </Container>
  );
}
