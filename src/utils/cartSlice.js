/** @format */

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "card",
  initialState: {
    items: ["burger", "pizza"],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      sate.item.pop();
    },
    clearCart: (state) => {
      state.item.length = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
