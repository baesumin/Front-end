import { Divider } from '@material-ui/core';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';
import { AvatarGroup } from '@material-ui/lab';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import ChatInput from './ChatInput';
import { useDispatch, useSelector } from 'react-redux';
import { db } from '../firebase';
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import Message from './Message';
import { setCurTime } from '../redux/setting';
// import { Message } from '@material-ui/icons';

function Chat() {
  const dispatch = useDispatch();
  const chatRef = useRef(null);
  const { curTime, curTab } = useSelector((state) => state.setting);
  const [curTitle, setCurTitle] = useState('');
  const [curSubTitle, setCurSubTitle] = useState('');
  const [roomDetails] = useDocument(curTab && db.collection('rooms').doc(curTab));
  const [roomUsers] = useCollection(
    curTab && db.collection('rooms').doc(curTab).collection('users')
  );
  const [roomMessages, loading] = useCollection(
    curTab &&
      db
        .collection('rooms')
        .doc(curTab)
        .collection('messages')
        .orderBy('timestamp', 'asc')
  );
  let saveTime = '';

  useEffect(() => {
    const unsubscribe = () => {
      chatRef?.current?.scrollIntoView(true);
    };
    return unsubscribe();
  }, [curTab, loading]);

  const getMessages = () => {};

  return (
    <ChatContainer>
      {!(curTab === '0' || curTab === '1') && roomDetails && roomMessages && (
        <>
          <Header>
            <HeaderLeft>
              <Title>#{roomDetails?.data().name}</Title>
              <SubTitle>{roomDetails?.data().explanation}</SubTitle>
            </HeaderLeft>
            <HeaderRight>
              <AvatarGroup
                max={3}
                style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}
              >
                {roomUsers?.docs.map((doc) => {
                  const { user, userImage } = doc.data();

                  return (
                    <Avatar
                      style={{ width: '25px', height: '25px' }}
                      variant="rounded"
                      alt={user}
                      src={userImage}
                    />
                  );
                })}
              </AvatarGroup>
              <PersonAddIcon style={{ color: 'gray', marginRight: '20px' }} />
              <ErrorOutlineIcon style={{ color: 'gray' }} />
            </HeaderRight>
          </Header>
          <Divider />

          <ChatMessages>
            {roomMessages?.docs.map((doc) => {
              const { message, timestamp, user, userImage } = doc.data();
              if (isNaN(new Date(timestamp?.toDate()).getUTCMinutes())) return;
              if (saveTime != new Date(timestamp?.toDate()).getUTCMinutes()) {
                saveTime = new Date(timestamp?.toDate()).getUTCMinutes();
                return (
                  <Message
                    key={doc.id}
                    message={message}
                    timestamp={timestamp}
                    user={user}
                    userImage={userImage}
                    change={true}
                  />
                );
              } else {
                return (
                  <Message
                    key={doc.id}
                    message={message}
                    timestamp={timestamp}
                    user={user}
                    userImage={userImage}
                    change={false}
                  />
                );
              }
            })}
            <ChatBottom ref={chatRef} />
          </ChatMessages>

          <ChatInput
            chatRef={chatRef}
            channelName={roomDetails?.data().name}
            channelId={curTab}
          ></ChatInput>
        </>
      )}
    </ChatContainer>
  );
}

export default Chat;

const ChatContainer = styled.div`
  flex-grow: 1;
  margin-top: 36px;
  position: relative;
`;
const Header = styled.div`
  height: 64px;
  display: flex;
  align-items: center;
  margin-left: 20px;
  margin-right: 20px;
`;
const HeaderLeft = styled.div``;
const HeaderRight = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`;
const Title = styled.div`
  font-size: 15px;
  font-weight: 800;
  margin-left: 1px;
  letter-spacing: -0.8px;
`;
const SubTitle = styled.div`
  margin-top: 1px;
  font-size: 12px;
  color: #808080;
`;
const ChatMessages = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 64px;
  bottom: 109px;
  overflow-x: hidden;
  overflow-y: auto;
`;
const ChatBottom = styled.div`
  position: relative;
  border: 1px solid green;
  bottom: 0px;

  padding-bottom: 36px;
`;
