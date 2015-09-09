var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',

  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel?loose=all', exclude: /node_modules/ }
    ]
  },

  externals: {
    react: 'React'
  },

  // TODO: use your component name here
  output: {
    filename: 'dist/react-component-starter-kit.js',
    libraryTarget: 'umd',
    library: 'ReactComponentStarterKit'
  },

  plugins: [
    new webpack.optimize.DedupePlugin()
  ],

  resolve: {
    extensions: ['', '.jsx', '.js']
  }
};
