# Ruang Teduh

Website kumpulan cerita pendek berbasis Astro (static). Desain tenang untuk bacaan pelan.

## Fitur

- Beranda editorial (hero, filter genre, kartu cerita, pratinjau)
- Halaman baca dengan estimasi waktu dan navigasi prev/next
- Arsip per tahun
- Tentang, 404, RSS, sitemap
- Draft tidak muncul di publik
- Konten lewat Markdown

## Menjalankan lokal

```bash
npm install
npm run dev
```

Buka `http://localhost:4321`.

## Deploy: GitHub + Vercel

1. Push repo ini ke GitHub (sudah siap).
2. Buka [vercel.com/new](https://vercel.com/new).
3. Import repository GitHub ini.
4. Biarkan default:
   - Framework: Astro
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Deploy.

Setelah dapat URL Vercel, sesuaikan domain di:

1. `astro.config.mjs` → `site`
2. `src/lib/site.ts` → `url`
3. `public/robots.txt` → baris Sitemap (jika ada)

## Identitas situs

Edit `src/lib/site.ts`:

- `nama` — nama situs
- `tagline` — subtitle
- `deskripsi` — deskripsi meta
- `email` — kontak (opsional)
- `url` — domain production

## Menambah cerita

Buat file di `src/content/cerita/nama-file.md`:

```md
---
title: "Judul"
tanggal: 2026-11-04
genre: "slice of life"
mood: "sunyi"
cuplikan: "Satu kalimat ringkas."
draft: false
---

Isi cerita...
```

`mood` valid: hangat, sunyi, gelap, tegang, lucu, melankolis.

`draft: true` = tidak muncul di beranda, arsip, RSS, sitemap.

## Desain

- Font: Fraunces (judul) + Karla (UI)
- Token di `src/styles/tokens.css`
