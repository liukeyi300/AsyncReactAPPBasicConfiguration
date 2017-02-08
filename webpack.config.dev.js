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
    devtool: 'inline-source-map',
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:1234',
        'webpack/hot/only-dev-server',
        './entry'
    ],
    extensions: ['', '.js', '.json', '.less', '.css'],
    output: {
        path: buildPath,
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    module: {
        loaders: [
           /* {
                test: /\.(less|css)$/,
                loader: ExtractTextPlugin('style', 'css!less')
            },
            {
                test: /\.(png|jpeg)$/,
                loader: 'url-loader?limit=8142&name=images/[hash:8].[name].[ext]'
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules | bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            },*/
            {
                test: /\.(less|css)$/,
                loader: ExtractTextPlugin.extract('style', 'css!less')
            },
            //使用url-loader来处理图片文件，小于8KB的直接转码成base64
            {
                test: /\.(png|jpeg)$/,
                loader: 'url-loader?limit=8142&name=images/[hash:8].[name].[ext]'
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules | bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    },
    plugins: [
        extractCSS,
        new webpack.HotModuleReplacementPlugin(),
        commonsPlugin
    ]
}

module.exports = config