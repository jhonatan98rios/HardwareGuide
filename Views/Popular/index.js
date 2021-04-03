import React, { useState } from 'react';
import { Container, ScrollView, Title, View, TouchableOpacity, Text} from './style.js'
import { options } from '../../Mockdata/Popular'

import { translate } from '../../locales'

export default function Popular({ navigation }) {

  function navigate(itens){
    navigation.navigate('PopularResult', {
      itens,
    });
  }

  return (
    <Container>
      <View>
        <Title> {translate('popular.title')} </Title>

        <ScrollView>
          { options.map((option, index) => (
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

    </Container>
  );
}
