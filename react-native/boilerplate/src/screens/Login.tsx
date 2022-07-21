import {View, Text, Button} from 'react-native';
import React from 'react';
import {useAppDispatch} from '../store';
import userSlice from '../slices/user';

const Login = () => {
  const dispatch = useAppDispatch();

  const onLoginClick = () => {
    dispatch(userSlice.actions.setAccessToken({accessToken: '123'}));
  };

  return (
    <View>
      <Text>Login</Text>
      <Button title="로그인" onPress={onLoginClick} />
    </View>
  );
};

export default Login;
