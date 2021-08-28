const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const filename = (ext) =>
  isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    main: './js/system/index.js',
    // analytics: './analytics.js',
  },
  output: {
    filename: `./src/js/system/${filename('js')}`,
    path: path.resolve(__dirname, 'app'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      filename: 'index.html',
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      path: path.resolve(__dirname, 'dist'),
    }),
  ],
  module: {
    rules: [
      /** CSS **/
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              reloadAl: true,
            },
          },
          'css-loader',
        ],
      },
      /** Pictures **/
      {
        test: /\.(png|jpg|svg|gif|ico)$/,
        use: ['file-loader'],
      },
      /** SCSS **/
      {
        test: /.(sass|scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              reloadAll: true,
            },
          },
          'css-loader',
          'sass-loader',
        ],
      },
      /** Babel **/
      {},
    ],
  },
};
