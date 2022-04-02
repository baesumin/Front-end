import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Complete from './Complete';
import Ing from './Ing';

const Stack = createNativeStackNavigator();

const Delivery = () => {
  return (
    <Stack.Navigator initialRouteName="Ing">
      <Stack.Screen name="Ing" component={Ing} options={{headerShown: false}} />
      <Stack.Screen
        name="Complete"
        component={Complete}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Delivery;
