const webpack = require('webpack')
const path = require('path')
const webpackNodeExternals = require('webpack-node-externals')

module.exports = {
  context: path.join(__dirname, './src'),
  entry: './server.js',
  target: 'node',
  output: {
    path: path.join(__dirname, './build'),
    filename: 'index.js',
    libraryTarget: 'umd',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          'babel-loader',
        ],
      },
      {
        test: /(\.json|\.yml|\.yaml)$/,
        loader: 'json-schema',
        exclude: /(node_modules|bower_components)/,
      },
    ],
  },
  externals: webpackNodeExternals(),
  plugins: [
    new webpack.IgnorePlugin(/\.(css|less)$/),
    new webpack.BannerPlugin('require("source-map-support").install();',
                             { raw: true, entryOnly: false }),
    new webpack.ProvidePlugin({
      Promise: 'bluebird',
    }),
  ],
  devtool: 'sourcemap',
}
