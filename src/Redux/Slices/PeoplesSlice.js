import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const baseUrl = import.meta.env.VITE_BASE_URL;
import axios from "axios";

const initialState = {
  peopleDetails: {},
  peoples: [],
  friends: [],
  pagination: {},
};

export const getPeoples = createAsyncThunk("peoples/get", async () => {
  const res = await axios
    .get(`${baseUrl}/peoples`, {
      withCredentials: true,
    })
    .then((res) => res)
    .catch((err) => console.log({ err }));
  return res.data;
});
export const getFriends = createAsyncThunk("friends/get", async () => {
  const res = await axios
    .get(`${baseUrl}/get-friends`, {
      withCredentials: true,
    })
    .then((res) => res)
    .catch((err) => console.log({ err }));
  return res.data;
});
export const SendFriendRequest = createAsyncThunk(
  "peoples/send-friend-request",
  async ({ requestSender, requestReciver }) => {
    const res = await axios
      .post(
        `${baseUrl}/send-friend-request`,
        { requestSender, requestReciver },
        {
          withCredentials: true,
        }
      )
      .then((res) => res)
      .catch((err) => console.log({ err }));
    return res.data;
  }
);

export const peoplesSlice = createSlice({
  name: "peoples",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPeoples.fulfilled, (state, action) => {
      state.peoples = action.payload;
    });
    builder.addCase(getFriends.fulfilled, (state, action) => {
      state.friends = action.payload;
    });
  },
});

export default peoplesSlice.reducer;
