import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Entypo';

import StackNavigation from './stacks'
import Popular from '../Views/Popular'
import Info from '../Views/Info'
/* import Introduction from '../Views/Introduction'
import Requirements from '../Views/Requirements' */

import { IconTabRound } from './style'

const Tab = createBottomTabNavigator();

const iconSelector = function(name){
  switch (name) {
    case 'Recomendador':
      return 'laptop';
    case 'Popular':
      return 'star';
    case 'Sobre':
      return 'info';
    case 'Requerimentos':
      return 'game-controller';
    case 'Introduction':
      return 'graduation-cap';
  }
}

const tabBarOptions = {
  activeTintColor: '#4CC392',
  inactiveTintColor: '#aaa',
  tabStyle: {
    backgroundColor: '#222',
    paddingBottom: 4
  }
}


const AboutTabIcon = () => (
  <View>
    <IconTabRound>
      <Icon name="info" size={26} color='#FFF'/>
    </IconTabRound>
  </View>
);


function TabsNavigation() {

  return (
    <Tab.Navigator
      keyboardHidesTabBar={true}
      tabBarOptions={tabBarOptions}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName = iconSelector(route.name)
          return <Icon name={iconName} size={size} color={color} />;
        }
      })}
    >

      <Tab.Screen
        name="Recomendador"
        component={StackNavigation}
      />

      <Tab.Screen
        name="Sobre"
        component={Info}
        options={() => ({
          tabBarIcon: AboutTabIcon
        })}
      />

      <Tab.Screen
        name="Popular"
        component={Popular}
      />

      {/* <Tab.Screen
        name="Requerimentos"
        component={Requirements}
      />

      <Tab.Screen
        name="Introduction"
        component={Introduction}
      /> */}
    </Tab.Navigator>
  )
}

export default TabsNavigation