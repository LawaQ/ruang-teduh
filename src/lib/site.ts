/** Identitas situs — ubah di satu tempat. */
export const site = {
  nama: "Ruang Teduh",
  tagline: "Bacaan pelan",
  deskripsi: "Kumpulan cerita pendek yang dibuat dengan tenang — untuk dibaca tanpa terburu-buru, di sela-sela hari.",
  penulis: "Mas Seto",
  email: "",
  // GitHub Pages project URL
  url: "https://lawaq.github.io/ruang-teduh",
} as const;

/** Base path GitHub Pages (harus diawali / dan diakhiri / di runtime Astro). */
export function withBase(path = ""): string {
  const base = import.meta.env.BASE_URL || "/";
  const clean = path.replace(/^\//, "");
  if (!clean) return base;
  return `${base}${clean}`;
}
