import React from 'react';
import { useEffect } from 'react';
import { View, Text, Dimensions, ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';
import { apiImage } from '../../apis/api';
import Poster from '../../components/Poster';
import ScrollContainer from '../../components/ScrollContainer';
import { formatDate } from '../../components/utils';
import Votes from '../../components/Votes';

const BG = styled.Image`
  width: 100%;
  height: 100%;
  opacity: 0.4;
  position: absolute;
`;
const Header = styled.View`
  height: ${Dimensions.get('window').height / 3}px;
  align-items: center;
  justify-content: flex-end;
`;

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  top: 30px;
`;

const Info = styled.View`
  width: 50%;
  margin-left: 40px;
`;

const Title = styled.Text`
  color: white;
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 10px;
`;
const Data = styled.View`
  margin-top: 30px;
  padding: 0px 30px;
`;
const DataName = styled.Text`
  color: white;
  margin-top: 30px;
  opacity: 0.8;
  font-weight: 800;
  margin-bottom: 15px;
`;
const DataValue = styled.Text`
  color: white;
  opacity: 0.8;
  font-weight: 500;
`;

export default ({ result, loading }) => {
  return (
    <ScrollContainer loading={false} contentContainerStyle={{ paddingBottom: 80 }}>
      <>
        <Header>
          <BG source={{ uri: apiImage(result.backgroundImage, 'a') }} />
          <Container>
            <Poster url={result.poster} />
            <Info>
              <Title>{result.title}</Title>
              {result.votes && <Votes votes={result.votes} />}
            </Info>
          </Container>
        </Header>
        <Data>
          {result.overview && (
            <>
              <DataName>Overview</DataName>
              <DataValue>{result.overview}</DataValue>
            </>
          )}
          {loading && <ActivityIndicator style={{ marginTop: 30 }} color={'white'} />}
          {result.spoken_languages ? (
            <>
              <DataName>Languages</DataName>
              <DataValue>{result.spoken_languages.map((l) => `${l.name} `)}</DataValue>
            </>
          ) : null}
          {result.release_date && (
            <>
              <DataName>Release Date</DataName>
              <DataValue>{formatDate(result.release_date)}</DataValue>
            </>
          )}
          {result.overview && (
            <>
              <DataName>Status</DataName>
              <DataValue>{result.status}</DataValue>
            </>
          )}
          {result.revenue && (
            <>
              <DataName>Revenue</DataName>
              <DataValue>{result.revenue}</DataValue>
            </>
          )}
          {result.runtime && (
            <>
              <DataName>Runtime</DataName>
              <DataValue>{result.runtime} minutes</DataValue>
            </>
          )}
          {result.first_air_date && (
            <>
              <DataName>First Air Date</DataName>
              <DataValue>{formatDate(result.first_air_date)}</DataValue>
            </>
          )}
          {result.genres ? (
            <>
              <DataName>Genres</DataName>
              <DataValue>
                {result.genres.map((g, index) =>
                  index + 1 === result.genres.length ? g.name : `${g.name}, `
                )}
              </DataValue>
            </>
          ) : null}
          {result.number_of_episodes && (
            <>
              <DataName>Seasons / Episodes</DataName>
              <DataValue>
                {result.number_of_seasons} / {result.number_of_episodes}
              </DataValue>
            </>
          )}
        </Data>
      </>
    </ScrollContainer>
  );
};
