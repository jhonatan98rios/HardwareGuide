import 'react-native-gesture-handler';
import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Constants from 'expo-constants';

const testID = 'ca-app-pub-3940256099942544/6300978111';
const productionID = 'ca-app-pub-1739197497968733~6709466081';

const adUnitID = Constants.isDevice && !__DEV__ ? productionID : testID;

import { AdMobBanner, setTestDeviceIDAsync } from 'expo-ads-admob';

import TabsNavigation from './Routes/tabs'

export default function App() {
  return (
    <>
      <AdMobBanner
        bannerSize="fullBanner"
        adUnitID={adUnitID}
        setTestDeviceIDAsync
        servePersonalizedAds
        onDidFailToReceiveAdWithError={(err) => console.log(err)} 
        style={{
          width: '100%'
        }}
      />

    <NavigationContainer>
      <TabsNavigation />
    </NavigationContainer>
    </>
  );
}
