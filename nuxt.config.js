export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  /*
  router: {
    base: '/naladchik_nuxt/'
  },
  */
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'naladchik02.ru',
    titleTemplate: '%s - Энергоинжиниринг',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 
        hid: 'description', 
        name: 'description', 
        content: 'Пуско-наладочные работы в области энергетики и автоматизации энергообъектов.' 
      },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/android-chrome-192x192.png' },
      { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/android-chrome-512x512.png' },
      { rel: 'manifest', href: '/site.webmanifest' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
  ],

  bootstrapVue: {
    icons: true
  },
  
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
