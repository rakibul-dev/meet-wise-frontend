import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const baseUrl = import.meta.env.VITE_BASE_URL;
import axios from "axios";

const initialState = {
  user: {},
  users: [],
  pagination: {},
};

// First, create the thunk
export const registerUser = createAsyncThunk(
  "user/register",
  async (userInfo) => {
    const res = await axios
      .post(`${baseUrl}/user/register`, userInfo, {
        withCredentials: true,
      })
      .then((res) => res)
      .catch((err) => console.log({ err }));
    return res.data;
  }
);

export const loginUser = createAsyncThunk("user/get", async (userInfo) => {
  const res = await axios
    .post(`${baseUrl}/user/auth/login`, userInfo, {
      withCredentials: true,
    })
    .then((res) => res)
    .catch((err) => console.log({ err }));
  return res.data;
});

export const getUserInfo = createAsyncThunk("current-user/get", async () => {
  const res = await axios
    .get(`${baseUrl}/user`, {
      withCredentials: true,
    })
    .then((res) => res)
    .catch((err) => console.log({ err }));
  return res.data;
});

export const logOutUser = createAsyncThunk("user/logout", async () => {
  const res = await axios
    .get(`${baseUrl}/user/logout`, {
      withCredentials: true,
    })
    .then((res) => res)
    .catch((err) => console.log({ err }));
  return res.data;
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserInfo.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export default userSlice.reducer;
