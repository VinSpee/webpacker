var gulp                    = require('gulp');
var paths                   = require('../config/paths.js');
var webpackProductionConfig = require('../config/webpack.production.config.js');
var webpack                 = require('webpack');
var webpackConfig           = require('../config/webpack.config.js');
var devCompiler             = webpack(webpackConfig);
var gutil                   = require('gulp-util');
var devServer = require('../util/devServer.js');


gulp.task('webpack:build', function(callback) {
  return webpack(webpackProductionConfig, function(err, stats) {
    if (err) {
      throw new gutil.PluginError('webpack:build', err);
    }
    gutil.log('[webpack:build]', stats.toString({
      colors: true
    }));
    callback();
  });
});

gulp.task('webpack:build-dev', function(callback) {
  devCompiler.run(function(err, stats) {
    if (err) {
      throw new gutil.PluginError('webpack:build-dev', err);
    }
    gutil.log('[webpack:build-dev]', stats.toString({
      colors: true
    }));
    callback();
  });
});

gulp.task('webpack-dev-server', function(callback) {
  var touch = require('touch');
  touch.sync(paths.dest.main_style, {
    time: new Date(0)
  });
  devServer.listen(1337, '0.0.0.0', function(err) {
    if (err) {
      throw new gutil.PluginError('webpack-dev-server', err);
    }
    gutil.log('[webpack-dev-server]', 'http://localhost:1337');
    return callback();
  });
});
