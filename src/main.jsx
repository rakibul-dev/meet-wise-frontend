import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import "./index.css";
import { ThemeProvider } from "@mui/material/styles";
import darkTheme from "./theme/DarkTheme/DarkTheme.js";
import { CssBaseline } from "@mui/material";
import lightTheme from "./theme/LightTheme/LightTheme.js";
import { Provider } from "react-redux";
import store from "./Redux/Store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store}>
      <ThemeProvider theme={lightTheme}>
        <App />
        <CssBaseline />
      </ThemeProvider>
    </Provider>
  </>
);
