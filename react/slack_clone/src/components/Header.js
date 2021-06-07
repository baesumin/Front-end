import React from 'react';
import styled from 'styled-components';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { useDispatch, useSelector } from 'react-redux';

import HeaderAvatar from './HeaderAvatar';
import InputModal from './InputModal';
import { InputModalOpen } from '../redux/setting';

function Header() {
  const { isInputModalOpen } = useSelector((state) => state.setting);
  const dispatch = useDispatch();

  return (
    <>
      {isInputModalOpen ? <InputModal /> : null}
      <HeaderContainer>
        <HeaderLeft></HeaderLeft>

        <HeaderCenter>
          <AccessTimeIcon />

          <HeaderSearch>
            <input
              onClick={(e) => {
                e.stopPropagation();
                dispatch(InputModalOpen(!isInputModalOpen));
              }}
              className="header_input"
              value="테스트 검색!"
            />
          </HeaderSearch>

          <HelpOutlineIcon />
        </HeaderCenter>

        <HeaderRight>
          <HeaderAvatar />
        </HeaderRight>
      </HeaderContainer>
    </>
  );
}

export default Header;

const HeaderContainer = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  padding: 1px;
  background-color: var(--slack-header-color);
  color: lightgray;
  z-index: 203;
`;
const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 34%;
  min-width: 128px;
`;
const HeaderCenter = styled.div`
  display: flex;
  width: 29.4%;
  justify-content: center;
  align-items: center;

  > .MuiSvgIcon-root {
    height: 22px;
    font-weight: 800;
    stroke: white;
    stroke-width: 0.5px;
    margin-left: 17px;
    margin-right: 16px;
  }
`;
const HeaderSearch = styled.div`
  opacity: 1;
  background-color: #421f44;
  display: flex;
  border-radius: 4px;
  border: 1px solid #664966;
  /* padding-left: 5px; */

  > input {
    background-color: transparent;
    border: none;
    color: lightgray;
    cursor: pointer;
    width: 490px;
    height: 20px;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: -1px;
    padding-left: 5px;
    margin-left: 1px;
  }

  /* > :hover {
    border: 1px solid lightgray;
    border-radius: 4px;
  } */

  @media screen and (max-width: 1170px) {
    width: 42vw;
  }
`;
const HeaderRight = styled.div`
  display: flex;
  width: 36.6%;
  min-width: 128px;
  justify-content: flex-end;
  margin-left: auto;
  padding-right: 10px;
`;
