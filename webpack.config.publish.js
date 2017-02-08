/**
 * Created by Liukeyi on 2017/2/8.
 */
var webpack = require('webpack')
var path = require('path')
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var extractCSS = new ExtractTextPlugin('css/[name].css')

var buildPath = path.resolve(__dirname, 'build')

var config = {
    devtool: false,
    entry: {
        index: './entry',
        vendor: ['react', 'redux']
    },
    extensions: ['', '.js', '.json', '.less', '.css'],
    output: {
        path: buildPath,
        filename: '[name].[hash:8].js'
    },
    module: {
        loaders: [
            {
                test: /\.(less|css)$/,
                loader: ExtractTextPlugin.extract('style', 'css!less')
            },
            {
                test: /\.(png|jpeg)$/,
                loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules | bower_components)/,
                loader: 'babel',
                query: {
                    preset: ['react', 'es2015']
                }

            }
        ]
    },
    plugins: [
        extractCSS,
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js')
    ]
}

module.exports = config