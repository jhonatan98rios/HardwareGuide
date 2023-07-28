import Constants from 'expo-constants';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Text } from 'react-native'
import axios from 'axios'
import { Container, Title, Disclaimer } from './style.js'

import CardSlider from '../../Components/CardSlider'

import { translate } from '../../locales'

/* ADS */
import { AdMobInterstitial } from 'expo-ads-admob';
const testID = 'ca-app-pub-3940256099942544/1033173712';
const productionID = 'ca-app-pub-4295099091792843/1079613300';
const adUnitID = Constants.isDevice && !__DEV__ ? productionID : testID;

export default function Result({ route, navigation }) {

  const { sample } = route.params
  const [ content, setContent ] = useState(null)

  useEffect(() => {

    /* ADS Config */
    async function showInterstitial(){
      try{
        await AdMobInterstitial.requestAdAsync();
        await AdMobInterstitial.showAdAsync();
      }
      catch(e){ console.log(e) }
    }

    AdMobInterstitial.setAdUnitID(adUnitID); 
    showInterstitial()

    /* Products request */
    if(!sample) { navigation.push('search') }
    else {
      axios.post(translate('result.endpoint'), { text: sample })
        .then(response => setContent(response.data))
        .catch(reject => console.log(reject))
    }
  }, [])

  return (
    <> 
    {
      !content && (
        <Container>
          <ActivityIndicator color="#8257E6" size="large" /> 
          <Text style={{ color: '#fff', marginTop: 24 }}> {translate('result.loading')} </Text>
        </Container>
      )
    }
    {
      content && (
        <Container>
          <Title> {translate('result.title')} </Title>
          <CardSlider content={content} /> 
          <Disclaimer> {translate('result.disclaimer')} </Disclaimer>
        </Container>
      )
    }
    </>
  );
}
