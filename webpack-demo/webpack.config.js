const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './dist'),
  },
  module: {
    rules: [
    {
      test: /\.html$/,
      loader: 'html-loader'
    },
    {
      test: /\.js$/,
      exclude: /node_modules/
    }
  ]
  }
};