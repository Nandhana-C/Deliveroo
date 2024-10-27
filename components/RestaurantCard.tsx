import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';

interface CardProps{
    id: number;
    imgUrl: string;
    title: string;
    rating: number;
    genre: string;
    address: string;
    short_description: string;
    dishes: unknown;
    long: number;
    lat: number;
}

const RestaurantCard = ({id, imgUrl, title, rating, genre, address, short_description, dishes, long, lat}:CardProps) => {
  return (
    <TouchableOpacity className="bg-white mr-3 shadow">
        <Image
          source={{
            uri:"https://fusedbyfionauyema.com/wp-content/uploads/2021/02/Fused-by-Fiona-Uyema-Sushi-Q-A-how-to-make-sushi-at-home.jpg"
            
          }}
          style={{ width: 256, height: 144, borderRadius: 4 }}
          className="h-36 w-64 rounded-sm"
          />

          <View className="px-3 pb-4">
            <Text className="font-bold text-lg pt-2">{title}</Text>
            <View className="flex-row items-center space-x-1">
            <AntDesign name="staro" size={22} color="green" opacity={0.5} />
            <Text className="text-xs text-gray-500">
                <Text className="text-green-500">{rating}</Text> . {genre}
            </Text>
            </View>

            <View className="flex-row items-center space-x-1">
            <Feather name="map-pin" size={22} color="gray" opacity={0.4} />
            <Text className='text-xs text-gray-500'>Nearby . {address}</Text>
            </View>
          </View>
    </TouchableOpacity>
  )
}

export default RestaurantCard