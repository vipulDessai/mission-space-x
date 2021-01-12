const path = require('path');
const nodeExternals = require('webpack-node-externals');

const config = {
    mode: 'development',
    entry: './server.js',
    target: 'node',
    externals: [nodeExternals()],
    resolve: {
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
        ]
    }
};

module.exports = config;