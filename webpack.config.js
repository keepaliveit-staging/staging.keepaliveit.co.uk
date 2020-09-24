var webpack = require('webpack');
var path = require('path');

module.exports = {
    mode: 'development',
    devServer: {
        inline: true,
        hot: true,
        contentBase: '/',
        port: 8080,
        clientLogLevel: 'trace'
    },
    entry: [
        'webpack/hot/dev-server',
        'webpack-hot-middleware/client',
        './_assets/js/index.js'
    ],
    output: {
        filename: '[name].bundle.js',
        path: __dirname + "/_site/dist",
        publicPath: "/"
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: ['babel-loader']
            }
        ]
    }
};