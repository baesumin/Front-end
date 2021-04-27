import { Avatar } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import InputOption from './InputOption';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';

function Post({ name, description, message, photoUrl }) {
  return (
    <PostContainer>
      <PostHeader>
        <Avatar />
        <PostInfo>
          <h2>{name}</h2>
          <p>{description}</p>
        </PostInfo>
      </PostHeader>

      <PostBody>
        <p>{message}</p>
      </PostBody>

      <PostButtons>
        <InputOption Icon={ThumbUpOutlinedIcon} title="Like" color="gray" />
        <InputOption Icon={ChatOutlinedIcon} title="Comment" color="gray" />
      </PostButtons>
    </PostContainer>
  );
}

export default Post;

const PostContainer = styled.div`
  background-color: white;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 10px;
`;
const PostHeader = styled.div`
  display: flex;
  margin-bottom: 10px;
`;
const PostInfo = styled.div`
  margin-left: 10px;

  > h2 {
    font-size: 15px;
  }
  > p {
    font-size: 12px;
    color: gray;
  }
`;
const PostBody = styled.div`
  overflow-wrap: anywhere;
`;
const PostButtons = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
