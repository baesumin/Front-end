import {NavigationContainer} from '@react-navigation/native';
import {AppRegistry, ActivityIndicator, Linking} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import React from 'react';
import PushProvider from './src/components/PushProvider';
import messaging from '@react-native-firebase/messaging';

const linking = {
  prefixes: ['dzzdzz://'],
  config: {
    initialRouteName: 'Home',
    screens: {
      Home: {
        path: 'home',
      },
      Details: {
        path: 'details/:personId',
      },
    },
  },
  async getInitialURL() {
    // Check if app was opened from a deep link
    const url = await Linking.getInitialURL();
    console.log('getInitialURL url: ', url);

    if (url != null) {
      return url;
    }

    // Check if there is an initial firebase notification
    // const message = await messaging().getInitialNotification();
    // console.log('message: ', message);

    // Get deep link from data
    // if this is undefined, the app will open the default/home page
    // return message?.data?.link;
  },
  // subscribe(listener) {
  //   console.log('SUBSCRIBE');
  //   const onReceiveURL = ({url}) => {
  //     console.log(url);
  //     return listener(url);
  //   };
  //   // Listen to incoming links from deep linking
  //   Linking.addEventListener('url', onReceiveURL);

  //   // Listen to firebase push notifications
  //   const unsubscribeNotification = messaging().onNotificationOpenedApp(
  //     message => {
  //       console.log('subscribe message: ', message);
  //       const url = message?.data?.link;

  //       if (url) {
  //         // Any custom logic to check whether the URL needs to be handled

  //         // Call the listener to let React Navigation handle the URL
  //         // listener('dzzdzz://');
  //         listener(url);
  //       }
  //     },
  //   );

  //   return () => {
  //     // Clean up the event listeners
  //     Linking.removeEventListener('url', onReceiveURL);
  //     unsubscribeNotification();
  //   };
  // },
};

const Root = () => (
  <NavigationContainer
    linking={linking}
    fallback={<ActivityIndicator color="blue" size="large" />}>
    {/* <PushProvider> */}
      <App />
    {/* </PushProvider> */}
  </NavigationContainer>
);

AppRegistry.registerComponent(appName, () => Root);
