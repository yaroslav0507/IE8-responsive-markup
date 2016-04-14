'use strict';

gulp.task('images', function(){
    return gulp.src([
        'client/images/**/*.*',
        '!client/images/icons/*.*'
    ])
        .pipe(gulp.dest('dist/images'));
});