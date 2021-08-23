import React from 'react';
import styled from 'styled-components/native';
import Horizontal from '../../components/Horizontal';
import HorizontalSlider from '../../components/HorizontalSlider';
import ScrollContainer from '../../components/ScrollContainer';
import Input from '../../components/Search/Input';
import Vertical from '../../components/Vertical';

type movieProps = {
  id: number;
  vote_average: number;
  poster_path: string;
  title: string;
  name: string;
};

type SearchPresenterProps = {
  movies: movieProps[];
  shows: movieProps[];
  keyword: string;
  onChange: (text: string) => void;
  onSubmit: () => void;
};

const Container = styled.ScrollView`
  background-color: black;
`;

export default ({ movies, shows, keyword, onChange, onSubmit }: SearchPresenterProps) => {
  return (
    <ScrollContainer
      refreshFn={onSubmit}
      loading={false}
      contentContainerStyle={{ paddingTop: 10 }}
    >
      <Input
        placeholder={'Wirte a keyword'}
        value={keyword}
        onChange={onChange}
        onSubmit={onSubmit}
      />
      {movies.length !== 0 && (
        <HorizontalSlider title={'Movie results'}>
          {movies.map((movie) => {
            return (
              <Vertical
                key={movie.id}
                id={movie.id}
                title={movie.title}
                poster={movie.poster_path}
                votes={movie.vote_average}
              />
            );
          })}
        </HorizontalSlider>
      )}
      {shows.length !== 0 && (
        <HorizontalSlider title={'Tv results'}>
          {shows.map((show) => {
            return (
              <Vertical
                key={show.id}
                id={show.id}
                title={show.name}
                poster={show.poster_path}
                votes={show.vote_average}
              />
            );
          })}
        </HorizontalSlider>
      )}
    </ScrollContainer>
  );
};
