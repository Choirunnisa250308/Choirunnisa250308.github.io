import type { NavItem } from '~/types';

/**
 * Primary navigation.
 *
 * `anchor` is used only on the homepage: when the visitor is already on
 * `/`, the link jumps to that section instead of reloading the page.
 */
export const primaryNav: NavItem[] = [
  { label: 'Beranda', href: '/' },
  { label: 'Tentang', href: '/about/', anchor: '#about' },
  { label: 'Services', href: '/services/', anchor: '#services' },
  { label: 'Work', href: '/work/', anchor: '#work' },
  { label: 'Journal', href: '/journal/', anchor: '#journal' },
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
    { label: 'Tentang', href: '/about/' },
    { label: 'Services', href: '/services/' },
    { label: 'Selected work', href: '/work/' },
    { label: 'Journal', href: '/journal/' },
    { label: 'Kontak', href: '/contact/' },
  ] satisfies NavItem[],
  legal: [
    { label: 'Privacy', href: '/privacy/' },
    { label: 'Terms', href: '/terms/' },
    { label: 'RSS', href: '/rss.xml' },
  ] satisfies NavItem[],
};
