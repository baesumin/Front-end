import React from 'react';
import styled from 'styled-components';

function Widget() {
  return <WidgetContainer>widget</WidgetContainer>;
}

export default Widget;

const WidgetContainer = styled.div`
  width: 300px;
  border: 1px solid black;
  border-radius: 1px;
`;
