import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface categoryState {
  value: string;
}

const initialState: categoryState = {
  value: "",
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    pickBlogCategoryBySlug: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    pickBlogCategoryByName: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { pickBlogCategoryBySlug, pickBlogCategoryByName } = categorySlice.actions;

export const selectCategory = (state: RootState) => state.category.value;

export default categorySlice.reducer;
