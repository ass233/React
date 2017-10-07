var path = require('path');
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


var config = {
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: 'dist',
        inline: true,
        port: 8080,
        stats: {
            colors: true
        }
    },
    module: {//webpack2.x或者3.x写法
        rules: [
          {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        },{
            test: /\.less$/,
            use: ExtractTextPlugin.extract({
              fallback: "style-loader",
              use:['css-loader', 'less-loader' ]
            })
        }
      ]
    },
    plugins: [
        new htmlWebpackPlugin({
            title: '搭建前端工作流',
            template: './src/index.html'
        }),
        new OpenBrowserPlugin({ url: 'http://localhost:8080' }),
        new ExtractTextPlugin("styles.css"),

    ]
}

module.exports = config;
