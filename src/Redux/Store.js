import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Slices/UserSlice";
import PeoplesSlice from "./Slices/PeoplesSlice";
import conversationSlice from "./Slices/ConversationsSlice";
import messageSlice from "./Slices/MessageSlice";
import logger from "redux-logger";
const appStage = import.meta.env.VITE_APP_STAGE;

const store = configureStore({
  reducer: {
    userSlice,
    PeoplesSlice,
    messageSlice,
    conversationSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: appStage !== "PROD",
});

export default store;
