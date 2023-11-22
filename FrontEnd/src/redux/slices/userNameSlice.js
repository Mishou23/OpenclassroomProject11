import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const editUserName = createAsyncThunk(
  "userName/editUserName",
  async function ({ token, newUserName }) {
    try {
      const response = await axios.put(
        "http://localhost:3001/api/v1/user/profile",
        { userName: newUserName },
        {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data.body);
      return response.data.body;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

const initialState = {
  userNameData: "",
};

export const editUserNameSlice = createSlice({
  name: "userName",
  initialState,
  reducers: {
    updateUsername: (state, action) => {
      state.userNameData = action.payload;
    },
  },
});

export const { updateUsername } = editUserNameSlice.actions;
export default editUserNameSlice.reducer;
