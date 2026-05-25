import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const siteUrl = (process.env.NUXT_PUBLIC_SITE_URL || 'https://www.tjbeixiang.com').replace(/\/$/, '')
const today = new Date().toISOString().split('T')[0]

const pages = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/developmentHistory', priority: '0.8', changefreq: 'monthly' },
  { path: '/contactUs', priority: '0.8', changefreq: 'monthly' },
  { path: '/industryApplication', priority: '0.8', changefreq: 'monthly' },
  { path: '/products/shaft', priority: '0.9', changefreq: 'monthly' },
  { path: '/products/flange', priority: '0.9', changefreq: 'monthly' },
  { path: '/products/valve', priority: '0.9', changefreq: 'monthly' },
  { path: '/products/sheet-metal', priority: '0.9', changefreq: 'monthly' },
  { path: '/products/ai-automation', priority: '0.9', changefreq: 'monthly' },
  { path: '/cookies', priority: '0.3', changefreq: 'yearly' }
]

const locales = ['zh', 'en']

const urls = []
for (const page of pages) {
  for (const locale of locales) {
    let path = page.path
    if (locale !== 'zh') {
      path = page.path === '/' ? `/${locale}` : `/${locale}${page.path}`
    }
    urls.push({ ...page, path })
  }
}

const xml =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n` +
  `        xmlns:mobile="http://www.baidu.com/schemas/sitemap-mobile/1/">\n` +
  urls
    .map(({ path, priority, changefreq }) => {
      const loc = `${siteUrl}${path}`.replace(/\/$/, '') || siteUrl
      return [
        `  <url>`,
        `    <loc>${loc}</loc>`,
        `    <lastmod>${today}</lastmod>`,
        `    <changefreq>${changefreq}</changefreq>`,
        `    <priority>${priority}</priority>`,
        `    <mobile:mobile type="pc,mobile"/>`,
        `  </url>`
      ].join('\n')
    })
    .join('\n') +
  `\n</urlset>\n`

const root = fileURLToPath(new URL('..', import.meta.url))

const sitemapFile = join(root, 'public', 'sitemap.xml')
await mkdir(dirname(sitemapFile), { recursive: true })
await writeFile(sitemapFile, xml, 'utf8')
console.log(`✅ Sitemap written to public/sitemap.xml (${urls.length} URLs)`)

const robotsContent = [
  'User-agent: *',
  'Allow: /',
  '',
  'User-agent: Baiduspider',
  'Allow: /',
  '',
  `Sitemap: ${siteUrl}/sitemap.xml`
].join('\n')

const robotsFile = join(root, 'public', 'robots.txt')
await writeFile(robotsFile, robotsContent, 'utf8')
console.log(`✅ robots.txt written to public/robots.txt`)
