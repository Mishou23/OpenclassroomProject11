import { configureStore } from "@reduxjs/toolkit";
import signInSlice from "./slices/signInSlice";
import editUserNameSlice from "./slices/userNameSlice";
import userSlice from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    signIn: signInSlice,
    user: userSlice,
    userName: editUserNameSlice,
  },
});
