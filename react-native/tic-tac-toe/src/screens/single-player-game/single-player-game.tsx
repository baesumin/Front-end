import React, { ReactElement } from 'react';
import { View, Text } from 'react-native';

import { GradientBackground } from '@components';
import styles from './single-player-game.styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Board } from '@components';
import { printFormattedBoard, BoardState } from '@utils';

export default function Game(): ReactElement {
  const b: BoardState = ['x', 'o', null, 'x', 'o', null, 'x', 'o', null];
  printFormattedBoard(b);
  return (
    <GradientBackground>
      <SafeAreaView style={styles.container}>
        <Board
          onCellPressed={(index) => {
            alert(index);
          }}
          state={b}
          size={300}
        />
      </SafeAreaView>
    </GradientBackground>
  );
}
