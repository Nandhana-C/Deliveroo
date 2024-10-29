import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { NumericFormat } from 'react-number-format';
import { addToBasket, removeFromBasket, selectBasketItemsWithId } from '../features/basketSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/features/store';
import { urlFor } from '@/studio/sanityClient';
import BasketIcon from './BasketIcon';

interface DishRowProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

const DishRow: React.FC<DishRowProps> = ({ id, name, description, price, image }) => {
  const [isPressed, setIsPressed] = useState<boolean>(false);
  const dispatch = useDispatch();

  const items = useSelector((state: RootState) => selectBasketItemsWithId(id)(state));

  const addItemToBasket = () => {
    dispatch(addToBasket({ id, name, description, price, image }));
  };

  const removeItemFromBasket = () => {
    if (items.length <= 0) return;
    dispatch(removeFromBasket(id));
  };

  return (
    <>
      <BasketIcon />
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        style={[styles.rowContainer, isPressed && styles.rowContainerPressed]}
      >
        <View style={styles.textContainer}>
          <Text style={styles.dishName}>{name}</Text>
          <Text style={styles.dishDescription}>{description}</Text>
          <NumericFormat
            value={price}
            decimalScale={2}
            fixedDecimalScale
            thousandSeparator
            prefix="₹"
            displayType="text"
            renderText={(value: string) => <Text style={styles.dishPrice}>{value}</Text>}
          />
        </View>

        <Image
          source={{ uri: urlFor(image).url() }}
          style={styles.dishImage}
        />
      </TouchableOpacity>

      {isPressed && (
        <View style={styles.actionsContainer}>
          <View style={styles.actionRow}>
            <TouchableOpacity disabled={!items.length} onPress={removeItemFromBasket}>
              <Ionicons
                name="remove-circle"
                size={40}
                color={items.length > 0 ? '#00CCBB' : 'gray'}
              />
            </TouchableOpacity>
            <Text style={styles.itemCount}>{items.length}</Text>
            <TouchableOpacity onPress={addItemToBasket}>
              <Ionicons name="add-circle" size={40} color="#00CCBB" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    padding: 16,
    flexDirection: 'row',
  },
  rowContainerPressed: {
    borderBottomWidth: 0,
  },
  textContainer: {
    flex: 1,
    paddingRight: 8,
  },
  dishName: {
    fontSize: 18,
    marginBottom: 4,
  },
  dishDescription: {
    color: 'gray',
  },
  dishPrice: {
    color: 'gray',
    marginTop: 8,
  },
  dishImage: {
    height: 80,
    width: 80,
    backgroundColor: '#d1d5db',
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  actionsContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
  },
  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 12,
    gap: 8,
  },
  itemCount: {
    fontSize: 18,
    marginHorizontal: 8,
  },
});

export default DishRow;
