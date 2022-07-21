import {View, Text, Button} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../navigation/Root';
import MediumButton from '../components/MediumButton';

type HomeScreenProp = NativeStackNavigationProp<RootStackParams, 'Stacks'>;

const Home = () => {
  const navigation = useNavigation<HomeScreenProp>();
  const onDetailClick = () => {
    navigation.navigate('Stacks', {
      screen: 'Detail',
    });
  };

  return (
    <View>
      <Text>Home</Text>
      <Button title="detail" onPress={onDetailClick} />
      <MediumButton onPress={() => console.log('MediumButton Clicked')} />
    </View>
  );
};

export default Home;
