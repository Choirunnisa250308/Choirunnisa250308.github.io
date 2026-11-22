export type Lang = 'id' | 'en';

export type TranslationPair = readonly [id: string, en: string];

/**
 * A. KUNCI EKSPLISIT (opsional: pakai atribut data-i18n="nama.kunci" di HTML/Astro)
 */
export const KEYED_TRANSLATIONS: Record<Lang, Record<string, string>> = {
  id: {
    'nav.home': 'Beranda',
    'nav.about': 'Tentang Saya',
    'nav.work': 'Proyek',
    'nav.contact': 'Kontak',
    'btn.viewProjects': 'Lihat Projek Saya',
    'btn.darkMode': 'Mode Gelap',
    'btn.lightMode': 'Mode Terang',
    'ftr.explore': 'Jelajahi',
    'ftr.services': 'Layanan',
    'ftr.contact': 'Kontak',
    'ftr.copyright': 'Portofolio Statistika & Web.',
    'cta.eyebrow': 'TERBUKA UNTUK PROYEK KECIL, KOLABORASI RISET, & OLAH DATA.',
    'cta.title': 'Punya data atau ide proyek yang ingin dikerjakan dengan rapi?',
    'cta.cta': 'Hubungi saya',
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About Me',
    'nav.work': 'Work',
    'nav.contact': 'Contact',
    'btn.viewProjects': 'View My Projects',
    'btn.darkMode': 'Dark Mode',
    'btn.lightMode': 'Light Mode',
    'ftr.explore': 'Explore',
    'ftr.services': 'Services',
    'ftr.contact': 'Contact',
    'ftr.copyright': 'Statistics & Web Portfolio.',
    'cta.eyebrow': 'OPEN FOR SMALL PROJECTS, RESEARCH COLLABORATION, & DATA WORK.',
    'cta.title': 'Have data or a project idea that deserves to be done neatly?',
    'cta.cta': 'Get in touch',
  },
};

/**
 * B. HEADER, NAVIGASI, TOMBOL, BREADCRUMB, CTA & FOOTER
 */
export const HEADER_AND_FOOTER_PAIRS: readonly TranslationPair[] = [
  ['Beranda', 'Home'],
  ['Tentang Saya', 'About Me'],
  ['Tentang', 'About'],
  ['Proyek Saya', 'My Work'],
  ['Proyek', 'Work'],
  ['Kontak', 'Contact'],
  ['Jelajahi', 'Explore'],
  ['Layanan', 'Services'],
  ['Lihat Projek Saya', 'View My Projects'],
  ['Lihat Proyek Saya', 'View My Projects'],
  ['Mode Gelap', 'Dark Mode'],
  ['Mode Terang', 'Light Mode'],
  ['Portofolio Statistika & Web.', 'Statistics & Web Portfolio.'],
  ['Jayapura, Papua — Jarak Jauh / Hybrid', 'Jayapura, Papua — Remote / Hybrid'],
  ['WhatsApp / Telepon', 'WhatsApp / Phone'],
  ['Email Saya', 'My Email'],
  ['Kirim Detail Work', 'Send Project Details'],
  ['Kirim Detail Proyek', 'Send Project Details'],
  ['Hubungi saya', 'Get in touch'],
  ['Hubungi Saya', 'Get in Touch'],
  ['Kirim pesan', 'Send message'],
  ['Kirim Pesan', 'Send Message'],
  [
    'TERBUKA UNTUK PROYEK KECIL, KOLABORASI RISET, & OLAH DATA.',
    'OPEN FOR SMALL PROJECTS, RESEARCH COLLABORATION, & DATA WORK.',
  ],
  [
    'TERBUKA UNTUK WORK KECIL, KOLABORASI RISET, & OLAH DATA.',
    'OPEN FOR SMALL PROJECTS, RESEARCH COLLABORATION, & DATA WORK.',
  ],
  [
    'Punya data atau ide proyek yang ingin dikerjakan dengan rapi?',
    'Have data or a project idea that deserves to be done neatly?',
  ],
  [
    'Ceritakan kebutuhan data, latihan pengolahan angka, atau proyek kecil yang sedang kamu siapkan. Informasi singkat saja sudah cukup agar kita bisa saling bertukar gagasan dan langkah kerja.',
    'Share your data needs, numeric practice, or small project ideas. A brief note is enough so we can exchange ideas and next steps.',
  ],
  [
    'Mari olah data dan bangun proyek yang terarah.',
    'Let us process data and build focused projects.',
  ],
  [
    'Sampaikan tujuan proyek, jenis data, atau gambaran tugas yang ingin dikerjakan. Dengan alur yang jelas sejak awal, prosesnya jadi lebih tertata dan mudah dipahami.',
    'Share your project goals, data types, or task overview. With a clear flow from the start, the process becomes more structured and easy to follow.',
  ],
];

