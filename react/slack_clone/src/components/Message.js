import React from 'react';
import styled from 'styled-components';

function Message({ message, timestamp, user, userImage }) {
  return (
    <MessageContainer>
      <img src={userImage} alt="" />
      <MessageInfo>
        <h4>
          {user} <span>{new Date(timestamp?.toDate()).toUTCString()}</span>
        </h4>
        <p>{message}</p>
      </MessageInfo>
    </MessageContainer>
  );
}

export default Message;

const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 20px;
  padding-top: 15px;

  > img {
    height: 36px;
    border-radius: 5px;
  }
`;
const MessageInfo = styled.div`
  padding-left: 8px;

  > h4 {
    font-size: 14px;
  }
  > h4 > span {
    color: gray;
    font-weight: 300;
    margin-left: 4px;
    font-size: 12px;
  }
  > p {
    font-size: 14px;
  }
`;
