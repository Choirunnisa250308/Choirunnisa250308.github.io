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
  eyebrow: 'LATAR BELAKANG & FILOSOFI',
  title: 'Sepuluh dataset pertama mengajarkan saya satu pelajaran yang sama: ketelitian adalah segalanya.',
  body: 'Sebagai mahasiswi statistika, saya terbiasa menggali makna di balik angka-angka mentah yang terlihat rumit. Alih-alih hanya menebak-nebak, saya fokus merumuskan pertanyaan yang tepat sejak awal, menguji hipotesis dengan cermat, dan mendampingi analisis sampai menghasilkan wawasan yang akurat.',
  points: [
    'Saya memastikan kebersihan data (data cleaning) sebelum melakukan pemodelan apa pun.',
    'Setiap analisis dikerjakan secara terstruktur dari awal hingga visualisasi akhir—tanpa ada langkah yang dilewati.',
    'Jika ada anomali atau kesalahan asumsi pada data, Anda akan mengetahuinya sebelum kesimpulan ditarik.',
  ],
  image: {
    src: '/images/about-studio.webp',
    alt: 'Designers arranging sticky notes and printed layouts across a studio table',
    width: 900,
    height: 954,
  },
  badge: {
    value: '2026',
    label: 'Mahasiswi Statistika Universitas Cenderawasih yang fokus pada analisis data dan pemodelan kuantitatif.',
  },
  ctaLabel: 'Lihat Projek Data',
  ctaHref: '/work/',
};

export const servicesHeading = {
  eyebrow: 'Engagements',
  title: 'Six ways to put me to work.',
  ctaLabel: 'Ask for a scope',
  ctaHref: '/contact/',
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
