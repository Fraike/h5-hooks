const webpack = require("webpack")
const merge = require('webpack-merge')
const common = require('./webpack.common.config')

module.exports = merge(common, {
  mode: 'development', // 开发模式
  devServer: {
    overlay: true,
    port: 3000,
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
    new webpack.HotModuleReplacementPlugin(
      {
        multiStep: true,
      }
    ) //热更新插件
  ]
})
