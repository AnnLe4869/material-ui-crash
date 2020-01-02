const path = require("path");

const nodeExternals = require("webpack-node-externals");

const commonConfig = {
  devtool: "source-map",
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }]
  },
  resolve: {
    alias: {
      "@material-ui/core": "@material-ui/core/es"
    }
  }
};

module.exports = [
  {
    ...commonConfig,
    entry: "./src/client",
    output: {
      path: path.resolve(__dirname, "public")
    }
  },
  {
    ...commonConfig,
    target: "node",
    entry: "./src/server",
    output: {
      path: path.resolve(__dirname, "server")
    },
    externals: [nodeExternals()]
  }
];
