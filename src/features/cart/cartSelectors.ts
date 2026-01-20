import { createSelector } from "@reduxjs/toolkit";
import { mealsApi } from "../meals/mealsApi";
import type { RootState } from "../../types/rootStateType";
import type { Meal } from "../../types/mealType";

type EnrichedOrderItem = {
  id: string;
  quantity: number;
  meal?: Meal | undefined;
};

export const selectOrderItems = (state: RootState): Record<string, number> =>
  state.cart.itemsById;

export const selectEnrichedOrderItems = createSelector(
  [selectOrderItems, mealsApi.endpoints.getMeals.select(undefined)],
  (itemsById, mealsResult): EnrichedOrderItem[] => {
    const meals: Meal[] = mealsResult?.data ?? [];

    return Object.entries(itemsById).map(([id, quantity]) => {
      const meal = meals.find((m) => m.id === id);
      return {
        id,
        quantity,
        meal,
      };
    });
  },
);