/**
 * C. HALAMAN BERANDA (/) — HERO, KOLABORASI DATA, ALUR & PERANGKAT KERJA, CATATAN
 */
export const HOME_PAGE_PAIRS: readonly TranslationPair[] = [
  ['Hai. Nama saya', 'Hi. My name is'],
  [
    'Mahasiswi Statistika di Universitas Cenderawasih yang tertarik mengolah data kompleks menjadi wawasan visual yang jelas, terstruktur, dan mudah dipahami.',
    'A Statistics student at Universitas Cenderawasih interested in turning complex data into clear, structured, and easy-to-understand visual insights.',
  ],
  [
    'Angkatan 2026 • S1 Statistika Universitas Cenderawasih',
    'Class of 2026 • Bachelor of Statistics, Universitas Cenderawasih',
  ],
  ['S1 Statistika Universitas Cenderawasih', 'Bachelor of Statistics, Universitas Cenderawasih'],
  ['Matematika', 'Mathematics'],
  ['3 Project', '3 Projects'],
  [
    'Terbuka untuk Work kecil, kolaborasi riset, & olah data.',
    'Open for small projects, research collaboration, & data work.',
  ],
  [
    'Terbuka untuk proyek kecil, kolaborasi riset, & olah data.',
    'Open for small projects, research collaboration, & data work.',
  ],
  ['KOLABORASI & RISET DATA', 'DATA COLLABORATION & RESEARCH'],
  [
    'Kebanyakan data awalnya datang sebagai angka mentah yang membingungkan.',
    'Most data starts out as confusing raw numbers.',
  ],
  [
    'Kirimkan dataset atau pertanyaan penelitianmu, dan saya akan bantu menyusun pendekatan analisis yang paling tepat—jujur, terstruktur, dan mudah dipahami sebelum kita mulai bekerja sama.',
    'Share your dataset or research question, and I will help structure the most suitable analytical approach—honest, structured, and easy to follow before we start working together.',
  ],
  ['ALUR & PERANGKAT KERJA', 'WORKFLOW & TOOLKIT'],
  [
    'Tidak ada rumus misterius di balik layar.',
    'No mysterious formulas behind the scenes.',
  ],
  [
    'Format file yang mudah dibuka ulang, alur kerja yang bisa dibaca bersama, dan hasil analisis yang bisa dipertanggungjawabkan—bukan sekadar angka rapi tanpa penjelasan.',
    'Re-openable file formats, shared workflows, and accountable analysis—not just neat numbers without explanation.',
  ],
  ['Pembersihan Data', 'Data Cleaning'],
  [
    'Cek nilai kosong, duplikat, dan anomali sejak awal sebelum angka dihitung lebih jauh.',
    'Check missing values, duplicates, and anomalies early before further calculations.',
  ],
  ['Eksplorasi Statistik', 'Statistical Exploration'],
  [
    'Baca distribusi, ringkasan ukuran, dan pola data secara jujur tanpa memaksa kesimpulan.',
    'Read distributions, summary metrics, and data patterns honestly without forcing conclusions.',
  ],
  ['Visualisasi Data', 'Data Visualization'],
  [
    'Ubah tabel padat menjadi grafik dan chart yang mudah dipahami tanpa menyesatkan pembaca.',
    'Turn dense tables into clear graphs and charts without misleading readers.',
  ],
  ['Excel & Spreadsheet', 'Excel & Spreadsheets'],
  [
    'Rumus terstruktur, validasi data, dan rekap yang gampang dicek ulang kapan saja.',
    'Structured formulas, data validation, and summaries easy to verify anytime.',
  ],
  ['Python & Notebook', 'Python & Notebooks'],
  [
    'Alur pengolahan terdokumentasi rapi agar langkah analisis bisa direplikasi dengan jelas.',
    'Well-documented processing flows so analytical steps can be clearly reproduced.',
  ],
  ['Web & Responsif', 'Responsive Web'],
  [
    'Sajikan hasil analisis atau portofolio ke halaman web yang ringan dan rapi di berbagai layar.',
    'Present analytical results or portfolios on lightweight web pages across screen sizes.',
  ],
  ['Kontras & Keterbacaan', 'Contrast & Readability'],
  [
    'Perhatikan kontras warna, tipografi, dan tata letak agar nyaman di mode terang maupun gelap.',
    'Mind color contrast, typography, and layout for comfort in both light and dark modes.',
  ],
  ['Dokumentasi Rapi', 'Clean Documentation'],
  [
    'Catat definisi variabel, asumsi, dan batasan data agar mudah dipahami siapa pun yang membuka.',
    'Record variable definitions, assumptions, and data limits so anyone opening it can follow.',
  ],
  [
    'Ruang belajar dan berkarya di bidang statistika, pengolahan data, dan pengembangan web. Lebih sedikit proyek namun lebih mendalam, pertanyaan yang lebih tajam sejak awal, serta hasil kerja yang rapi dan mudah dipahami siapa saja.',
    'A space for learning and building in statistics, data processing, and web development. Fewer projects with deeper focus, sharper early questions, and clean work anyone can follow.',
  ],
  [
    'Portofolio analisis data, pemrograman dasar, dan pembuatan situs web oleh mahasiswi Statistika Universitas Cenderawasih.',
    'Data analysis, foundational programming, and web development portfolio by a Statistics student at Universitas Cenderawasih.',
  ],
  ['Lihat semua proyek', 'View all work'],
  ['Jelajahi proyek', 'Explore work'],
  ['Lihat detail proyek', 'View project details'],
  ['Semua proyek', 'All projects'],
  ['Proyek pilihan', 'Selected work'],
  ['CATATAN & APRESIASI', 'NOTES & REFLECTIONS'],
  ['JEJAK PROSES', 'PROCESS TRAIL'],
  [
    'Dari latihan rutin hingga hasil yang siap dibagikan.',
    'From regular practice to work ready to share.',
  ],
  [
    'Hal-hal kecil yang bikin hasil kerja lebih rapi.',
    'Small details that make work cleaner.',
  ],
  ['Latihan Python & Logika Data', 'Python Practice & Data Logic'],
  [
    'Menyelesaikan puluhan soal Algoritma dan Pemrograman melatih ketelitian langkah demi langkah—dari list dan tuple hingga array NumPy yang jauh lebih ringkas.',
    'Solving dozens of Algorithm and Programming exercises trains step-by-step accuracy—from lists and tuples to much more compact NumPy arrays.',
  ],
  ['Kerapian Tabel & Rekap Data', 'Table Tidiness & Data Recap'],
  [
    'Data yang rapi sejak awal menghemat banyak waktu saat diolah. Rumus dan pengelompokan yang jelas membuat angka lebih mudah dibaca dan dicek ulang.',
    'Clean data from the start saves significant processing time. Clear formulas and groupings make numbers easier to read and double-check.',
  ],
  ['Arah Tujuan Jangka Panjang', 'Long-Term Direction'],
  [
    'Menuliskan rencana dan cita-cita ke depan—termasuk tekad berkarier di BPS—membantu menjaga fokus belajar agar setiap tugas punya makna yang jelas.',
    'Writing down future plans and goals—including a goal to build a career at BPS—helps keep study focus so every task has a clear purpose.',
  ],
  ['Mahasiswi Statistika Uncen', 'Statistics Student at Uncen'],
  ['Catatan Praktik Excel', 'Excel Practice Notes'],
  ['Pengolahan & Analisis Data', 'Data Processing & Analysis'],
  ['Esai Perencanaan Masa Depan', 'Future Planning Essay'],
  ['Refleksi Diri & Karier', 'Self & Career Reflection'],
];

