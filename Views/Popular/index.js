import React, { useState } from 'react';
import { Container, ScrollView, Title, View, TouchableOpacity, Text, Disclaimer} from './style.js'
import { options } from '../../Mockdata/Popular'

export default function Popular({ navigation }) {

  function navigate(itens){
    navigation.navigate('PopularResult', {
      itens,
    });
  }

  return (
    <Container>
      <View>
        <Title> Selecione a opção que procura </Title>

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
