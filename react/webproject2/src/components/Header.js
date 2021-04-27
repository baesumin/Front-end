import styled from 'styled-components';
import React from 'react';
import HeaderOption from './HeaderOption';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { changeScreen } from '../redux/setting';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';

function Header() {
  const { color } = useSelector((state) => state.setting);
  const dispatch = useDispatch();
  const [user] = useAuthState(auth);

  return (
    <HeaderContainer color={color}>
      <HeaderLeft>
        <Logo
          to="/"
          onClick={(e) => {
            //e.preventDefault();
            dispatch(changeScreen(0));
          }}
        >
          <img
            alt="Happ"
            src="https://play-lh.googleusercontent.com/nYxL5NswAFjaxpwYsF3OzlKSfvfQI3wSf-8T9UT3qxuoTGsfGddhvOaHTxY7nU820NM"
          />
        </Logo>
      </HeaderLeft>
      <HeaderCenter>
        <HeaderOption title="홈" to="/" index={0} />
        <HeaderOption title="행복디자인" to="/design" index={1} />
        <HeaderOption title="커뮤니티" to="/community" index={2} />
        <HeaderOption title="서베이" to="/survey" index={3} />
      </HeaderCenter>
      <HeaderRight>
        <HeaderAvatar
          onClick={(e) => {
            auth.signOut();
          }}
          alt={user?.displayName}
          src={user?.photoURL}
        />
      </HeaderRight>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  /* width: 100vw; */
  /* margin: auto; */
  padding: 5px;
  border-bottom: 1px solid lightgray;
  background-color: ${(props) => props.color || 'white'};

  @media screen and (max-width: 1080px) {
    width: 1080px;
  }
`;
const HeaderLeft = styled.div`
  flex: 0.3;
  margin-left: 20px;
`;
const Logo = styled(Link)`
  > img {
    width: 50px;
    height: 50px;
    cursor: pointer;
  }
  width: 50px;
  height: 50px;
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

  :hover {
    opacity: 0.8;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 0.3;
  margin-right: 20px;
`;