/**
 * D. HALAMAN TENTANG SAYA (/about)
 */
export const ABOUT_PAGE_PAIRS: readonly TranslationPair[] = [
  [
    'Sejak awal belajar mengolah data dan membangun proyek sendiri, satu pelajaran yang sama terus berulang.',
    'From early data processing to building projects on my own, the same lesson keeps repeating.',
  ],
  [
    'Choirunnisa adalah mahasiswi Statistika Universitas Cenderawasih yang menekuni analisis data, pemrograman dasar, dan pengembangan web. Fokus pada proses yang lebih terarah, pertanyaan yang lebih tajam sejak awal, serta hasil kerja yang rapi dan mudah dipahami siapa saja.',
    'Choirunnisa is a Statistics student at Universitas Cenderawasih focusing on data analysis, foundational programming, and web development. Focused on structured processes, sharper early questions, and clean work anyone can follow.',
  ],
  [
    'Mengubah angka mentah menjadi cerita yang jelas dan dapat dipercaya.',
    'Turning raw numbers into clear and reliable stories.',
  ],
  [
    'Saya adalah Choirunnisa, mahasiswi Statistika di Universitas Cenderawasih yang tertarik pada pengolahan data, analisis kuantitatif, dan visualisasi informasi. Bagi saya, data yang rapi dan jujur membantu kita memahami realitas di balik angka—mulai dari latihan analisis di Excel dan Python hingga penyusunan laporan yang runtut.',
    'I am Choirunnisa, a Statistics student at Universitas Cenderawasih interested in data processing, quantitative analysis, and information visualization. To me, clean and honest data helps us understand the reality behind numbers—from analysis practice in Excel and Python to structured reports.',
  ],
  [
    'Terbiasa melakukan pengecekan dan pembersihan data sejak tahap awal agar hasil analisis tetap akurat.',
    'Accustomed to checking and cleaning data early so analysis results remain accurate.',
  ],
  [
    'Mengutamakan alur kerja yang terstruktur, mulai dari eksplorasi data hingga penyajian visual yang mudah dipahami.',
    'Prioritizing a structured workflow, from data exploration to clear visual presentation.',
  ],
  [
    'Terus belajar memperdalam metode statistika dan pemrograman data untuk menghasilkan insight yang relevan.',
    'Continuously deepening statistical methods and data programming to produce relevant insights.',
  ],
  [
    'Statistika bukan sekadar mengumpulkan angka, melainkan menemukan pola jujur di balik kebisingan data.',
    'Statistics is not merely collecting numbers, but finding honest patterns behind data noise.',
  ],
  ['Statistik Pengunjung Portofolio', 'Portfolio Visitor Statistics'],
  ['Apresiasi/umpan balik.', 'Reflections & feedback.'],
];

