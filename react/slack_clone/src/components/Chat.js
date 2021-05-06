import { Divider } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';
import { AvatarGroup } from '@material-ui/lab';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import ChatInput from './ChatInput';

function Chat() {
  return (
    <ChatContainer>
      <Header>
        <HeaderLeft>
          <Title>#테스트</Title>
          <SubTitle>주제 추가</SubTitle>
        </HeaderLeft>
        <HeaderRight>
          <AvatarGroup
            max={3}
            style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}
          >
            <Avatar
              style={{ width: '25px', height: '25px' }}
              variant="rounded"
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
            />
            <Avatar
              style={{ width: '25px', height: '25px' }}
              variant="rounded"
              alt="Remy Sharp"
              alt="Travis Howard"
              src="/static/images/avatar/2.jpg"
            />
            <Avatar
              style={{ width: '25px', height: '25px' }}
              variant="rounded"
              alt="Remy Sharp"
              alt="Cindy Baker"
              src="/static/images/avatar/3.jpg"
            />
            <Avatar
              style={{ width: '25px', height: '25px' }}
              variant="rounded"
              alt="Remy Sharp"
              alt="Agnes Walker"
              src="/static/images/avatar/4.jpg"
            />
          </AvatarGroup>
          <PersonAddIcon style={{ color: 'gray', marginRight: '20px' }} />
          <ErrorOutlineIcon style={{ color: 'gray' }} />
        </HeaderRight>
      </Header>
      <Divider />

      <ChatMessages></ChatMessages>

      <ChatInput></ChatInput>
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
  /* height: 760px; */
`;
