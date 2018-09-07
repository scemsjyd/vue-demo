const webpack = require("webpack");
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const merge = require('webpack-merge')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HTMLPlugin = require('html-webpack-plugin')
const baseWebpackConfig = require('./webpack.base.config')
const config = require("../config/dev.env")
const portfinder = require('portfinder')
const utils = require('./utils')

const devWebpackConfig = merge(baseWebpackConfig, {

  // cheap-module-eval-source-map is faster for development
  devtool: config.dev.devtool,
  mode: config.dev.mode,
  // these devServer options should be customized in /config/index.js
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: true,
    hot: true,
    compress: true,
    host: process.env.HOST || config.dev.devServer.host,
    port: process.env.PORT || config.dev.devServer.port,
    open: config.dev.devServer.open,
    overlay: config.dev.devServer.overlay,
    publicPath: config.dev.devServer.publicPath,
    quiet: true // necessary for FriendlyErrorsPlugin
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(config.dev.mode)
      }
    }),
    new VueLoaderPlugin(),
    new HTMLPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin()
  ]
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.devServer.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${config.dev.devServer.host}:${port}`],
        },
        onErrors: config.dev.notifyOnErrors
        ? utils.createNotifierCallback()
        : undefined
      }))

      resolve(devWebpackConfig)
    }
  })
})
