var webpack = require('webpack');
var path = require('path');
var glob = require('glob');

module.exports = {
    mode: 'development',
    devServer: {
        inline: true,
        hot: true,
        contentBase: '/',
        port: 8080,
        clientLogLevel: 'trace'
    },
    entry: glob.sync('./_assets/js2/**/index.js').reduce((acc, path) => {
        const entry = path.replace('/index.js', '');
        acc[entry] = path;
        acc['webpack/hot/dev-server'] = 'webpack/hot/dev-server';
        acc['webpack-hot-middleware/client'] = 'webpack-hot-middleware/client';
        return acc;
    }, {}),
    output: {
        filename: '[name].bundle.js',
        path: __dirname + "/_site/assets/js/",
        publicPath: "/"
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        })
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