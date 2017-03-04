module.exports = {
  entry: './src',
  output: {
    path: 'builds',
    filename: 'bundle.js',
    publicPath: 'builds/',
  },
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
