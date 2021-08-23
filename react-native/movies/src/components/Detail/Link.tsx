import React from 'react';
import { TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styled from 'styled-components/native';

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px;
`;
const Text = styled.Text`
  font-weight: 600;
  margin-right: 10px;
`;

export default ({ onPress, text, icon }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Container>
        <Text style={{ color: 'white' }}>{text}</Text>
        <FontAwesome name={icon} color="white" size={22} />
      </Container>
    </TouchableOpacity>
  );
};
