import styled from 'styled-components';
import React, { useState, useRef } from 'react';
import HeaderOption from './HeaderOption';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { changeScreen } from '../redux/setting';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import { logout } from '../redux/user';
import { useDetectOutsideClick } from './useDetectOutsideClick';
import './Header.css';

function Header() {
  const { color } = useSelector((state) => state.setting);
  const dispatch = useDispatch();
  const [GoogleUser] = useAuthState(auth);
  const { user } = useSelector((state) => state.user);
  const curUser = GoogleUser ? GoogleUser : user;
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);

  const logoutOfApp = () => {
    if (user) {
      dispatch(logout());
    }
    dispatch(changeScreen(0));
    auth.signOut();
  };
  console.log(isActive);
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
        <MenuContainer>
          <HeaderAvatar
            className="menu-trigger"
            onClick={() => {
              setIsActive(!isActive);
            }}
            alt={curUser?.displayName}
            src={curUser?.photoURL}
          />
          <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
            <ul>
              <li>
                <MenuLink to="/community">링크1</MenuLink>
              </li>
              <li>
                <MenuLink to="/" onClick={logoutOfApp}>
                  로그아웃
                </MenuLink>
              </li>
            </ul>
          </nav>
        </MenuContainer>
      </HeaderRight>
    </HeaderContainer>
  );
}

export default Header;

const MenuContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MenuLink = styled(Link)`
  text-decoration: none;
  color: #333333;
  padding: 15px 20px;
  display: block;
`;
const HeaderContainer = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  z-index: 999;
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
