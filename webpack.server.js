const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    mode: 'development',
    entry: './server/index.js',
    target: 'node',
    externals: [nodeExternals()],
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    },
    output: {
        path: path.resolve('server-build'),
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