const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

//whatwg-fetch is a fetch promise polyfill for IE
module.exports = {
    entry: {
        polyfills: './src/polyfills.js',
        app: './src/app.js'
    },
     output: {
         path: path.resolve(__dirname, 'build'),
         filename: "[name].bundle.js"
    },
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: "/node_modules/",
            loader: 'babel-loader',
            query: {
                presets: ['env','stage-0']
            }
        }]
    },
    plugins: [  
        new CleanWebpackPlugin(['build']),     
        new HtmlWebpackPlugin({              
            template: './src/index.html',
            inject: 'body'
        })]        
};