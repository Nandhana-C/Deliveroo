import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Image, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import Categories from '@/components/Categories';
import FeaturedRow from '@/components/FeaturedRow';

// const img = require('../../assets/images/rider.jpeg');

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
      <StatusBar style="auto" />
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image 
            source={{
                uri: "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
                
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"

        />
        <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
            <Text className="font-bold text-xl">Current Location
            <Entypo name="chevron-down" size={20} color="#00CCBB" />
            </Text>

        </View>
        <AntDesign name="user" size={35} color="#00CCBB" />
      </View>

      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
            <AntDesign name="search1" size={20} color="gray" />
            <TextInput 
              placeholder="Restaurant and Cuisines"
              keyboardType="default"
            />
        </View>
      <AntDesign name="filter" size={24} color="#00CCBB" />
      </View>
      <ScrollView 
        className="bg-gray-100"
        contentContainerStyle={{
            paddingBottom: 100,
        }}>
        <Categories/>
        <FeaturedRow
            title="Featured"
            description="Paid placements from our partners"
            id="123"
        />
        <FeaturedRow
            title="Tasty Discounts"
            description="Everyone's been enjoying juicy discounts!"
            id="1234"
        /> 
        <FeaturedRow
            title="Offers near you!"
            description="why not support your local restaurant tonight!"
            id="12345"
        />    
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;