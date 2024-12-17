import { baseUrl } from "@/assets/baseUrl";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface otpFormData {
  username: string | undefined,
  preferred_channel: string

}
export interface otpData {
  username: string | undefined,
  code: string

}
export interface BookingState {
  isLoading: boolean;
  error: any;
  bookingStart: string;
  otpReqSuccess: string;
  otpReqData: any[];
  otpVerifySuccess: string;
  otpVerifyData: any[];
  booking: any[];
}

const initialState: BookingState = {
  isLoading: false,
  error: null,
  bookingStart: "",
  otpReqSuccess: "",
  otpReqData: [],
  otpVerifySuccess: "",
  otpVerifyData: [],
  booking: [],
};

export const getOTP = createAsyncThunk("otpReqByEmailOrPhone", async (formData: otpFormData) => {
  const response = await fetch(`${baseUrl}/otp`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Client-Secret": "secret",
    },
    body: JSON.stringify(
      formData,
    ),
  });

  const data = await response.json();
  return data.data;
});

export const submitOTP = createAsyncThunk("otpSubmitForVerify", async (formData: otpData) => {
  const response = await fetch(`${baseUrl}/otp/verify`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Client-Secret": "secret",
    },
    body: JSON.stringify(
      formData,
    ),
  });

  const data = await response.json();
  return data.data;
});

export const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    startBooking: (state, action: PayloadAction<string>) => {
      state.bookingStart = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getOTP.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getOTP.fulfilled, (state, action) => {
      state.isLoading = false;
      state.otpReqSuccess = "success"
      state.otpReqData = [action.payload];
    });
    builder.addCase(getOTP.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(submitOTP.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(submitOTP.fulfilled, (state, action) => {
      state.isLoading = false;
      state.otpVerifySuccess = "success";
      state.otpVerifyData = [action.payload];
      state.bookingStart = "progress"
    });
    builder.addCase(submitOTP.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    
  },
});

export const { startBooking } = bookingSlice.actions;

export default bookingSlice.reducer;
