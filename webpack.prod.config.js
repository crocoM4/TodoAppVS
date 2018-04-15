const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'production',
  context: path.resolve('src'),
  entry: {
    main: './index.jsx',
    vendor: [
      'babel-polyfill',
      'prop-types',
      'react',
      'react-dom',
      'react-redux',
      'redux',
      'redux-thunk',
      'reselect',
      'react-router-dom',
      'react-transition-group',
      'scroll',
    ],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
    minimizer: [
      new UglifyJSPlugin({
        parallel: true,
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.sass$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [autoprefixer({ browsers: ['> 1%', 'IE >= 10'] })],
            },
          },
          { loader: 'sass-loader' },
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new webpack.IgnorePlugin(/\.svg$/),
  ],
};
