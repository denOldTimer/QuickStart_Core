let Encore = require('@symfony/webpack-encore')
const CopyWebpackPlugin = require('copy-webpack-plugin')

Encore
  .setOutputPath('dist/')
  .setPublicPath('/')
  .cleanupOutputBeforeBuild()
  .disableSingleRuntimeChunk()
  .enableSassLoader(function (sassOptions) {}, {
    resolveUrlLoader: false
  })
  .enablePostCssLoader((options) => {
    options.config = {
      path: 'postcss.config.js'
    }
  })
  .autoProvidejQuery({
    $: 'jquery',
    jQuery: 'jquery',
    'window.jQuery': 'jquery'
  })
  .addEntry('js/app', './src/js/app.js')
  .addStyleEntry('css/app', ['./src/scss/app.scss'])
  .addPlugin(new CopyWebpackPlugin([
    // copies to {output}/static
    {
      from: 'src',
      to: '../dist',
      toType: 'dir',
      ignore: ['*.js', '*.scss']
    }
  ]))
  // enables hashed filenames (e.g. app.abc123.css)
  // .enableVersioning(!Encore.isProduction())
  .enableBuildNotifications()
// .enableSourceMaps(!Encore.isProduction())

module.exports = Encore.getWebpackConfig()
