import React, { useState } from 'react';
import styled from 'styled-components';
import { auth, db } from '../firebase';
import firebase from 'firebase';
import { useSelector } from 'react-redux';
import { useAuthState } from 'react-firebase-hooks/auth';

function ChatInput({ channelName, channelId, chatRef }) {
  const [GoogleUser] = useAuthState(auth);
  const { user } = useSelector((state) => state.user);
  const curUser = GoogleUser ? GoogleUser : user;
  const [input, setInput] = useState('');

  const sendMessage = (e) => {
    e.preventDefault();

    if (!channelId) {
      return false;
    }

    db.collection('rooms')
      .doc(channelId)
      .collection('messages')
      .add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        user: curUser.displayName,
        userImage: curUser.photoURL,
        uid: curUser.uid
      })
      .then(() => {
        chatRef.current.scrollIntoView(true);
      });

    setInput('');
  };
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage(e);
    }
  };

  return (
    <ChatInputContainer>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder={`#${channelName}에게 메시지 보내기`}
      />
      <InputOption></InputOption>
    </ChatInputContainer>
  );
}

export default ChatInput;

const ChatInputContainer = styled.div`
  position: absolute;
  left: 20px;
  right: 20px;
  bottom: 25px;
  border: 1px solid gray;
  display: flex;
  border-radius: 5px;
  height: 81px;

  > input {
    position: absolute;
    top: 1%;
    left: 0.09%;
    width: 99.35%;
    height: 34px;
    text-indent: 5px;
    font-size: 14px;
    /* border: none; */
    outline: none;
  }
`;
const InputOption = styled.div`
  position: absolute;
  bottom: 1%;
  left: 0.05%;
  width: 99.7%;
  height: 38px;
  border: 1px solid red;
  border-radius: 5px;
`;
