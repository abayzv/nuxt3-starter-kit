// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    'nuxt-icon',
    '@vueuse/nuxt',
    '@formkit/auto-animate',
    '@nuxtjs/tailwindcss',
  ],
})