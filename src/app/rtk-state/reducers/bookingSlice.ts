import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ServiceState {
  isLoading: boolean,
  error: any,
  services: [],
}

const initialState: ServiceState = {
  isLoading: false,
  error: null,
  services: [],
};


export const getServices = createAsyncThunk("services", async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  return response.json();
});


export const serviceSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getServices.pending, (state) => {
       state.isLoading = true;
       state.error = null;
    });
    builder.addCase(getServices.fulfilled, (state, action) => {
       state.isLoading = false;
       state.services = action.payload; 
    });
    builder.addCase(getServices.rejected, (state, action) => {
       state.isLoading = false;
       state.error = action.error.message; 
    });
  },
});

export const {} = serviceSlice.actions;

export default serviceSlice.reducer;
