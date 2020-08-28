const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  devServer: {
    proxy: {
      '/': {
        target: 'http://192.168.5.4:8080',
        changeOrigin: true
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  }
}
