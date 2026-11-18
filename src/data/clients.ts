import type { Client } from '~/types';

/**
 * Logos for the marquee strip. Each entry draws on a 24×24 viewBox with
 * `fill="none" stroke="currentColor" stroke-width="1.8"`, so a simple
 * path or a couple of shapes is all you need.
 */
export const clients: Client[] = [
  // 1. Kurva Distribusi Normal (Bell Curve) - Ikon utama Statistika
  { name: 'Statistika', shape: '<path d="M3 19c4 0 5-13 9-13s5 13 9 13"/><path d="M12 6v13"/>' },

  // 2. Diagram Batang (Bar Chart) - Visualisasi Data
  { name: 'Data Viz', shape: '<path d="M5 19v-6M10 19V7M15 19v-9M20 19V5"/>' },

  // 3. Simbol Sigma (Σ) - Penjumlahan / Notasi Statistik
  { name: 'Analisis', shape: '<path d="M18 5H6l6 7-6 7h12"/>' },

  // 4. Diagram Venn - Probabilitas & Himpunan
  { name: 'Probabilitas', shape: '<circle cx="9.5" cy="12" r="5.5"/><circle cx="14.5" cy="12" r="5.5"/>' },

  // 5. Scatter Plot & Garis Regresi Linear
  { name: 'Regresi', shape: '<path d="M4 18L20 6"/><circle cx="7" cy="12" r="1.2"/><circle cx="12" cy="15" r="1.2"/><circle cx="16" cy="7" r="1.2"/>' },

  // 6. Diagram Lingkaran (Pie Chart)
  { name: 'Riset Data', shape: '<circle cx="12" cy="12" r="8.5"/><path d="M12 3.5V12l6 6"/>' },

  // 7. Simbol Pi (π) atau Integral / Fungsi Matematika
  { name: 'Matematika', shape: '<path d="M5 7h14M9 7v11M15 7v8.5c0 1.5 1 2.5 2.5 2.5"/>' },
];

export const clientsLabel = 'Universitas Cendrawasih';
