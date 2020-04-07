const merge = require('webpack-merge')
const common = require('./webpack.common.config')
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = merge(common,{
    mode: 'production',
    // devtool: 'cheap-module-source-map',
    optimization: {
        minimizer: [
            new OptimizeCSSAssetsPlugin({})
        ]
    },
})
