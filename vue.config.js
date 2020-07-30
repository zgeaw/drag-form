const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  productionSourceMap: false,
  publicPath: './',
  devServer: {
    port: 8080,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      '/cim6d': {
        target: 'http://172.16.10.123:22222',
        changeOrigin: true
      }
    }
  },
  configureWebpack: config => {
    let plugins = [
      new TerserPlugin({
        terserOptions: {
          compress: {
            warnings: false,
            drop_debugger: false,
            drop_console: true,
          },
        },
        sourceMap: false,
        parallel: true,
      })
    ]
    if (process.env.NODE_ENV !== 'development') {
      config.plugins = [...config.plugins, ...plugins]
    }
  }
}