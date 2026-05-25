export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n'],
  css: ['~/assets/css/main.css'],
  nitro: {
    preset: 'static',
    prerender: {
      crawlLinks: true
    },
    compressPublicAssets: {
      gzip: true,
      brotli: true,
      quality: 6
    },
    routeRules: {
      '/**': {
        headers: {
          'cache-control': 'public, max-age=31536000, immutable',
          'Vary': 'Accept-Encoding'
        }
      }
    }
  },
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://www.tjbeixiang.com',
      baiduVerificationCode: process.env.NUXT_PUBLIC_BAIDU_VERIFICATION || '',
      baiduAnalyticsId: process.env.NUXT_PUBLIC_BAIDU_ANALYTICS_ID || ''
    }
  },
  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'zh',
    langDir: 'locales',
    lazy: true,
    bundle: {
      optimizeTranslationDirective: true
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
      meta: [{ name: 'format-detection', content: 'telephone=no' }],
      link: [
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' }
      ]
    }
  }
})
