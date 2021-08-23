import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { Image, StatusBar } from 'react-native';
import { Asset } from 'expo-asset';
import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import Stack from './src/navigation/Stack';

const cacheImages = (images: any) =>
  images.map((image: any) => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });

const cacheFonts = (fonts: any) => fonts.map((font: any) => Font.loadAsync(font));

export default function App() {
  const [isReady, setIsReady] = useState<boolean>(false);
  const loadAssets = (): Promise<any> => {
    const images = cacheImages([
      'https://images.unsplash.com/photo-1571847140471-1d7766e825ea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=673&q=80',
      require('./assets/splash.png')
    ]);
    const fonts = cacheFonts([Ionicons.font]);
    return Promise.all([...images, ...fonts]);
  };
  const onFinish = () => {
    setIsReady(true);
  };
  return isReady ? (
    <>
      <NavigationContainer>
        <Stack />
      </NavigationContainer>
      <StatusBar barStyle="light-content" />
    </>
  ) : (
    <AppLoading startAsync={loadAssets} onFinish={onFinish} onError={console.error} />
  );
}
