import { NextResponse } from 'next/server';

// Mock data for sitemap URLs - in production, this would come from your CMS/database
const staticPages = [
  { url: '/', lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
  { url: '/about', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
  { url: '/services', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
  { url: '/services/web-development', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  { url: '/services/mobile-development', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  { url: '/services/cloud-solutions', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  { url: '/services/ai-solutions', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  { url: '/services/cybersecurity', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  { url: '/solutions', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
  { url: '/solutions/industry', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  { url: '/solutions/technology', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  { url: '/blog', lastModified: new Date(), changeFrequency: 'daily', priority: 0.8 },
  { url: '/careers', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
  { url: '/contact', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
];

const blogPosts = [
  { slug: 'ai-transformation-2024', lastModified: new Date('2024-01-15'), priority: 0.7 },
  { slug: 'cloud-security-best-practices', lastModified: new Date('2024-01-12'), priority: 0.6 },
  { slug: 'microservices-architecture-guide', lastModified: new Date('2024-01-10'), priority: 0.6 },
  { slug: 'data-analytics-transformation', lastModified: new Date('2024-01-08'), priority: 0.6 },
  { slug: 'quantum-computing-enterprise', lastModified: new Date('2024-01-05'), priority: 0.5 },
  { slug: 'devsecops-implementation', lastModified: new Date('2024-01-03'), priority: 0.5 },
];

export async function GET() {
  // Generate URLs for all languages
  const locales = ['en', 'hi', 'es', 'de', 'fr', 'ja'];
  const baseUrl = 'https://trionex.tech';

  const urls = [];

  // Add static pages for each language
  for (const locale of locales) {
    for (const page of staticPages) {
      urls.push({
        loc: `${baseUrl}/${locale}${page.url}`,
        lastmod: page.lastModified.toISOString(),
        changefreq: page.changeFrequency,
        priority: page.priority,
      });
    }

    // Add blog posts for each language
    for (const post of blogPosts) {
      urls.push({
        loc: `${baseUrl}/${locale}/blog/${post.slug}`,
        lastmod: post.lastModified.toISOString(),
        changefreq: 'monthly',
        priority: post.priority,
      });
    }
  }

  // Generate XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}

