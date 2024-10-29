import { selectRestaurant } from '@/features/restaurantSlice';
import { RootState } from '@/features/store';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Progress from 'react-native-progress';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';


const DeliveryScreen: React.FC = () => {
  const router = useRouter();
  const restaurant = useSelector((state: RootState) => selectRestaurant(state));
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.push('/')}>
            <Ionicons name="close" size={30} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.orderHelpText}>Order Help</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.infoCard}>
          <View style={styles.infoRow}>
            <View>
              <Text style={styles.estimatedArrivalText}>Estimated Arrival</Text>
              <Text style={styles.estimatedTime}>45-55 Minutes</Text>
            </View>
            <Image source={require('../assets/images/bicycle.gif')} style={styles.bicycleImage} />
          </View>
          <Progress.Bar indeterminate color="#00CCBB" />
          <Text style={styles.orderStatusText}>
            Your order at {restaurant?.title} is being prepared
          </Text>
        </View>
      </SafeAreaView>

      <MapView
        initialRegion={{
          latitude: restaurant?.lat || 0,
          longitude: restaurant?.long || 0,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        style={styles.map}
        mapType="mutedStandard"
      >
        {restaurant && (
          <Marker
            coordinate={{
              latitude: restaurant.lat,
              longitude: restaurant.long,
            }}
            title={restaurant.title}
            description={restaurant.short_description}
            identifier="origin"
            pinColor="#00CCBB"
          />
        )}
      </MapView>

      <View style={[styles.riderInfo, { paddingBottom: insets.bottom }]}>
        <Image
          source={require('../assets/images/rider.jpg')}
          style={styles.riderImage}
        />
        <View style={styles.riderDetails}>
          <Text style={styles.riderName}>Nandhana</Text>
          <Text style={styles.riderRole}>Your delivery partner</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.callText}>Call</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00CCBB',
  },
  safeArea: {
    zIndex: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  orderHelpText: {
    fontSize: 18,
    fontWeight: '300',
    color: 'white',
  },
  infoCard: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginVertical: 8,
    borderRadius: 10,
    padding: 20,
    zIndex: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  estimatedArrivalText: {
    fontSize: 18,
    color: 'gray',
  },
  estimatedTime: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  bicycleImage: {
    height: 80,
    width: 80,
  },
  orderStatusText: {
    marginTop: 12,
    color: 'gray',
  },
  map: {
    flex: 1,
    marginTop: -64,
    zIndex: 0,
  },
  riderInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 112,
    backgroundColor: 'white',
  },
  riderImage: {
    height: 80,
    width: 80,
    backgroundColor: '#d1d5db',
    borderRadius: 40,
    marginLeft: 20,
  },
  riderDetails: {
    flex: 1,
    marginLeft: 20,
  },
  riderName: {
    fontSize: 18,
  },
  riderRole: {
    color: 'gray',
  },
  callText: {
    color: '#00CCBB',
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 20,
  },
});

export default DeliveryScreen;
