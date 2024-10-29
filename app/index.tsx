import {
    View,
    Text,
    Image,
    TouchableOpacity,
    TextInput,
    ScrollView,
  } from "react-native";
  import React, { useEffect, useState } from "react";
  import Feather from "@expo/vector-icons/Feather";
  import { StatusBar } from "expo-status-bar";
  import Categories from "@/components/Categories";
  import FeaturedRow from "@/components/FeaturedRow";
  import { SafeAreaView } from "react-native-safe-area-context";
  import { sanityClient } from "@/studio/sanityClient";
  
  interface Restaurant {
    id: string;
    imgUrl: string;
    title: string;
    rating: number;
    genre: string;
    address: string;
    short_description: string;
    dishes: string;
    long: string;
    lat: string;
  }
  
  interface FeatureProps {
    id: string;
    name: string;
    short_description: string;
    restaurants: Restaurant[]; 
  }
  
  const Home = () => {
    const [featuredRows, setFeaturedRows] = useState<FeatureProps[]>([]);
  
    useEffect(() => {
      const fetchFeaturedRows = async () => {
        try {
          const data = await sanityClient.fetch(
            `*[_type == "featuredMenuCategories"]{
              _id,
              name,
              short_description,
              "restaurants": restaurant[]->{
                _id,
                name,
                "imgUrl": image.asset->url,
                short_description,
                rating,
                "genre": type->name,
                address,
                "dishes": dishes[]->{
        _id,
        name,
        description,
        price,
        "image": image.asset->url
      },
                "long": longitude,
                "lat": latitude
              }
            }`
          );
  
          const transformedData = data.map((row: any) => ({
            id: row._id,
            name: row.name,
            short_description: row.short_description,
            restaurants: row.restaurants.map((restaurant: any) => ({
              id: restaurant._id,
              imgUrl: restaurant.imgUrl,
              title: restaurant.name,
              rating: restaurant.rating,
              genre: restaurant.genre,
              address: restaurant.address,
              short_description: restaurant.short_description,
              dishes: restaurant.dishes,
              long: restaurant.long,
              lat: restaurant.lat,
            })),
          }));
  
          setFeaturedRows(transformedData);
        } catch (error) {
          console.error("Error fetching featured rows:", error);
        }
      };
  
      fetchFeaturedRows();
    }, []);
  
    return (
      <SafeAreaView className="bg-white pt-5">
        <StatusBar style="auto" />
  
        <View className="flex-row pb-3 mx-4 space-x-2 items-center gap-2">
          <Image
            source={{ uri: "https://links.papareact.com/wru" }}
            className="h-14 w-14 bg-gray-300 p-4 rounded-full object-cover"
          />
  
          <View className="flex-1">
            <Text className="font-bold text-gray-400 text-sm">Deliver Now?</Text>
            <TouchableOpacity>
              <Text className="font-bold text-xl">
                Current Location
                <Feather name="chevron-down" size={20} color="#00CCBB" />
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Feather name="user" size={35} color="#00CCBB" />
          </TouchableOpacity>
        </View>
  
        <View className="flex-row items-center space-x-2 mx-4 mb-4">
          <View className="flex-row items-center gap-2 space-x-2 bg-gray-200 p-3 flex-1">
            <Feather name="search" size={20} color="gray" />
            <TextInput
              placeholder="Restaurants and cuisines"
              keyboardType="default"
            />
          </View>
          <TouchableOpacity>
            <Feather name="filter" size={24} color="#00CCBB" />
          </TouchableOpacity>
        </View>
  
        <ScrollView>
          <Categories />
          {featuredRows.map((row) => (
            <FeaturedRow
              key={row.id}
              id={row.id}
              title={row.name}
              description={row.short_description}
              restaurants={row.restaurants}
            />
          ))}
          <View className="pb-36" />
        </ScrollView>
      </SafeAreaView>
    );
  };
  
  export default Home;

  