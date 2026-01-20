import { createSlice } from "@reduxjs/toolkit";
import type { CartState } from "../../types/cartStateType";

const initialState: CartState = {
  itemsById: {},
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, itemsCount } = action.payload;

      if (state.itemsById[id]) {
        state.itemsById[id] += itemsCount;
      } else {
        state.itemsById[id] = itemsCount;
      }
    },
    removeFromCart: (state, action) => {
      const { id } = action.payload;

      if (state.itemsById[id]) {
        state.itemsById[id] -= 1;

        if (state.itemsById[id] === 0) {
          delete state.itemsById[id];
        }
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
