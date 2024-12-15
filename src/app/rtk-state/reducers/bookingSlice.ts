import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// export interface testData {
//   id: string,
   
// }
export interface testState {
  isLoading: boolean,
  error: any,
  test: any[],
}

const initialState: testState = {
  isLoading: false,
  error: null,
  test: [],
};


export const getTest = createAsyncThunk("tests", async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  
  return response.json();
});


export const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getTest.pending, (state) => {
       state.isLoading = true;
       state.error = null;
    });
    builder.addCase(getTest.fulfilled, (state, action) => {
       state.isLoading = false;
       state.test = action.payload; 
    });
    builder.addCase(getTest.rejected, (state, action) => {
       state.isLoading = false;
       state.error = action.error.message; 
    });
  },
});

export const {} = testSlice.actions;

export default testSlice.reducer;
