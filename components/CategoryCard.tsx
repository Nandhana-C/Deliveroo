import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
interface PageProps {
    imgUrl : string;
    title: string;
    }
const CategoryCard = ({imgUrl, title}:PageProps) => {
  return (
    <TouchableOpacity className="relative mr-2">
      <Image source={{ uri: imgUrl }} style={{ width: 256, height: 144, borderRadius: 8 }} className="h-20 w-20 rounded" />
      <Text className="absolute bottom-1 left-1 text-white font-bold">{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard