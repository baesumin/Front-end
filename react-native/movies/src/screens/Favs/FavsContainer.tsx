import React, { useEffect, useState } from 'react';
import { movieApi } from '../../apis/api';
import FavPresenter from './FavPresenter';

const FavsContainer = () => {
  const [movies, setMovies] = useState({
    results: [],
    error: null
  });
  const getData = async () => {
    const [results, error] = await movieApi.discover();
    setMovies({
      results,
      error
    });
  };
  useEffect(() => {
    getData();
  }, []);
  return <FavPresenter {...movies} />;
};

export default FavsContainer;
