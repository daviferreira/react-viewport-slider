var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',

  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel?loose=all', exclude: /node_modules/ }
    ]
  },

  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  },

  output: {
    filename: 'dist/react-viewport-slider.js',
    libraryTarget: 'umd',
    library: 'ViewportSlider'
  },

  plugins: [
    new webpack.optimize.DedupePlugin()
  ],

  resolve: {
    extensions: ['', '.jsx', '.js']
  }
};
