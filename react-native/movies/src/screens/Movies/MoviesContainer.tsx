import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { movieApi } from '../../apis/api';
import { StackNavigatorParams } from '../../navigation/Stack';
import MoviesPresenter from './MoviesPresenter';

// type MoviesProps = {
//   navigation: StackNavigationProp<StackNavigatorParams, 'Movies'>;
// };

const Home = () => {
  const [movies, setMovies] = useState({
    loading: true,
    nowPlaying: [],
    nowPlayingError: null,
    popular: [],
    popularError: null,
    upcoming: [],
    upcomingError: null
  });
  const getData = async () => {
    const [nowPlaying, nowPlayingError] = await movieApi.nowPlaying();
    const [popular, popularError] = await movieApi.popular();
    const [upcoming, upcomingError] = await movieApi.upcoming();
    setMovies({
      loading: false,
      nowPlaying,
      nowPlayingError,
      popular,
      popularError,
      upcoming,
      upcomingError
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return <MoviesPresenter {...movies} />;
};

export default Home;
