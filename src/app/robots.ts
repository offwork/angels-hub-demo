import { type MetadataRoute } from 'next'
import { absolute } from '@/config/url'

export default function robots(): MetadataRoute.Robots {

  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/api/og/*'],
      disallow: ["/not-found", "/*?*"],
      crawlDelay: 60,
    },
    sitemap: absolute('sitemap.xml'),
  }
}
