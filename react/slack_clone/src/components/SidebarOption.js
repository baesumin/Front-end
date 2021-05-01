import React from 'react';
import styled from 'styled-components';

function SidebarOption({ Icon, title, color, backgroundColor }) {
  return (
    <SidebarOptionContainer>
      {Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
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
  color: #b7a5b7;
  height: 28px;
  padding-left: 3px;

  > .MuiSvgIcon-root {
    font-size: 16px;
    stroke: white;
    stroke-width: 0.4px;
  }

  :hover {
    cursor: pointer;
    color: ${(props) => props.color || '#b7a5b7'};
    background-color: ${(props) => props.backgroundColor || 'var(--slack-header-color)'};
    /* background-color: var(--slack-header-color); */
  }
`;
const SidebarOptionChannel = styled.div``;
