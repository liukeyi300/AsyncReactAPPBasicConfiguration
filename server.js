/**
 * Created by Liukeyi on 2017/2/8.
 */
var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var config = require('./webpack.config.dev')

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    inline: true,
    historyApiFallback: true
}).listen(1234, 'localhost', function(err, result) {
    if (err) {
        return console.error(err)
    }

    console.log('listen at http://localhost:1234/')
})