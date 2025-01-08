import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { baseUrl } from "@/assets/baseUrl";

export interface CustomerFormData {
  user_id: number;
  address_id: number;
  type: number;
  status: number;
  newsletter_subscription: number;
}

export interface CustomerState {
  isLoading: boolean;
  status: string;
  error: string | null;
  customer: any;
}

const initialState: CustomerState = {
  isLoading: false,
  status: "",
  error: null,
  customer: {},
};

// Async thunk for fetching users
export const createCustomer = createAsyncThunk(
  "customer",
  async (formData: CustomerFormData) => {
    const response = await fetch(`${baseUrl}/customers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Client-Secret": "secret",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }

    const data = await response.json();
    return data.data;
  }
);

export const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    resetCustomerState: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createCustomer.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        createCustomer.fulfilled,
        (state, action: PayloadAction<Array<any>>) => {
          state.isLoading = false;
          state.status = "success";
          state.customer = action.payload;
        }
      )
      .addCase(createCustomer.rejected, (state, action) => {
        state.isLoading = false;
        state.status = "failed";
        state.error = action.error.message || "Unknown error occurred";
      });
  },
});

export const { resetCustomerState } = customerSlice.actions;
// Selector
export const selectCustomer = (state: RootState) => state.customer;

// Reducer export
export default customerSlice.reducer;
