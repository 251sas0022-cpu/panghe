export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  devtools: { enabled: true },

  ssr: true,

  nitro: {
    preset: 'github_pages'
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