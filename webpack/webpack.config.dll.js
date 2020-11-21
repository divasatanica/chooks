const path = require('path');
const Webpack = require('webpack');

module.exports = {
  mode: 'development',

  entry: {
    reactVendor: ['react', 'react-dom', 'react-router', 'react-router-dom'],
  },

  output: {
    filename: "[name].dll.js",
    path: path.resolve(__dirname, '../dev-dist'),
    libraryTarget: "var",
    library: "_dll_[name]_"
  },

  plugins: [
    new Webpack.DllPlugin({
      path: path.resolve(__dirname, '../dev-dist', '[name].manifest.json'),
      name: '_dll_[name]_'
    })
]
}