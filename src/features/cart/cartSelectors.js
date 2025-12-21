import { createSelector } from "@reduxjs/toolkit";
import { mealsApi } from "../meals/mealsApi";

export const selectOrderItems = (state) => state.cart.itemsById;

export const selectEnrichedOrderItems = createSelector(
  [selectOrderItems, mealsApi.endpoints.getMeals.select()],
  (itemsById, mealsResult) => {
    const meals = mealsResult?.data ?? [];

    return Object.entries(itemsById).map(([id, quantity]) => {
      const meal = meals.find((m) => m.id === id);
      return {
        id,
        quantity,
        meal,
      };
    });
  }
);
