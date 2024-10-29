import { Ionicons } from '@expo/vector-icons';
import React, { useState, useMemo, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Platform,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { NumericFormat } from 'react-number-format';
import { useDispatch, useSelector } from 'react-redux';


import { removeFromBasket, selectAllBasketItems, selectBasketTotal } from '../features/basketSlice';
import { useRouter } from 'expo-router';
import { RootState } from '@/features/store';
import { urlFor } from '@/studio/sanityClient';
import { selectRestaurant } from '@/features/restaurantSlice';


const BasketScreen: React.FC = () => {
  const router = useRouter();
  const restaurant = useSelector((state: RootState) => selectRestaurant(state));
  const items = useSelector((state: RootState) => selectAllBasketItems(state));
  const basketTotal = useSelector((state: RootState) => selectBasketTotal(state));
  const dispatch = useDispatch();
  const [groupedItemsBasket, setGroupedItemsBasket] = useState<Record<string, any[]>>({});

  const groupedItems = useMemo(
    () =>
      items.reduce((results, item) => {
        (results[item.id] = results[item.id] || []).push(item);
        return results;
      }, {} as Record<string, any[]>),
    [items]
  );

  useEffect(() => {
    setGroupedItemsBasket(groupedItems);
  }, [items]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Basket</Text>
          <Text style={styles.headerSubtitle}>{restaurant?.title}</Text>
          <TouchableOpacity
            onPress={() => router.back()}
            style={[styles.closeButton, Platform.select({ android: { paddingTop: StatusBar.currentHeight } })]}
          >
            <Ionicons name="close-circle" size={50} color="#00CCBB" />
          </TouchableOpacity>
        </View>

        <View style={styles.deliveryInfo}>
          <Image source={require('../assets/images/rider.jpg')} style={styles.riderImage} />
          <Text style={styles.deliveryText}>Deliver in 50-75 min</Text>
          <TouchableOpacity>
            <Text style={styles.changeText}>Change</Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.itemsList}>
          {Object.entries(groupedItemsBasket).map(([key, items]) => (
            <View key={key} style={styles.itemRow}>
              <Text style={styles.itemQuantity}>{items.length} x </Text>
              <Image source={{ uri: urlFor(items[0]?.image).url() }} style={styles.itemImage} />
              <Text style={styles.itemName}>{items[0]?.name}</Text>
              <NumericFormat
                value={items[0]?.price}
                thousandSeparator
                decimalScale={2}
                fixedDecimalScale
                prefix="₹"
                displayType="text"
                renderText={(value: string) => <Text style={styles.itemPrice}>{value}</Text>}
              />
              <TouchableOpacity onPress={() => dispatch(removeFromBasket(key))}>
                <Text style={styles.removeText}>Remove</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <View style={styles.summary}>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryText}>Subtotal</Text>
            <NumericFormat
              value={basketTotal}
              thousandSeparator
              decimalScale={2}
              fixedDecimalScale
              prefix="₹"
              displayType="text"
              renderText={(value: string) => <Text style={styles.summaryText}>{value}</Text>}
            />
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryText}>Delivery Fee</Text>
            <NumericFormat
              value={5.99}
              thousandSeparator
              decimalScale={2}
              fixedDecimalScale
              prefix="₹"
              displayType="text"
              renderText={(value: string) => <Text style={styles.summaryText}>{value}</Text>}
            />
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.totalText}>Order Total</Text>
            <NumericFormat
              value={basketTotal + 5.99}
              thousandSeparator
              decimalScale={2}
              fixedDecimalScale
              prefix="₹"
              displayType="text"
              renderText={(value: string) => <Text style={styles.totalAmount}>{value}</Text>}
            />
          </View>

          <TouchableOpacity
            onPress={() => router.push('/preparing-order')}
            style={styles.placeOrderButton}
          >
            <Text style={styles.placeOrderText}>Place Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
  header: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#00CCBB',
    backgroundColor: 'white',
    position: 'relative',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  headerSubtitle: {
    textAlign: 'center',
    color: 'gray',
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  deliveryInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: 'white',
    marginVertical: 20,
  },
  riderImage: {
    height: 56,
    width: 56,
    borderRadius: 28,
    backgroundColor: '#d1d5db',
  },
  deliveryText: {
    flex: 1,
    paddingHorizontal: 10,
  },
  changeText: {
    color: '#00CCBB',
  },
  itemsList: {
    borderTopWidth: 1,
    borderColor: '#e5e7eb',
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    gap: 10,
  },
  itemQuantity: {
    color: '#00CCBB',
  },
  itemImage: {
    height: 48,
    width: 48,
    borderRadius: 24,
    marginRight: 10,
  },
  itemName: {
    flex: 1,
  },
  itemPrice: {
    color: 'gray',
  },
  removeText: {
    color: '#00CCBB',
    fontSize: 12,
    marginLeft:10
  },
  summary: {
    padding: 20,
    backgroundColor: 'white',
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  summaryText: {
    color: 'gray',
  },
  totalText: {
    fontWeight: 'bold',
  },
  totalAmount: {
    fontWeight: 'bold',
  },
  placeOrderButton: {
    backgroundColor: '#00CCBB',
    borderRadius: 8,
    padding: 15,
  },
  placeOrderText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default BasketScreen;
