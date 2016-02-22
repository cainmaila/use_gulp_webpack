var path = require('path');

module.exports = {
    // devtool: "source-map",
    // entry: './src/demo.js',
    entry: {
        app:'./src/demo.js'
    },
    output: {
        // path: path.join(__dirname, 'build'),
        path: path.join(__dirname, 'www', 'js'),
        // filename: 'bundle.js'
        filename: '[name].js'
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
    }
};