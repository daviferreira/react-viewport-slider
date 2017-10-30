module.exports = {
  entry: './src/index.js',

  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
    ]
  },

  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
  },

  output: {
    filename: 'dist/react-viewport-slider.js',
    libraryTarget: 'umd',
    library: 'ViewportSlider'
  }
};
