import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
<ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        padding: 10,
      }}
    >
        <CategoryCard imgUrl="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" 
        title= "Testing 1"
        />
        <CategoryCard imgUrl="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" 
        title= "Testing 2"
        />
        <CategoryCard imgUrl="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" 
        title= "Testing 3"
        />
        <CategoryCard imgUrl="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" 
        title= "Testing 4"
        />
        <CategoryCard imgUrl="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" 
        title= "Testing 5"
        />
        <CategoryCard imgUrl="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" 
        title= "Testing 6 "
        />

    </ScrollView>
  )
}

export default Categories