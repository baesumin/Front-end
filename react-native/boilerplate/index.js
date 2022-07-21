import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import {Provider} from 'react-redux';
import {QueryClient, QueryClientProvider} from 'react-query';
import store from './src/store';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components/native';
import {theme} from './theme';

const queryClient = new QueryClient();

const Root = () => (
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <App />
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  </QueryClientProvider>
);

AppRegistry.registerComponent(appName, () => Root);
