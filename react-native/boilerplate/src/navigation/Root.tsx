import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Tabs from './Tabs';
import Stacks from './Stacks';
import {useAppSelector} from '../store';
import Login from '../screens/Login';

export type RootStackParams = {
  Login: undefined;
  Tabs: undefined;
  Stacks: {
    screen: 'Detail' | 'OtherDetail';
    params?: any;
  };
};

const RootStack = createNativeStackNavigator<RootStackParams>();

const Root = () => {
  const {accessToken} = useAppSelector(state => state.user);

  return (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      {!accessToken ? (
        <>
          <RootStack.Screen name="Login" component={Login} />
        </>
      ) : (
        <>
          <RootStack.Screen name="Tabs" component={Tabs} />
          <RootStack.Screen name="Stacks" component={Stacks} />
        </>
      )}
    </RootStack.Navigator>
  );
};

export default Root;
