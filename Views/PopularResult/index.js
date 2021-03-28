import React from 'react';
import { Container, Title, Disclaimer } from './style.js'
import CardSlider from '../../Components/CardSlider'

export default function PopularResults({route}) {

  const { itens } = route.params;

  return (
    <Container>
      <Title> Veja as sugestões que separamos para você </Title>
      <CardSlider content={itens} />
      <Disclaimer> * Os preços podem váriar  de acordo com o mercado. Os preços ilustrados são somente para comparação. </Disclaimer>
    </Container>
  );
}
