import styled from 'styled-components';
import React from 'react';
import HeaderOption from './HeaderOption';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <HeaderContainer>
      <HeaderLeft to="/">
        <img src="https://play-lh.googleusercontent.com/nYxL5NswAFjaxpwYsF3OzlKSfvfQI3wSf-8T9UT3qxuoTGsfGddhvOaHTxY7nU820NM" />
      </HeaderLeft>
      <HeaderCenter>
        <HeaderOption title="홈" to="/" />
        <HeaderOption title="행복디자인" to="/design" />
        <HeaderOption title="커뮤니티" to="/community" />
        <HeaderOption title="서베이" to="/survey" />
      </HeaderCenter>
      <HeaderRight>
        <HeaderAvatar />
      </HeaderRight>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  padding: 20px;
  border-bottom: 1px solid lightgray;
`;
const HeaderLeft = styled(Link)`
  > img {
    height: 50px;
    cursor: pointer;
  }
  flex: 0.3;
  margin-left: 20px;
`;
const HeaderCenter = styled.div`
  display: flex;
  flex: 0.4;

  justify-content: center;
`;
const HeaderAvatar = styled(Avatar)`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const HeaderRight = styled.div`
  /* > .MuiSvgIcon-root {
  } */
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 20px;
  flex: 0.3;
`;
