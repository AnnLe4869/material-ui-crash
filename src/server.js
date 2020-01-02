import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { ThemeProvider, ServerStyleSheets } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import morgan from "morgan";

import App from "./App";
import theme from "./theme";

const app = express();
const port = 3000;
app.use(express.static("public"));
app.use(morgan("dev"));
app.use((req, res) => {
  const sheets = new ServerStyleSheets();
  const html = ReactDOMServer.renderToString(
    sheets.collect(
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    )
  );
  const css = sheets.toString();

  res.send(
    `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no'>
        <style id="jss-server-side">${css}</style>
        <title>React App</title>
      </head>
      <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root">${html}</div>
      </body>
    </html>
`.trim()
  );
});

app.listen(port, () => console.log("Listen to http://localhost:3000"));
