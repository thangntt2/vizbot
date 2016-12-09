var webpack = require('webpack')
var path = require('path')
const webpackNodeExternals = require('webpack-node-externals')

module.exports = {
  context: path.join(__dirname, './src'),
  entry: './server.js',
  target: 'node',
  output: {
    path: path.join(__dirname, './build'),
    filename: 'index.js'
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
        test: /\.json$/,
        loader: 'json',
      }
    ]
  },
  externals: webpackNodeExternals(),
  plugins: [
    new webpack.IgnorePlugin(/\.(css|less)$/),
    new webpack.BannerPlugin('require("source-map-support").install();',
                             { raw: true, entryOnly: false }),
    new webpack.ProvidePlugin({
      Promise: 'bluebird'
    })
  ],
  devtool: 'sourcemap',
  devServer: {
    contentBase: __dirname + '/build',
    hot: true,
  },
}