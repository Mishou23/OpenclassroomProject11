/* eslint-disable react-refresh/only-export-components */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
  "user/login",
  async (userCredential) => {
    const request = await axios.post(
      "http://localhost:3001/api/v1/user/login/",
      userCredential
    );
    const token = request.data.body.token;
    return token;
  }
);

const LoginSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    user: null,
    isAuthenticated: false,
    token: null, 
    error: null,
  },

  reducers: {
    logOutUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.token = null; 
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.error = null;
      })

      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
        state.token = action.payload; 
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.token = null; 
        if (action.error.message === "Request failed with status code 400") {
          state.error = "Access Denied! Invalid Personal Information";
        } else {
          state.error = action.error.message;
        }
      });
  },
});

export const { logOutUser } = LoginSlice.actions;
export default LoginSlice.reducer;
