var gulp = require('gulp');
var webpack = require('webpack-stream');
var gulpLivereload = require('gulp-livereload');
var gulpUglify = require('gulp-uglify');
gulp.task('scripts', function() {
	return gulp.src('./xxx.js') //隨便打
		.pipe(webpack(require('./webpack.config.js')))
		.pipe(gulpUglify())
		.pipe(gulp.dest('www/js/'))
		.pipe(gulpLivereload());
});
gulp.task('watch', function() {
	gulpLivereload.listen();
	gulp.watch('src/*.js', ['scripts']);
});
gulp.task('default', ['scripts', 'watch']);