import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';

const RootStack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name="Home" component={HomeScreen} />
      <RootStack.Screen name="Details" component={DetailsScreen} />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
