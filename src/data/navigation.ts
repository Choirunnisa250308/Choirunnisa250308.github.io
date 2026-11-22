import type { NavItem } from '~/types';

/**
 * Primary navigation.
 *
 * `anchor` is used only on the homepage: when the visitor is already on
 * `/`, the link jumps to that section instead of reloading the page.
 */
export const primaryNav: NavItem[] = [
  { label: 'Beranda', href: '/' },
  { label: 'Tentang Saya', href: '/about/'},
  { label: 'Proyek', href: '/work/' },
  { label: 'Kontak', href: '/contact/' },
];

/** Extra links shown only in the mobile drawer. */
export const mobileExtraNav: NavItem[] = [
  { label: 'Toolkit', href: '/about/#toolkit' },
  { label: 'Process', href: '/about/#process' },
  { label: 'Testimonials', href: '/about/#testimonials' },
  { label: 'FAQ', href: '/contact/#faq' },
];

export const footerNav = {
  explore: [
    { label: 'Tentang Saya', href: '/about/' },
   
    { label: 'Proyek Saya', href: '/work/' },
    
    { label: 'Kontak', href: '/contact/' },
  ] satisfies NavItem[],
  legal: [
    { label: 'Privacy', href: '/privacy/' },
    { label: 'Terms', href: '/terms/' },
    { label: 'RSS', href: '/rss.xml' },
  ] satisfies NavItem[],
};
