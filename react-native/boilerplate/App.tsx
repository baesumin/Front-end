import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import Root from './src/navigation/Root';
import userSlice from './src/slices/user';
import {useAppDispatch, useAppSelector} from './src/store';

const App = () => {
  const dispatch = useAppDispatch();
  const {isSplashDone, accessToken} = useAppSelector(state => state.user);

  const getData = async () => {
    // 필수 데이터 받아오기 예시
    const token = await AsyncStorage.getItem('accessToken');

    if (token) {
      dispatch(userSlice.actions.setAccessToken({accessToken: 'token'}));
    }

    dispatch(userSlice.actions.setIsSplashDone({isSplashDone: true}));
  };

  useEffect(() => {
    getData();
  }, []);

  if (!isSplashDone) {
    return (
      <View>
        <Text>로딩중...</Text>
      </View>
    );
  }
  return <Root />;
};

export default App;
