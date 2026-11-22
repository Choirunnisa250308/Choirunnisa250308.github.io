import type { Testimonial } from '~/types';

export const testimonials: Testimonial[] = [
  {
    quote:
      'Latihan Python & Logika Data: "Menyelesaikan puluhan soal Algoritma dan Pemrograman melatih ketelitian langkah demi langkah—dari list dan tuple hingga array NumPy yang jauh lebih ringkas.',
    name: 'Ririn Juvita Irjayanti',
    role: 'Co-founder, Brightsill',
    avatar: '/images/avatar-02.webp',
    avatarAlt: 'Portrait of Priya Raghunathan',
    rating: 5,
  },
  {
    quote:
      'Kerapian Tabel & Rekap Data: "Data yang rapi sejak awal menghemat banyak waktu saat diolah. Rumus dan pengelompokan yang jelas membuat angka lebih mudah dibaca dan dicek ulang.',
    name: 'Fadila Vivi Khorimah',
    role: 'CTO, Coalfield',
    avatar: '/images/avatar-01.webp',
    avatarAlt: 'Portrait of Tomas Berger',
    rating: 5,
  },
  {
    quote:
      'Arah Tujuan Jangka Panjang: "Menuliskan rencana dan cita-cita ke depan—termasuk tekad berkarier di BPS—membantu menjaga fokus belajar agar setiap tugas punya makna yang jelas.',
    name: 'Tyar Rizky Dwi Putra',
    role: 'Head of Product, Petrichor',
    avatar: '/images/avatar-03.webp',
    avatarAlt: 'Portrait of Elena Marchetti',
    rating: 5,
  },
];

export const testimonialsHeading = {
  eyebrow: 'Apa Kata Mereka',
  title: 'Apresiasi/umpan balik.',
};
