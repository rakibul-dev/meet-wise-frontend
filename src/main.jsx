import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import "./index.css";
import { ThemeProvider } from "@mui/material/styles";
import darkTheme from "./theme/DarkTheme/DarkTheme.js";
import { CssBaseline } from "@mui/material";
import lightTheme from "./theme/LightTheme/LightTheme.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <ThemeProvider theme={lightTheme}>
      <App />
      <CssBaseline />
    </ThemeProvider>
  </>
);
