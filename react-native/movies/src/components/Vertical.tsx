import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { apiImage } from '../apis/api';
import Poster from './Poster';
import { trimText } from './utils';
import Votes from './Votes';

type VerticalProps = {
  id: number;
  poster: string;
  title: string;
  votes: number;
};

const Container = styled.View`
  align-items: center;
  margin-right: 20px;
`;

const Title = styled.Text`
  color: white;
  font-weight: 500;
  margin: 10px 0px 5px 0px;
`;

export default ({ id, poster, title, votes }: VerticalProps) => {
  return (
    <TouchableOpacity>
      <Container>
        <Poster url={poster} />
        <Title>{trimText(title, 10)}</Title>
        <Votes votes={votes} />
      </Container>
    </TouchableOpacity>
  );
};
