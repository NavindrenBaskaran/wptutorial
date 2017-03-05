var webpack = require('webpack');

module.exports = {
  entry: './src',
  output: {
    path: 'builds',
    filename: 'bundle.js',
    publicPath: 'builds/',
  },
  plugins : [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'main', // Move dependencies to main file
      children: true, // look for common dependencies in all children
      minChunks: 2, // How many times a dependency must come up before being extracted
    }),
  ],
  module: {
    loaders : [
        {
          test: /\.js/,
          loader: 'babel-loader',
          include: __dirname + '/src',
        },
        {
          test: /\.scss/,
          loaders : ['style-loader','css-loader','sass-loader'],
        },
        {
          test: /\.html/,
          loader: 'html-loader',
        }
    ],
  }

}
