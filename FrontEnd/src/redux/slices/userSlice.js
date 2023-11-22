import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUserData = createAsyncThunk(
  "user/getUserData",
  async function (token) {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/user/profile",
        {},
        {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log(response.data.body);
      return response.data.body;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

const initialState = {
  userData: null,
  status: null,
  error: null,
};


export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    removeUserData: (state) => {
      state.userData = null;
      state.status = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserData.pending, (state) => {
        state.userData = null;
        state.status = "loading";
        state.error = null;
      })
      .addCase(getUserData.fulfilled, (state, action) => {
        state.userData = action.payload;
        state.status = "succeeded";
        state.error = null;
      })
      .addCase(getUserData.rejected, (state, action) => {
        state.userData = null;
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { removeUserData } = userSlice.actions;
export default userSlice.reducer;
