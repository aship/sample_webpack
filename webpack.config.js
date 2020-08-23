const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  devServer: {
    contentBase: './dist',
    port: 3000,
    compress: true,
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: [
      '.ts', '.js',
    ],
  },
};
