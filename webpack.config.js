const path = require('path');
const webpack = require('webpack');

/*
 * HTML Webpack Plugin ~ This is a webpack plugin that simplifies creation of HTML files to serve your
 * webpack bundles. This is especially useful for webpack bundles that include a
 * hash in the filename which changes every compilation. You can either let the
 * plugin generate an HTML file for you, supply your own template using lodash
 * templates or use your own loader.
 *
 * https://www.npmjs.com/package/html-webpack-plugin
 *
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');

/*
 * Mini Css Extract Plugin ~ This allows your app to
 * use css modules that will be moved into a separate CSS file instead of inside
 * one of your module entries!
 *
 * https://github.com/webpack-contrib/mini-css-extract-plugin
 *
 */

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/*
 * Terser Webpack Plugin ~ A JavaScript parser and mangler/compressor toolkit for ES6+.
 * This minifies your app in order to load faster and run less javascript.
 *
 * https://github.com/webpack-contrib/terser-webpack-plugin
 *
 */

const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: {
    styles: './src/css/main.scss',
    app: './src/js/app.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  mode: process.env.NODE_ENV,
  devServer: {
    contentBase: [
      path.join(__dirname, 'dist'),
      path.join(__dirname, 'src/html'),
    ],
    liveReload: true,
    port: 8800,
    watchContentBase: true,
  },
  devtool:
    process.env.NODE_ENV === 'development' ? 'eval-source-map' : 'source-map',
  plugins: [
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({ filename: '[name].css' }),
    new HtmlWebpackPlugin({
      title: 'Tailwind CSS Playground',
      template: './src/html/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /.(css|s[ac]ss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  optimization: {
    minimize: process.env.NODE_ENV === 'production',
    minimizer: [new TerserPlugin()],
  },
};
