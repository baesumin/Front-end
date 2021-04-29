import React from 'react';
import styled from 'styled-components';

function Widget() {
  return (
    <WidgetContainer>
      <WidgetTop>
        <HappyInfo>
          <h3>#오늘 행복 어떄?</h3>
          <h4>뽀기를 누르고 오른쪽으로 당겨보세요~</h4>
        </HappyInfo>
        <ShowBox>show</ShowBox>
      </WidgetTop>
      <WidgetCenter>cetner</WidgetCenter>
      <WidgetBottom>bottom</WidgetBottom>
    </WidgetContainer>
  );
}

export default Widget;
const ShowBox = styled.div``;
const HappyInfo = styled.div`
  padding: 15px;

  > h3 {
    font-size: 18px;
  }
  > h4 {
    font-size: 14px;
  }
`;
const WidgetContainer = styled.div`
  width: 300px;
  position: sticky;
  top: 80px;
  text-align: center;
  height: fit-content;
`;
const WidgetTop = styled.div`
  border-radius: 10px;
  margin-bottom: 20px;
  color: gray;
  background-color: white;
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
