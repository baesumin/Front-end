import React, { ReactElement, useState, useEffect } from 'react';
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
  isTerminal,
  getBestMove,
  Cell,
  useSounds
} from '@utils';

export default function Game(): ReactElement {
  // prettier-ignore
  const [state, setState] = useState<BoardState>([
    null, null, null,
    null, null, null,
    null, null, null,
  ])
  const [turn, setTurn] = useState<'HUMAN' | 'BOT'>(
    Math.random() < 0.5 ? 'HUMAN' : 'BOT'
  );
  const [isHumanMaximizing, setIsHumanMaximizing] = useState<boolean>(true);
  const placySound = useSounds();

  const gameResult = isTerminal(state);
  // console.log('getBestMove', getBestMove(state, true));

  const insertCell = (cell: number, symbol: 'x' | 'o'): void => {
    const stateCopy: BoardState = [...state];
    if (stateCopy[cell] || isTerminal(stateCopy)) return;
    stateCopy[cell] = symbol;
    setState(stateCopy);
    try {
      symbol === 'x' ? placySound('pop1') : placySound('pop2');
    } catch (error) {
      console.log(error);
    }
  };

  const handleOnCellPressed = (cell: number): void => {
    if (turn !== 'HUMAN') return;
    insertCell(cell, isHumanMaximizing ? 'x' : 'o');
    setTurn('BOT');
  };

  const getWinner = (winnerSymbol: Cell): 'HUMAN' | 'BOT' | 'DRAW' => {
    if (winnerSymbol === 'x') {
      return isHumanMaximizing ? 'HUMAN' : 'BOT';
    }
    if (winnerSymbol === 'o') {
      return isHumanMaximizing ? 'BOT' : 'HUMAN';
    }
    return 'DRAW';
  };

  useEffect(() => {
    if (gameResult) {
      // handle game finished
      const winner = getWinner(gameResult.winner);
      if (winner === 'HUMAN') {
        placySound('win');
        alert('You Won');
      }
      if (winner === 'BOT') {
        placySound('loss');
        alert('You Lost');
      }
      if (winner === 'DRAW') {
        placySound('draw');
        alert('Draw');
      }
    } else {
      if (turn === 'BOT') {
        if (isEmpty(state)) {
          const centerAndCorners = [0, 2, 6, 8, 4];
          const firstMove =
            centerAndCorners[Math.floor(Math.random() * centerAndCorners.length)];
          insertCell(firstMove, 'x');
          setIsHumanMaximizing(false);
          setTurn('HUMAN');
        } else {
          const best = getBestMove(state, !isHumanMaximizing, 0, -1);
          insertCell(best, isHumanMaximizing ? 'o' : 'x');
          setTurn('HUMAN');
        }
      }
    }
  }, [state, turn]);

  return (
    <GradientBackground>
      <SafeAreaView style={styles.container}>
        <Board
          disabled={Boolean(isTerminal(state)) || turn === 'BOT'}
          onCellPressed={(index) => {
            handleOnCellPressed(index);
          }}
          state={state}
          gameResult={gameResult}
          size={300}
        />
      </SafeAreaView>
    </GradientBackground>
  );
}
