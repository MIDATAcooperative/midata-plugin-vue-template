'use strict'
const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const MiniCssExtractPlugin  = require('mini-css-extract-plugin')
const path = require('path')
const packageJson = require("../package.json");

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  mode: 'development',

  entry: [
    './src/app.js'
  ],  

  output: {
      publicPath: '/'+packageJson.name+'/dist/'
  },

  devServer: {
    hot: true,
    port : 9004,
		https : true
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
      extensions : ['js','vue']
    }),
    new MiniCssExtractPlugin({
     filename: '[name].css'
    }),
    new CopyWebpackPlugin({ patterns : [{
      from: resolve('src/assets/fonts'),
      to: resolve('dist/fonts'),
      noErrorOnMissing: true
    },{
      from: resolve('src/assets/img'),
      to: resolve('dist/img'),
      noErrorOnMissing: true  
    }]})
  ],
  resolve: {
    modules: [
      'node_modules',      
      path.resolve(__dirname + '/../node_modules'),
      path.resolve(__dirname + '/../src')            
    ]
  } 
}
