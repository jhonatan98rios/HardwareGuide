import React, { useState } from 'react';
import { Container, Title, Text, TextInput, Button, Disclaimer } from './style.js'

export default function Search({ navigation }) {

  const [ sample, setSample ] = useState('')
  const [ active, setActive ] = useState(false)

  function next(){
    navigation.push('Result', { sample })
    setSample('')
  }

  function eventHandler(e){

    if(sample.replace(/[0-9]| /g, '').length >= 3){
      setActive(true)
      if(e.nativeEvent.key == "Enter") next();
      
    } else {
      setActive(false)
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

      {active && (
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
