var path = require('path');
var webpack = require('webpack');
var bower_components = path.resolve(__dirname, 'bower_components');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    // devtool: "source-map",
    // entry: './src/demo.js',
    entry: {
        app: './src/demo.js'
    },
    output: {
        // path: path.join(__dirname, 'build'),
        path: path.join(__dirname, 'www', 'js'),
        // filename: 'app.js'
        filename: '[hash:8][name].js',
        publicPath: "js/"
    },
    resolve: {
        // alias: {
        //     'jquery': path.resolve(bower_components, "jquery/dist/jquery.min.js"),
        //     'd3': path.resolve(bower_components, "d3/d3.min.js")
        // }
    },
    module: {
        loaders: [{
            loader: "babel-loader",
            test: /\.js$/,
            query: {
                presets: ['es2015']
            }
        }, {
            test: /\.less$/,
            loader: 'style!css!less'
        }]
    },
    plugins: [
        new HtmlWebpackPlugin(), // Generates default index.html 
        new HtmlWebpackPlugin({ // Also generate a test.html 
            filename: 'test.html',
            title:"cain test",
            template: 'www/tmp.ejs'
        })
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'app2',
        //     filename: "app2.js",
        //     minChunks: Infinity
        // })
        // new webpack.ProvidePlugin({
        //     $: "jquery",
        //     jQuery: "jquery",
        //     d3: "d3"
        // })
    ]
};