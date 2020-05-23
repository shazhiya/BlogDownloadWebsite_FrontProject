module.exports = {
  publicPath: './',
    devServer: {
      'host': 'localhost',
      'port': 8888,
        proxy: {
            '/blog': {
                target: 'http://192.168.43.106:8080/blog',
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
            },
            '/admin': {
                target: 'http://29175vv342.zicp.vip/admin',
                changeOrigin: true,
                pathRewrite: {
                    '^/admin': ''
                }
            },
        }
    }
}