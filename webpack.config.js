var path = require('path');
var webpack = require('webpack');
var bower_components = path.resolve(__dirname, 'bower_components');
module.exports = {
    // devtool: "source-map",
    entry: {
        app: './src/demo.js',
        // vendors:[bower_components+'/jquery/dist/jquery.min.js',bower_components+'/d3/d3.min.js']
    },
    output: {
        path: path.join(__dirname, 'www','js'),
        publicPath:'js/',
        filename: '[name].js'
    },
    resolve: {
        alias: {
            'jquery': path.resolve(bower_components, "jquery/dist/jquery.min.js"),
            'd3': path.resolve(bower_components, "d3/d3.min.js")
        }
    },
    module: {
        noParse: [],
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
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
        }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'vendors',
        //     filename: "vendors.js",
        //     minChunks: Infinity
        // }),
        // new webpack.ProvidePlugin({
        //     $: "jquery",
        //     jQuery: "jquery",
        //     d3: "d3"
        // })
    ]
};