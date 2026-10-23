// Data Terpusat Pondok Pesantren Nurul Ibad
// Skala Pesantren: Santri terbatas (±25 santri putra) untuk pembinaan intensif & kekeluargaan

export interface Teacher {
  id: string;
  name: string;
  role: string;
  badge: string;
  bio: string;
  avatarInitial: string;
  imageSrc?: string;
}

export interface HumasPerson {
  id: string;
  name: string;
  nickName: string;
  role: string;
  badge: string;
  phone: string;
  phoneRaw: string;
  bio: string;
  avatarInitial: string;
  imageSrc?: string;
  defaultMessage: string;
}

export const PESANTREN_INFO = {
  name: "Pondok Pesantren Nurul Ibad",
  tagline: "Pondok Pesantren Khusus Putra dengan Kajian Kitab Kuning & Bimbingan Komputer Santri",
  arabicName: "مَعْهَدُ نُوْرِ الْعِبَادِ الْإِسْلَامِيّ",
  founder: "Almaghfurlah KH. Muhammad Syakrim, BA",
  chairman: "KH. Ibnu Mulkan Syakrim",
  genderCategory: "Khusus Santri Putra",
  capacity: "±25 Santri (Binaan Terbatas)",
  address: {
    street: "Jl. Gorda No. 44, RT. 1 / RW. 1",
    village: "Kelurahan Lubang Buaya",
    district: "Kecamatan Cipayung",
    city: "Jakarta Timur, DKI Jakarta",
    postalCode: "13810",
    full: "Jl. Gorda No. 44, RT. 1 / RW. 1, Kelurahan Lubang Buaya, Kecamatan Cipayung, Jakarta Timur, DKI Jakarta 13810",
    mapsUrl: "https://maps.app.goo.gl/r7C5b4eaiFkuVisS7",
  },
};

// 1. Masyayikh & Pimpinan Yayasan
export const LEADERSHIP_MEMBERS: Teacher[] = [
  {
    id: "founder",
    name: "KH. Muhammad Syakrim, BA",
    role: "Pendiri Pondok Pesantren Nurul Ibad",
    badge: "Almaghfurlah / Pendiri",
    bio: "Ulama kharismatik Jakarta Timur. Peletak pondasi sanad keilmuan, adab kesantrian, dan keteladanan perjuangan dakwah umat di Pondok Pesantren Nurul Ibad.",
    avatarInitial: "MS",
    imageSrc: "/foto-pendiri.png", // Foto resmi pendiri
  },
  {
    id: "chairman",
    name: "KH. Ibnu Mulkan Syakrim",
    role: "Ketua Yayasan Nurul Ibad",
    badge: "Ketua Yayasan",
    bio: "Memimpin arah pengembangan kelembagaan yayasan, mengawal kesinambungan nilai perjuangan pesantren, dan memfasilitasi pembinaan santri putra.",
    avatarInitial: "IM",
    imageSrc: "",
  },
];

// 2. Dewan Asatidz Pengampu Pendidikan Santri
export const TEACHER_MEMBERS: Teacher[] = [
  {
    id: "bisrilhafi",
    name: "Ust. Bisrilhafi",
    role: "Pengampu Kitab Kuning & Tahfidzul Qur'an",
    badge: "Kitab Kuning & Tahfidz",
    bio: "Membimbing pengajian Kitab Kuning (Fikih, Nahwu-Sharaf, Tauhid, Akhlak) dengan metode sorogan dan bandongan serta halaqah tahfidz Al-Qur'an santri harian.",
    avatarInitial: "UB",
    imageSrc: "/ust-bisrilhafi.png",
  },
  {
    id: "rifki",
    name: "Ust. Rifki",
    role: "Pembina Multimedia & IT Santri",
    badge: "Multimedia & IT",
    bio: "Mendampingi santri belajar keterampilan komputer, multimedia, pengetikan rapi, serta pemahaman logika dasar teknologi setelah pengajian Kitab Kuning.",
    avatarInitial: "RF",
    imageSrc: "/ust-rifki.png",
  },
];

export const MAIN_TEACHERS: Teacher[] = [...LEADERSHIP_MEMBERS, ...TEACHER_MEMBERS];

// 3 Humas Utama dalam 1 Baris (Ust. Zen, Ust. Rifki, Ust. Taufiq)
export const HUMAS_PERSONS: HumasPerson[] = [
  {
    id: "zen",
    name: "Ust. Mazen Firdaus",
    nickName: "Ust. Zen",
    role: "Humas & Pembinaan Santri",
    badge: "Humas & Pembinaan",
    phone: "0821-4277-3754",
    phoneRaw: "6282142773754",
    bio: "Melayani konsultasi umum calon wali santri, informasi lingkungan pondok, serta koordinasi penerimaan santri baru.",
    avatarInitial: "MZ",
    imageSrc: "",
    defaultMessage: "Assalamu'alaikum Warahmatullahi Wabarakatuh Ust. Zen, saya ingin berkonsultasi mengenai pembinaan santri di Pondok Pesantren Nurul Ibad.",
  },
  {
    id: "rifki",
    name: "Ust. Rifki",
    nickName: "Ust. Rifki",
    role: "Sekretariat PSB & Pembina Multimedia IT",
    badge: "Sekretariat & Multimedia IT",
    phone: "0812-2197-8018",
    phoneRaw: "6281221978018",
    bio: "Mengurus administrasi pendaftaran santri baru, konfirmasi sisa kuota (kapasitas ±25 santri), infaq pendaftaran, serta pembimbing multimedia & IT santri.",
    avatarInitial: "RF",
    imageSrc: "/ust-rifki.png",
    defaultMessage: "Assalamu'alaikum Warahmatullahi Wabarakatuh Ust. Rifki, saya ingin bertanya terkait pendaftaran santri baru dan bimbingan multimedia IT di Nurul Ibad.",
  },
  {
    id: "taufiq",
    name: "Ust. Taufiq",
    nickName: "Ust. Taufiq",
    role: "Pengurus Asrama & Jadwal Kunjungan",
    badge: "Asrama & Kunjungan",
    phone: "0812-8398-5450",
    phoneRaw: "6281283985450",
    bio: "Bertanggung jawab atas ketertiban asrama santri putra, koordinasi survei kamar mukim, dan penerimaan kunjungan silaturahmi langsung wali santri.",
    avatarInitial: "TQ",
    imageSrc: "/ust-taufik.png",
    defaultMessage: "Assalamu'alaikum Warahmatullahi Wabarakatuh Ust. Taufiq, saya berniat silaturahmi langsung ke pondok bersama calon santri untuk survei asrama.",
  },
];

export const CONTACT_PERSONS = HUMAS_PERSONS.map((h) => ({
  name: h.name,
  phone: h.phone,
  phoneRaw: h.phoneRaw,
  division: h.badge,
  description: h.bio,
  defaultMessage: h.defaultMessage,
}));
