import React from 'react';
import {Linking} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';

messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage);
});

// const _registerLocalNotification = () => {
//   PushNotification.setApplicationIconBadgeNumber(0);
//   PushNotification.cancelAllLocalNotifications();
//   const messages = [
//     '잠깐 시간내서 일본어 공부를 해보는건 어떨까요?',
//     '오늘 일본어 공부하셨나요?',
//     '일본어 단어를 공부해 보세요.',
//     '단어 공부는 매일매일 하는 것이 중요해요.',
//     '새로운 단어와 암기한 공부를 복습해 보세요.',
//     '일본어를 공부할 시간이에요.',
//     '테스트 기능을 사용해서 자신의 실력을 확인해 보세요.',
//     '일본어 단어들이 당신을 기다리고 있어요.',
//     '일본어, 어렵지 않아요. 공부해 봅시다.',
//     '일본어 마스터가 되기위해!',
//   ];
//   const message = messages[Math.floor(Math.random() * messages.length)];
//   let nextHour = new Date();
//   nextHour.setDate(nextHour.getDate() + 1);
//   nextHour.setHours(nextHour.getHours() - 1);
//   PushNotification.localNotificationSchedule({
//     /* iOS and Android properties */
//     message, // (required)
//     playSound: false,
//     number: 1,
//     actions: '["OK"]',

//     /* Android Only Properties */
//     vibrate: true,
//     vibration: 300,
//     priority: 'hight',
//     visibility: 'public',
//     importance: 'hight',

//     // for production
//     repeatType: 'day', // (optional) Repeating interval. Check 'Repeating Notifications' section for more info.
//     date: nextHour,

//     // test to trigger each miniute
//     // repeatType: 'minute',
//     // date: new Date(Date.now()),

//     // test to trigger one time
//     // date: new Date(Date.now() + 2 * 1000),
//   });
// };
// _registerLocalNotification();
PushNotification.configure({
  // (optional) 토큰이 생성될 때 실행됨(토큰을 서버에 등록할 때 쓸 수 있음)
  onRegister: function (token) {
    // console.log('TOKEN:', token);
  },
  // (required) 리모트 노티를 수신하거나, 열었거나 로컬 노티를 열었을 때 실행
  onNotification: function (notification) {
    console.log('NOTIFICATION:', notification);
    if (notification.userInteraction === true) {
      const {link = null} = notification?.data || {}; // <---- 1
      link && Linking.openURL(link);
    }

    if (notification.channelId === 'riders') {
      // if (notification.message || notification.data.message) {
      //   store.dispatch(
      //     userSlice.actions.showPushPopup(
      //       notification.message || notification.data.message,
      //     ),
      //   );
      // }
    }
    // process the notification

    // (required) 리모트 노티를 수신하거나, 열었거나 로컬 노티를 열었을 때 실행
    // notification.finish(PushNotificationIOS.FetchResult.NoData);
  },

  // (optional) 등록한 액션을 눌렀고 invokeApp이 false 상태일 때 실행됨, true면 onNotification이 실행됨 (Android)
  onAction: function (notification) {
    console.log('ACTION:', notification.action);
    console.log('NOTIFICATION:', notification);

    // process the action
  },

  // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
  onRegistrationError: function (err) {
    console.error(err.message, err);
  },

  // IOS ONLY (optional): default: all - Permissions to register.
  permissions: {
    alert: true,
    badge: true,
    sound: true,
  },

  // Should the initial notification be popped automatically
  // default: true
  popInitialNotification: true,

  /**
   * (optional) default: true
   * - Specified if permissions (ios) and token (android and ios) will requested or not,
   * - if not, you must call PushNotificationsHandler.requestPermissions() later
   * - if you are not using remote notification or do not have Firebase installed, use this:
   *     requestPermissions: Platform.OS === 'ios'
   */
  requestPermissions: true,
});
// PushNotification.createChannel(
//   {
//     channelId: 'riders', // (required)
//     channelName: '앱 전반', // (required)
//     channelDescription: '앱 실행하는 알림', // (optional) default: undefined.
//     soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
//     importance: 4, // (optional) default: 4. Int value of the Android notification importance
//     vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
//   },
//   created => console.log(`createChannel riders returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
// );

const PushProvider = ({children}) => {
  return <>{children}</>;
};

export default PushProvider;
