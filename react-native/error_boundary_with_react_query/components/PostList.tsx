import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { usePosts } from '../hooks/queries/usePosts';

export default function PostList() {
  const { data } = usePosts({ suspense: true });
  console.log(data);

  return (
    <ScrollView>
      {data?.map((item, index) => {
        return (
          <View key={index} style={{ backgroundColor: 'pink' }}>
            <Text>{item.title}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
}
