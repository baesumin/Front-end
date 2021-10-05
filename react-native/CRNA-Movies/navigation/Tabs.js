import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Movies from '../screens/Movies';
import Tv from '../screens/Tv';
import Search from '../screens/Search';
import { useColorScheme } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from '../colors';
import Stack from './Stack';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const isDark = useColorScheme() === 'dark';

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: isDark ? colors.BLACK_COLOR : 'white'
        },
        tabBarActiveTintColor: isDark ? colors.YELLOW_COLOR : colors.BLACK_COLOR,
        tabBarInactiveTintColor: isDark ? '#d2dae2' : '#808e9b',
        headerStyle: {
          backgroundColor: isDark ? colors.BLACK_COLOR : 'white'
        },
        headerTitleStyle: {
          color: isDark ? 'white' : colors.BLACK_COLOR
        },
        tabBarLabelStyle: {
          marginTop: -5,
          fontSize: 12,
          fontWeight: '600'
        }
      }}
    >
      <Tab.Screen
        name="Movies"
        component={Movies}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="film" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name="TV"
        component={Tv}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="tv" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" color={color} size={size} />
          )
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
