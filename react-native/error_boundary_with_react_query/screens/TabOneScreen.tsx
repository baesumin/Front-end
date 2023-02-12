import { StyleSheet, ScrollView } from 'react-native';
import Loading from '../components/Loading';
import PostList from '../components/PostList';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import React, { Suspense } from 'react';
import { ApiErrorBoundary } from '../components/ApiErrorBoundary';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  console.log('tabone');

  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: 'lightgrey', height: 300, width: 300, flex: 1 }}>
        {/* <ApiErrorBoundary> */}
        <Suspense fallback={<Loading />}>
          <PostList />
        </Suspense>
        {/* </ApiErrorBoundary> */}
      </View>

      <View style={{ height: 50 }} />
      <View style={{ backgroundColor: 'lightgrey', height: 300, width: 300 }}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%'
  }
});
