const webpack = require('webpack');
const util= require('util');
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: {
        index:  path.resolve(__dirname, '../src/main.js')
    },
    output: {
        path: path.resolve(__dirname, '../assets'),
        filename: '[name].js'
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
        },
        extensions:['.vue','.js','.json']
    },
    devServer: {
        host:'localhost',
        port:8083,
        inline:true,
        hot: true,
    },
    devtool: '#eval-source-map',
    plugins:[
        new htmlWebpackPlugin({
            template:path.join(__dirname,'../index.html'),
            filename:'index.html'
        }),
        new VueLoaderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
}