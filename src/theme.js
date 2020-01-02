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

export default theme;
