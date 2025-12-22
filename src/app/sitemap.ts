import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://pivotaltech.solutions';
  
  // Static pages
  const routes = [
    '',
    '/about',
    '/services',
    '/portfolio',
    '/contact',
    '/blogs',
    '/ai-machine-learning',
    '/cloud-solutions',
    '/cybersecurity',
    '/digital-transformation',
    '/web-development',
    '/privacy',
    '/terms',
    '/cookies',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
}
