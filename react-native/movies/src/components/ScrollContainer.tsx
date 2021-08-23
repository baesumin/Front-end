import React, { ReactNode } from 'react';
import { useState } from 'react';
import { View, Text, ScrollView, ActivityIndicator, RefreshControl } from 'react-native';

type ScrollContainerProps = {
  loading: boolean;
  children: ReactNode;
  contentContainerStyle: object;
  refreshFn: () => void;
};

export default ({
  refreshFn,
  loading,
  children,
  contentContainerStyle
}: ScrollContainerProps) => {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = async () => {
    setRefreshing(true);
    await refreshFn();
    setRefreshing(false);
  };
  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          onRefresh={onRefresh}
          refreshing={refreshing}
          tintColor={'white'}
        />
      }
      style={{ backgroundColor: 'black' }}
      contentContainerStyle={{
        flex: loading ? 1 : 0,
        justifyContent: loading ? 'center' : 'flex-start',
        ...contentContainerStyle
      }}
    >
      {loading ? <ActivityIndicator color="white" /> : children}
    </ScrollView>
  );
};
