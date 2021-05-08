import { Avatar } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { curTime, setCurTime } from '../redux/setting';

function TimeMessage({ message, timestamp, user, userImage, change }) {
  const { curTime } = useSelector((state) => state.setting);
  const dispatch = useDispatch();

  return (
    <MessageContainer>
      <Amessage>{message}</Amessage>
    </MessageContainer>
  );
}

export default TimeMessage;

const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 20px;
  padding-top: 6px;
  padding-bottom: 7px;

  > img {
    height: 36px;
    border-radius: 5px;
  }
`;

const Amessage = styled.div`
  margin-left: 44px;
  font-size: 14px;
`;
