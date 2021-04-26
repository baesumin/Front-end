import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeScreen } from '../redux/setting';

function HeaderOption({ title, to, index }) {
  const dispatch = useDispatch();

  return (
    <HeaderOptionContainer to={`${to}`}>
      <HeaderOptionButton
        className="button"
        onClick={(e) => {
          //e.preventDefault();
          dispatch(changeScreen(index));
        }}
      >
        <h4>{title}</h4>
      </HeaderOptionButton>
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
const HeaderOptionButton = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  :hover {
    color: gray;
  }
`;
