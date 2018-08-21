'use strict';

const eslintConfig = require('oncody-eslint-config');
const webpack = require('webpack');

module.exports = {
  entry: [
    './src/index.js'
  ],
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: Object.assign({ node: { fs: 'empty' } }, eslintConfig)
      }
    ]
  },
};