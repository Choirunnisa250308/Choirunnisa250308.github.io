export function initScrollReveal() {
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Target elemen yang ingin muncul halus saat digulir
  const selector = [
    'main section',
    'main .card',
    'main article',
    '.reveal-item',
  ].join(', ');

  const targets = Array.from(document.querySelectorAll<HTMLElement>(selector)).filter((el) => {
    // Jangan animasikan modal pencarian atau elemen yang sudah di-reveal
    if (el.closest('#site-search-modal')) return false;
    return true;
  });

  if (targets.length === 0) return;

  if (prefersReducedMotion || typeof IntersectionObserver === 'undefined') {
    targets.forEach((el) => {
      el.classList.add('is-revealed');
      el.classList.remove('reveal-ready');
    });
    return;
  }

  targets.forEach((el, index) => {
    if (!el.classList.contains('is-revealed')) {
      el.classList.add('reveal-ready');
      // Beri jeda bertahap tipis pada elemen yang berdekatan agar terasa mengalir
      const delayMs = Math.min((index % 4) * 55, 165);
      el.style.setProperty('--reveal-delay', `${delayMs}ms`);
    }
  });

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const el = entry.target as HTMLElement;
        el.classList.add('is-revealed');
        el.classList.remove('reveal-ready');
        observer.unobserve(el);
      }
    },
    {
      root: null,
      rootMargin: '0px 0px -6% 0px',
      threshold: 0.06,
    }
  );

  targets.forEach((el) => {
    // Jika elemen sudah berada di area layar saat halaman dimuat, langsung tampilkan
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.96) {
      el.classList.add('is-revealed');
      el.classList.remove('reveal-ready');
    } else {
      observer.observe(el);
    }
  });

  // Pengaman: pastikan semua elemen tetap muncul setelah beberapa detik agar tidak pernah macet
  window.setTimeout(() => {
    document.querySelectorAll<HTMLElement>('.reveal-ready').forEach((el) => {
      el.classList.add('is-revealed');
      el.classList.remove('reveal-ready');
    });
  }, 2500);
}