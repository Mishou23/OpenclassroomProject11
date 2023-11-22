import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const signInUser = createAsyncThunk(
  "user/signInUser",
  async (userCredentials) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/user/login",
        userCredentials
      );
      const data = await response.data;
      localStorage.setItem("token", data.body.token);
      return data;
    } catch (error) {
      alert("Invalid email or password");
      throw new Error(error.response.data.message);
    }
  }
);

const initialState = {
  loggedIn: false,
  user: null,
  error: null,
  token: null,
};

export const signInSlice = createSlice({
  name: "signIn",
  initialState,
  reducers: {
    signOut: (state) => {
      state.user = null;
      state.loggedIn = false;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signInUser.pending, (state) => {
        state.loggedIn = true;
        state.user = null;
        state.error = null;
        state.token = null;
      })
      .addCase(signInUser.fulfilled, (state, action) => {
        state.loggedIn = true;
        state.user = action.payload;
        state.error = null;
        state.token = action.payload.body.token;
      })
      .addCase(signInUser.rejected, (state, action) => {
        state.loggedIn = false;
        state.user = null;
        state.error = action.error.message;
        state.token = null;
      });
  },
});

export const { signOut } = signInSlice.actions;
export default signInSlice.reducer;
