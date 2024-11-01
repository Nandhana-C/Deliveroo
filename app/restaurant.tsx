import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import DishRow from "@/components/DishRow";
import { useDispatch } from "react-redux";
import { setRestaurant } from "@/features/restaurantSlice";
interface Dish {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface RestaurantParams {
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

const Restaurant = () => {

  const params = useLocalSearchParams();

  const {
    id = "",
    imgUrl = "",
    title = "",
    rating = 0,
    genre = "",
    address = "",
    short_description = "",
    dishes: dishesString = "[]",
    long = "",
    lat = "",

  } = params as Partial<RestaurantParams>;
  const dishes: Dish[] = JSON.parse(dishesString);
  console.log(dishes);
  const router = useRouter();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setRestaurant({
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        short_description,
        dishes,
        long,
        lat,
      })
    );
  }, [dispatch]);

  return (
    <>
      <ScrollView>
        <View>
          <Image
            source={{ uri: imgUrl }}
            className="h-56 w-full bg-gray-300 p-4"
          />
          <TouchableOpacity
            onPress={() => router.back()}
            className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
          >
            <Ionicons name="arrow-back-outline" size={20} color="#00CCBB" />
          </TouchableOpacity>
        </View>

        <View className="bg-white">
          <View className="px-4 pt-4">
            <Text className="text-3xl font-bold">{title}</Text>

            <View className="flex-row space-x-2 my-1">
              <View className="flex-row items-center space-x-1">
                <Ionicons name="star" size={22} color="green" opacity={0.5} />
                <Text className="text-gray-500 text-xs">
                  <Text className="text-green-500">{rating}</Text> · {genre}
                </Text>
              </View>

              <View className="flex-row items-center space-x-1">
                <Ionicons
                  name="location-sharp"
                  size={22}
                  color="gray"
                  opacity={0.4}
                />
                <Text className="text-xs text-gray-500">
                  {" "}
                  Nearby · {address}
                </Text>
              </View>
            </View>

            <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
          </View>

          <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
            <Ionicons
              name="help-circle-outline"
              size={20}
              opacity={0.6}
              color="gray"
            />
            <Text className="pl-2 flex-1 text-md font-bold">
              Have a food allergy?
            </Text>
            <Ionicons name="chevron-forward" size={20} color="#00CCBB" />
          </TouchableOpacity>
        </View>

        <View className="pb-36">
          <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>
          {dishes.map((dish) => (
            <DishRow
              key={dish._id}
              id={dish._id}
              name={dish.name}
              description={dish.description}
              price={dish.price}
              image={dish.image}
            />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default Restaurant;
