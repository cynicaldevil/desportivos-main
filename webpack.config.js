const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

const base_config = {
    context: __dirname,
    entry: {
        'main': './index.js',
    },
    output: {
        path: __dirname + '/build',
        filename: '[hash].[name].js',
    },
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
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract({
                    loader: 'css-loader?sourceMap'
                })
            },
            {
                test: /\.otf$/,
                exclude: /node_modules/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        new HtmlWebpackPlugin({
            title: 'Desportivos',
            template: path.join(__dirname, 'index.html'),
            inject: 'body'
        }),
        new ExtractTextPlugin({ filename: '[name].[chunkhash].css', disable: false, allChunks: true })
    ],
    resolve: {
        extensions: ['*', '.js', '.jsx']
    }
};

const dev_config = Object.assign({}, base_config, {
    devServer: {
        contentBase: __dirname,
    },
    devtool: 'eval-source-map',
});

const prod_config = Object.assign({}, base_config, {
    devtool: 'cheap-module-source-map',
    plugins: (() => {
        const base_plugins = base_config.plugins;
        const add_prod_plugins = [
            new webpack.optimize.UglifyJsPlugin({
                                      compress:{
                                        warnings: true
                                      }
                                    }),
            new CopyWebpackPlugin([
                {from: './img', to: './img'},
                {from: './css', to: './css'},
                {from: './js', to: './js'},
            ]),
        ];
        return base_plugins.concat(add_prod_plugins);
    })(),
});

module.exports = (() => {
    if(process.env.NODE_ENV === 'development') {
        return dev_config;
    }
    else if(process.env.NODE_ENV === 'production') {
        return prod_config;
    }
})();
