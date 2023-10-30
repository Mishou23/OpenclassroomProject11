import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk(
  "user/login",
  async (userCredential) => {
    // Using the Fetch API to make an HTTP POST request
    const response = await fetch("http://localhost:3001/api/v1/user/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userCredential),
    });

    if (!response.ok) {
        
      throw new Error("Login request failed");
    }

    // Parse the response as JSON
    const data = await response.json();

    // Store the user's token in localStorage
    localStorage.setItem("user", data.body.token);

    // Return the token as the action payload
    return data.body.token;
  }
);
