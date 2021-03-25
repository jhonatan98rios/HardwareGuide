import React from 'react';
import { Container, Title } from './style.js'
import CardSlider from '../../Components/CardSlider'

export default function PopularResults({route}) {

  const { itens } = route.params;

  return (
    <Container>
      <Title> Veja as sugestões que separamos para você </Title>
      <CardSlider content={itens} />
    </Container>
  );
}
