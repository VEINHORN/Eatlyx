import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import { mealsApi } from "./features/meals/mealsApi";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [mealsApi.reducerPath]: mealsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(mealsApi.middleware),
});
