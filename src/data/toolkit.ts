import type { ToolkitItem } from '~/types';

export const toolkit: ToolkitItem[] = [
  {
    icon: 'layers',
    title: 'Pembersihan Data',
    detail: 'Cek nilai kosong, duplikat, dan anomali sejak awal sebelum angka dihitung lebih jauh.',
  },
  {
    icon: 'spark',
    title: 'Eksplorasi Statistik',
    detail: 'Baca distribusi, ringkasan ukuran, dan pola data secara jujur tanpa memaksa kesimpulan.',
  },
  {
    icon: 'motion',
    title: 'Visualisasi Data',
    detail: 'Ubah tabel padat menjadi grafik dan chart yang mudah dipahami tanpa menyesatkan pembaca.',
  },
  {
    icon: 'code',
    title: 'Excel & Spreadsheet',
    detail: 'Rumus terstruktur, validasi data, dan rekap yang gampang dicek ulang kapan saja.',
  },
  {
    icon: 'type',
    title: 'Python & Notebook',
    detail: 'Alur pengolahan terdokumentasi rapi agar langkah analisis bisa direplikasi dengan jelas.',
  },
  {
    icon: 'device',
    title: 'Web & Responsif',
    detail: 'Sajikan hasil analisis atau portofolio ke halaman web yang ringan dan rapi di berbagai layar.',
  },
  {
    icon: 'pen',
    title: 'Kontras & Keterbacaan',
    detail: 'Perhatikan kontras warna, tipografi, dan tata letak agar nyaman di mode terang maupun gelap.',
  },
  {
    icon: 'flag',
    title: 'Dokumentasi Rapi',
    detail: 'Catat definisi variabel, asumsi, dan batasan data agar mudah dipahami siapa pun yang membuka.',
  },
];

export const toolkitHeading = {
  eyebrow: 'ALUR & PERANGKAT KERJA',
  title: 'Tidak ada rumus misterius di balik layar.',
  intro:
    'Format file yang mudah dibuka ulang, alur kerja yang bisa dibaca bersama, dan hasil analisis yang bisa dipertanggungjawabkan—bukan sekadar angka rapi tanpa penjelasan.',
};