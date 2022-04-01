/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import {TailwindProvider} from 'tailwind-rn/dist';
import utilities from './tailwind.json';
import App from './App';
import {name as appName} from './app.json';

const Root = () => (
  <TailwindProvider utilities={utilities}>
    <App />
  </TailwindProvider>
);

AppRegistry.registerComponent(appName, () => Root);
