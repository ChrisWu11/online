const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  productionSourceMap:false,
  lintOnSave: false,
  publicPath:'./',
  transpileDependencies: true,
  devServer: {
    proxy: 'http://localhost:5000',
    // changeOrigin: true,
  }
})
