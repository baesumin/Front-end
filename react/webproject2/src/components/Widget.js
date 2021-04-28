import React from 'react';
import styled from 'styled-components';

function Widget() {
  return (
    <WidgetContainer>
      <WidgetTop>top</WidgetTop>
      <WidgetCenter>cetner</WidgetCenter>
      <WidgetBottom>bottom</WidgetBottom>
    </WidgetContainer>
  );
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
const WidgetTop = styled.div`
  border: 1px solid gray;
  border-radius: 10px;
  margin-bottom: 20px;
`;
const WidgetCenter = styled.div`
  border: 1px solid gray;
  border-radius: 10px;
  margin-bottom: 20px;
`;
const WidgetBottom = styled.div`
  border: 1px solid gray;
  border-radius: 10px;
  margin-bottom: 20px;
`;
