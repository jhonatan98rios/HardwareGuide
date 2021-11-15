import React, { useEffect } from 'react';
import { Container, Title, Disclaimer } from './style.js'
import CardSlider from '../../Components/CardSlider'

import { translate } from '../../locales'

export default function PopularResults({route}) {

  const { itens } = route.params;

  return (
    <Container>
      <Title> {translate('popular_result.title')} </Title>
      <CardSlider content={itens} />
      <Disclaimer> {translate('popular_result.disclaimer')} </Disclaimer>
    </Container>
  );
}
