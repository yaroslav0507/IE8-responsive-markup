'use strict';

var seq = require('sequence-stream');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var plumber = require('gulp-plumber');


gulp.task('scripts', function(){

    var vendors = gulp.src(config.paths.src.vendors.scripts, {base: 'vendors'});
    var app = gulp.src(config.paths.src.components , {base: 'src'});

    // Combine all the streams
    return seq([vendors, app])
        .pipe(sourcemaps.init())
        .pipe(concat('app.js'))
        .pipe(sourcemaps.write('maps', {sourceRoot: '/client'}))
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream());
});

