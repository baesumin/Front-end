import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const Movies = ({ navigation: { navigate } }) => {
  return (
    <Btn
      onPress={() => navigate('Stack', { screen: 'Three' })}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <Title>movies</Title>
    </Btn>
  );
};

export default Movies;

const Btn = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.mainBgColor};
`;
const Title = styled.Text`
  color: ${(props) => props.theme.textColor};
`;
