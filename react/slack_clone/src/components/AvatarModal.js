import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { logout } from '../redux/user';
import { AvatarModalOpen } from '../redux/setting';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../firebase';

const useDetectOutsideClick = (el, initialState) => {
  const [isActive, setIsActive] = useState(initialState);
  const dispatch = useDispatch();

  useEffect(() => {
    const onClick = (e) => {
      // If the active element exists and is clicked outside of
      if (el.current !== null && !el.current.contains(e.target)) {
        setIsActive(!isActive);
        dispatch(AvatarModalOpen(false));
      }
    };

    // If the item is active (ie open) then listen for clicks outside
    if (isActive) {
      window.addEventListener('click', onClick);
    }

    return () => {
      window.removeEventListener('click', onClick);
    };
  }, [isActive, el]);

  return [isActive, setIsActive];
};

export default function AvatarModal() {
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, true);

  const logoutOfApp = () => {
    if (user) {
      dispatch(logout());
    }
    auth.signOut();
  };
  return (
    <Menu ref={dropdownRef}>
      <List>
        <Info>
          <Avatar
            style={{
              backgroundColor: '#0089D2',
              height: '36px',
              width: '36px',
              marginLeft: '25px',
              marginTop: '1px'
            }}
            variant="rounded"
          >
            <AvatarName>수민</AvatarName>
          </Avatar>
          <div>
            <InfoHeader>배수민</InfoHeader>
            <InfoDetail>
              <FiberManualRecordIcon />
              &nbsp;대화 가능
            </InfoDetail>
          </div>
        </Info>
        <StatusBar>
          <p>😄 &nbsp;&nbsp;&nbsp;상태 업데이트</p>
        </StatusBar>
        <Container>
          <MenuOption>
            <Detail>
              자신을 &nbsp;<strong>자리 비움</strong>(으)로 설정
            </Detail>
            <Detail>
              알림 일시 중지
              <ArrowForwardIosIcon />
            </Detail>
            <Divider style={{ marginBottom: '10px', marginTop: '6px' }} />
            <Detail>프로필 편집</Detail>
            <Detail>프로필 보기</Detail>
            <Detail>환경설정</Detail>
            <Divider style={{ marginBottom: '10px', marginTop: '6px' }} />
            <Detail onClick={logoutOfApp}>테스트에서 로그아웃</Detail>
          </MenuOption>
        </Container>
      </List>
    </Menu>
  );
}

const Menu = styled.div`
  border-radius: 7px;
  background-color: white;
  position: fixed;
  top: 40px;
  left: auto;
  right: 13px;
  width: 300px;
  height: 330px;
  min-width: auto;
  min-height: auto;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
  visibility: visible;
  background-color: #f8f8f8;
  z-index: 999;
`;
const List = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
const Info = styled.div`
  height: 50px;
  display: flex;
  align-items: center;

  margin-top: 13px;

  > div {
    margin-left: 10px;
  }
`;
const StatusBar = styled.div`
  border: 1px solid lightgray;
  background-color: white;
  border-radius: 3px;
  margin-top: 8px;
  margin-bottom: 8px;
  margin-left: 25px;
  margin-right: 25px;
  height: 36px;
  display: flex;
  align-items: center;
  padding-left: 8px;

  > p {
    color: gray;
    font-size: 14px;
  }
  :hover {
    border-color: black;
    cursor: pointer;

    > p {
      color: black;
    }
  }
`;

const Container = styled.div``;
const MenuOption = styled.div`
  display: flex;
  flex-direction: column;
`;
const Detail = styled.div`
  display: flex;
  padding-left: 25px;
  padding-top: 4px;
  padding-bottom: 5px;
  font-size: 14px;
  font-weight: 500;
  color: #1d1c1d;
  align-items: center;

  > .MuiSvgIcon-root {
    color: #616061;
    margin-left: auto;
    margin-right: 18px;
    height: 9px;
  }

  :hover {
    background-color: #1264a3;
    color: white;
    cursor: pointer;
    > .MuiSvgIcon-root {
      color: white;
    }
  }
`;
const AvatarName = styled.div`
  display: flex;
  font-size: 14px;
  font-weight: 500;
`;
const InfoHeader = styled.div`
  font-size: 14px;
  font-weight: 900;
  color: black;
  margin-left: 2px;
  margin-top: 4px;
`;
const InfoDetail = styled.div`
  font-size: 12px;
  letter-spacing: 0.5px;
  color: #5e5e5e;
  display: flex;
  align-items: center;
  margin-top: 2px;

  > .MuiSvgIcon-root {
    color: #007a5a;
    height: 12px;
    width: 12px;
  }
`;
