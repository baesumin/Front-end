import React from 'react';
import styled from 'styled-components/native';

interface ButtonProp {
  onPress: () => void;
}

const MediumButton = ({onPress}: ButtonProp) => {
  const onButtonClick = () => {
    onPress();
  };
  return (
    <Container onPress={onButtonClick}>
      <ButtonText>로그인</ButtonText>
    </Container>
  );
};

export default MediumButton;

const Container = styled.TouchableOpacity`
  background-color: ${props => props.theme.Primary};
  width: 192px;
  height: 44px;
  border-radius: 28px;
  justify-content: center;
  align-items: center;
`;
const ButtonText = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: 700;
`;
