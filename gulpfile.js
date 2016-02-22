var gulp = require('gulp');
var webpack = require('webpack-stream');
gulp.task('default', function() {
  return gulp.src('./xxx.js') //隨便打
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('www/js/'));
});