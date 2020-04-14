const merge = require('webpack-merge')
const common = require('./webpack.common.config')
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = merge(common,{
    mode: 'production',
    // devtool: 'cheap-module-source-map',
    optimization: {
        minimizer: [
            new OptimizeCSSAssetsPlugin({}) //压缩css
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].[hash].css",
            chunkFilename: "[id].css",
        }),
    ]
})
