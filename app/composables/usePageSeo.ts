import { toValue, type MaybeRefOrGetter } from 'vue'

export const usePageSeo = (key: MaybeRefOrGetter<string>) => {
  const route = useRoute()
  const { t, locale, locales } = useI18n()
  const switchLocalePath = useSwitchLocalePath()
  const config = useRuntimeConfig()

  useHead(() => {
    const k = toValue(key)
    const siteUrl = (config.public.siteUrl || '').replace(/\/$/, '') || 'https://www.tjbeixiang.com'
    const title = t(`seo.${k}.title`)
    const description = t(`seo.${k}.description`)
    const keywords = t(`seo.${k}.keywords`)
    const canonical = `${siteUrl}${route.fullPath}`.replace(/\/$/, '')
    const ogImage = `${siteUrl}/img/og-image.png`

    const alternates = (locales.value || []).map((l: { code: string; iso?: string }) => {
      const href = switchLocalePath(l.code as 'zh' | 'en')
      return {
        hreflang: l.iso || l.code,
        href: `${siteUrl}${href}`.replace(/\/$/, '')
      }
    })

    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: '天津市北翔机械有限公司',
      alternateName: '北翔机械',
      url: siteUrl,
      logo: `${siteUrl}/img/logo.png`,
      description: '天津市北翔机械有限公司（北翔机械），30年专注精密非标机械零部件加工，主营轴类、法兰、钣金件、不锈钢等多种金属零部件加工。拥有ISO9001/ISO3834焊接认证，服务西门子、维斯塔斯等企业。',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+86-022-86993965',
        contactType: 'customer service',
        email: 'sale@tjbeixiang.com'
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: '天津市北辰区',
        addressRegion: '天津',
        addressCountry: 'CN',
        streetAddress: '北辰科技园景观东路17号'
      }
    }

    return {
      title,
      meta: [
        { name: 'description', content: description },
        { name: 'keywords', content: keywords },
        { name: 'applicable-device', content: 'pc,mobile' },
        { name: 'renderer', content: 'webkit' },
        { name: 'baidu-site-verification', content: config.public.baiduVerificationCode || '' },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: canonical },
        { property: 'og:image', content: ogImage },
        { property: 'og:locale', content: locale.value === 'zh' ? 'zh_CN' : 'en_US' },
        { property: 'og:site_name', content: '天津北翔机械' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
        { name: 'twitter:image', content: ogImage }
      ],
      script: [
        { type: 'application/ld+json', innerHTML: JSON.stringify(jsonLd) }
      ],
      link: [
        { rel: 'canonical', href: canonical },
        ...alternates.map(a => ({ rel: 'alternate', href: a.href, hreflang: a.hreflang })),
        { rel: 'alternate', href: canonical, hreflang: 'x-default' }
      ],
      htmlAttrs: {
        lang: locale.value
      }
    }
  })
}
