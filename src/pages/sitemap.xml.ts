import type { APIRoute } from 'astro';
import { getCeritaPublik } from '../lib/cerita';
import { site } from '../lib/site';

export const GET: APIRoute = async () => {
  const list = await getCeritaPublik();
  const staticPaths = ['/', '/arsip', '/tentang'];
  const urls = [
    ...staticPaths.map((path) => ({ loc: `${site.url}${path === '/' ? '/' : path}`, priority: path === '/' ? '1.0' : '0.7' })),
    ...list.map((c) => ({ loc: `${site.url}/cerita/${c.id}`, priority: '0.8' })),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <priority>${u.priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
