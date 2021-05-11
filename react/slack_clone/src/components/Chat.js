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
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import { DragDropContext } from 'react-beautiful-dnd';
import initialData from './initial-data';
import Column from './Column';

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
  const _initialstate = initialData;
  let saveTime = '';
  let saveUser = '';

  const onDragEnd = (result) => {
    console.log('drag end');
  };

  useEffect(() => {
    const unsubscribe = () => {
      chatRef?.current?.scrollIntoView(true);
    };
    return unsubscribe();
  }, [curTab, loading, roomMessages]);

  return (
    <ChatContainer>
      <>
        {curTab === '2' && (
          <>
            <Header>
              <HeaderLeft>
                <Title>{title}</Title>
              </HeaderLeft>
            </Header>
            <Divider />
            <Calendar>
              <CalendarHeader>
                <CalendarTitle>
                  <CalendarTodayIcon />
                  &nbsp;일정
                </CalendarTitle>
                <CalendarSubTitle>
                  <p>작업 목록 템플릿을 사용하면 개인 작업을 기록할 수 있습니다.</p>
                  <p>이 보드에 새 작업을 직접 생성하려면 + 새 작업을 클릭하세요.</p>
                  <p>
                    기존 작업을 클릭하면 추가 컨텍스트 또는 하위 작업을 추가할 수
                    있습니다.
                  </p>
                </CalendarSubTitle>
              </CalendarHeader>
              <DragDropContext onDragEnd={onDragEnd}>
                <CalendarMain>
                  <BodyContainer>
                    {/* <Divider style={{ marginBottom: '10px' }} /> */}
                    {/* <A>할 일</A>
                    <B />
                    <B /> */}
                    {_initialstate.columnOrder.map((columnId) => {
                      const column = _initialstate.columns[columnId];
                      const tasks = column.taskIds.map(
                        (taskId) => _initialstate.tasks[taskId]
                      );

                      return <Column key={column.id} column={column} tasks={tasks} />;
                    })}
                  </BodyContainer>
                </CalendarMain>
              </DragDropContext>
            </Calendar>
          </>
        )}
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
        {!(curTab === '0' || curTab === '1' || curTab === '2') &&
          roomDetails &&
          roomMessages && (
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
  bottom: 106px;
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
const Calendar = styled.div`
  position: absolute;
  display: flex;
  right: 0;
  left: 0;
  top: 64px;
  bottom: 0;
  margin-left: 40px;
  margin-top: 40px;
  border: 1px solid red;
`;
const CalendarHeader = styled.div`
  position: absolute;

  border: 1px solid black;
`;
const CalendarTitle = styled.div`
  font-size: 40px;
  font-weight: 600;
  display: flex;
  align-items: center;
  > .MuiSvgIcon-root {
    font-size: 40px;
  }
`;
const CalendarSubTitle = styled.div`
  font-size: 15px;
  margin-left: 5px;
  letter-spacing: -0.5px;
`;
const CalendarMain = styled.div`
  border: 1px solid green;
  position: absolute;
  left: 0;
  right: 0;
  top: 114px;
  bottom: 0;
`;
const BodyContainer = styled.div``;
const A = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightgray;
  border-radius: 5px;
  width: 260px;
  height: 80px;
`;
const B = styled.div`
  width: 260px;
  height: 80px;
  margin-top: 10px;
  border: 1px solid green;
`;
