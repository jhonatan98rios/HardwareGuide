import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Search from '../Views/Search'
import Result from '../Views/Result'

const Stack = createStackNavigator();

const options = {
  headerShown: false
}

function StackNavigation() {

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

export default StackNavigation