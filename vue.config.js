const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
    host: '0.0.0.0',
    // https:true,
    port: 8080,
    client: {
      webSocketURL: 'ws://0.0.0.0:8080/ws',
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    // proxy: {
    //   'api': {
    //     target: 'http://localhost:8080',
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '/api': ''
    //     }
    //   }
    // },
    // transpileDependencies: true
  }
})
