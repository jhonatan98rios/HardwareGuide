import React from 'react';
import { translate, language } from '../../locales'
import { Container, ScrollView, Title, View, TouchableOpacity, Text} from './style.js'

import { options_pt } from '../../Mockdata/Popular'
import { options_en } from '../../Mockdata/Popular_en'

const options = language == 'pt_BR' ? options_pt : options_en

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
