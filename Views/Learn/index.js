import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native'
import { Container, Title, Text, TouchableOpacity, ScrollView } from './style.js'

import { translate } from '../../locales'

export default function Info({ navigation }) {

  const [ data, setData ] = useState(null)

  useEffect(()=>{
    axios.post('https://smart-gadget-web.herokuapp.com/api/learn')
    .then(response => setData(response.data))
    .catch(reject => console.log(reject))
  }, [])

  function navigate(item){
    navigation.navigate('Conteudo', {
      item
    });
  }

  return (
    <Container>   
      <View style={{width:'100%'}}>
        <Title> {translate('learn.title')} </Title>

        { data && <ScrollView>
          { data.map((item, index) => (
            <TouchableOpacity 
              key={index}
              onPress={()=>{ navigate(item) }}
            >
              <Text>
                { item.title }
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>  }

        { !data && <ActivityIndicator color="#8257E6" size="large" /> }

      </View>
    </Container>
  );
}
