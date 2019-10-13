const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "../src/client/index.js"),
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "../public")
  },
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
