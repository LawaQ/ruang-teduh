export type StoryTone = "sand" | "dusk" | "ink" | "clay" | "sage";
export type StoryMotif = "sunset" | "rain" | "lamp" | "city" | "garden" | "train";

export type Story = {
  id: string;
  title: string;
  genre: string;
  minutes: number;
  tone: StoryTone;
  motif: StoryMotif;
  excerpt: string;
  line: string;
  href?: string;
};

export const STORIES: Story[] = [
  {
    id: "teh-akhir-sore",
    title: "Teh di Akhir Sore",
    genre: "Hangat",
    minutes: 12,
    tone: "sand",
    motif: "sunset",
    excerpt:
      "Seorang pewaris kedai teh kecil memutuskan menutup kedainya — lalu seorang pelanggan lama datang menanyakan seduhan yang tidak pernah ada di menunya.",
    line: "Ada resep yang hanya bisa dibuat sekali dalam seumur hidup, ketika seseorang masih mau menunggu.",
  },
  {
    id: "surat-untuk-hujan",
    title: "Surat untuk Hujan",
    genre: "Sunyi",
    minutes: 9,
    tone: "dusk",
    motif: "rain",
    excerpt:
      "Rina menulis surat kepada musim hujan setiap tahun, dan tahun ini balasannya datang melalui tukang pos yang salah alamat.",
    line: "Hujan tidak pernah meminta kita bersiap; ia hanya datang, dan kita belajar menyediakan tempat.",
  },
  {
    id: "penjaga-lentera",
    title: "Penjaga Lentera",
    genre: "Sunyi",
    minutes: 15,
    tone: "ink",
    motif: "lamp",
    excerpt:
      "Di ujung dermaga terakhir, seorang lelaki menyalakan lentera untuk kapal-kapal yang sudah lama tidak kembali.",
    line: "Mungkin lentera terakhir bukan untuk mereka yang berlayar, tetapi untuk kita yang menunggu.",
  },
  {
    id: "kota-yang-tidur",
    title: "Kota yang Tidur Pukul Sembilan",
    genre: "Rindu",
    minutes: 11,
    tone: "clay",
    motif: "city",
    excerpt:
      "Seorang pedagang keliling mencatat semua jendela yang masih menyala di kota kecilnya, lalu menjual catatan itu sebagai cerita.",
    line: "Kota tidak tidur; ia hanya menurunkan suaranya supaya kita bisa mendengar diri sendiri.",
  },
  {
    id: "taman-tanpa-nama",
    title: "Taman Tanpa Nama",
    genre: "Hangat",
    minutes: 8,
    tone: "sage",
    motif: "garden",
    excerpt:
      "Dua tetangga berebut batas pagar selama dua puluh tahun, sampai seekor kucing memilih tidur tepat di tengahnya.",
    line: "Yang tumbuh di antara dua pagar tidak pernah tahu mana yang harus ia ikuti.",
  },
  {
    id: "rel-ke-timur",
    title: "Kereta Terakhir ke Timur",
    genre: "Rindu",
    minutes: 14,
    tone: "sand",
    motif: "train",
    excerpt:
      "Di gerbong kosong, seorang mahasiswa menemukan buku catatan yang halamannya berisi surat untuk orang yang belum pernah ia temui.",
    line: "Setiap perjalanan punya satu stasiun yang tidak dicantumkan di tiket.",
  },
];

export const GENRES = ["Semua", "Hangat", "Sunyi", "Rindu"] as const;

export const THEMES = [
  { id: "malam", label: "Sudah larut", count: "4 cerita", note: "Untuk dibaca saat rumah mulai sunyi." },
  { id: "perjalanan", label: "Dalam perjalanan", count: "3 cerita", note: "Pendek-pendek, pas untuk satu kali duduk." },
  { id: "pelan", label: "Baca pelan", count: "5 cerita", note: "Cerita yang lebih enak dibaca dua kali." },
] as const;

export const TONES: Record<StoryTone, string> = {
  sand: "var(--color-tone-sand)",
  dusk: "var(--color-tone-dusk)",
  ink: "var(--color-tone-ink)",
  clay: "var(--color-tone-clay)",
  sage: "var(--color-tone-sage)",
};
