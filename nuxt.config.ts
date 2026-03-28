export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  devtools: { enabled: true },

  ssr: false,

  nitro: {
    preset: 'github_pages'
  },
  routeRules: {
    '/**': { prerender: true }
  },
  app: {
    baseURL: '/panghe/'
  },

  css: [
    '~/assets/css/tokens.css',
    '~/assets/style.css'
  ],

  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],

  modules: ['@nuxt/icon']
})