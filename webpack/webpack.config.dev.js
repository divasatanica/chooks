
const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
  mode: 'development',

  output: {
    path: path.resolve(__dirname, '../lib'),
    publicPath: '/',
    filename: 'chooks.js',
    library: 'Chooks', // 定义暴露到浏览器环境的全局变量名称
    libraryTarget: 'umd',
    globalObject: 'this',
  },
});