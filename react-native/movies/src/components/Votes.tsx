import React from 'react';
import styled from 'styled-components/native';

type VotesProps = {
  votes: number;
};

const Container = styled.Text`
  color: rgb(220, 220, 220);
  font-size: 12px;
  font-weight: 500;
`;

export default ({ votes }: VotesProps) => {
  return <Container>👩 {votes} / 10</Container>;
};
