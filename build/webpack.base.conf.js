const webpack = require('webpack');
const util= require('util');
const path = require('path');

module.exports = {
    entry: {
        index:  path.resolve(__dirname, '../src/main.js')
    },
    output: {
        path: path.resolve(__dirname, '../src/assets'),
        publicPath: '/assets',
        filename: 'build.js'
    },
    module: {
        rules:[
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name:'[name].[ext]?[hash]'
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            },
        ]
    },
    resolve: {
        alias: {
            'vue$':'vue/dist/vue.esm.js',
            '@': path.resolve(__dirname, '../src'),
            'components': path.resolve(__dirname,'../src/components'),
        }
    },
    devServer: {
        inline:true,
        hot: true,
    },
    devtool: '#eval-source-map',
}