/**
 * E. HALAMAN PROYEK & DETAIL PROYEK (/work)
 */
export const WORK_PAGE_PAIRS: readonly TranslationPair[] = [
  [
    'Tiga proyek pilihan seputar analisis data, pengolahan data terstruktur, dan pengembangan web oleh Choirunnisa (Statistika, Universitas Cenderawasih).',
    'Three selected projects in data analysis, structured data processing, and web development by Choirunnisa (Statistics, Universitas Cenderawasih).',
  ],
  ['Proyek Pemrograman Python', 'Python Programming Project'],
  ['Proyek Microsoft Excel', 'Microsoft Excel Project'],
  ['Proyek Microsoft Word', 'Microsoft Word Project'],
  [
    'Implementasi List, Tuple, dan NumPy dalam Python',
    'Implementing Lists, Tuples, and NumPy in Python',
  ],
  [
    'Pengolahan dan Analisis Data Menggunakan Microsoft Excel',
    'Data Processing and Analysis Using Microsoft Excel',
  ],
  [
    'Penyusunan Esai Perencanaan Masa Depan Menggunakan Microsoft Word',
    'Writing a Future Planning Essay Using Microsoft Word',
  ],
  ['Deskripsi Proyek', 'Project Description'],
  ['Tautan Repositori', 'Repository Link'],
  ['Lihat dan pantau repositori GitHub di', 'View and track the GitHub repository at'],
  ['Semua', 'All'],
  ['All projects', 'Semua proyek'],
  ['NEXT PROJECT', 'PROYEK BERIKUTNYA'],
  ['EVERYTHING ELSE', 'HAL LAINNYA'],
];

