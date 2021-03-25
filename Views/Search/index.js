import React, { useState } from 'react';
import { Container, Title, Text, TextInput, Button, Disclaimer } from './style.js'

export default function Search({ navigation }) {

  const [ sample, setSample ] = useState('')

  function next(){
    if(sample.length >= 3){ 
      navigation.push('Result', { sample })
    }
  }

  function eventHandler(e){
    if(e.nativeEvent.key == "Enter"){
      next();
    }
  }

  return (
    <Container>
      <Title>Me fale sobre o computador que você precisa</Title>

      <TextInput
        onChangeText={text => setSample(text)}
        onKeyPress={ e => eventHandler(e)}
        placeholder={"Procuro um PC para..."}
        placeholderTextColor={"#999999"}
        returnKeyType="done"
        multiline={true}
        value={sample}
        autoCapitalize="sentences"
      />

      {sample.length >= 3 && (
        <Button onPress={() => next(sample)}> 
          <Text>
            Confirmar
          </Text>
        </Button>
      )}

      <Disclaimer>
        * As frases serão armazenadas e posteriormente utilizadas no treino do algoritmo  
      </Disclaimer>
    </Container>
  );
}
