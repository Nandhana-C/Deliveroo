import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

interface RestaurantProps {
    id:string;
    imgUrl:string;
    title:string;
    rating:number;
    genre:string;
    address:string;
    short_description:string;
    dishes:string;
    long:string;
    lat:string;
    }

const RestaurantCard = ({
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    long,
    lat
}:RestaurantProps) => {

  const router = useRouter();
  

  const handlePress = () => {
    router.push({
      pathname: "/restaurant",
      params: {
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        short_description,
        dishes: JSON.stringify(dishes), 
        long,
        lat,
      },
    });
  };

  console.log(dishes)
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{
        backgroundColor: "white",
        marginRight: 12,
        marginBottom: 12,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 2.5,
        elevation: 4,
        borderRadius: 8,
      }}
    >
      <Image
        style={{
          width: 256,
          height: 144,
          borderRadius: 4,
          objectFit: "cover",
        }}
        source={{
          uri: imgUrl,
        }}
      />

      <View
        style={{
          paddingHorizontal: 12,
          paddingBottom: 16,
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 18,
            paddingTop: 8,
          }}
        >
          {title}
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Feather
            name="star"
            size={22}
            color="green"
            style={{ opacity: 0.5 }}
          />

          <Text
            style={{
              fontSize: 12,
              color: "#6b7280",
              marginLeft: 4,
            }}
          >
            <Text style={{ color: "#10b981" }}>{rating}</Text> · {genre}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 4,
          }}
        >
          <Feather
            name="map-pin"
            size={22}
            color="gray"
            style={{ opacity: 0.4 }}
          />

          <Text
            style={{
              fontSize: 12,
              color: "#6b7280",
              marginLeft: 4,
            }}
          >
            Nearby · {address}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default RestaurantCard