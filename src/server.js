import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { ThemeProvider, ServerStyleSheets } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import morgan from "morgan";

import App from "./App";
import theme from "./theme";

const app = express();
const port = 5000;
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <style id='jss-styles'>${css}</style>
        <title>React App</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script src='main.js' async></script>
      </body>
    </html>
`.trim()
  );
});

app.listen(port, () => console.log("Listen to http://localhost:5000"));
