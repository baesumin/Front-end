import React, { ReactElement } from 'react';
import { View, Text } from 'react-native';

import { GradientBackground } from '@components';
import styles from './single-player-game.styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Board } from '@components';
import {
  printFormattedBoard,
  isEmpty,
  isFull,
  getAvailableMoves,
  BoardState,
  isTerminal
} from '@utils';
import { useState } from 'react';

export default function Game(): ReactElement {
  // prettier-ignore
  const [state, setState] = useState<BoardState>([
    null, null, null,
    null, null, null,
    null, null, null,
  ])

  const handleOnCellPressed = (cell: number): void => {
    const stateCopy: BoardState = [...state];
    if (stateCopy[cell] || isTerminal(stateCopy)) return;
    stateCopy[cell] = 'x';
    setState(stateCopy);
  };
  return (
    <GradientBackground>
      <SafeAreaView style={styles.container}>
        <Board
          disabled={Boolean(isTerminal(state))}
          onCellPressed={(index) => {
            handleOnCellPressed(index);
          }}
          state={state}
          size={300}
        />
      </SafeAreaView>
    </GradientBackground>
  );
}
