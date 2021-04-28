import React from 'react';
import styled from 'styled-components';

function Widget() {
  return <WidgetContainer>widget</WidgetContainer>;
}

export default Widget;

const WidgetContainer = styled.div`
  width: 300px;
  position: sticky;
  top: 80px;
  text-align: center;
  height: fit-content;
  border: 1px solid black;
`;
