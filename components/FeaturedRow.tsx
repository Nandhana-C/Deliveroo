import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import RestaurantCard from './RestaurantCard';
interface FeaturedProps{
    title: string;
    description: string;
    id: string;
}
const FeaturedRow = ({title, description, id}:FeaturedProps) => {
  return (
    <View> 
       <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <AntDesign name="arrowright" size={24} color="#00CCBB" />
        </View>
        <Text className="text-xs text-gray-500 px-4">{description}</Text>
        
        <ScrollView
            horizontal
            contentContainerStyle={{
                paddingHorizontal:15,
            }}
            showsHorizontalScrollIndicator={false}
            className="pt-4"
        >
            <RestaurantCard
                id={123}
                imgUrl="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
                 
                title="Yo! Sushi"
                rating={4.5}
                genre="Japanese"
                address="123 Main St"
                short_description="This is a test description"
                dishes={[]}
                long={20}
                lat={0}
                />
            <RestaurantCard
                id={123}
                imgUrl="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
                 
                title="Yo! Sushi"
                rating={4.5}
                genre="Japanese"
                address="123 Main St"
                short_description="This is a test description"
                dishes={[]}
                long={20}
                lat={0}
            />
            <RestaurantCard
                id={123}
                imgUrl="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
                 
                title="Yo! Sushi"
                rating={4.5}
                genre="Japanese"
                address="123 Main St"
                short_description="This is a test description"
                dishes={[]}
                long={20}
                lat={0}
            />
            <RestaurantCard
                id={123}
                imgUrl="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
                 
                title="Yo! Sushi"
                rating={4.5}
                genre="Japanese"
                address="123 Main St"
                short_description="This is a test description"
                dishes={[]}
                long={20}
                lat={0}
            />
            <RestaurantCard
                id={123}
                imgUrl="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
                 
                title="Yo! Sushi"
                rating={4.5}
                genre="Japanese"
                address="123 Main St"
                short_description="This is a test description"
                dishes={[]}
                long={20}
                lat={0}
            />

        </ScrollView>
    </View>
  );
};

export default FeaturedRow