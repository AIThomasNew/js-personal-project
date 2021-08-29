const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const cssLoaders = (extra) => {
  const loaders = [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        reloadAll: true,
      },
    },
    'css-loader',
  ];

  if (extra) {
    loaders.push(extra);
  }

  return loaders;
};

// const filename = (ext) =>
//   isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    main: './js/index.js',
  },
  output: {
    // filename: `./${filename('js')}`,
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'app'),
    publicPath: '',
  },
  resolve: {
    extensions: ['.js', '.json', '.png', 'css', 'scss'],
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, 'app'),
    open: true,
    compress: true,
    hot: true,
    port: 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      minify: {
        collapseWhitespace: true,
      },
    }),
    new CleanWebpackPlugin(),
    // new MiniCssExtractPlugin({
    //   filename: `./${filename('css')}`,
    //   path: path.resolve(__dirname, 'app'),
    // }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/assets/'),
          to: path.resolve(__dirname, 'app'),
        },
      ],
    }),
  ],
  module: {
    rules: [
      /** HTML **/
      {
        test: /\.html$/,
        loader: 'html-loader',
      },


      /** CSS **/
      {
        test: /\.css$/,
        use: cssLoaders(),
      },


      /** SCSS **/
      {
        test: /\.(s[ac]ss)$/,
        use: cssLoaders('sass-loader'),
      },


      /** Pictures **/
      {
        test: /\.(?:|png|jpg|jpeg|svg|gif|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: `./assets/img/${filename('[ext]')}`,
            },
          },
        ],
      },


      /** Fonts **/
      {
        test: /\.(?:|ttf|woff|woff2|eot)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: `./assets/fonts/${filename('[ext]')}`,
            },
          },
        ],
      },


      /** Babel **/
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
