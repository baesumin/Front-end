import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import Horizontal from '../../components/Horizontal';
import HorizontalSlider from '../../components/HorizontalSlider';
import List from '../../components/List';
import ScrollContainer from '../../components/ScrollContainer';
import Vertical from '../../components/Vertical';

type showProps = {
  id: number;
  poster_path: string;
  name: string;
  vote_average: number;
};

type TvPresenterProps = {
  loading: boolean;
  popular: showProps[];
  topRated: showProps[];
};

const Container = styled.View`
  margin-top: 30px;
`;

export default ({ loading, popular, topRated, today }: TvPresenterProps) => {
  return (
    <ScrollContainer loading={loading}>
      <Container>
        <HorizontalSlider title="Popular Shows">
          {popular.map((show) => {
            return (
              <Vertical
                id={show.id}
                key={show.id}
                poster={show.poster_path}
                title={show.name}
                votes={show.vote_average}
              />
            );
          })}
        </HorizontalSlider>
        <HorizontalSlider title="Top Rated TV Shows">
          {topRated.map((show) => {
            return (
              <Vertical
                id={show.id}
                key={show.id}
                poster={show.poster_path}
                title={show.name}
                votes={show.vote_average}
              />
            );
          })}
        </HorizontalSlider>
        <List title="Airing Today">
          {today.map((show) => {
            return (
              <Horizontal
                key={show.id}
                id={show.id}
                title={show.name}
                poster={show.poster_path}
                overview={show.overview}
              />
            );
          })}
        </List>
      </Container>
    </ScrollContainer>
  );
};
