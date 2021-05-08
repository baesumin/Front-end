import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { auth, db } from '../firebase';
import firebase from 'firebase';
import { useDispatch, useSelector } from 'react-redux';
import { useAuthState } from 'react-firebase-hooks/auth';
import { setCurTime, curTime } from '../redux/setting';

function ChatInput({ channelName, channelId, chatRef }) {
  const [GoogleUser] = useAuthState(auth);
  const { user, isActivate } = useSelector((state) => state.user);
  const curUser = GoogleUser ? GoogleUser : user;
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const { curTab, curTime } = useSelector((state) => state.user);

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
        userImage: curUser.photoURL
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
        placeholder={`#${channelName} 메시지 보내기`}
      />
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
    border: 1px solid green;
    top: 1%;
    left: 0.1%;
    width: 99%;
    height: 38px;
    /* border: none; */
    outline: none;
  }
`;
