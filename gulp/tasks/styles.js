var gulp = require('gulp');

gulp.task('styles', function() {
  var $                = require('gulp-load-plugins')();
  var paths            = require('../config/paths.js');
  var map              = require('map-stream');
  var autoprefixer     = require('autoprefixer-core');
  var calc             = require('postcss-calc');
  var colorFunction    = require('postcss-color-function');
  var gray             = require('postcss-color-gray');
  var colorHexAlpha    = require('postcss-color-hex-alpha');
  var customMedia      = require('postcss-custom-media');
  var customProperties = require('postcss-custom-properties');
  var fontVariant      = require('postcss-font-variant');
  var inline           = require('postcss-import');
  var devServer        = require('../util/devServer.js');
  var gutil            = require('gulp-util');
  //var nested           = require('postcss-nested');
  return gulp.src(paths.source.main_style)
    .pipe($.postcss([
      inline({
        path: ['node_modules/', 'src/styles/']
      }),
      //nested,
      customProperties(),
      calc(),
      customMedia(),
      gray(),
      colorHexAlpha(),
      colorFunction(),
      fontVariant(),
      //autoprefixer({ browsers: 'last 2 versions' })
    ]))
    .on('error', function(err) {
      return gutil.log(err);
    })
    .pipe($.size())
    .pipe(gulp.dest(paths.dest.styles))
    .pipe(map(function(a, cb) {
      console.log(devServer);
      if(devServer.invalidate != null) {
        devServer.invalidate();
      }
      return cb();
    }));
});
