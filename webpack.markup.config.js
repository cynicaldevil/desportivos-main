const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    context: __dirname,
    entry: {
        'main': './staticMarkup.js',
    },
    output: {
        path: __dirname + '/dist/markup',
        filename: '[name].js',
    },
    devServer: {
        contentBase: __dirname,
    },
    devtool: 'eval-source-map',
    module: {
        rules: [
            {  
                test: /\.jsx|\.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react', 'stage-0'],
                        plugins: ['transform-decorators-legacy']
                    }
                }]
            },
        ]
    },
    plugins: [

        new HtmlWebpackPlugin({
            title: 'Desportivos',
            template: path.join(__dirname, 'index.html'),
            inject: 'body'
        }),
    ],
    resolve: {
        extensions: ['*', '.js', '.jsx']
    }
};