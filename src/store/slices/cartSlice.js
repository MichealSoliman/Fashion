import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice += newItem.price;
      } else {
        state.items.push({
          ...newItem,
          quantity: 1,
          totalPrice: newItem.price,
        });
      }

      state.totalQuantity += 1;
      state.totalAmount += newItem.price;
    },

    removeFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);

      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.totalAmount -= existingItem.totalPrice;
        state.items = state.items.filter(item => item.id !== id);
      }
    },

    // حذفت increaseQuantity و decreaseQuantity و استبدلتهم بـ updateQuantity
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find(item => item.id === id);

      if (existingItem) {
        // تحديث الكمية والـ totalPrice بناءً على الكمية الجديدة
        state.totalQuantity = state.totalQuantity - existingItem.quantity + quantity;
        state.totalAmount = state.totalAmount - existingItem.totalPrice + (existingItem.price * quantity);

        if (quantity <= 0) {
          // حذف العنصر إذا الكمية 0 أو أقل
          state.items = state.items.filter(item => item.id !== id);
        } else {
          existingItem.quantity = quantity;
          existingItem.totalPrice = existingItem.price * quantity;
        }
      }
    },

    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
