'use strict';

var spritesmith = require('gulp.spritesmith');

gulp.task('sprites', function(cb) {
    var done = {
        scss : false,
        img : false
    };

    var spriteData = gulp.src('./client/images/icons/*.png')
        .pipe(spritesmith({
            imgName: 'sprites.png',
            cssName: 'sprites.scss',
            cssVarMap: function(sprite) {
                sprite.name = 'sprite-' + sprite.name;
            },
            algorithm: 'binary-tree'
        }));

    spriteData.css
        .pipe(gulp.dest('./client/scss/components/'))
        .on('end', finish('scss'));

    spriteData.img
        .pipe(gulp.dest('./dist/'))
        .on('end', finish('img'));

    function finish (key) {
        return function () {
            done[key] = true;

            if (done.scss && done.img) {
                cb();
            }
        }
    }
});