import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// createAsyncThunk is a function that generates asynchronous Redux action creators
// It takes a string (an action type) and an async function as arguments
export const loginUser = createAsyncThunk(
  "login",
  async (userCredential) => {
    // This is the asynchronous action creator for logging in a user

    // Using Axios to make an HTTP POST request to a login endpoint
    const request = await axios.post(
      "http://localhost:3001/api/v1/user/login/",
      userCredential
    );

    // Extract the token from the response
    const token = request.data.body.token;

    // Log the token value
    console.log(token);

    // Store the user's token in localStorage
    localStorage.setItem("user", token);

    // Finally, it returns the token as the action payload
    return token;
  }
);

const LoginSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    user: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        if (action.error.message === "Request failed with status code 400") {
          state.error = "Access Denied! Invalid Personal information";
        } else {
          state.error = action.error.message;
        }
      });
  },
});

export const { logOutUser } = LoginSlice.actions;
export default LoginSlice.reducer;
