import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components/native';
import { history, info } from '../api';
import { BLACK_COLOR } from '../colors';
import { Icon } from '../components/Coin';
import { VictoryChart, VictoryLine, VictoryScatter } from 'victory-native';

const Container = styled.View`
  background-color: ${BLACK_COLOR};
  flex: 1;
`;

const Detail = ({
  navigation,
  route: {
    params: { symbol, id }
  }
}) => {
  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Icon
          source={{
            uri: `https://cryptoicon-api.vercel.app/api/icon/${symbol.toLowerCase()}`
          }}
        />
      ),
      headerLargeTitle: true //ios
    });
  }, []);
  const { isLoading: infoLoading, data: infoData } = useQuery('coinInfo', () => info(id));
  const { isLoading: historyLoading, data: historyData } = useQuery(
    ['coinHistory', id],
    history
  );
  const [victoryData, setVictoryData] = useState(null);
  useEffect(() => {
    if (historyData) {
      setVictoryData(
        historyData.map((price) => ({
          x: new Date(price.timestamp).getTime(),
          y: price.price
        }))
      );
    }
  }, [historyData]);

  return (
    <Container>
      {!historyLoading ? (
        <VictoryChart height={360}>
          <VictoryLine
            animate
            interpolation="cardinal"
            data={victoryData}
            style={{ data: { stroke: '#1abc9c' } }}
          />
          <VictoryScatter data={victoryData} style={{ data: { fill: '#1abc9c' } }} />
        </VictoryChart>
      ) : null}
    </Container>
  );
};

export default Detail;
