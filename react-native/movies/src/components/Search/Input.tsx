import React from 'react';
import styled from 'styled-components/native';

type InputProps = {
  placeholder: string;
  value: string;
  onChange: (text: string) => void;
  onSubmit: () => void;
};

const TextInput = styled.TextInput`
  background-color: white;
  margin: 0px 30px;
  padding: 10px 20px;
  border-radius: 15px;
  margin-bottom: 50px;
`;

export default ({ placeholder, value, onChange, onSubmit }: InputProps) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChange}
      onSubmitEditing={onSubmit}
      placeholder={placeholder}
      returnKeyType={'search'}
    />
  );
};
