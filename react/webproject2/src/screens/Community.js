import React from 'react';
import styled from 'styled-components';
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import InputOption from '../components/InputOption';

function Community() {
  return (
    <CommunityContainer>
      {/* 커뮤니티 선택 */}

      <FeedInputContainer>
        <Feed_Input>
          <CreateIcon />
          <form>
            <input type="text" />
            <button type="submit">Send</button>
          </form>
        </Feed_Input>
        <FeedInputOptions>
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
        </FeedInputOptions>
      </FeedInputContainer>
    </CommunityContainer>
  );
}

export default Community;

const CommunityContainer = styled.div`
  flex: 1;
  margin: 0 20px;
`;
const FeedInputContainer = styled.div`
  background-color: white;
  padding: 10px;
  padding-bottom: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
`;
const Feed_Input = styled.div`
  border: 1px solid lightgray;
  border-radius: 30px;
  display: flex;
  padding: 10px;
  color: gray;
  padding-left: 15px;

  > form {
    display: flex;
    width: 100%;
  }

  > form > input {
    border: none;
    flex: 1;
    margin-left: 10px;
    outline-width: 0px;
  }
`;
const FeedInputOptions = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
