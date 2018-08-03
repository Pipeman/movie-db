const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: ["babel-polyfill", "./src"],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use:
        [
            {
            loader: "babel-loader"
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader?modules=true&localIdentName=[local]___[hash:base64:5]"
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};
