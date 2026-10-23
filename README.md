# Website Pondok Pesantren Nurul Ibad

Website profil resmi dan Penerimaan Santri Baru (PSB) Pondok Pesantren Nurul Ibad, Lubang Buaya, Cipayung, Jakarta Timur.

## Profil Singkat
- **Nama Lembaga:** Pondok Pesantren Nurul Ibad (Khusus Santri Putra)
- **Pendiri:** Almaghfurlah KH. Muhammad Syakrim, BA
- **Manhaj / Afiliasi:** Ahlussunnah wal Jama'ah An-Nahdliyyah (Nahdlatul Ulama)
- **Karakter Lembaga:** Pesantren Salafiyah dengan kapasitas binaan santri terbatas (±25 santri) serta program bimbingan pengenalan dasar komputer/IT santri.
- **Alamat:** Jl. Gorda No. 44, RT. 1 / RW. 1, Kelurahan Lubang Buaya, Kecamatan Cipayung, Jakarta Timur 13810.

## Teknologi
- **Framework:** React 18 + Vite + TypeScript
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Package Manager / Runtime:** Bun / Node.js

## Menjalankan di Lokal

```bash
# Install dependencies
bun install
# atau: npm install

# Jalankan server development
bun run dev
# atau: npm run dev
```

Akses di browser: `http://localhost:5174`

## Build untuk Produksi

```bash
bun run build
# atau: npm run build
```

Hasil build statis tersimpan di folder `dist/` dan siap disajikan langsung melalui web server Nginx.
