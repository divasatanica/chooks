const path = require('path');
const Webpack = require('webpack');

const rootRelative = p => path.resolve(__dirname, '../', p);

module.exports = {
  entry: {
    main: [
      rootRelative('./src/index.ts')
    ],
  },

  optimization: {
    minimize: false,
  },

  externals: [
    {
      react: 'react'
    }
  ],

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: path.join(__dirname, '../src'),
        loader: 'eslint-loader',
        enforce: 'pre',
        options: {
          formatter: require('eslint-friendly-formatter'),
        }
      },
      {
        test: /\.tsx?$/,
        include: path.join(__dirname, '../src'),
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'ts-loader'
          }
        ],
      }
    ]
  },

  plugins: [

  ],

  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.html'],
    alias: {
      '@': rootRelative('./src')
    }
  },
};