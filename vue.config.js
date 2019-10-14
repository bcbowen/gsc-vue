module.exports = {
  'transpileDependencies': [
    'vuetify'
  ],
  publicPath: process.env.NODE_ENV === 'production'
    ? '/gsc_beta/'
    : '/',
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => Object.assign(options, {
        transformAssetUrls: {
          'v-img': ['src', 'lazy-src'],
          'v-card': 'src',
          'v-card-media': 'src',
          'v-responsive': 'src',
          'v-carousel-item': 'src'
        }
      }))
  }
}
