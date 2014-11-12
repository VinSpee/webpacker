var paths              = require('./paths.js');
var path               = require('path');
var webpack            = require('webpack');
var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

module.exports = {
  entry: {
    app: [
      paths.source.main_script
    ],
    //landingPage: './src/scripts/LandingPageEntry'
  },
  devtool: 'source-map',
  output: {
      path: path.join(__dirname, "../../", paths.dest.app),
      filename: "[name].bundle.js",
      chunkFilename: "[id].chunk.js"
  },
  resolveLoader: {
    modulesDirectories: ['..', 'node_modules']
  },
  plugins: [
    new webpack.DefinePlugin({
      // This has effect on the react lib size.
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new webpack.IgnorePlugin(/vertx/),
    new webpack.IgnorePlugin(/un~$/),
    new CommonsChunkPlugin("commons.js"),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      { test: /\.css$/, loaders: ['style', 'css']},
      { test: /\.jsx$/, loaders: ['jsx']}
    ]
  }
};
