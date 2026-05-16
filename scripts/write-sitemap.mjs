import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const siteUrl = (process.env.NUXT_PUBLIC_SITE_URL || 'https://example.com').replace(/\/$/, '')

const baseRoutes = ['/', '/about', '/developmentHistory', '/contactUs', '/industryApplication']

const routes = [...baseRoutes, ...baseRoutes.map((r) => (r === '/' ? '/en' : `/en${r}`))]

const xml =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  routes
    .map((path) => {
      const loc = `${siteUrl}${path}`.replace(/\/$/, '') || siteUrl
      return `  <url><loc>${loc}</loc></url>`
    })
    .join('\n') +
  `\n</urlset>\n`

const root = fileURLToPath(new URL('..', import.meta.url))
const outFile = join(root, 'public', 'sitemap.xml')
await mkdir(dirname(outFile), { recursive: true })
await writeFile(outFile, xml, 'utf8')
