import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';

const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Loader = () => {
  return (
    <Wrapper>
      <ActivityIndicator color="white" />
    </Wrapper>
  );
};

export default Loader;
