const path              = require('path');
const webpack           = require('webpack');
const webpackMerge      = require('webpackMerge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const base = {
    context: path.resolve(__dirname, '..'),
    entry: './src/index.js',
    output: {

    },
    module: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: 'asset',
        filename: '[name].js'
    }
};