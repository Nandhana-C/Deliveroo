import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';
import { RootState } from './store';


interface Dish {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface Restaurant {
  id: string | null;
  imgUrl: string | null;
  title: string | null;
  rating: number | null;
  genre: string | null;
  address: string | null;
  short_description: string | null;
  dishes: Dish[] | null;
  long: string | null;
  lat: string | null;
}

interface RestaurantState {
  restaurant: Restaurant;
}

const initialState: RestaurantState = {
  restaurant: {
    id: null,
    imgUrl: null,
    title: null,
    rating: null,
    genre: null,
    address: null,
    short_description: null,
    dishes: null,
    long: null,
    lat: null,
  },
};

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    setRestaurant: (state, action: PayloadAction<Restaurant>) => {
      state.restaurant = action.payload;
    },
  },
});

export const { setRestaurant } = restaurantSlice.actions;

export const selectRestaurant = createSelector(
  (state: RootState) => state.restaurant.restaurant,
  (restaurant) => restaurant
);

export default restaurantSlice.reducer;
