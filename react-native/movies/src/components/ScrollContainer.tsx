import React, { ReactNode } from 'react';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';

type ScrollContainerProps = {
  loading: boolean;
  children: ReactNode;
};

export default ({ loading, children }: ScrollContainerProps) => {
  return (
    <ScrollView
      style={{ backgroundColor: 'black' }}
      contentContainerStyle={{
        flex: loading ? 1 : 0,
        justifyContent: loading ? 'center' : 'flex-start'
      }}
    >
      {loading ? <ActivityIndicator color="white" /> : children}
    </ScrollView>
  );
};
