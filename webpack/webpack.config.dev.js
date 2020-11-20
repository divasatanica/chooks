const Webpack = require('webpack')
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'development',

  entry: {
    main: path.resolve(__dirname, '../dev/index.tsx')
  },

  output: {
    path: path.resolve(__dirname, '../dev-dist'),
    publicPath: '/',
    filename: 'js/[name].chunk.js',
    chunkFilename: 'js/[name].chunk.js'
  },

  optimization: {
    minimize: false,
    runtimeChunk: {
      name: 'runtime'
    }
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: [
          path.join(__dirname, '../dev'),
          path.join(__dirname, '../src')
        ],
        loader: 'eslint-loader',
        enforce: 'pre',
        options: {
          formatter: require('eslint-friendly-formatter'),
        }
      },
      {
        test: /\.tsx?$/,
        include: [
          path.join(__dirname, '../dev'),
          path.join(__dirname, '../src')
        ],
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'ts-loader'
          }
        ],
      },
      {
        test: /\.css$/,
        include: path.join(__dirname, '../dev'),
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
        ]
      }
    ]
  },

  plugins: [
    new Webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: './index.html',
      chunks: [
        'main'
      ],
      inject: true,
      template: path.resolve(__dirname, '../dev/public/index.html'),
      hash: false,
    }),
    
  ],

  //webpack-dev-server --inline
  devServer:{
    contentBase: path.resolve(__dirname, '../dev-dist'),
    publicPath: '/',
    port: 5000,
    host: "0.0.0.0",
    stats: "normal",
    disableHostCheck: true,
    historyApiFallback: true
  },

  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.html'],
    alias: {
      '@': path.resolve(__dirname, '../src')
    }
  },
};