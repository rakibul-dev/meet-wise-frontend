import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Slices/UserSlice";

import logger from "redux-logger";
const appStage = import.meta.env.VITE_APP_STAGE;

const store = configureStore({
  reducer: {
    userSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: appStage !== "PROD",
});

export default store;
