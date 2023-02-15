import { createSlice } from "@reduxjs/toolkit";

export const CATEGORIES_INITIAL_STATE = {
  categories: [],
  isLoading: false,
  error: null,
};

export const categorySlice = createSlice({
  name: "categories",
  initialState: CATEGORIES_INITIAL_STATE,
  reducers: {
    fetchCategoriesStart: (state) => {
      state.isLoading = true;
      state.error = false;
    },
    fetchCategoriesFailure: (state) => {
      state.isLoading = false;
      state.error = true;
    },
    fetchCategoriesSuccess: (state, action) => {
      state.categories = action.payload;
      state.isLoading = false;
    },
  },
});

export const {
  fetchCategoriesStart,
  fetchCategoriesSuccess,
  fetchCategoriesFailure,
} = categorySlice.actions;
export const CategoryReducer = categorySlice.reducer;
