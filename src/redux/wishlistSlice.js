
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  wishlist: [],
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const { id, color, size, quantity, price } = action.payload;
      const existing = state.wishlist.find(
        item => item.id === id && item.color === color && item.size === size
      );

      if (!existing) {
        state.wishlist.push({
          ...action.payload,
          totalPrice: price * quantity,
        });
      }
    },
    removeFromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter(item => item.id !== action.payload);
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
