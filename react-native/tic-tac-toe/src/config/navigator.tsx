import React, { ReactElement } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, SinglePlayerGame } from '@screens';

export type StackNavigatorParams = {
  Home: undefined;
  SinglePlayerGame: undefined;
};

const Stack = createNativeStackNavigator<StackNavigatorParams>();
export default function Navigator(): ReactElement {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SinglePlayerGame" component={SinglePlayerGame} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
