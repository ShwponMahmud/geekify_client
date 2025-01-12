import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { baseUrl } from "@/assets/baseUrl";

// export interface AddressData {
//   id: number;
//   subpremise: null;
//   street: string;
//   suburb: string;
//   state: string;
//   post_code: string;
//   country: string;
//   user: null;
//   admin: null;
//   employee: null;
//   labUser: null;
//   customer: null;
//   warehouse: null;
//   business: null;
//   vendor: null
// }

export interface AddressFormData {
  user_id: number | any;
  street: string | any;
  suburb: string | any;
  state: string | any;
  post_code: string;
  subpremise: string | any;
  country: string;
}

export interface AddressState {
  isLoading: boolean;
  status: string;
  error: string | null;
  address: any[];
  SubmitAddressInfoStatus: string;
}

const initialState: AddressState = {
  isLoading: false,
  status: "",
  error: null,
  address: [],
  SubmitAddressInfoStatus: "",
};

// Async thunk for fetching address info submit
export const SubmitAddressInfo = createAsyncThunk(
  "addressInfoSubmit",
  async (formData: AddressFormData) => {
    const response = await fetch(`${baseUrl}/addresses`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Client-Secret": "secret",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Failed to submit address info");
    }

    const data = await response.json();
    return data.data;
  }
);

export const addressSlice = createSlice({
  name: "addresses",
  initialState,
  reducers: {
    SubmitAddressInfoStatus: (state, action: PayloadAction<string>) => {
      state.SubmitAddressInfoStatus = action.payload;
    },
    resetAddressState: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(SubmitAddressInfo.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        SubmitAddressInfo.fulfilled,
        (state, action: PayloadAction<Array<any>>) => {
          state.isLoading = false;
          state.status = "success";
          // state.address.push(action.payload)
          state.address = [action.payload];
        }
      )
      .addCase(SubmitAddressInfo.rejected, (state, action) => {
        state.isLoading = false;
        state.status = "failed";
        state.error = action.error.message || "Unknown error occurred";
      });
  },
});

export const { SubmitAddressInfoStatus, resetAddressState } =
  addressSlice.actions;
// Selector
export const selectAddresses = (state: RootState) => state.addresses;

// Reducer export
export default addressSlice.reducer;
