import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { baseUrl } from "@/assets/baseUrl";

export interface CustomFormData {
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

export interface UserState {
  isLoading: boolean;
  status: string;
  error: string | null;
  user: any[];
}

const initialState: UserState = {
  isLoading: false,
  status: "",
  error: null,
  user: [],
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

    const data = await response.json();
    return data.data;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetUserState: () => {
      return initialState;
    },
  },
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
          state.user = [action.payload];
        }
      )
      .addCase(getUser.rejected, (state, action) => {
        state.isLoading = false;
        state.status = "failed";
        state.error = action.error.message || "Unknown error occurred";
      });
  },
});

export const {resetUserState} = userSlice.actions
// Selector
export const selectUsers = (state: RootState) => state.users;

// Reducer export
export default userSlice.reducer;
