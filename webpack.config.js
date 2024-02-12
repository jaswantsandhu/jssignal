const path = require('path');

module.exports = {
  mode: 'production',
  entry: './lib/index.ts', // Entry point of your library
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'jssignal.min.js',
    library: 'JSSignal',
    libraryTarget: 'umd', 
  },
};
