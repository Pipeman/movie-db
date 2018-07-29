const path = require('path');

module.exports = {
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: false,
    port: 9000
  }
};