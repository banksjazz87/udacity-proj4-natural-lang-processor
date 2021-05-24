const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: 'production',
    entry: './src/client/index.js',
    output: {
        library: {
            name: 'MyLibrary',
            type: 'var'
        },
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: [/node_modules/, /__test__/],
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/client/views/index.html',
            filename: './index.html'
        }),

    ],
    resolve: {
        fallback: {
            /* "stream": require.resolve('stream-browserify'),
             "path": require.resolve("path-browserify"),
             "http": require.resolve("stream-http")*/
            "fs": false,
            "tls": false,
            "net": false,
            "path": false,
            "zlib": false,
            "http": false,
            "https": false,
            "stream": false,
            "crypto": false,
            "crypto-browserify": false
        }
    }
}