module.exports = {
  // 转译 vuetify 包
  'transpileDependencies': [
    'vuetify'
  ],
  // 修改公共资源为相对路径，避免gh-pages访问404
  publicPath: './',
  // eslint-编译时语法检查
  lintOnSave: true,

  devServer: {
    // 浏览器是否自动打开
    open: true,
    // 配置跨域代理
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3000',
        ws: true,
        changeOrigin: true
      }
    }
  }
}
