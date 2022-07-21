import {View, Text, Button} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../navigation/Root';

type DetailScreenProp = NativeStackNavigationProp<RootStackParams, 'Stacks'>;

const Detail = () => {
  const navigation = useNavigation<DetailScreenProp>();
  const onDetailClick = () => {
    navigation.navigate('Stacks', {
      screen: 'OtherDetail',
    });
  };

  return (
    <View>
      <Text>Detail</Text>
      <Button title="OtherDetail" onPress={onDetailClick} />
    </View>
  );
};

export default Detail;
