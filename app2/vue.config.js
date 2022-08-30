const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  configureWebpack: {
    output: {
      libraryTarget: 'system'
    }
  },
  transpileDependencies: true,
  chainWebpack: config => {
    config.optimization.delete('splitChunks'),
    config
        .plugin('module-federation-plugin')
        .use(require("webpack").container.ModuleFederationPlugin, [{
            name: 'app2',
            filename: 'remoteEntry.js',
            remotes: {
                "app1": `app1@http://localhost:8083/remoteEntry.js`
            },
            shared: [
                {
                    vue: {
                        eager: true,
                        singleton: false
                    }
                }
            ]
        }])
  }
})