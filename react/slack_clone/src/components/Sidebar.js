import React from 'react';
import styled from 'styled-components';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import CreateIcon from '@material-ui/icons/Create';
import SidebarOption from './SidebarOption';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <p>테스트</p>
          <KeyboardArrowDownIcon />
        </SidebarInfo>
        <CreateIcon />
      </SidebarHeader>

      <hr />
      <SidebarOption
        Icon={AlternateEmailIcon}
        title="멘션 및 반응"
        color=""
        backgroundColor=""
      />
      <SidebarOption
        Icon={BookmarkBorderIcon}
        title="저장된 항목"
        color=""
        backgroundColor=""
      />
      <SidebarOption
        Icon={MoreVertIcon}
        title="더 보기"
        color="white"
        backgroundColor="var(--slack-sidebar-color)"
      />
      <hr />
      <SidebarOption Icon={PlayArrowIcon} title="채널" color="" backgroundColor="" />
      <hr />
      <SidebarOption
        Icon={PlayArrowIcon}
        title="다이렉트 메시지"
        color=""
        backgroundColor=""
      />
    </SidebarContainer>
  );
}

export default Sidebar;

const SidebarContainer = styled.div`
  background-color: var(--slack-sidebar-color);
  width: 260px;

  > hr {
    background-color: var(--slack-sidebar-color);
    height: 10px;
    border: 1px solid black;
  }

  @media screen and (max-width: 1080px) {
    width: 220px;
  }
  @media screen and (max-width: 860px) {
    width: 200px;
  }
  @media screen and (max-width: 483px) {
    width: 0px;
  }
`;
const SidebarHeader = styled.div`
  display: flex;
  height: 44px;
  border-top: 1px solid #49274b;
  border-bottom: 1px solid #49274b;
  color: white;
  align-items: center;
  padding-left: 5px;
  padding-top: 10px;
  padding-bottom: 8px;
  z-index: 1;

  :hover {
    color: white;
    cursor: pointer;
    background-color: var(--slack-header-color);
  }

  > .MuiSvgIcon-root {
    color: var(--slack-sidebar-color);
    background-color: white;
    border-radius: 999px;
    font-size: 15px;
    padding: 10.5px;
    margin-left: auto;
    margin-right: 16px;
    margin-bottom: 2px;
  }
`;
const SidebarInfo = styled.div`
  display: flex;
  font-size: 14.5px;
  margin-left: 10px;
  font-weight: 900;
  letter-spacing: -2px;

  > .MuiSvgIcon-root {
    height: 16px;
  }
`;
const OptionTopContainer = styled.div``;
