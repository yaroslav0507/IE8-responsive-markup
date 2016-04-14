'use strict';

var gulp = require('gulp');

gulp.task('watch', function(){
    gulp.watch('client/src/**/*.js', ['scripts']);
    gulp.watch(['client/**/*.scss','client/src/**/*.scss'], ['sprites', 'styles']);
    gulp.watch('client/**/*.html', ['html', 'scripts']);
});