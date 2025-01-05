import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { baseUrl } from "@/assets/baseUrl";

export interface SettingState {
  isLoading: boolean;
  status: string;
  error: string | null;
  settings: any;
}

const initialState: SettingState = {
  isLoading: false,
  status: "",
  error: null,
  settings: {},
};

// Async thunk for fetching get settings
export const GetSettings = createAsyncThunk("getSettings", async () => {
  const response = await fetch(
    `${baseUrl}/settings?type[]=appointment&type[]=payment&type[]=contact&type[]=default&key[]=appointment_timebase_surcharge&key[]=appointment_same_day_surcharge&key[]=payment_code_prefix&key[]=order_status&key[]=default_contact_number&key[]=default_pagination&key[]=contact_request_for_list&key[]=default_company_address&key[]=appointment_reference_prefix&key[]=default_sms_template_list&key[]=appointment_status&key[]=default_state&key[]=appointment_online_appointment_without_payment_status`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Client-Secret": "secret",
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  const data = await response.json();
  return data?.data;
});

export const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetSettings.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(GetSettings.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.status = "success";
        state.settings = action.payload;
      })
      .addCase(GetSettings.rejected, (state, action) => {
        state.isLoading = false;
        state.status = "failed";
        state.error = action.error.message || "Unknown error occurred";
      });
  },
});

// Selector
export const selectSettings = (state: RootState) => state.settings;

// Reducer export
export default settingSlice.reducer;
