import Constants from 'expo-constants';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Text } from 'react-native'
import axios from 'axios'
import { Container, Title, Disclaimer } from './style.js'

import CardSlider from '../../Components/CardSlider'

import { translate } from '../../locales'

/* ADS */
import * as FacebookAds from 'expo-ads-facebook';
FacebookAds.AdSettings.addTestDevice(FacebookAds.AdSettings.currentDeviceHash);

const testID = 'IMG_16_9_LINK#1150593372079137_1150594088745732';
const productionID = '1150593372079137_1150594088745732';
const adUnitID = Constants.isDevice && !__DEV__ ? productionID : testID;

export default function Result({ route, navigation }) {

  const { sample } = route.params
  const [ content, setContent ] = useState(null)

  useEffect(() => {

    /* ADS Config */
    FacebookAds.InterstitialAdManager.showAd(adUnitID)
      .then(didClick => {})
      .catch(error => { console.log(error) })

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
