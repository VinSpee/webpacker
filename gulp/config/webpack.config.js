var paths = require('./paths.js');
var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    "webpack-dev-server/client?http://0.0.0.0:1337",
    'webpack/hot/dev-server',
    paths.source.main_script
  ],
  devtool: "source-map",
  debug: true,
  output: {
    path: path.join(__dirname, "../../", paths.dest.app),
    filename: 'bundle.js'
  },
  resolveLoader: {
    modulesDirectories: ['node_modules']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.IgnorePlugin(/vertx/) // https://github.com/webpack/webpack/issues/353
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      { test: /\.css$/, loaders: ['style', 'css']},
      { test: /\.jsx$/, loaders: ['react-hot', 'jsx']}
    ]
  }
};
