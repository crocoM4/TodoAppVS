/* eslint import/no-extraneous-dependencies: 0 */
const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const packageFile = require('./package.json');

module.exports = {
  mode: 'production',
  context: path.resolve('src'),
  entry: {
    main: './index.jsx',
    vendor: Object.keys(packageFile.dependencies),
  },
  output: {
    publicPath: 'dist/',
    filename: '[name].js',
    chunkFilename: '[name].js',
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
      new OptimizeCSSAssetsPlugin({}),
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
        test: /\.(sass|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
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
    new webpack.HashedModuleIdsPlugin(),
    new webpack.IgnorePlugin(/\.svg$/),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
};
