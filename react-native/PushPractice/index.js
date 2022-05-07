import {NavigationContainer} from '@react-navigation/native';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import React from 'react';
import PushProvider from './src/components/PushProvider';

const Root = () => (
  <PushProvider>
    <NavigationContainer>
      <App />
    </NavigationContainer>
  </PushProvider>
);

AppRegistry.registerComponent(appName, () => Root);
