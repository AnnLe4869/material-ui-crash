import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/styles";

import App from "./App";
import theme from "./theme";

// createMuiTheme() used to create custom theme. Which is created below will overwrite the default

// And then we pass this new-modified theme object to <ThemeProvider> below
// Dynamic import below

function Main() {
  React.useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
}

ReactDOM.hydrate(<Main />, document.getElementById("root"));
