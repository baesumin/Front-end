import React, { ReactElement } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions
} from '@react-navigation/native-stack';
import { Home, SinglePlayerGame, Settings } from '@screens';
import { colors } from '@utils';

export type StackNavigatorParams = {
  Home: undefined;
  SinglePlayerGame: undefined;
  Settings: undefined;
};

const Stack = createNativeStackNavigator<StackNavigatorParams>();
export default function Navigator(): ReactElement {
  const navigatorOptions: NativeStackNavigationOptions = {
    headerStyle: {
      backgroundColor: colors.purple
      // shadowRadius: 0,
      // shadowOffset: {
      //   height: 0,
      //   width: 0
      // }
    },
    headerTintColor: colors.lightGreen,
    headerTitleStyle: {
      fontFamily: 'DeliusUnicase_700Bold',
      fontSize: 20
    },
    headerBackTitleStyle: {
      fontFamily: 'DeliusUnicase_700Bold',
      fontSize: 14
    }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={navigatorOptions}>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen
          name="SinglePlayerGame"
          component={SinglePlayerGame}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
