import type { Stat } from '~/types';

export const stats: Stat[] = [
 // { value: 2026, label: 'S1 Statistika' },
  //{ value: 3, suffix: '+', label: 'Projek' },
  //{ value: 100, suffix: '%', label: 'Tingkat kepercayaan analisis' },
];

/** Headline above the stats band, split so the tail can be dimmed. */
export const statsHeading = {
  lead: '"Statistika bukan sekedar mengumpulkan angka,',
  tail: 'melainkan menemukan pola jujur di balik kebisingan data."',
};

/**
 * Poster frame for the studio reel. Set `embedUrl` to a YouTube/Vimeo
 * privacy-friendly embed to make the play button load a real video;
 * leave it empty and the button is hidden.
 */
export const reel = {
  image: '/images/reel-poster.webp',
  alt: 'Two people reviewing notes and sketches at a studio table',
  width: 1000,
  height: 625,
  embedUrl: '',
  label: 'Play the studio reel',
};
