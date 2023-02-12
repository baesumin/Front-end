import { StyleSheet, ScrollView } from 'react-native';
import Loading from '../components/Loading';
import PostList from '../components/PostList';
import { View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import React, { Suspense } from 'react';
import { ApiErrorBoundary } from '../components/ApiErrorBoundary';
import { Button } from 'react-native';
import { useAddPostMutation } from '../hooks/queries/useAddPostMutation';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const { mutate: addPost } = useAddPostMutation();

  const onPress = async () => {
    addPost({ title: 'hahaasd13', author: 'bsmasd13' });
  };

  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: 'lightgrey', height: 300, width: 300, flex: 1 }}>
        {/* <ApiErrorBoundary> */}
        <Suspense fallback={<Loading />}>
          <PostList />
        </Suspense>
        {/* </ApiErrorBoundary> */}
      </View>
      <Button title="추가" onPress={onPress} />
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
