import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalItems: 0,
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      
      if (!existingItem) {
        state.items.push(newItem);
        state.totalItems += 1;
      }
    },
    
    removeFromWishlist: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      
      if (existingItem) {
        state.items = state.items.filter(item => item.id !== id);
        state.totalItems -= 1;
      }
    },
    
    toggleWishlist: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      
      if (existingItem) {
        state.items = state.items.filter(item => item.id !== newItem.id);
        state.totalItems -= 1;
      } else {
        state.items.push(newItem);
        state.totalItems += 1;
      }
    },
    
    clearWishlist: (state) => {
      state.items = [];
      state.totalItems = 0;
    },
  },
});

export const { 
  addToWishlist, 
  removeFromWishlist, 
  toggleWishlist, 
  clearWishlist 
} = wishlistSlice.actions;

export default wishlistSlice.reducer;

