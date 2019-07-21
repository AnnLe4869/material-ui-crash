import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import CssBaseline from "@material-ui/core/CssBaseline";

import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { purple, red, amber, blue } from "@material-ui/core/colors";

// createMuiTheme() used to create custom theme. Which is created below will overwrite the default
const theme = createMuiTheme({
  palette: {
    primary: red,
    secondary: {
      main: amber[200],
      light: purple[100],
      dark: blue[600]
    },
    type: "dark"
  }
});
// And then we pass this new-modified theme object to <ThemeProvider> below
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
