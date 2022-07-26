module.exports = {
  lintOnSave: true,
  devServer: {
    open: true,
    proxy: {
      '/node': {
        target: 'localhost',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
}
