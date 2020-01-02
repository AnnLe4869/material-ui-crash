const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
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
  },
  // Below is for debug test
  // As why dev mode work but prod mode fail
  optimization: {
    concatenateModules: true,
    minimize: true
  }
};

module.exports = [
  {
    ...commonConfig,
    entry: "./src/client",
    output: {
      filename: "[name].js",
      path: path.resolve(__dirname, "public")
    }
  },
  {
    ...commonConfig,
    target: "node",
    entry: "./src/server",
    output: {
      filename: "[name].js",
      path: path.resolve(__dirname, "server")
    },
    externals: [nodeExternals()]
  }
];
