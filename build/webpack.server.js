const path = require("path");
const nodeExternals = require("webpack-node-externals");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  target: "node",
  mode: "development",
  entry: path.resolve(__dirname, "../src/index.js"),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "../dist")
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: [new CleanWebpackPlugin()]
};
