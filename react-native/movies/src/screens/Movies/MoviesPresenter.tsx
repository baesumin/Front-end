import React from 'react';
import styled from 'styled-components/native';
import Swiper from 'react-native-web-swiper';
import { Dimensions } from 'react-native';
import Slide from '../../components/Movies/Slide';
import Vertical from '../../components/Vertical';
import Horizontal from '../../components/Horizontal';
import ScrollContainer from '../../components/ScrollContainer';
import HorizontalSlider from '../../components/HorizontalSlider';
import List from '../../components/List';

type movieProps = {
  id: number;
  original_title: string;
  overview: string;
  vote_average: number;
  backdrop_path: string;
  poster_path: string;
  title: string;
  release_date: string;
};

type MoviesPresenterProps = {
  loading: boolean;
  nowPlaying: movieProps[];
  popular: movieProps[];
  upcoming: movieProps[];
  refreshFn: () => void;
};

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

const SliderContainer = styled.View`
  width: 100%;
  height: ${HEIGHT / 4}px;
  margin-bottom: 50px;
`;

const Container = styled.View``;

export default ({
  refreshFn,
  loading,
  nowPlaying,
  popular,
  upcoming
}: MoviesPresenterProps) => {
  return (
    <ScrollContainer
      refreshFn={refreshFn}
      loading={loading}
      contentContainerStyle={{ paddingTop: 10 }}
    >
      <>
        <SliderContainer>
          <Swiper controlsEnabled={false} loop timeout={3}>
            {nowPlaying.map((movie) => {
              return (
                <Slide
                  key={movie.id}
                  id={movie.id}
                  title={movie.original_title}
                  overview={movie.overview}
                  votes={movie.vote_average}
                  backgroundImage={movie.backdrop_path}
                  poster={movie.poster_path}
                />
              );
            })}
          </Swiper>
        </SliderContainer>
        <Container>
          <HorizontalSlider title={'Popular Movies'}>
            {popular.map((movie) => {
              return (
                <Vertical
                  id={movie.id}
                  key={movie.id}
                  poster={movie.poster_path}
                  title={movie.title}
                  votes={movie.vote_average}
                />
              );
            })}
          </HorizontalSlider>
          <List title="Coming Soon">
            {upcoming.map((movie) => {
              return (
                <Horizontal
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  releaseDate={movie.release_date}
                  poster={movie.poster_path}
                  overview={movie.overview}
                />
              );
            })}
          </List>
        </Container>
      </>
    </ScrollContainer>
  );
};
