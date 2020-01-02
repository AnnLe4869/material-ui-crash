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
  }
};

module.exports = [
  {
    ...commonConfig,
    entry: "./src/client",
    output: {
      filename: "[name].[contenthash].js",
      path: path.resolve(__dirname, "public")
    },
    plugins: [
      // new HtmlWebpackPlugin({
      //   title: "React app"
      // }),
      new BundleAnalyzerPlugin()
    ]
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
