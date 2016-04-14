'use strict';

gulp.task('fonts', function(){
    return gulp.src([
        'client/vendors/bootstrap/fonts/*.*',
        'client/fonts/**/*.*'
    ])
        .pipe(gulp.dest('dist/fonts'));
});