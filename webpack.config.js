const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: ['./index.js'],
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'notify.js',
    publicPath: 'dist'
  },
  node: {
    global: false
 },
  mode: 'production'
};