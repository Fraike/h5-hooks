const webpack = require("webpack")
const merge = require('webpack-merge')
const common = require('./webpack.common.config')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

console.log(process.env);
const {
  PORT,
  HOST,
  REACT_APP_API_ENV
} = process.env
module.exports = merge(common, {
  mode: 'development', // 开发模式
  devServer: {
    overlay: true,
    port: PORT,
    quiet: true,
    hot: true,
    contentBase: '../dist',
    historyApiFallback: true, // 单页面路由问题
    proxy: {
      '/api': {
        target: 'http://www.dell-lee.com/react',
        changeOrigin: true
      },
    }
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin({
      multiStep: true,
    }), //热更新插件
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [`You application is running here http://localhost:${PORT}`],
      },
      clearConsole: true,
    })
  ]
})