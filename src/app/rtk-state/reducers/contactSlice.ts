import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { baseUrl } from "@/assets/baseUrl";

export interface CustomFormData {
  email: string;
}

export interface UserInfoFormData {
  first_name: string;
  last_name: string;
  phone_number: string;
  email: string;
}

export interface userData {
  id: number;
  first_name: string;
  last_name: string;
  full_name: string;
  email: string;
  phone_number: null;
  date_of_birth: string;
  avatar: string;
  thumbnail: string;
  customer: null;
  orders: [];
}

export interface UserState {
  isLoading: boolean;
  status: string;
  error: string | null;
  user: userData[];
  userInfo: userData[];
}

const initialState: UserState = {
  isLoading: false,
  status: "",
  error: null,
  user: [],
  userInfo:[]
};

// Async thunk for fetching users
export const getUser = createAsyncThunk(
  "user/fetchUsers",
  async (formData: CustomFormData) => {
    const response = await fetch(`${baseUrl}/users/find`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Client-Secret": "secret",
      },
      body: JSON.stringify({
        search_query: formData,
        with_relation: ["customer.address", "addresses"],
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }

    return response.json();
  }
);

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
      body: JSON.stringify(
        formData,
      ),
    });

    if (!response.ok) {
      throw new Error("Failed to submit users info");
    }

    return response.json();
  }
);



export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        getUser.fulfilled,
        (state, action: PayloadAction<Array<any>>) => {
          state.isLoading = false;
          state.status = "success";
          state.user = action.payload;
        }
      )
      .addCase(getUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Unknown error occurred";
      })

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
        state.error = action.error.message || "Unknown error occurred";
      })
  },
});

// Selector
export const selectUsers = (state: RootState) => state.users;

// Reducer export
export default userSlice.reducer;
