import React from 'react';
import { Container, Text, Title, View } from './style.js'
import { AdMobBanner, setTestDeviceIDAsync } from 'expo-ads-admob';

export default function Info() {
  return (
    <Container>

      <AdMobBanner
        bannerSize="fullBanner"
        adUnitID="ca-app-pub-3940256099942544/6300978111"
        setTestDeviceIDAsync
        servePersonalizedAds
        onDidFailToReceiveAdWithError={(err) => console.log(err)} 
      />      

      <View>
        <Title>  Encontre o computador ideal para você!  </Title>
        <Text> Através de inteligência artifícial e processamento de linguagem natural, o Smart Gadget é capaz de identificar qual hardware e software se encaixam em suas necessidades. </Text>
        <Text> Para isso, o sistema faz uso de todo o poder computacional disponível na nuvem, além das melhores práticas de desenvolvimento, arquitetura e tecnologias disponíveis no mercado. </Text>
      </View>
    </Container>
  );
}
