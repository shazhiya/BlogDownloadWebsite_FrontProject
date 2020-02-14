module.exports = {
  publicPath: './',
    devServer: {
      'host': 'localhost',
      'port': 8888,
        proxy: {
            '/blog': {
                target: 'http://w291753h42.goho.co/blog',
                changeOrigin: true,
                pathRewrite: {
                    '^/blog': ''
                }
            }
        }
    }
}