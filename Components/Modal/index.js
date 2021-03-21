import React from 'react';
import { Text } from 'react-native'
import { Container, Title, BackButton } from './style.js'
import CardSlider from '../../Components/CardSlider'

export default function Modal({data, closeModal}) {
  return (
    <Container>
      <Title> Veja as sugestões que separamos para você </Title>
      <CardSlider content={data} />

      <BackButton onPress={closeModal}>
        <Text style={{color: '#fff'}}> 
          Voltar
        </Text>
      </BackButton>
    </Container>
  );
}
