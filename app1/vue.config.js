const federationConfig = require('./federation.config.json');


const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  configureWebpack: {
    output: {
      libraryTarget: 'system'
    }
  },
  chainWebpack: config => {
    config.optimization.delete('splitChunks');
    config
      .plugin('module-federation-plugin')
      .use(require('webpack').container.ModuleFederationPlugin, [{
        ...federationConfig,
        filename: "remoteEntry.js",
        shared: [
          {
            vue: {
              eager: true,
              singleton: false
            },
            vuetify: {
              eager: true,
              singleton: false
            }
          }
        ]
      }]);
  },
  transpileDependencies: [
    'vuetify'
  ]
})
