import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import Divider from '@material-ui/core/Divider';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

import { InputModalOpen } from '../redux/setting';
import { useDispatch } from 'react-redux';

export const useDetectOutsideClick = (el, initialState) => {
  const [isActive, setIsActive] = useState(initialState);
  const dispatch = useDispatch();

  useEffect(() => {
    const onClick = (e) => {
      // If the active element exists and is clicked outside of
      if (el.current !== null && !el.current.contains(e.target)) {
        setIsActive(!isActive);
        dispatch(InputModalOpen(false));
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

export default function InputModal() {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, true);

  return (
    <Menu ref={dropdownRef} isActive>
      <List>
        <SearchContainer>
          <SearchIcon />
          <input placeholder="자세히 검색" />
          <CloseIcon />
        </SearchContainer>
        <Divider />
        <TipContainer>
          <h4>💡 &nbsp; 메시지, 파일 등 검색</h4>
          <p>
            특정 메시지, 문서 또는 결정을 찾고 있나요? Slack에서 <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;발생했다면 검색을 사용하여 찾을 수
            있습니다.
          </p>
        </TipContainer>
        <Divider />
        <AccessContainer>
          <h4>고객지원센터에서 제공</h4>
          <p>
            <HelpOutlineIcon />
            &nbsp;&nbsp;&nbsp;
            <a href="https://slack.com/help/articles/202528808-Search-in-Slack">
              <strong>Slack에서의 검색 방법</strong> 올바른 정보에 즉시 액세스하기
            </a>
          </p>
          <p>
            <HelpOutlineIcon />
            &nbsp;&nbsp;&nbsp;
            <a href="https://slack.com/intl/ko-kr/help/categories/200111606">
              <strong>Slack 사용하기</strong> Slack이 어떻게 작동하는지 전체 과정을 자세히
              알아보세요.
            </a>
          </p>
        </AccessContainer>
      </List>
    </Menu>
  );
}

const Menu = styled.div`
  border-radius: 8px;
  background-color: white;
  position: fixed;
  top: 4px;
  left: 0;
  right: 0;
  margin: auto;
  width: 800px;
  height: 316px;
  min-width: auto;
  min-height: auto;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
  visibility: visible;
  z-index: 999;
`;
const List = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
const SearchContainer = styled.div`
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;

  > input {
    flex: 0.92;
    margin-left: 10px;
    margin-right: 10px;
    border: none;
    font-size: 14px;
    :focus {
      outline: none;
    }
  }
  > .MuiSvgIcon-root {
    color: #616061;
    font-size: 20px;
  }
`;
const TipContainer = styled.div`
  height: 118px;
  margin-top: 12px;
  background-color: #f8f8f8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > h4 {
    padding-top: 10px;
    font-size: 14px;
    font-weight: 900;
  }
  > p {
    margin: 10px;
    font-size: 14px;
    line-height: 20px;
    font-weight: 600;
    color: #616061;
  }
`;
const AccessContainer = styled.div`
  height: 141px;

  > h4 {
    font-size: 12px;
    margin: 20px;
    padding-left: 8px;
    padding-top: 4px;
    color: #868686;
  }
  > p {
    margin: 15px;
    padding-left: 5px;
    font-size: 14px;
    padding-left: 15px;
    display: flex;
    align-items: center;

    > .MuiSvgIcon-root {
      color: #616061;
      font-size: 16px;
      background-color: #f6f6f6;
    }
    > a {
      font-weight: 500;
    }
    a:link {
      text-decoration: none;
      color: black;
    }
    a:visited {
      text-decoration: none;
      color: black;
    }
    a:hover {
      color: #0b4c8c;
      text-decoration: underline;
    }
  }
`;
