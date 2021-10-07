import React from 'react';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { Asset, useAssets } from 'expo-asset';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useColorScheme } from 'react-native';
import Root from './navigation/Root';
import { ThemeProvider } from 'styled-components/native';
import { darkTheme, lightTheme } from './styled';

const queryClient = new QueryClient();

export default function App() {
  const [assets] = useAssets([require('./32152076.jpg')]);
  const [loaded] = Font.useFonts(Ionicons);

  const isDark = useColorScheme() === 'dark';

  // if (!assets || !loaded) {
  //   return <AppLoading />;
  // }
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <NavigationContainer>
          <Root />
        </NavigationContainer>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
