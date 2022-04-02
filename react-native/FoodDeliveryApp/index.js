/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {TailwindProvider} from 'tailwind-rn/dist';
import utilities from './tailwind.json';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import store from './src/store';

const Root = () => (
  <Provider store={store}>
    <TailwindProvider utilities={utilities}>
      <NavigationContainer>
        <App />
      </NavigationContainer>
    </TailwindProvider>
  </Provider>
);

AppRegistry.registerComponent(appName, () => Root);
