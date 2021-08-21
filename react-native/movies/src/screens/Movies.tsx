import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { movieApi } from '../apis/api';
import { StackNavigatorParams } from '../navigation/Stack';

type MoviesProps = {
  navigation: StackNavigationProp<StackNavigatorParams, 'Movies'>;
};

const Home = () => {
  const [nowPlaying, setNowPlaying] = useState({
    movies: [],
    error: null
  });
  const getData = async () => {
    const data = await movieApi.nowPlaying();
    console.log(data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <Text>Movies</Text>
    </View>
  );
};

export default Home;
