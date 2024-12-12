import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { baseUrl } from "@/assets/baseUrl";



export interface ContactsFormData {
  user_id: number;
  address_id: number;
  request_for: string;
  date_time: string;
  message: string;
  // g_recaptcha_response: string;
}

export interface ContactsState {
  isLoading: boolean;
  status: string;
  error: string | null;
  contacts: any[];
}

const initialState: ContactsState = {
  isLoading: false,
  status: "",
  error: null,
  contacts: [],
};


// Async thunk for fetching address info submit
export const SubmitContactsInfo = createAsyncThunk(
  "contactInfoSubmit",
  async (formData: ContactsFormData) => {
    const response = await fetch(`${baseUrl}/contacts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Client-Secret": "secret",
      },
      body: JSON.stringify(
        formData,
      ),
    });

    if (!response.ok) {
      throw new Error("Failed to submit contacts info");
    }

    return response.json();
  }
);


export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(SubmitContactsInfo.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        SubmitContactsInfo.fulfilled,
        (state, action: PayloadAction<Array<any>>) => {
          state.isLoading = false;
          state.status = "success";
          state.contacts = action.payload;
        }
      )
      .addCase(SubmitContactsInfo.rejected, (state, action) => {
        state.isLoading = false;
        state.status = "failed";
        state.error = action.error.message || "Unknown error occurred";
      })
  },
});

// Selector
export const selectContacts = (state: RootState) => state.contacts;

// Reducer export
export default contactsSlice.reducer;
