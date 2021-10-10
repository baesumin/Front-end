import React, { useState } from 'react';
import { Alert } from 'react-native';
import styled from 'styled-components/native';
import colors from '../colors';

const View = styled.View`
  background-color: ${colors.bgColor};
  flex: 1;
  padding: 0px 30px;
`;
const Title = styled.Text`
  color: ${colors.textColor};
  margin: 50px 0px;
  text-align: center;
  font-size: 28px;
  font-weight: 500;
`;
const TextInput = styled.TextInput`
  background-color: white;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 18px;
  elevation: 5;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
`;
const Btn = styled.TouchableOpacity`
  width: 100%;
  margin-top: 20px;
  background-color: ${colors.btnColor};
  padding: 10px 20px;
  align-items: center;
  border-radius: 20px;
`;
const BtnText = styled.Text`
  color: white;
  font-weight: 500;
  font-size: 18px;
`;
const Emotions = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;
const Emotion = styled.TouchableOpacity`
  background-color: white;
  elevation: 5;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
  padding: 10px;
  border-radius: 10px;
  border-width: ${(props) => (props.selected ? '2px' : '0px')};
  border-color: rgba(0, 0, 0, 0.5);
`;
const EmotionText = styled.Text`
  font-size: 24px;
`;
const emotions = ['🤯', '🤬', '🤗', '🥰', '😊', '🤩'];

const Write = () => {
  const [selectedEmotion, setEmotion] = useState(null);
  const [feelings, setFeelings] = useState('');
  const onChangeText = (text) => setFeelings(text);
  const onEmotionPress = (face) => setEmotion(face);
  const onSubmit = () => {
    if (feelings === '' || selectedEmotion == null) {
      return Alert.alert('Please complete form.');
    }
  };
  return (
    <View>
      <Title>How do you feel now?</Title>
      <Emotions>
        {emotions.map((emotion, index) => (
          <Emotion
            selected={emotion === selectedEmotion}
            onPress={() => onEmotionPress(emotion)}
            key={index}
          >
            <EmotionText>{emotion}</EmotionText>
          </Emotion>
        ))}
      </Emotions>
      <TextInput
        returnKeyType="done"
        onSubmitEditing={onSubmit}
        onChangeText={onChangeText}
        value={feelings}
        placeholder="Write your feelings..."
      />
      <Btn onPress={onSubmit}>
        <BtnText>Save</BtnText>
      </Btn>
    </View>
  );
};

export default Write;
