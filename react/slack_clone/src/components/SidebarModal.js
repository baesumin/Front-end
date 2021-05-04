import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { logout } from '../redux/user';
import { SidebarModalOpen } from '../redux/setting';
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
        dispatch(SidebarModalOpen(false));
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

export default function SidebarModal() {
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, true);

  const logoutOfApp = () => {
    if (user) {
      dispatch(logout());
    }
    auth.signOut();
    dispatch(SidebarModalOpen(false));
  };

  return (
    <Menu ref={dropdownRef}>
      <List>
        <Info>
          <Avatar
            style={{
              backgroundColor: '#616061',
              height: '36px',
              width: '36px',
              marginLeft: '25px'
            }}
            variant="rounded"
          >
            <AvatarName>테스</AvatarName>
          </Avatar>
          <div>
            <InfoHeader>테스트</InfoHeader>
            <InfoDetail>w1619832526-czh832082.slack....</InfoDetail>
          </div>
        </Info>
        <Divider />
        <Plan>
          <a href="https://app.slack.com/plans/T020J8SURD3?entry_point=team_menu_plan_info">
            고객님의 워크스페이스에서는 현재 Slack 무료
            <br />
            버전을 사용하고 있습니다. <strong>플랜 보기</strong>
          </a>
        </Plan>

        <Container>
          <MenuOption>
            <Divider style={{ marginBottom: '10px' }} />
            <Detail>테스트에 사용자 초대</Detail>
            <Detail>채널 생성</Detail>
            <Divider style={{ marginBottom: '10px', marginTop: '6px' }} />
            <Detail>환경설정</Detail>
            <Detail>
              설정 및 관리
              <ArrowForwardIosIcon />
            </Detail>
            <Divider style={{ marginBottom: '10px', marginTop: '6px' }} />
            <Detail>
              도구
              <ArrowForwardIosIcon />
            </Detail>
            <Divider style={{ marginBottom: '10px', marginTop: '6px' }} />
            <Detail onClick={logoutOfApp}>테스트에서 로그아웃</Detail>
            <Divider style={{ marginBottom: '10px', marginTop: '6px' }} />
            <Detail>
              워크스페이스 추가
              <ArrowForwardIosIcon />
            </Detail>
            <Detail>
              워크스페이스 전환
              <ArrowForwardIosIcon />
            </Detail>
            <Detail>Slack 앱 열기</Detail>
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
  top: 97px;
  left: 16px;
  right: 0;
  width: 300px;
  height: 487px;
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
  height: 77px;
  display: flex;
  align-items: center;

  > div {
    margin-left: 10px;
  }
`;
const Plan = styled.div`
  font-size: 12px;
  font-weight: 900;
  line-height: 18px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 8px;
  margin-bottom: 8px;

  :hover {
    background-color: #1264a3;
    text-decoration: none;
    color: white;
    cursor: pointer;
    > a {
      color: white;
    }
    a > strong {
      color: white;
      text-decoration: underline;
    }
  }
  > a {
    color: #5e5e5e;
  }

  a > strong {
    color: #1264a3;
  }

  a:link {
    text-decoration: none;
  }
  a:visited {
    text-decoration: none;
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
  font-size: 15px;
  font-weight: 900;
`;
const InfoHeader = styled.div`
  font-size: 14px;
  font-weight: 900;
`;
const InfoDetail = styled.div`
  font-size: 13px;
  letter-spacing: 0.5px;
  color: #5e5e5e;
`;
