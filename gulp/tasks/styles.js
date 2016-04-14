'use strict';

var sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    seq = require('sequence-stream'),
    cssGlobbing = require('gulp-css-globbing'),
    sourcemaps = require('gulp-sourcemaps'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer');

gulp.task('styles', function(){
    var processors = [
        autoprefixer({browsers: ['not ie <= 7']})
    ];

    var compile = gulp.src(['./client/scss/core.scss'], {base: 'app'})
        .pipe(cssGlobbing({
            extensions : ['.scss']
        }))
        .pipe(sass());


    var assets = gulp.src(config.paths.src.vendors.styles)
        .pipe(concat('assets.css'));

    // Combine all the streams
    return seq([assets, compile])
        .pipe(sourcemaps.init())
        .pipe(postcss(processors))
        .pipe(concat('app.css'))
        .pipe(sourcemaps.write('maps', {sourceRoot: '/client'}))
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream());

});
