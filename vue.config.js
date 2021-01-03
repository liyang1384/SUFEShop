module.exports = {
  outputDir: '../SUFEShopServer/dist',
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            'primary-color': '#13c2c2'
          },
          javascriptEnabled: true
        }
      }
    }
  }
}
