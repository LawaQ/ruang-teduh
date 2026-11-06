import type { APIRoute } from 'astro';
import { getCeritaPublik, formatTanggal } from '../lib/cerita';
import { site } from '../lib/site';

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export const GET: APIRoute = async () => {
  const list = await getCeritaPublik();

  const items = list
    .map((c) => {
      const link = `${site.url}/cerita/${c.id}`;
      return `    <item>
      <title>${escapeXml(c.data.title)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${c.data.tanggal.toUTCString()}</pubDate>
      <description>${escapeXml(c.data.cuplikan)}</description>
    </item>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(site.nama)}</title>
    <link>${site.url}</link>
    <description>${escapeXml(site.deskripsi)}</description>
    <language>id</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${site.url}/rss.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
    },
  });
};
