import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { baseUrl } from "@/assets/baseUrl";

export interface UserInfoFormData {
  first_name: string;
  last_name: string;
  phone_number: string;
  email: string;
}

// export interface userData {
//   id: number;
//   first_name: string;
//   last_name: string;
//   full_name: string;
//   email: string;
//   phone_number: null;
//   date_of_birth: string;
//   avatar: string;
//   thumbnail: string;
//   customer: null;
//   orders: [];
// }

export interface UserInfoState {
  isLoading: boolean;
  status: string;
  error: string | null;
  userInfo: any;
}

const initialState: UserInfoState = {
  isLoading: false,
  status: "",
  error: null,
  userInfo: {},
};

// Async thunk for fetching users info submit
export const SubmitUserInfo = createAsyncThunk(
  "userInfoSubmit",
  async (formData: UserInfoFormData) => {
    const response = await fetch(`${baseUrl}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Client-Secret": "secret",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Failed to submit users info");
    }

    const data = await response.json();
    return data.data;
  }
);

export const userInfoSubmitSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(SubmitUserInfo.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        SubmitUserInfo.fulfilled,
        (state, action: PayloadAction<Array<any>>) => {
          state.isLoading = false;
          state.status = "success";
          state.userInfo = action.payload;
        }
      )
      .addCase(SubmitUserInfo.rejected, (state, action) => {
        state.isLoading = false;
        state.status = "failed";
        state.error = action.error.message || "Unknown error occurred";
      });
  },
});

// Selector
export const selectUsers = (state: RootState) => state.userInfoAfterSubmit;

// Reducer export
export default userInfoSubmitSlice.reducer;
