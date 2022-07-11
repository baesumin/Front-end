import { View, Text, Image, TextInput, ScrollView } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  AdjustmentsIcon,
  ChevronDownIcon,
  SearchIcon,
  UserIcon
} from 'react-native-heroicons/outline';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
      {/* Header */}
      <View className="pb-3 flex-row items-center mx-4 space-x-2">
        <Image
          className="h-7 w-7 bg-gray-300 rounded-full"
          source={{ uri: 'https://links.papareact.com/wru' }}
        />

        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00ccbb" />
          </Text>
        </View>

        <UserIcon size={35} color="#00ccbb" />
      </View>

      {/* Search */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3 items-center">
          <SearchIcon color={'gray'} size={20} />
          <TextInput placeholder="Restautrants and cuisines" keyboardType="default" />
        </View>

        <AdjustmentsIcon color="#00ccbb" />
      </View>

      {/* Body */}
      <ScrollView
        className="bg-gray-100 flex-1"
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* Categories */}
        <Categories />

        {/* Featured Rows*/}
        <FeaturedRow
          title="Featured"
          description="Paid placements from our partners"
          id="123"
        />
        <FeaturedRow
          title="Featured"
          description="Paid placements from our partners"
          id="1234"
        />
        <FeaturedRow
          title="Featured"
          description="Paid placements from our partners"
          id="12345"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
