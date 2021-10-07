import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, TouchableOpacity, useColorScheme } from 'react-native';
import Detail from '../screens/Detail';
import colors from '../colors';

const NativeStack = createNativeStackNavigator();

const Stack = () => {
  const isDark = useColorScheme() === 'dark';
  return (
    <NativeStack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerStyle: {
          backgroundColor: isDark ? colors.BLACK_COLOR : 'white'
        },
        headerTitleStyle: {
          color: isDark ? 'white' : colors.BLACK_COLOR
        }
      }}
    >
      <NativeStack.Screen name="Detail" component={Detail} />
    </NativeStack.Navigator>
  );
};

export default Stack;
