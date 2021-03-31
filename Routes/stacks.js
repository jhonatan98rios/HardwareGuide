import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Search from '../Views/Search'
import Result from '../Views/Result'

import Popular from '../Views/Popular'
import PopularResult from '../Views/PopularResult'

import Learn from '../Views/Learn'
import Content from '../Views/Content'

const Stack = createStackNavigator();

const options = {
  headerShown: false
}

export function StackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Search" 
        component={Search} 
        options={{
          ...options,
          title: 'Pesquisa',
        }}
      />
      
      <Stack.Screen 
        name="Result"
        component={Result}
        options={{
          ...options,
          title: 'Recomendações',
        }}
      />
    </Stack.Navigator>
  );
}

export function PopularStackNavigation(){
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Popular"
        component={Popular}
        options={{...options}}
      />

      <Stack.Screen 
        name="PopularResult"
        component={PopularResult}
        options={{...options}}
      />
    </Stack.Navigator>
  );
}

export function LearnStackNavigation(){
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Aprenda"
        component={Learn}
        options={{...options}}
      />

      <Stack.Screen 
        name="Conteudo"
        component={Content}
        options={{...options}}
      />
    </Stack.Navigator>
  );
}