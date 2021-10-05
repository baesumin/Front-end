import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, TouchableOpacity } from 'react-native';

const ScreenThree = ({ navigation: { navigate } }) => (
  <TouchableOpacity onPress={() => navigate('Tabs', { screen: 'Search' })}>
    <Text>Go to search</Text>
  </TouchableOpacity>
);

const NativeStack = createNativeStackNavigator();

const Stack = () => (
  <NativeStack.Navigator>
    <NativeStack.Screen name="ScreenThree" component={ScreenThree} />
  </NativeStack.Navigator>
);

export default Stack;
