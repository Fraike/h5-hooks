/** @format */

const merge = require('webpack-merge')
const common = require('./webpack.common.config')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = merge(common, {
  mode: 'production',
  // devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.(le|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                  require('autoprefixer')({
                    overrideBrowserslist: ['defaults'],
                  }),
                ]
              },
            },
          },
          'less-loader',
        ],
        exclude: /nodse_modules/,
      },
    ],
  },
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({}), //压缩css
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].css',
    }),
  ],
})
