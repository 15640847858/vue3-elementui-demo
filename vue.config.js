const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8081,   // 修改为你需要的端口号
    open: true,   // 是否自动打开浏览器
    host: '0.0.0.0' // 允许局域网访问
  }
})
