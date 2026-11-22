import type { SiteConfig } from '~/types';

/**
 * ============================================================
 *  THE ONE FILE TO EDIT FIRST
 * ============================================================
 *
 * Everything here is demo content. Replace it with your own and the
 * header, footer, hero, contact page, metadata, structured data, RSS
 * feed and sitemap all follow.
 *
 * The canonical URL lives in `astro.config.mjs` (`site`) and is read
 * back here through `import.meta.env.SITE`.
 */
export const siteConfig: SiteConfig = {
  name: 'Choirunnisa — Statistics & Data Portfolio',

  logo: {
    header: { src: '/images/header-logo.webp', width: 164, height: 58 },
    footer: { src: '/images/footer-logo.webp', width: 164, height: 58 },
  },

  author: 'Choirunnisa',
  role: 'Statistics Student & Data Enthusiast',
  title: 'Choirunnisa — Statistics Student, Data Analysis & Web Portfolio',
  description:
    'Portfolio of Choirunnisa, a Statistics student at Universitas Cenderawasih focused on data analysis, statistical research, visualization, and clean web interfaces.',
  url: import.meta.env.SITE ?? 'https://choirunnisa250308.github.io',
  ogImage: '/og-default.png',
  locale: 'en',
  themeColor: '#c8f14d',
  
  contact: {
    email: 'nissa5500@gmail.com',
    phone: '081280106805',
    phoneHref: '081280106805',
    location: 'Jayapura, Papua — Remote / Hybrid',
    availability: 'Tersedia untuk proyek kecil & riset data.',
    // Paste a Formspree / Web3Forms / Netlify endpoint here to make the
    // contact form live. See "Contact form" in the README.
    formEndpoint: '',
  },

  social: [
    { label: 'Dribbble', href: 'https://dribbble.com/', icon: 'dribbble' },
    { label: 'Behance', href: 'https://www.behance.net/', icon: 'behance' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: 'linkedin' },
    { label: 'Instagram', href: 'https://www.instagram.com/', icon: 'instagram' },
  ],

  about:
    'An independent art direction and design practice for teams of under twenty. Fewer clients, harder questions early, and a handover that does not quietly depend on me.',

  copyrightHolder: 'SWP Freelancer Portfolio',
};

export default siteConfig;
