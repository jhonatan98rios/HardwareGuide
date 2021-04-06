import Constants from 'expo-constants';
import 'react-native-gesture-handler';

import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

// ADS
import * as FacebookAds from 'expo-ads-facebook';
FacebookAds.AdSettings.addTestDevice(FacebookAds.AdSettings.currentDeviceHash);

const testID = 'IMG_16_9_LINK#1150593372079137_1150594088745732';
const productionID = '1150593372079137_1150594088745732';
const adUnitID = Constants.isDevice && !__DEV__ ? productionID : testID;


import TabsNavigation from './Routes/tabs'

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: '#0a0a1a' }}>

      <StatusBar
        backgroundColor="#0a0a1a"
        barStyle="light-content"
      />

      <FacebookAds.BannerAd
        placementId={adUnitID}
        type="standard"
        onPress={() => console.log('click')}
        onError={error => console.log('error', error)}
      />

    <NavigationContainer>
      <TabsNavigation />
    </NavigationContainer>
    </View>
  );
}
