'use strict'

module.exports = {
  dev: {
    mode: "development",
    notifyOnErrors: true,
    //config.devtool="source-map", 这样会能完整的显示，但是会导致比较大
    devtool: "#cheap-module-eval-source-map",//推荐配置
    devServer: {
      port: 8080,
      host: '127.0.0.1',//可以通过localhost:127.0.0.1访问，也可以通过本机内网IP访问，因此可以通过其他电脑，手机等访问到
      overlay: {
        error: true,//让编译中出现的错误显示到网页上面
      },
      open: true,
      hot: true,
      quiet: true,
      clientLogLevel: 'info',
      historyApiFallback: true,
      publicPath: '/'
    }
  }
}