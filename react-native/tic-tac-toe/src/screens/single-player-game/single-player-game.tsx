import React from 'react';
import { View, Text } from 'react-native';

import { GradientBackground } from '@components';
import styles from './single-player-game.styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ReactElement } from 'react';

export default function Game(): ReactElement {
  return (
    <GradientBackground>
      <SafeAreaView style={styles.container}>
        <Text style={{ color: '#fff' }}>Game</Text>
      </SafeAreaView>
    </GradientBackground>
  );
}
