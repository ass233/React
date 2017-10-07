var path = require('path');
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
//var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var uglifyPlugin = webpack.optimize.UglifyJsPlugin;
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js?[hash]'
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
        },
        // {
        //   test:/\.less$/,
        //   use:['style-loader','css-loader','less-loader']
        // }
        {
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
        new uglifyPlugin({
          compress:false
        }),
        new webpack.BannerPlugin('作者：ass\n日期：2017-08-27'),
        new ExtractTextPlugin("styles.css"),
    ]
}

module.exports = config;
