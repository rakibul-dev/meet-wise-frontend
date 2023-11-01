import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const baseUrl = import.meta.env.VITE_BASE_URL;
import axios from "axios";

const initialState = {
  messages: [],
};

export const getMessages = createAsyncThunk(
  "messages/get",
  async (conversationId) => {
    const res = await axios
      .get(`${baseUrl}/messages/${conversationId}`, {
        withCredentials: true,
      })
      .then((res) => res)
      .catch((err) => console.log({ err }));
    return res.data;
  }
);
export const sendMessage = createAsyncThunk(
  "messages/send",
  async ({ senderId, reciverId, message }) => {
    console.log({ senderId, reciverId, message });
    const res = await axios
      .post(
        `${baseUrl}/send-message`,
        { senderId: senderId, reciverId: reciverId, message },
        {
          withCredentials: true,
        }
      )
      .then((res) => res)
      .catch((err) => console.log({ err }));
    return res.data;
  }
);

export const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    removeMessages: (state, action) => {
      state.messages.splice(0, state.messages.length);
    },
    handleIncommingMsg: (state, action) => {
      state.messages = [...state.messages, action.payload];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMessages.fulfilled, (state, action) => {
      state.messages = action.payload;
    });
    builder.addCase(sendMessage.fulfilled, (state, action) => {
      state.messages = [...state.messages, action.payload];
    });
  },
});

export const { removeMessages, handleIncommingMsg } = messageSlice.actions;
export default messageSlice.reducer;
