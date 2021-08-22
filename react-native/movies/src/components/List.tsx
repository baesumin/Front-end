import React from 'react';
import styled from 'styled-components/native';
import Title from './Title';

const Container = styled.View`
  margin-top: 20px;
`;

export default ({ title, children }) => {
  return (
    <>
      <Title title={title} />
      <Container>{children}</Container>
    </>
  );
};
