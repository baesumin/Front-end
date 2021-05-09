import { Avatar } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

function Message({ message, timestamp, user, userImage, change }) {
  const setTime = (date) => {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? '오후' : '오전';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = ampm + ' ' + hours + ':' + minutes;
    return strTime;
  };

  const a = () => {
    return (
      <>
        <Amessage>{message}</Amessage>
      </>
    );
  };
  const b = () => {
    return (
      <>
        <Avatar
          style={{ width: '36px', height: '36px' }}
          variant="rounded"
          src={userImage}
          alt={user}
        />
        <MessageInfo>
          <h4>
            {user} <span>{setTime(new Date(timestamp?.toDate()))}</span>
          </h4>
          <p>{message}</p>
        </MessageInfo>
      </>
    );
  };

  return <MessageContainer>{change ? b() : a()}</MessageContainer>;
}

export default Message;

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
  :hover {
    background-color: #f8f8f8;
  }
`;
const MessageInfo = styled.div`
  padding-left: 8px;

  > h4 {
    font-size: 14px;
  }
  > h4 > span {
    color: gray;
    font-weight: 400;
    margin-left: 4px;
    font-size: 12px;
  }
  > p {
    font-size: 14px;
  }
`;
const Amessage = styled.div`
  margin-left: 44px;
  font-size: 14px;
`;
