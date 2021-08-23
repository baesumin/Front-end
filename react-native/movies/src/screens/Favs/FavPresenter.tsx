import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { Animated, PanResponder } from 'react-native';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { apiImage } from '../../apis/api';

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

const Container = styled.View`
  padding-top: 60px;
  flex: 1;
  background-color: black;
  align-items: center;
`;
const Card = styled(Animated.View)`
  top: 80px;
  height: ${HEIGHT / 1.5}px;
  width: 90%;
  position: absolute;
`;
const Poster = styled.Image`
  border-radius: 20px;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

export default ({ results }) => {
  const [topIndex, setTopIndex] = useState(0);
  const position = useRef(new Animated.ValueXY()).current;
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, { dx, dy }) => {
      position.setValue({ x: dx, y: dy });
    },
    onPanResponderRelease: () => {
      Animated.spring(position, {
        toValue: {
          x: 0,
          y: 0
        },
        useNativeDriver: true,
        bounciness: 20
      }).start();
    }
  });
  const rotationValues = position.x.interpolate({
    inputRange: [-255, 0, 255],
    outputRange: ['-8deg', '0deg', '8deg'],
    extrapolate: 'clamp'
  });
  const secondCardOpacity = position.x.interpolate({
    inputRange: [-255, 0, 255],
    outputRange: [1, 0.2, 0.9],
    extrapolate: 'clamp'
  });
  const secondCardScale = position.x.interpolate({
    inputRange: [-255, 0, 255],
    outputRange: [1, 0.8, 1],
    extrapolate: 'clamp'
  });
  return (
    <Container>
      {results.map((result, index) => {
        if (index === topIndex) {
          return (
            <Card
              style={{
                zIndex: 1,
                transform: [
                  { rotate: rotationValues },
                  ...position.getTranslateTransform()
                ]
              }}
              key={result.id}
              {...panResponder.panHandlers}
            >
              <Poster source={{ uri: apiImage(result.poster_path) }} />
            </Card>
          );
        } else if (index === topIndex + 1) {
          return (
            <Card
              style={{
                zIndex: -index,
                opacity: secondCardOpacity,
                transform: [{ scale: secondCardScale }]
              }}
              key={result.id}
              {...panResponder.panHandlers}
            >
              <Poster source={{ uri: apiImage(result.poster_path) }} />
            </Card>
          );
        } else {
          return (
            <Card
              style={{ zIndex: -index, opacity: 0 }}
              key={result.id}
              {...panResponder.panHandlers}
            >
              <Poster source={{ uri: apiImage(result.poster_path) }} />
            </Card>
          );
        }
      })}
    </Container>
  );
};
