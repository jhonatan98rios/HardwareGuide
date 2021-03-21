import 'react-native-gesture-handler';
import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import TabsNavigation from './Routes/tabs'

export default function App() {
  return (
    <NavigationContainer>
      <TabsNavigation />
    </NavigationContainer>
  );
}
