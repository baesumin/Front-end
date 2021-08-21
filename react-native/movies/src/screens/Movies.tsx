import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigatorParams } from '../navigation/Stack';

type MoviesProps = {
  navigation: StackNavigationProp<StackNavigatorParams, 'Movies'>;
};

const Home = ({ navigation }: MoviesProps) => {
  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <Text>Movies</Text>
      <Button title="Movie" onPress={() => navigation.navigate('Detail')} />
    </View>
  );
};

export default Home;
