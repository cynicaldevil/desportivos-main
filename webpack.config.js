module.exports = {
    context: __dirname,
    entry: {
        'main': './index.js',
    },
    output: {
        path: __dirname + 'dist/assets',
        filename: '[name].bundle.js',
        publicPath: '/assets'
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
                        presets: ['es2015', 'react', 'stage-3']
                    }
                }]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    }
};