import { createSlice, createSelector, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

interface BasketItem {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

interface BasketState {
  items: BasketItem[];
}

const initialState: BasketState = { items: [] };

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action: PayloadAction<BasketItem>) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action: PayloadAction<string>) => {
      const index = state.items.findIndex((item) => item.id === action.payload);
      if (index >= 0) {
        state.items.splice(index, 1);
      } else {
        console.warn(`Can't remove product (id: ${action.payload}) as it's not in basket!`);
      }
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

export const selectAllBasketItems = (state: RootState) => state.basket.items;

export const selectBasketItemsWithId = (id: string) => (state: RootState) =>
  state.basket.items.filter((item) => item.id === id);

export const selectBasketTotal = createSelector(selectAllBasketItems, (items) =>
  items.reduce((total, item) => (total += item.price), 0)
);

export default basketSlice.reducer;
