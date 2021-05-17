import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import Divider from '@material-ui/core/Divider';
import { ChannelAddDropdownOpen, ChannelAddModalOpen } from '../redux/setting';
import { useDispatch, useSelector } from 'react-redux';

const useDetectOutsideClick = (el, initialState) => {
  const [isActive, setIsActive] = useState(initialState);
  const dispatch = useDispatch();

  useEffect(() => {
    const onClick = (e) => {
      // If the active element exists and is clicked outside of
      if (el.current !== null && !el.current.contains(e.target)) {
        setIsActive(!isActive);
        dispatch(ChannelAddDropdownOpen(false));
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

export default function ChannelAddDropdown() {
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, true);

  return (
    <>
      <ModalContainer>
        <Menu ref={dropdownRef}>
          <List>
            <Container>
              <MenuOption>
                <Divider style={{ marginBottom: '10px' }} />
                <Detail>채널 탐색</Detail>
                <Detail
                  onClick={(e) => {
                    dispatch(ChannelAddModalOpen(true));
                    dispatch(ChannelAddDropdownOpen(false));
                  }}
                >
                  채널 생성
                </Detail>
              </MenuOption>
            </Container>
          </List>
        </Menu>
      </ModalContainer>
    </>
  );
}

const ModalContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 900;
`;
const Menu = styled.div`
  border-radius: 7px;
  background-color: white;
  position: fixed;
  top: 265px;
  left: 215px;
  right: 0;
  width: 200px;
  height: 80px;
  min-width: auto;
  min-height: auto;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
  visibility: visible;
  background-color: #f8f8f8;
  z-index: 901;
`;
const List = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
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
