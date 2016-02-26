var gulp = require('gulp');
var webpack = require('webpack-stream');
var gulpLivereload = require('gulp-livereload');
var gulpUglify = require('gulp-uglify');
var flatten = require('gulp-flatten');
var concat = require('gulp-concat');
var nodemon = require('gulp-nodemon'); 
gulp.task('copy', function() {
	// return gulp.src(['bower_components/**/dist/*.min.js','bower_components/**/*.min.js'])
	return gulp.src(['bower_components/**/dist/*.min.js','bower_components/**/*.min.js'])
		.pipe(flatten())
		.pipe(concat('vendors.js'))
		.pipe(gulp.dest('www/js'));
});

gulp.task('scripts', function() {
	return gulp.src('./xxx.js') //隨便打
		.pipe(webpack(require('./webpack.config.js')))
		// .pipe(gulpUglify())
		.pipe(gulp.dest('www/js/'))
		.pipe(gulpLivereload());
});
gulp.task('watch', function() {
	gulpLivereload.listen();
	gulp.watch(['src/*.js','www/*.ejs'], ['scripts']);
});

// nodemon 的配置
var nodemonConfig = {
    script : 'app/app.js',
    ignore : [
        "bower_components/**",
        "less/**",
        "www/**"
    ],
    env    : {
        "NODE_ENV": "development"
    }
};

gulp.task('app_dev', function () {
  nodemon(nodemonConfig)
    .on('restart', function () {
      console.log('restarted!')
    })
})

gulp.task('default', ['app_dev','scripts', 'watch']);