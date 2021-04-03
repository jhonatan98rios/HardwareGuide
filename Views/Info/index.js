import React from 'react';
import { Container, Text, Title, View } from './style.js'
import { translate } from '../../locales'

export default function Info() {
  return (
    <Container>   
      <View>
        <Title> {translate('info.title')} </Title>
        <Text> {translate('info.description_a')} </Text>
        <Text> {translate('info.description_b')} </Text>
      </View>
    </Container>
  );
}
