import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Detail from '../screens/Detail';
import OtherDetail from '../screens/OtherDetail';

const Stack = createNativeStackNavigator();

const Stacks = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="OtherDetail" component={OtherDetail} />
    </Stack.Navigator>
  );
};

export default Stacks;
