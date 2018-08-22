'use strict';

const eslintConfig = require('oncody-eslint-config');
const webpack = require('webpack');

module.exports = {
  entry: [
    './index.js'
  ],
  mode: 'development',
  node: {
    fs: 'empty'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: eslintConfig
      }
    ]
  },
};