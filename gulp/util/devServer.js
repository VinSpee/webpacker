//Create this object outside of tasks so everyone can access it to invalidate.
var webpack          = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig    = require('../config/webpack.config.js');
var paths            = require('../config/paths.js');

var devServer = new WebpackDevServer(webpack(webpackConfig), {
  contentBase: paths.dest.app,
  hot: true,
  watchDelay: 100,
  noInfo: false
});

module.exports = devServer;
