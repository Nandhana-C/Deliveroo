import { View, Text, ScrollView } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import RestaurantCard from "./RestaurantCard";

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
  title: string;
  description: string;
  restaurants: Restaurant[];
}

const FeaturedRow: React.FC<FeatureProps> = ({
  id,
  title,
  description,
  restaurants,
}) => {
  return (
    <View>
      <View
        style={{
          marginTop: 16,
          paddingHorizontal: 16,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        className="mt-4 px-4 flex-row items-center justify-between"
      >
        <Text className="font-bold text-xl">{title}</Text>
        <Feather name="arrow-right" size={24} color="#00CCBB" />
      </View>
      <Text
        style={{ color: "rgb(107 114 128)", paddingHorizontal: 16 }}
        className="text-sm text-gray-500 px-4"
      >
        {description}
      </Text>

      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 16 }}
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 8 }}
      >
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            id={restaurant.id}
            imgUrl={restaurant.imgUrl}
            title={restaurant.title}
            rating={restaurant.rating}
            genre={restaurant.genre}
            address={restaurant.address}
            short_description={restaurant.short_description}
            dishes={restaurant.dishes}
            long={restaurant.long}
            lat={restaurant.lat}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
