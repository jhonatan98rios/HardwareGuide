import Constants from 'expo-constants';
import 'react-native-gesture-handler';

import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const testID = 'ca-app-pub-3940256099942544/6300978111';
const productionID = 'ca-app-pub-4295099091792843/9960177892';

const adUnitID = Constants.isDevice && !__DEV__ ? productionID : testID;

import { AdMobBanner } from 'expo-ads-admob';

import TabsNavigation from './Routes/tabs'

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: '#0a0a1a' }}>

      <StatusBar
        backgroundColor="#0a0a1a"
        barStyle="light-content"
      />

      <AdMobBanner
        bannerSize="fullBanner"
        adUnitID={adUnitID}
        setTestDeviceIDAsync
        servePersonalizedAds
        onDidFailToReceiveAdWithError={(err) => console.log(err)} 
        style={{ width: '100%'}}
      />

    <NavigationContainer>
      <TabsNavigation />
    </NavigationContainer>
    </View>
  );
}
