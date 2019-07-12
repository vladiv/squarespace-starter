const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const siteJs = ['./scripts/site.js'];

module.exports = {
  entry: { 'scripts/site': siteJs },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles/style.css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  }
};
