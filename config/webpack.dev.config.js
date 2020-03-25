const webpack = require("webpack")
const merge = require('webpack-merge')
const common = require('./webpack.common.config')

module.exports = merge(common,{
    mode: 'development', // 开发模式
    devServer:{
        port:3000,
        hot:true,
        contentBase:'../dist'
    },
    devtool: 'cheap-module-eval-source-map',
    plugins:[
        new webpack.HotModuleReplacementPlugin() //热更新插件
    ]
})
