import React, { ReactNode } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Title from './Title';
import Vertical from './Vertical';

type HorizontalSliderProps = {
  title: string;
  children: ReactNode;
};

export default ({ title, children }: HorizontalSliderProps) => {
  return (
    <View>
      <Title title={title} />
      <ScrollView
        style={{ marginTop: 20, marginBottom: 40 }}
        contentContainerStyle={{ paddingLeft: 30 }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {children}
      </ScrollView>
    </View>
  );
};
