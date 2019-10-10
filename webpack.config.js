let path = require('path');

module.exports = {
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      exclude: /webpack-demo/,
      loader: 'babel-loader',
    }]
  },

  entry: './src/index.js',

  output: {
    filename: './public/bundle.js',
    path: path.resolve(__dirname, './bundle')
  },

  mode: 'development'
}