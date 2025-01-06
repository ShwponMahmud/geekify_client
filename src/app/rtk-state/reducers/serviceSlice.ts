import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface serviceState {
  value: string;
  serviceList: any;
}

const initialState: serviceState = {
  value: "",
  serviceList: {}
};

export const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
    searchServiceByName: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    serviceLists: (state, action: PayloadAction<any>) => {
      state.serviceList = action.payload;
    },
  },
});

export const { searchServiceByName, serviceLists} = servicesSlice.actions;

export const selectService = (state: RootState) => state.services.value;

export default servicesSlice.reducer;
