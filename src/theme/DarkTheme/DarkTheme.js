import components from "./component/component";

import { createTheme } from "@mui/material";

let darkTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
  },
  palette: {
    background: {
      default: "#0c0a09",
    },
    primary: {
      main: "#35155d",
      success: "green",
      danger: "red",
    },
  },
  // shadows: ["none"],
  shadows: Array(25).fill("none"),

  components,
});

darkTheme = createTheme(darkTheme, {
  typography: {
    h2: {
      color: "#2b3445ff",
      fontSize: 53,
      [darkTheme.breakpoints.down("md")]: {
        fontSize: 34,
      },
    },
    h6: {
      color: "#2b3445ff",
    },
  },
});
export default darkTheme;
