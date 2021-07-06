'use strict'
const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const MiniCssExtractPlugin  = require('mini-css-extract-plugin')
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  mode: 'development',

  entry: [
    './src/app.js'
  ],  
  devServer: {
    hot: true,
    watchOptions: {
      poll: true
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
         MiniCssExtractPlugin.loader,
         'css-loader'
       ]
      },
      {
        test: /\.js$/,
        use: 'babel-loader'
      } 
    ]
  },  
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    new ESLintPlugin({
      extensions : ['js']
    }),
    new MiniCssExtractPlugin({
     filename: '[name].css'
    })/*,
    new CopyWebpackPlugin({ patterns : [{
      from: resolve('src/assets/fonts'),
      to: resolve('dest/fonts'),
      force : true
    }]})*/
  ] 
}
