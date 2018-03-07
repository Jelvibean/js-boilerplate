import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  debug: true,
  devtool: 'source-map', // was changed for production.
  noInfo: false,   // shows list of files being bundled.
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),  // changed it to dist since its popular convention.
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    //Create HTML file that includes reference to bundled JS.
    new HtmlWebpackPlugin({
        template: 'src/index.html',
        minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
        inject: true
    }),

    //Eliminate duplicate packages when generating bundles.
    new webpack.optimize.DedupePlugin(),

    //Mimify JS
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['style','css']}
    ]
  }
}
