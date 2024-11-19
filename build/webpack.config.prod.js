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
  mode: 'production',

  entry: [
    './src/app.js'
  ],  

  output: {
    filename: '[name].[contenthash].bundle.js',
    path: resolve('dist'),
    publicPath : '/plugin/'+packageJson.name+'/',
	clean: true
  },

  module: {
    rules: [
	  {
		  mimetype: 'image/svg+xml',			 
		  type: 'asset/resource',
		  generator: {
		     filename: 'icons/[hash].svg'
		  }
	  },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.(sa|sc)ss$/,
        use: [
            MiniCssExtractPlugin.loader,
            "css-loader"/*,
            {
                loader: 'postcss-loader',
                options: {
                  plugins: () => [autoprefixer()]
                }
            }*/,
            'sass-loader'      
        ]
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
      },
	  {
	  	test: /\.(ico|png|jpg|jpeg|gif|svg|webp|tiff)$/i,
	  	type: "asset/resource",
	  	generator: {
	  	   filename: "images/[name].[hash][ext]",
	  	},
	  },
	  {
	    test: /\.(woff|woff2|eot|ttf|otf)$/i,
	    type: "asset/resource",
	    generator: {
	       filename: "fonts/[name].[hash][ext]",
	    },
	  }
    ]
  },  
  plugins: [    
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    new MiniCssExtractPlugin({
     filename: '[name].[contenthash].css'
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