/**
 * F. HALAMAN KONTAK & FAQ (/contact)
 */
export const CONTACT_PAGE_PAIRS: readonly TranslationPair[] = [
  ['Mulai dari hal yang penting.', 'Start with what matters.'],
  [
    'Ceritakan persoalan yang ingin dipecahkan, siapa yang terdampak, dan hasil apa yang ingin dicapai. Cukup dengan konteks singkat atau gambaran data awal, kita sudah bisa berdiskusi mengenai langkah analisis maupun pengerjaannya.',
    'Share the problem to solve, who is affected, and what outcome you want. A brief context or initial data overview is enough to discuss analysis and next steps.',
  ],
  ['Kirim ringkasan kebutuhan', 'Send requirements summary'],
  ['Biasanya dibalas dalam 1–2 hari kerja.', 'Usually replied within 1–2 business days.'],
  ['Nama lengkap', 'Full name'],
  ['Alamat email', 'Email address'],
  ['Instansi / Organisasi (opsional)', 'Institution / Organization (optional)'],
  ['Topik pembahasan', 'Discussion topic'],
  ['Ringkasan kebutuhan', 'Requirements summary'],
  ['Salin', 'Copy'],
  ['Domisili', 'Location'],
  ['Ketersediaan', 'Availability'],
  [
    'Pertanyaan yang sering muncul sebelum mulai.',
    'Frequently asked questions before starting.',
  ],
  ['Masih ragu memulai?', 'Still unsure where to start?'],
  [
    'Berapa lama waktu pengerjaan sebuah proyek biasanya?',
    'How long does a project usually take?',
  ],
  [
    'Apakah biayanya bersifat tetap atau menyesuaikan?',
    'Is pricing fixed or flexible?',
  ],
  [
    'Bisakah berkolaborasi dengan tim atau peneliti yang sudah ada?',
    'Can we collaborate with an existing team or researcher?',
  ],
  [
    'Apa saja hasil akhir yang akan saya terima?',
    'What deliverables will I receive?',
  ],
  [
    'Apakah menerima pekerjaan skala kecil atau bantuan spesifik?',
    'Do you accept small tasks or specific help?',
  ],
  [
    'Siapa yang memegang hak milik atas hasil pekerjaan setelah selesai?',
    'Who owns the deliverables once completed?',
  ],
];

/**
 * G. KATA CAMPURAN YANG PERLU DIRAPIKAN SAAT BAHASA INDONESIA AKTIF
 */
const MIXED_ID_CLEANUP: readonly TranslationPair[] = [
  ['and', 'dan'],
  ['with', 'dengan'],
  ['from', 'dari'],
  ['for', 'untuk'],
  ['work', 'proyek'],
];

const ROUTE_PAIRS: Record<string, readonly TranslationPair[]> = {
  '/': HOME_PAGE_PAIRS,
  '/about': ABOUT_PAGE_PAIRS,
  '/work': WORK_PAGE_PAIRS,
  '/contact': CONTACT_PAGE_PAIRS,
};

