import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Join from '../screens/Join';
import { BLACK_COLOR } from '../colors';

const Nav = createNativeStackNavigator();

const OutNav = () => {
  return (
    <Nav.Navigator
      screenOptions={{
        presentation: 'modal',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: BLACK_COLOR
        }
      }}
    >
      <Nav.Screen name="Login" component={Login} />
      <Nav.Screen name="Join" component={Join} />
    </Nav.Navigator>
  );
};

export default OutNav;
