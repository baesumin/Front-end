import React from 'react';
import styled from 'styled-components';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import CreateIcon from '@material-ui/icons/Create';
import SidebarOption from './SidebarOption';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { useDispatch, useSelector } from 'react-redux';
import AddIcon from '@material-ui/icons/Add';
import SidebarModal from './SidebarModal';
import {
  SidebarModalOpen,
  InputModalOpen,
  ChannelAddDropdownOpen,
  ChannelTabClick,
  DMTabClick
} from '../redux/setting';
import ChannelAddDropdown from './ChannelAddDropdown';
import ChannelAddModal from './ChannelAddModal';

function Sidebar() {
  const {
    isSidebarModalOpen,
    isInputModalOpen,
    isChannelAddDropdownOpen,
    isChannelAddModalOpen,
    isChannelTabOpen,
    isDMTabOpen
  } = useSelector((state) => state.setting);
  const dispatch = useDispatch();

  return (
    <>
      {isChannelAddModalOpen ? <ChannelAddModal /> : null}
      {isChannelAddDropdownOpen ? <ChannelAddDropdown /> : null}
      {isSidebarModalOpen ? <SidebarModal /> : null}
      <SidebarContainer>
        <SidebarHeader
          onClick={(e) => {
            e.stopPropagation();
            dispatch(SidebarModalOpen(!isSidebarModalOpen));
          }}
          style={{ zIndex: 1 }}
        >
          <SidebarInfo>
            <p>테스트</p>
            <KeyboardArrowDownIcon />
          </SidebarInfo>
          <CreateIcon
            onClick={(e) => {
              e.stopPropagation();
              dispatch(SidebarModalOpen(false));
              dispatch(InputModalOpen(false));
              console.log('아이콘');
            }}
            style={{ zIndex: 3 }}
          />
        </SidebarHeader>

        <hr />
        <SidebarOption Icon={AlternateEmailIcon} title="멘션 및 반응" index={0} />
        <SidebarOption Icon={BookmarkBorderIcon} title="저장된 항목" index={1} />
        <More>
          <MoreVertIcon style={{ padding: 10 }} />더 보기
        </More>
        <hr />
        <ChannelContainer
          onClick={() => {
            dispatch(ChannelTabClick(!isChannelTabOpen));
          }}
          isChannelTabOpen={isChannelTabOpen}
        >
          <PlayArrowIcon style={{ padding: 10 }} />
          채널
          <span>
            <AddIcon
              onClick={(e) => {
                e.stopPropagation();
                dispatch(ChannelAddDropdownOpen(true));
                console.log('채널+아이콘');
              }}
            />
          </span>
        </ChannelContainer>
        <hr />
        <DMContainer
          onClick={() => {
            dispatch(DMTabClick(!isDMTabOpen));
          }}
          isDMTabOpen={isDMTabOpen}
        >
          <PlayArrowIcon style={{ padding: 10 }} />
          다이렉트 메시지
          <span>
            <AddIcon />
          </span>
        </DMContainer>
      </SidebarContainer>
    </>
  );
}

export default Sidebar;

const SidebarContainer = styled.div`
  background-color: var(--slack-sidebar-color);
  margin-top: 36px;
  width: 260px;

  > hr {
    background-color: var(--slack-sidebar-color);
    height: 9px;
    border: none;
  }

  @media screen and (max-width: 1080px) {
    width: 220px;
  }
  @media screen and (max-width: 860px) {
    width: 200px;
  }
  /* @media screen and (max-width: 483px) {
    width: 0px;
  } */
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

  > .MuiSvgIcon-root :hover {
    opacity: 0.8;
  }
`;
const More = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  color: #b7a5b7;
  height: 27px;
  padding-left: 3px;
  margin: 2px;

  > .MuiSvgIcon-root {
    font-size: 16px;
    stroke: white;
    stroke-width: 0.4px;
  }
  :hover {
    cursor: pointer;
    color: white;
  }
`;
const ChannelContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  color: #b7a5b7;
  height: 27px;
  padding-left: 3px;
  margin: 2px;

  > .MuiSvgIcon-root {
    font-size: 16px;
    transform: ${(props) => {
      if (props.isChannelTabOpen) return 'rotate(90deg)';
      else return 'rotate(0deg)';
    }};
    transition: transform ease 0.1s;
  }
  > span {
    visibility: hidden;
    margin-left: auto;
    margin-right: 15px;
  }
  :hover {
    cursor: pointer;
    > span {
      display: flex;
      justify-content: center;
      align-items: center;
      visibility: visible;
      width: 28px;
      height: 28px;
      :hover {
        background-color: #532753;
        border-radius: 5px;
      }
    }
  }
`;
const DMContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  color: #b7a5b7;
  height: 27px;
  padding-left: 3px;
  margin: 2px;
  > .MuiSvgIcon-root {
    font-size: 16px;
    transform: ${(props) => {
      if (props.isDMTabOpen) return 'rotate(90deg)';
      else return 'rotate(0deg)';
    }};
    transition: transform ease 0.1s;
  }
  > span {
    visibility: hidden;
    margin-left: auto;
    margin-right: 15px;
  }
  :hover {
    cursor: pointer;
    > span {
      display: flex;
      justify-content: center;
      align-items: center;
      visibility: visible;
      width: 28px;
      height: 28px;
      :hover {
        background-color: #532753;
        border-radius: 5px;
      }
    }
  }
`;
