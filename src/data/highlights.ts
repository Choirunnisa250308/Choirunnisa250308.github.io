/**
 * Copy blocks for the homepage sections that are one-of-a-kind.
 * Longer, repeating content lives in its own data file or content
 * collection instead.
 */

export const hero = {
  greeting: 'Hai. Nama saya',
  /** Rendered on two lines. */
  nameLines: ['CHOIRUNNISA'],
  intro:
    'Mahasiswi Statistika di Universitas Cenderawasih yang tertarik mengolah data kompleks menjadi wawasan visual yang jelas, terstruktur, dan mudah dipahami.',
  ctaLabel: 'Book a call',
  ctaHref: '/contact/',
  photo: {
    src: '/images/hero-portrait.webp',
    alt: 'Robin Vale, art director, photographed against a plain studio wall',
    width: 960,
    height: 1210,
  },
  aside: {
    roleLine: ['Angkatan 2026 • S1 Statistika', 'Universitas Cenderawasih'],
    title: ['Matematika'],
    /** Small avatar stack — decorative, so the images carry empty alt text. */
    stack: ['/images/avatar-02.webp', '/images/avatar-01.webp', '/images/avatar-03.webp'],
    stackBadge: '100%',
    kpi: '3',
    kpiLabel: 'Project',
    //note: 'Working across nine time zones',
  },
};

export const collaborate = {
  eyebrow: 'KOLABORASI & RISET DATA',
  title: 'Kebanyakan data awalnya datang sebagai angka mentah yang membingungkan.',
  body: 'Kirimkan dataset atau pertanyaan penelitianmu, dan saya akan bantu menyusun pendekatan analisis yang paling tepat-jujur, terstruktur, dan mudah dipahami sebelum kita mulai bekerja sama.',
  badge: 'S1 Statistika Universitas Cendrawasih',
  ctaLabel: 'Kirim Detail Proyek',
  ctaHref: '/contact/',
  /**
   * The staggered pair beside the copy. Swap these for the bundled SVG
   * mockups (`BookletMock`, `TabletMock` in src/components/art/) if you would
   * rather show artwork than photography — see the README.
   */
  images: [
    {
      src: '/images/collab-team.webp',
      alt: 'Two colleagues standing in a bright office, reviewing work together on a tablet',
      width: 760,
      height: 760,
    },
    {
      src: '/images/collab-meeting.webp',
      alt: 'Two colleagues talking over an open laptop at a meeting table',
      width: 760,
      height: 760,
    },
  ],
};

export const about = {
  eyebrow: 'TENTANG SAYA',
  title: 'Mengubah angka mentah menjadi cerita yang jelas dan dapat dipercaya.',
  body: 'Saya adalah Choirunnisa, mahasiswi Statistika di Universitas Cenderawasih yang tertarik pada pengolahan data, analisis kuantitatif, dan visualisasi informasi. Bagi saya, data yang rapi dan jujur membantu kita memahami realitas di balik angka—mulai dari latihan analisis di Excel dan Python hingga penyusunan laporan yang runtut.',
  points: [
    'Terbiasa melakukan pengecekan dan pembersihan data sejak tahap awal agar hasil analisis tetap akurat.',
    'Mengutamakan alur kerja yang terstruktur, mulai dari eksplorasi data hingga penyajian visual yang mudah dipahami.',
    'Terus belajar memperdalam metode statistika dan pemrograman data untuk menghasilkan insight yang relevan.',
  ],
  image: {
    src: '/images/about-studio.webp',
    alt: 'Designers arranging sticky notes and printed layouts across a studio table',
    width: 900,
    height: 954,
  },
  badge: {
    value: '2026',
    label: 'Mahasiswi S1 Statistika Universitas Cenderawasih — fokus pada analisis data dan pemrograman kuantitatif.',
  },
  ctaLabel: 'Lihat Projek Data',
  ctaHref: '/work/',
};



export const workHeading = {
  eyebrow: 'Selected work',
  title: 'Six projects, six different arguments.',
};

export const journalHeading = {
  eyebrow: 'Notebook',
  title: 'Things I keep having to explain.',
  ctaLabel: 'Every article',
  ctaHref: '/journal/',
};

export const cta = {
  title: 'Have you got something that deserves doing properly?',
  body: 'Tell me what is broken, who it is breaking for, and what happens if it stays that way. That is enough for me to come back with a scope and a number.',
  primaryLabel: 'Send the brief',
};
