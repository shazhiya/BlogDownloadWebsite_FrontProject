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
            },
            '/upload': {
                target: 'http://29175vv342.zicp.vip',
                changeOrigin: true,
                pathRewrite: {
                    '^/upload': ''
                }
            }
        }
    }
}