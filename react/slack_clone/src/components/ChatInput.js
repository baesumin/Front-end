import React from 'react';
import styled from 'styled-components';

function ChatInput({ channelName, channelId }) {
  const sendMessage = (e) => {
    e.preventDefault();
  };

  return (
    <ChatInputContainer>
      <input placeholder={`#테스트에게 메시지 보내기`} />
    </ChatInputContainer>
  );
}

export default ChatInput;

const ChatInputContainer = styled.div`
  position: absolute;
  left: 20px;
  right: 20px;
  bottom: 30px;
  border: 1px solid gray;
  display: flex;
  border-radius: 5px;
  height: 81px;
  /* margin-left: 20px;
  margin-right: 20px; */

  > input {
    position: absolute;
    top: 1%;
    left: 0.1%;
    width: 99%;
    height: 38px;
    border: none;
    outline: none;
  }
`;
