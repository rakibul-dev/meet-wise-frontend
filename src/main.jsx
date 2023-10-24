import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "@mui/material/styles";
import darkTheme from "./theme/DarkTheme/DarkTheme.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <App theme={darkTheme} />
    </ThemeProvider>
  </React.StrictMode>
);
