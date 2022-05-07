import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import messaging from '@react-native-firebase/messaging';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);
  // 토큰 설정
  useEffect(() => {
    async function getToken() {
      try {
        if (!messaging().isDeviceRegisteredForRemoteMessages) {
          await messaging().registerDeviceForRemoteMessages();
        }
        const token = await messaging().getToken();
        console.log('phone token', token);
        return null;
      } catch (error) {
        console.error(error);
      }
    }
    getToken();
  }, []);
  return (
    <>
      <View>
        <Text>hi</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
