import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native'
import { Container, View, Title, Text, TouchableOpacity, ScrollView } from './style.js'

import { translate } from '../../locales'

export default function Info({ navigation }) {

  const [ data, setData ] = useState(null)

  async function getData() {
    try {
      const response = await axios.get(translate('learn.endpoint'))
      setData(response.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(()=>{
    getData()
  }, [])

  function navigate(item){
    navigation.navigate('Conteudo', { item });
  }

  return (
    <Container>   
      <View style={{width:'100%'}}>
        <Title> {translate('learn.title')} </Title>

        { data && <ScrollView>
          { data.map((item, index) => (
            <TouchableOpacity key={index} onPress={()=>{ navigate(item) }}>
              <Text> { item.title } </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>  }

        { !data && <ActivityIndicator color="#8257E6" size="large" /> }

      </View>
    </Container>
  );
}
