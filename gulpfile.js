var gulp = require('gulp');
var concat = require('gulp-concat');
 
// JS concat, strip debugging and minify
gulp.task('scripts', function() {
  gulp.src(
  	[
	  	'./client/components/knockout/dist/knockout.js',
	  	'./client/components/reqwest/reqwest.js',
	  	'./client/viewmodels/app.js'
	])
	.pipe(concat('script.js'))
    .pipe(gulp.dest('./client/'));
});

gulp.task('default', ['scripts'], function() {
  // watch for JS changes
  gulp.watch('./client/viewmodels/*.js', function() {
    gulp.run('scripts');
  });
});