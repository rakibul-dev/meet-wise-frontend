import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const baseUrl = import.meta.env.VITE_BASE_URL;
import axios from "axios";

const initialState = {
  conversations: [],
};

export const getConversations = createAsyncThunk(
  "conversations/get",
  async () => {
    const res = await axios
      .get(`${baseUrl}/conversations`, {
        withCredentials: true,
      })
      .then((res) => res)
      .catch((err) => console.log({ err }));
    return res.data;
  }
);
export const createConversation = createAsyncThunk(
  "conversations/create",
  async ({ reciverId, senderId }) => {
    const res = await axios
      .post(
        `${baseUrl}/conversations`,
        {
          reciverId,
          senderId,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => res)
      .catch((err) => console.log({ err }));
    return res.data;
  }
);

export const conversationSlice = createSlice({
  name: "conversation",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getConversations.fulfilled, (state, action) => {
      state.conversations = action.payload;
    });
    builder.addCase(createConversation.fulfilled, (state, action) => {
      state.conversations = action.payload;
    });
  },
});

export default conversationSlice.reducer;
