import React from 'react';
import styled from 'styled-components/native';

type TitleProps = {
  title: string;
};

const Container = styled.View``;
const Text = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 16px;
  margin-left: 30px;
`;

export default ({ title }: TitleProps) => {
  return (
    <Container>
      <Text>{title}</Text>
    </Container>
  );
};
