const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
      ? '/testing/'
      : '/',
  outputDir: 'testing',
  configureWebpack: {
    resolve: {
      modules: [
        "node_modules",
        path.resolve(__dirname, "app")
      ],
      alias: {
        '@': path.resolve(__dirname, '/src'),
      }
    }
  }
}