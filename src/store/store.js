import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import wishlistReducer from './slices/wishlistSlice';
import favoritesReducer from './slices/favoritesSlice';



export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
    favorites: favoritesReducer,
    
  },
});

