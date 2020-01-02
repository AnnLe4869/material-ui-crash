import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/styles";

import App from "./App";
import theme from "./theme";

// And then we pass this new-modified theme object to <ThemeProvider> below

ReactDOM.hydrate(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById("root"),
  () => {
    document.getElementById("jss-styles").remove();
  }
);
