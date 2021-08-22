import React, { useLayoutEffect } from 'react';
import { getFocusedRouteNameFromRoute, Route, RouteProp } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { Favs, Movies, Search, Tv } from '../screens';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackNavigatorParams } from './Stack';
import { Platform } from 'react-native';

type TabsProps = {
  navigation: StackNavigationProp<StackNavigatorParams, 'Tabs'>;
  route: RouteProp<StackNavigatorParams, 'Tabs'>;
};

const Tabs = createBottomTabNavigator();

const getHeaderName = (route: Partial<Route<string, object | undefined>>) =>
  getFocusedRouteNameFromRoute(route) || 'Movies';

export default ({ navigation, route }: TabsProps) => {
  useLayoutEffect(() => {
    const name = getHeaderName(route);
    navigation.setOptions({
      title: name || 'Movies'
    });
  }, [route]);

  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: { backgroundColor: 'black', borderTopColor: 'black' },
        tabBarShowLabel: false,
        tabBarIcon: ({ focused }) => {
          let iconName = Platform.OS === 'ios' ? 'ios-' : 'md-';
          if (route.name === 'Movies') {
            iconName += 'film';
          } else if (route.name === 'Tv') {
            iconName += 'tv';
          } else if (route.name === 'Search') {
            iconName += 'search';
          } else {
            iconName += 'heart';
          }

          return (
            <Ionicons
              name={iconName as React.ComponentProps<typeof Ionicons>['name']}
              color={focused ? 'white' : 'grey'}
              size={26}
            />
          );
        }
      })}
    >
      <Tabs.Screen name="Tv" component={Tv} />
      <Tabs.Screen name="Movies" component={Movies} />

      <Tabs.Screen name="Search" component={Search} />
      <Tabs.Screen name="Discovery" component={Favs} />
    </Tabs.Navigator>
  );
};
