import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Detail, Movies } from '../screens';
import Tabs from './Tabs';

export type StackNavigatorParams = {
  Tabs: undefined;
  Movies: undefined;
  Detail: undefined;
};

const Stack = createStackNavigator<StackNavigatorParams>();

export default () => (
  <Stack.Navigator
    screenOptions={{
      presentation: 'modal',
      headerStyle: {
        backgroundColor: 'black',
        borderBottomColor: 'black',
        shadowColor: 'black'
      },
      headerTintColor: 'white',
      headerBackTitleVisible: false
    }}
  >
    <Stack.Screen name="Tabs" component={Tabs} />
    <Stack.Screen name="Detail" component={Detail} />
  </Stack.Navigator>
);
