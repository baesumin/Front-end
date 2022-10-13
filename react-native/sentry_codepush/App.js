import React, {useEffect, useState} from 'react';
import {Button, Image, SafeAreaView, Text} from 'react-native';
import {DSN} from 'react-native-dotenv';
import * as Sentry from '@sentry/react-native';
import CodePush from 'react-native-code-push';
import SampleText from './SampleText';

Sentry.init({
  dsn: DSN,
  // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
  // We recommend adjusting this value in production.
  tracesSampleRate: 1.0,
});

const codePushOptions = {
  checkFrequency: CodePush.CheckFrequency.MANUAL,
  // checkFrequency: CodePush.CheckFrequency.ON_APP_START,
  // 언제 업데이트를 체크하고 반영할지를 정한다.
  // ON_APP_RESUME은 Background에서 Foreground로 오는 것을 의미
  // ON_APP_START은 앱이 실행되는(켜지는) 순간을 의미

  // installMode: CodePush.InstallMode.IMMEDIATE,
  installMode: CodePush.InstallMode.IMMEDIATE,
  // mandatoryInstallMode: CodePush.InstallMode.IMMEDIATE,
  mandatoryInstallMode: CodePush.InstallMode.IMMEDIATE,
  // 업데이트를 어떻게 설치할 것인지 (IMMEDIATE는 강제설치를 의미)
};

const App = () => {
  const [state, setState] = useState(0);
  const onClickButton = () => {
    console.log('hi');
    throw new Error('My first Sentry error!');
  };

  useEffect(() => {
    // CodePush.checkForUpdate()
    //   .then(update => {
    //     if (update) {
    //       Sentry.setRelease(update.appVersion + '-codepush:' + update.label); // <- this
    //       CodePush.sync(
    //         {
    //           installMode: CodePush.InstallMode.IMMEDIATE,
    //           mandatoryInstallMode: CodePush.InstallMode.IMMEDIATE,
    //           updateDialog: {
    //             mandatoryUpdateMessage:
    //               '필수 업데이트가 있어 설치 후 앱을 재시작합니다.',
    //             mandatoryContinueButtonLabel: '재시작',
    //             optionalIgnoreButtonLabel: '나중에',
    //             optionalInstallButtonLabel: '재시작',
    //             optionalUpdateMessage: '업데이트가 있습니다. 설치하시겠습니까?',
    //             title: '업데이트 안내',
    //           },
    //         },
    //         status => {
    //           console.log(`Changed ${status}`);
    //         },
    //         ({receivedBytes, totalBytes}) => {
    //           // 여기서 몇 % 다운로드되었는지 체크 가능
    //           setState(receivedBytes);
    //         },
    //       ).then(status => {
    //         console.log(`CodePush ${status}`);
    //       });
    //     }
    //   })
    //   .catch(console.error);
    CodePush.sync(
      {
        installMode: CodePush.InstallMode.IMMEDIATE,
        mandatoryInstallMode: CodePush.InstallMode.IMMEDIATE,
        updateDialog: {
          mandatoryUpdateMessage:
            '필수 업데이트가 있어 설치 후 앱을 재시작합니다.',
          mandatoryContinueButtonLabel: '재시작',
          optionalIgnoreButtonLabel: '나중에',
          optionalInstallButtonLabel: '재시작',
          optionalUpdateMessage: '업데이트가 있습니다. 설치하시겠습니까?',
          title: '업데이트 안내',
        },
      },
      status => {
        console.log(`Changed ${status}`);
      },
      ({receivedBytes, totalBytes}) => {
        // 여기서 몇 % 다운로드되었는지 체크 가능
        setState(receivedBytes);
      },
    ).then(status => {
      console.log(`CodePush ${status}`);
    });
  }, []);

  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <Button title="sentry" onPress={onClickButton} />
      <Text style={{backgroundColor: 'pink', color: 'black', fontSize: 36}}>
        코드푸시전 화면!
      </Text>
      <Image
        source={require('./kakao.jpg')}
        style={{width: 200, height: 200}}
      />
      <Text style={{backgroundColor: 'pink', color: 'black', fontSize: 36}}>
        코드푸시후 화면
      </Text>
      <Image
        source={{
          uri: 'https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E',
        }}
        style={{width: 200, height: 200}}
      />
      {/* <Text style={{color: 'black', alignSelf: 'center'}}>{state}</Text>
      <Text style={{color: 'black', alignSelf: 'center'}}>
        스테이징 먼저 테스트후 프로덕션빌드 테스트
      </Text>
      <SampleText /> */}
    </SafeAreaView>
  );
};

// export default CodePush(Sentry.wrap(App));
// export default CodePush(codePushOptions)(Sentry.wrap(App));
export default CodePush(codePushOptions)(App);
