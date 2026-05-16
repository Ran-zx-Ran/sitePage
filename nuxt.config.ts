export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n'],
  css: ['~/assets/css/main.css'],
  nitro: {
    preset: 'static',
    prerender: {
      crawlLinks: true
    }
  },
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://example.com'
    }
  },
  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'zh',
    langDir: 'locales',
    lazy: false,
    bundle: {
      optimizeTranslationDirective: false
    },
    locales: [
      { code: 'zh', iso: 'zh-CN', file: 'zh.json', name: '中文' },
      { code: 'en', iso: 'en-US', file: 'en.json', name: 'English' }
    ],
    detectBrowserLanguage: false
  },
  app: {
    pageTransition: { name: 'fade-slide' },
    layoutTransition: { name: 'fade-slide' },
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [{ name: 'format-detection', content: 'telephone=no' }]
    }
  }
})
