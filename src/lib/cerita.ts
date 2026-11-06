import { getCollection, type CollectionEntry } from 'astro:content';

export type Cerita = CollectionEntry<'cerita'>;

/** Cerita publik saja, terbaru di atas. */
export async function getCeritaPublik(): Promise<Cerita[]> {
  const semua = await getCollection('cerita', ({ data }) => data.draft !== true);
  return semua.sort(
    (a, b) => b.data.tanggal.valueOf() - a.data.tanggal.valueOf(),
  );
}

export function formatTanggal(date: Date): string {
  return new Intl.DateTimeFormat('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
}

/** Estimasi menit baca dari plain text isi cerita (~225 kpm). */
export function estimasiBaca(teks: string): number {
  const kata = teks.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(kata / 225));
}

export function groupByTahun(list: Cerita[]): Map<number, Cerita[]> {
  const map = new Map<number, Cerita[]>();
  for (const item of list) {
    const tahun = item.data.tanggal.getFullYear();
    const bucket = map.get(tahun) ?? [];
    bucket.push(item);
    map.set(tahun, bucket);
  }
  return map;
}
