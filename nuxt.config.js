export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  ssr: false,
  generate: {
    fallback: true,
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'BK template',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'description', content: 'bankruptcy website' },
      { name: 'robots', content: 'noindex, nofollow' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        src: '', // CTM script here!
        async: true,
      },
    ],
  },
  router: {
    middleware: ['geoControl', 'campControl'],
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  styleResources: {
    scss: ['assets/scss/main.scss'],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/noWidow.js' },
    { src: '~/plugins/displayPic.js' },
    { src: '~/plugins/haaForm.js' },
    { src: '~/plugins/markdown.js' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],
  gtm: {
    id: '', // GTM id here!
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/gtm', '@nuxtjs/style-resources'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
