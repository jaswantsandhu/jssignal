const path = require('path');

const baseConfig = {
  entry: './lib/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};

const umdConfig = {
  ...baseConfig,
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'jssignal.umd.js',
    library: {
      name: 'jssignal',
      type: 'umd',
    },
    globalObject: 'this',
  },
};

const esmConfig = {
  ...baseConfig,
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'jssignal.esm.js',
    library: {
      type: 'module',
    },
  },
  experiments: {
    outputModule: true,
  },
};

module.exports = [umdConfig, esmConfig];
