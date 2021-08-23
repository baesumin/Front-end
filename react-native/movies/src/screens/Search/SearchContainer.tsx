import React from 'react';
import { useState } from 'react';
import { movieApi, tvApi } from '../../apis/api';
import SearchPresenter from './SearchPresenter';

export default () => {
  const [keyword, setKeyword] = useState('');
  const [results, setResults] = useState({
    movies: [],
    shows: [],
    movieError: null,
    showsError: null
  });
  const onChange = (text: string) => {
    setKeyword(text);
  };
  const search = async () => {
    if (keyword === '') {
      return;
    }
    const [movies, movieError] = await movieApi.search(keyword);
    const [shows, showsError] = await tvApi.search(keyword);
    setResults({
      movies,
      shows,
      movieError,
      showsError
    });
  };

  return (
    <SearchPresenter
      {...results}
      onChange={onChange}
      onSubmit={search}
      keyword={keyword}
    />
  );
};
