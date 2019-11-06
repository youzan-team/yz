module.exports = {
  devServer: {
    proxy: {
      '/v4': {
        target: 'https://www.youzan.com/',
        changeOrigin: true
      },
      '/pizza': {
        target: 'https://h5.ele.me',
        changeOrigin: true
      }
    }
  }
}