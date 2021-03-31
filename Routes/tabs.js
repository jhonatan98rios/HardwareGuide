import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Entypo';

import { StackNavigation, PopularStackNavigation, LearnStackNavigation } from './stacks'

import Info from '../Views/Info'

const Tab = createBottomTabNavigator();

const iconSelector = function(name){
  switch (name) {
    case 'Recomendados':
      return 'star';
    case 'Personalizado':
      return 'laptop';
    case 'Informações':
      return 'info';
    case 'Requerimentos':
      return 'game-controller';
    case 'Aprenda':
      return 'graduation-cap';
  }
}

const tabBarOptions = {
  activeTintColor: '#8257E6',
  inactiveTintColor: '#aaa',
  style: {
    backgroundColor: '#0F0F1F', //'#202024',
    paddingBottom: 4,
    borderTopWidth: 0,
    height: 56,
  }
}


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
        name="Recomendados"
        component={PopularStackNavigation}
      />

      <Tab.Screen
        name="Personalizado"
        component={StackNavigation}
      />

      <Tab.Screen
        name="Aprenda"
        component={LearnStackNavigation}
      />

      <Tab.Screen
        name="Informações"
        component={Info}
      />

    </Tab.Navigator>
  )
}

export default TabsNavigation