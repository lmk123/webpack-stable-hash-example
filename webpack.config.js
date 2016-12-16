var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var HashedModuleIdsPlugin = require('./HashedModuleIdsPlugin')

module.exports = {
  entry: {
    vendor: ['./vendor'],
    app: './entry'
  },
  output: {
    path: './dist',
    filename: '[name].[chunkhash].js',
    chunkFilename: '[chunkhash].js'
  },
  plugins: [
    new HashedModuleIdsPlugin(),
    new HtmlWebpackPlugin({
      chunksSortMode: 'dependency'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      chunks: ['vendor']
    })
  ]
}
