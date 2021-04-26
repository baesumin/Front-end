import React from 'react';
import styled from 'styled-components';

function Sidebar() {
  return <SidebarContainer>sidebar</SidebarContainer>;
}

export default Sidebar;

const SidebarContainer = styled.div`
  width: 200px;
  border: 1px solid black;
  border-radius: 1px;
`;
