import React, { ReactElement } from 'react';
import { View, ScrollView, Image } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { StackNavigatorParams } from '@config/navigator';
import styles from './home.styles';
import { GradientBackground, Button } from '@components';

type HomeProps = {
  navigation: NativeStackNavigationProp<StackNavigatorParams, 'Home'>;
};

export default function Home({ navigation }: HomeProps): ReactElement {
  return (
    <GradientBackground>
      <ScrollView contentContainerStyle={styles.container}>
        <Image style={styles.logo} source={require('@assets/logo.png')} />
        <View style={styles.buttons}>
          <Button
            style={styles.button}
            onPress={() => navigation.navigate('SinglePlayerGame')}
            title="Single Player"
          />
          <Button style={styles.button} onPress={() => alert(true)} title="MultiPlayer" />
          <Button
            style={styles.button}
            onPress={() => alert(true)}
            title="Login Player"
          />
          <Button onPress={() => navigation.navigate('Settings')} title="Settings" />
        </View>
      </ScrollView>
    </GradientBackground>
  );
}
