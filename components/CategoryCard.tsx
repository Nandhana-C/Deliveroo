import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react';

interface CategoryProps {
  imgUrl:string;
  title:string;
}

const CategoryCard = ({imgUrl,title}:CategoryProps) => {
  return (
    <TouchableOpacity style={{ position: "relative",marginRight:8}} className="relative">
      <Image
        style={{ width: 100, height: 100, borderRadius: 4 }}
        source={{ uri: imgUrl }}
        className="h-20 w-20 rounded"
      />
      <Text
        style={{ position: "absolute", bottom: 4, left: 4, color: "white" }}
        className="font-bold"
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export default CategoryCard