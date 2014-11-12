var gulp = require('gulp');
gulp.task('pages', function() {
  var $     = require('gulp-load-plugins')();
  var paths = require('../config/paths.js');
  return gulp.src(paths.source.pages)
    .pipe(gulp.dest(paths.dest.app))
    .pipe($.size());
});