const ALL_PAIRS: readonly TranslationPair[] = [
  ...HEADER_AND_FOOTER_PAIRS,
  ...HOME_PAGE_PAIRS,
  ...ABOUT_PAGE_PAIRS,
  ...WORK_PAGE_PAIRS,
  ...CONTACT_PAGE_PAIRS,
];

const SKIP_TAGS = new Set([
  'SCRIPT',
  'STYLE',
  'NOSCRIPT',
  'CODE',
  'PRE',
  'TEXTAREA',
  'INPUT',
  'SELECT',
  'SVG',
  'PATH',
]);

const originalTextMap = new WeakMap<Node, string>();
const originalAttrMap = new WeakMap<Element, Map<string, string>>();

function escapeRegExp(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function normalizeWhitespace(str: string): string {
  return str.replace(/\s+/g, ' ').trim();
}

function getActivePairs(lang: Lang): Array<[string, string]> {
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  const matchedRoute = Object.keys(ROUTE_PAIRS).find(
    (route) => path === route || (route !== '/' && path.startsWith(`${route}/`))
  );
  const routeSpecific = matchedRoute ? ROUTE_PAIRS[matchedRoute] : [];

  const combined = [...routeSpecific, ...ALL_PAIRS];
  const seen = new Set<string>();
  const uniquePairs: Array<[string, string]> = [];

  for (const [idText, enText] of combined) {
    const source = normalizeWhitespace(lang === 'en' ? idText : enText);
    const target = normalizeWhitespace(lang === 'en' ? enText : idText);
    if (!source || seen.has(source)) continue;
    seen.add(source);
    uniquePairs.push([source, target]);
  }

  return uniquePairs.sort((a, b) => b[0].length - a[0].length);
}

function cleanMixedIndonesian(text: string): string {
  let output = text;
  for (const [enWord, idWord] of MIXED_ID_CLEANUP) {
    const regex = new RegExp(`\\b${escapeRegExp(enWord)}\\b`, 'gi');
    output = output.replace(regex, (matched) => {
      if (matched === matched.toUpperCase() && matched.length > 1) {
        return idWord.toUpperCase();
      }
      if (matched[0] === matched[0].toUpperCase()) {
        return idWord[0].toUpperCase() + idWord.slice(1);
      }
      return idWord;
    });
  }
  return output;
}

function replacePhrases(text: string, lang: Lang): string {
  const pairs = getActivePairs(lang);
  let result = text;

  for (const [sourcePhrase, targetPhrase] of pairs) {
    const isSingleWord = /^[A-Za-zÀ-ÿ0-9_]+$/.test(sourcePhrase);
    const pattern = isSingleWord
      ? new RegExp(`\\b${escapeRegExp(sourcePhrase)}\\b`, 'gi')
      : new RegExp(escapeRegExp(sourcePhrase), 'g');

    result = result.replace(pattern, (matched) => {
      if (
        matched.length > 0 &&
        matched[0] === matched[0].toUpperCase() &&
        targetPhrase.length > 0 &&
        targetPhrase[0] === targetPhrase[0].toLowerCase()
      ) {
        return targetPhrase[0].toUpperCase() + targetPhrase.slice(1);
      }
      return targetPhrase;
    });
  }

  if (lang === 'id') {
    result = cleanMixedIndonesian(result);
  }

  return result;
}

function translateRawValue(rawValue: string, lang: Lang): string {
  const normalized = normalizeWhitespace(rawValue);
  if (!normalized) return rawValue;

  const translated = replacePhrases(normalized, lang);
  if (translated === normalized) return rawValue;

  const match = rawValue.match(/^(\s*)([\s\S]*?)(\s*)$/);
  if (!match) return translated;

  const [, leading, , trailing] = match;
  return `${leading}${translated}${trailing}`;
}

function applyKeyedTranslations(lang: Lang) {
  const dict = KEYED_TRANSLATIONS[lang] ?? KEYED_TRANSLATIONS.id;
  document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (key && dict[key]) {
      el.textContent = dict[key];
    }
  });
}

