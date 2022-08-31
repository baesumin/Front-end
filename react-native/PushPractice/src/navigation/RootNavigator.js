import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
// import CalendarScreen from '../screens/CalendarScreen';
// import ImageScreen from '../screens/ImageScreen';

const RootStack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      {/* <RootStack.Screen name="Image" component={ImageScreen} /> */}
      {/* <RootStack.Screen name="Calendar" component={CalendarScreen} /> */}
      <RootStack.Screen name="Home" component={HomeScreen} />
      <RootStack.Screen name="Details" component={DetailsScreen} />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
