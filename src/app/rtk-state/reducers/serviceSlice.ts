import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface serviceState {
  value: string;
}

const initialState: serviceState = {
  value: "",
};

export const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
    searchServiceByName: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { searchServiceByName} = servicesSlice.actions;

export const selectService = (state: RootState) => state.services.value;

export default servicesSlice.reducer;
