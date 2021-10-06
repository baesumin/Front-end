import { BlurView } from 'expo-blur';
import React from 'react';
import { StyleSheet, useColorScheme } from 'react-native';
import styled from 'styled-components/native';
import { makeImgPath } from '../utils';
import Poster from './Poster';

const View = styled.View`
  flex: 1;
`;
const BgImg = styled.Image``;

const Title = styled.Text<{ isDark: boolean }>`
  font-size: 16px;
  font-weight: 600;
  color: white;
`;
const Wrapper = styled.View`
  flex-direction: row;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
const Column = styled.View`
  width: 40%;
  margin-left: 15px;
`;
const Overview = styled.Text<{ isDark: boolean }>`
  color: rgba(255, 255, 255, 0.6);
  margin-top: 10px;
`;
const Votes = styled(Overview)`
  font-size: 12px;
`;

interface SlideProps {
  backdropPath: string;
  originalTitle: string;
  voteAverage: number;
  overview: string;
  posterPath: string;
}

const Slide: React.FC<SlideProps> = ({
  backdropPath,
  originalTitle,
  voteAverage,
  overview,
  posterPath
}) => {
  const isDark = useColorScheme() === 'dark';
  return (
    <View>
      <BgImg
        style={StyleSheet.absoluteFill}
        source={{ uri: makeImgPath(backdropPath) }}
      ></BgImg>
      <BlurView
        tint={isDark ? 'dark' : 'light'}
        intensity={100}
        style={StyleSheet.absoluteFill}
      >
        <Wrapper>
          <Poster path={posterPath} />
          <Column>
            <Title isDark={isDark}>{originalTitle}</Title>
            {voteAverage > 0 ? <Votes isDark={isDark}>✨{voteAverage}/10</Votes> : null}
            <Overview isDark={isDark}>{overview.slice(0, 90)}...</Overview>
          </Column>
        </Wrapper>
      </BlurView>
    </View>
  );
};

export default Slide;
