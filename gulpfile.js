/*
  gulpfile.js
  ===========
  Rather than manage one giant configuration file responsible
  for creating multiple tasks, each task has been broken out into
  its own file in gulp/tasks. Any file in that folder gets automatically
  required by the loop in ./gulp/index.js (required below).

  To add a new task, simply add a new task file to gulp/tasks.
*/

require('./gulp');

var paths = require('./gulp/config/paths.js');
var gulp  = require('gulp');
var gutil = require('gulp-util');
var $     = require('gulp-load-plugins')();
var seq   = require('run-sequence');


gulp.task('default', function() {
  return gulp.start('watch');
});

gulp.task('build', ['webpack:build', 'styles']);

gulp.task('watch', function(cb) {
  seq(
    'pages',
    'webpack-dev-server',
    'styles',
    cb
  );
  return gulp.watch([paths.source.styles], ['styles']);
  //return gulp.watch(['assets/**'], ['copy-assets']);
});
