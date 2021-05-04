import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { SelectTab } from '../redux/setting';

function SidebarOption({ Icon, title, index }) {
  const dispatch = useDispatch();
  const { curTab } = useSelector((state) => state.setting);
  return (
    <SidebarOptionContainer
      onClick={() => {
        dispatch(SelectTab(index));
      }}
      curTab={curTab}
      index={index}
    >
      {Icon && <Icon style={{ padding: 10 }} />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SidebarOptionChannel>
          <span>#</span> {title}
        </SidebarOptionChannel>
      )}
    </SidebarOptionContainer>
  );
}

export default SidebarOption;

const SidebarOptionContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  color: ${(props) => {
    if (props.index === props.curTab) return 'white';
    else return '#b7a5b7';
  }};
  background-color: ${(props) => {
    if (props.index === props.curTab) return '#1264a3';
    else return 'none';
  }};
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
    color: '#b7a5b7';
    background-color: ${(props) => {
      if (props.index === props.curTab) return '#1264a3';
      else return 'var(--slack-header-color)';
    }};
  }
`;
const SidebarOptionChannel = styled.div``;
