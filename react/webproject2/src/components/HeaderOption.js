import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function HeaderOption({ title, to }) {
  return (
    <HeaderOptionContainer to={`${to}`}>
      <HeaderOptionTitle>{title}</HeaderOptionTitle>
    </HeaderOptionContainer>
  );
}

export default HeaderOption;

const HeaderOptionContainer = styled(Link)`
  display: flex;
  width: 120px;
  justify-content: center;
  color: inherit;
  text-decoration: none;
  font-size: 18px;
  font-weight: 800;
`;
const HeaderOptionTitle = styled.div`
  display: flex;
  align-items: center;
`;
