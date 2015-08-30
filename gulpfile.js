var gulp = require('gulp'),
	scss = require('gulp-sass');
	
gulp.task('scss', function(){
	gulp.src('./css/*.scss')
	.pipe(scss().on('error', scss.logError))
	.pipe(gulp.dest('./css'));
});

gulp.task('scss-watch', function(){
	gulp.watch('./css/*.scss', ['scss']);
});

gulp.task('default', ['scss-watch']);
	