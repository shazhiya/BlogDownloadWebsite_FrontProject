module.exports = {
  publicPath: './',
    devServer: {
      'host': 'localhost',
      'port': 8888,
        proxy: {
            '/api': {
                target: 'http://192.168.43.101:8080',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}