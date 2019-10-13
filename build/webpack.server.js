const path = require("path");
const nodeExternals = require("webpack-node-externals");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base");

const serverConfig = {
  target: "node",
  mode: "development",
  entry: path.resolve(__dirname, "../src/server/index.js"),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "../dist")
  },
  externals: [nodeExternals()]
};

module.exports = merge(baseConfig, serverConfig);
