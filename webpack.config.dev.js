import path from 'path'
import webpack from 'webpack'

module.exports = {
  entry: [
    './src/index.js',
    'webpack-hot-middleware/client?reload=true'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    rules: [
      {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: 'babel-loader'}
    ]
  }
};
