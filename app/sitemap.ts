import type { MetadataRoute } from 'next';
import { seoPages } from '@/lib/seo-pages';

const BASE_URL = 'https://tehnobehno.site';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ['/', '/contacts', '/privacy', '/terms'].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: path === '/' ? 1 : 0.8,
  }));

  const seoPages_entries = seoPages.map((page) => ({
    url: `${BASE_URL}/${page.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  return [...staticPages, ...seoPages_entries];
}
