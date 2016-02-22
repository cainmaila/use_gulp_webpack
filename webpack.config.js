var path = require('path');

module.exports = {
    entry: './src/demo.js',
    output: {
        // path: path.join(__dirname, 'build'),
        path: path.join(__dirname, 'www', 'js'),
        filename: 'bundle.js'
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