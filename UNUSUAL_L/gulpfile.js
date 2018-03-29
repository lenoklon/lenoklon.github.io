'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

gulp.task('sass', function () {
  gulp.src('./sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.reload({stream: true}))
});

/*browser-sync*/
gulp.task('browser-sync', function(){
    return browserSync({
        server: {
            baseDir: '.'
        },
        notify: false
    });
});
 
gulp.task('watch',['browser-sync', 'sass'], function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
  gulp.watch('./**/*.html').on('change', browserSync.reload);
  gulp.watch('./js/**/*.js', browserSync.reload);
});

