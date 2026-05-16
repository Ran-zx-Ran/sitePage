import { toValue, type MaybeRefOrGetter } from 'vue'

export const usePageSeo = (key: MaybeRefOrGetter<string>) => {
  const route = useRoute()
  const { t, locale, locales } = useI18n()
  const switchLocalePath = useSwitchLocalePath()
  const config = useRuntimeConfig()

  useHead(() => {
    const k = toValue(key)
    const siteUrl = (config.public.siteUrl || '').replace(/\/$/, '') || 'https://example.com'
    const title = t(`seo.${k}.title`)
    const description = t(`seo.${k}.description`)
    const canonical = `${siteUrl}${route.fullPath}`.replace(/\/$/, '')
    const alternates = (locales.value || []).map((l: { code: string; iso?: string }) => {
      const href = switchLocalePath(l.code as 'zh' | 'en')
      return {
        hreflang: l.iso || l.code,
        href: `${siteUrl}${href}`.replace(/\/$/, '')
      }
    })
    return {
      title,
      meta: [
        { name: 'description', content: description },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:type', content: 'website' }
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
