import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoryCard from './CategoryCard';
import { sanityClient, urlFor } from '@/studio/sanityClient';

const Categories = () => {
    interface Category {
      _id: string;
      name: string;
      image: string;
    }
    
    const [categories, setCategories] = useState<Category[]>([]);


    useEffect(() => {
      const fetchCategories = async () => {
        try {
          const data = await sanityClient.fetch(
            `*[_type == "menuCategory"]{
            _id,
            name,
            image
          }`
          );

          setCategories(data);
        } catch (error) {
          console.error("Error fetching categories:", error);
        }
      };

      fetchCategories();
    }, []);


  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 16,
        padding: 12,
      }}
    >
      {categories.map((category) => (
        <CategoryCard
          key={category._id}
          imgUrl={urlFor(category.image).url()}
          title={category.name}
        />
      ))}
    </ScrollView>
  );
}

export default Categories