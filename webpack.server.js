const path = require('path');
const nodeExternals = require('webpack-node-externals');

const config = {
    mode: 'development',
    entry: './server.js',
    target: 'node',
    externals: [nodeExternals()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    },
    output: {
        // reslove the absolute path
        path: path.resolve('./'),
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
                test: /\.ts(x*)$/,
                use: 'ts-loader',
            },
            {
                test: /\.(s*)css$/,
                use: [
                    // TODO: replace style-loader with isomorphic-stylestyle-loader in webpack.config.js
                    'isomorphic-style-loader', 
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpg|svg)$/,
                loader: 'url-loader'
            },
        ]
    }
};

module.exports = config;