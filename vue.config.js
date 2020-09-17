module.exports = {
  // 转译 vuetify 包
  'transpileDependencies': [
    'vuetify'
  ],
  // 修改公共资源为相对路径，避免gh-pages访问404
  publicPath: './',
  // eslint-编译时语法检查
  lintOnSave: false,

  devServer: {
    // 浏览器是否自动打开
    open: false,
    // 配置跨域代理
    proxy: {
      '/api': {
        target: 'https://api.zhuishushenqi.com',
        pathRewrite: { '^/api': '' },
        ws: true,
        changeOrigin: true
      }
    }
  }
}
