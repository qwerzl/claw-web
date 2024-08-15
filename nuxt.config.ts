// https://nuxt.com/docs/api/configuration/nuxt-config
import * as process from 'node:process'

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxt/fonts',
    'shadcn-nuxt',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
  ],
  runtimeConfig: {
    // The private keys which are only available within server-side
    apiSecret: process.env.API_SECRET,
  },
})
