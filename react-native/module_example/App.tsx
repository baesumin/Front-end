import React from 'react';
import {Button, SafeAreaView} from 'react-native';
import ToastModule from './src/Module/ToastExample';

const App = () => {
  const onToastClick = () => {
    ToastModule.show('Hello Module!', ToastModule.SHORT);
  };
  return (
    <SafeAreaView>
      <Button title="toast" onPress={onToastClick} />
    </SafeAreaView>
  );
};

export default App;
