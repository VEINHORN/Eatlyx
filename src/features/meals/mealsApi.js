import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const mealsApi = createApi({
  reducerPath: "mealsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/",
  }),
  endpoints: (builder) => ({
    getMeals: builder.query({
      query: () => "meals",
    }),
  }),
});

export const { useGetMealsQuery } = mealsApi;