function applyAutomaticTextNodes(lang: Lang, root: Node = document.body) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent) return NodeFilter.FILTER_REJECT;
      if (SKIP_TAGS.has(parent.tagName)) return NodeFilter.FILTER_REJECT;
      if (parent.closest('[data-lang-toggle], [data-no-i18n]')) return NodeFilter.FILTER_REJECT;
      if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_SKIP;
      return NodeFilter.FILTER_ACCEPT;
    },
  });

  let current = walker.nextNode();
  while (current) {
    if (!originalTextMap.has(current)) {
      originalTextMap.set(current, current.nodeValue ?? '');
    }
    const baseText = originalTextMap.get(current) ?? '';
    const nextText = translateRawValue(baseText, lang);
    if (current.nodeValue !== nextText) {
      current.nodeValue = nextText;
    }
    current = walker.nextNode();
  }
}

function applyAutomaticAttributes(lang: Lang, root: Element = document.body) {
  const attrsToTranslate = ['aria-label', 'title', 'placeholder', 'alt'];
  const elements = [root, ...Array.from(root.querySelectorAll<HTMLElement>('*'))];

  for (const el of elements) {
    if (SKIP_TAGS.has(el.tagName)) continue;
    if (el.closest('[data-lang-toggle], [data-no-i18n]')) continue;

    for (const attr of attrsToTranslate) {
      const val = el.getAttribute(attr);
      if (!val || !val.trim()) continue;

      if (!originalAttrMap.has(el)) {
        originalAttrMap.set(el, new Map());
      }
      const savedMap = originalAttrMap.get(el)!;
      if (!savedMap.has(attr)) {
        savedMap.set(attr, val);
      }

      const baseVal = savedMap.get(attr) ?? val;
      const nextVal = translateRawValue(baseVal, lang);
      if (val !== nextVal) {
        el.setAttribute(attr, nextVal);
      }
    }
  }
}

export function applyLanguage(lang: Lang) {
  document.documentElement.lang = lang;
  document.documentElement.dataset.lang = lang;

  applyAutomaticTextNodes(lang, document.body);
  applyAutomaticAttributes(lang, document.body);
  applyKeyedTranslations(lang);

  document.querySelectorAll<HTMLButtonElement>('[data-lang-toggle]').forEach((btn) => {
    btn.setAttribute('aria-pressed', String(lang === 'en'));
    const badge = btn.querySelector('[data-lang-badge]');
    if (badge) {
      badge.textContent = lang === 'id' ? 'ID' : 'EN';
    }
  });
}

let observerStarted = false;

function startDomObserver() {
  if (observerStarted || typeof MutationObserver === 'undefined') return;
  observerStarted = true;

  const observer = new MutationObserver((mutations) => {
    const currentLang = (localStorage.getItem('site-lang') as Lang | null) || 'id';
    for (const mutation of mutations) {
      for (const added of Array.from(mutation.addedNodes)) {
        if (added.nodeType === Node.TEXT_NODE) {
          applyAutomaticTextNodes(currentLang, added.parentElement ?? document.body);
        } else if (added.nodeType === Node.ELEMENT_NODE) {
          const el = added as HTMLElement;
          if (!el.closest('[data-lang-toggle], [data-no-i18n]')) {
            applyAutomaticTextNodes(currentLang, el);
            applyAutomaticAttributes(currentLang, el);
            applyKeyedTranslations(currentLang);
          }
        }
      }
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
}

export function initLanguageSwitcher() {
  const saved = (localStorage.getItem('site-lang') as Lang | null) || 'id';
  applyLanguage(saved);
  startDomObserver();

  if (document.documentElement.dataset.i18nBound === 'true') return;
  document.documentElement.dataset.i18nBound = 'true';

  document.addEventListener('click', (event) => {
    const target = (event.target as HTMLElement | null)?.closest<HTMLElement>('[data-lang-toggle]');
    if (!target) return;

    const current = (localStorage.getItem('site-lang') as Lang | null) || 'id';
    const next: Lang = current === 'id' ? 'en' : 'id';
    localStorage.setItem('site-lang', next);
    applyLanguage(next);
  });
}