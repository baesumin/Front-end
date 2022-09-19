import React, {useEffect} from 'react';
import {Button, SafeAreaView} from 'react-native';
import {DSN} from 'react-native-dotenv';
import * as Sentry from '@sentry/react-native';
import CodePush from 'react-native-code-push';

Sentry.init({
  dsn: DSN,
  // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
  // We recommend adjusting this value in production.
  tracesSampleRate: 1.0,
});

const codePushOptions = {
  checkFrequency: CodePush.CheckFrequency.MANUAL,
  // 언제 업데이트를 체크하고 반영할지를 정한다.
  // ON_APP_RESUME은 Background에서 Foreground로 오는 것을 의미
  // ON_APP_START은 앱이 실행되는(켜지는) 순간을 의미

  installMode: CodePush.InstallMode.IMMEDIATE,
  mandatoryInstallMode: CodePush.InstallMode.IMMEDIATE,
  // 업데이트를 어떻게 설치할 것인지 (IMMEDIATE는 강제설치를 의미)
};

const App = () => {
  const onClickButton = () => {
    console.log('hi');
    throw new Error('My first Sentry error!');
  };

  useEffect(() => {
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
      downloadProgress => {
        // 여기서 몇 % 다운로드되었는지 체크 가능
      },
    ).then(status => {
      console.log(`CodePush ${status}`);
    });
  }, []);

  return (
    <SafeAreaView>
      <Button title="sentry" onPress={onClickButton} />
    </SafeAreaView>
  );
};

export default CodePush(codePushOptions)(Sentry.wrap(App));
// export default CodePush(codePushOptions)(App);
