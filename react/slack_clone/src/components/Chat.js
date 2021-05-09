import { Divider } from '@material-ui/core';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';
import { AvatarGroup } from '@material-ui/lab';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import ChatInput from './ChatInput';
import { useSelector } from 'react-redux';
import { db } from '../firebase';
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import Message from './Message';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';

function Chat() {
  const chatRef = useRef(null);
  const { curTab } = useSelector((state) => state.setting);
  const { title } = useSelector((state) => state.user);
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
  let saveUser = '';

  useEffect(() => {
    const unsubscribe = () => {
      chatRef?.current?.scrollIntoView(true);
    };
    return unsubscribe();
  }, [curTab, loading, roomMessages]);

  return (
    <ChatContainer>
      <>
        {(curTab === '0' || curTab === '1') && (
          <>
            <Header>
              <HeaderLeft>
                <Title>{title}</Title>
              </HeaderLeft>
            </Header>
            <Divider />
            {curTab === '0' ? (
              <Mention>
                <img
                  alt=""
                  src="https://a.slack-edge.com/production-standard-emoji-assets/13.0/google-large/1f331.png"
                />
                <div>스레드 관리하기</div>
                <p>고객님이 속한 스레드는 바로 여기에 수집됩니다.</p>
                <a href="https://slack.com/help/articles/115000769927?utm_source=slack&utm_medium=prod&utm_campaign=hc">
                  스레드에 관해 자세히 알아보기
                </a>
              </Mention>
            ) : (
              <SavedItem>
                <AlternateEmailIcon />
                <div>실시간으로 새로운 활동을 확인</div>
                <p>사람들이 고객님의 메시지에 반응하거나 고객님 또는 고객님의 키워</p>
                <p>드를 멘션하는 경우, 여기서 확인하세요.</p>
              </SavedItem>
            )}
          </>
        )}
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
                const { message, timestamp, user, userImage, uid } = doc.data();
                if (isNaN(new Date(timestamp?.toDate()).getUTCMinutes())) return;
                if (
                  saveTime != new Date(timestamp?.toDate()).getUTCMinutes() ||
                  uid != saveUser
                ) {
                  saveUser = uid;
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
      </>
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
  padding-bottom: 0;
`;
const Mention = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 64px;
  bottom: 0;

  > div {
    margin-top: 25px;
    font-size: 17px;
    letter-spacing: -0.7px;
    font-weight: 900;
  }
  > p {
    margin-top: 10px;
    font-size: 14px;
    letter-spacing: -0.3px;
    font-weight: 500;
  }
  > a {
    margin-top: 10px;
    font-size: 14px;
    color: #0b4c8c;
    font-weight: 500;
    text-decoration: none;

    :hover {
      text-decoration: underline;
    }
  }
`;
const SavedItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 64px;
  bottom: 0;
  margin-bottom: 9px;

  > .MuiSvgIcon-root {
    color: #de4e32;
    font-size: 29px;
  }

  > div {
    margin-top: 7px;
    margin-bottom: 10px;
    font-size: 17px;
    letter-spacing: -0.7px;
    font-weight: 900;
  }
  > p {
    font-size: 15px;
    margin-bottom: 2px;
    letter-spacing: -1px;
    font-weight: 500;
  }
`;
