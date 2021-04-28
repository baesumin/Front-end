import React from 'react';
import styled from 'styled-components';

function Sidebar() {
  return <SidebarContainer>sidebar</SidebarContainer>;
}

export default Sidebar;

const SidebarContainer = styled.div`
  width: 200px;
  position: sticky;
  top: 80px;
  text-align: center;
  height: fit-content;
  border: 1px solid black;
`;
