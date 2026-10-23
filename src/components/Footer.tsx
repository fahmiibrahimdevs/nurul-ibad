import React from 'react';
import { PESANTREN_INFO, CONTACT_PERSONS } from '../data/pesantrenData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-zinc-200 pt-14 pb-10 text-zinc-600 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-zinc-200">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo-nurul-ibad.png"
                alt="Logo Pondok Pesantren Nurul Ibad (YASNI)"
                className="w-10 h-10 object-contain drop-shadow-xs"
              />
              <div>
                <p className="font-bold text-base text-zinc-900 tracking-tight">
                  {PESANTREN_INFO.name}
                </p>
                <p className="text-[11px] text-zinc-500 font-medium">
                  {PESANTREN_INFO.genderCategory} &bull; Kapasitas ±25 Santri
                </p>
              </div>
            </div>

            <p className="text-zinc-600 leading-relaxed pr-6">
              Pondok Pesantren Nurul Ibad adalah lembaga pendidikan pesantren khusus santri putra yang 
              berfokus pada kajian Kitab Kuning dan pembinaan adab, dengan daya tampung santri binaan terbatas 
              agar bimbingan berlangsung intensif dan penuh kekeluargaan.
            </p>

            <div className="text-[11px] text-zinc-500 space-y-1">
              <p>Didirikan oleh: <strong className="text-zinc-700">{PESANTREN_INFO.founder}</strong></p>
              <p>Fokus Pendidikan: Kajian Kitab Kuning, Tahfidz & Literasi Komputer</p>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="md:col-span-3 space-y-3">
            <p className="font-bold text-zinc-900 uppercase tracking-wider text-xs">
              Navigasi Halaman
            </p>
            <ul className="space-y-2">
              <li><a href="#profil" className="hover:text-emerald-800 transition">Profil & Nilai Pengasuhan</a></li>
              <li><a href="#bimbingan-it" className="hover:text-emerald-800 transition">Bimbingan Komputer Santri</a></li>
              <li><a href="#pengajar" className="hover:text-emerald-800 transition">Dewan Masyayikh & Asatidz</a></li>
              <li><a href="#biaya" className="hover:text-emerald-800 transition">Informasi Infaq & Pendaftaran</a></li>
              <li><a href="#psb" className="hover:text-emerald-800 transition">Alur Pendaftaran (PSB)</a></li>
              <li><a href="#lokasi" className="hover:text-emerald-800 transition">Lokasi & Jadwal Kunjungan</a></li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="md:col-span-4 space-y-3">
            <p className="font-bold text-zinc-900 uppercase tracking-wider text-xs">
              Sekretariat & Hubungan Masyarakat
            </p>
            <p className="leading-relaxed">
              {PESANTREN_INFO.address.full}
            </p>
            <div className="pt-2 space-y-1.5 text-zinc-700">
              <p>Ust. Mazen: <span className="font-medium text-zinc-900">{CONTACT_PERSONS[0].phone}</span></p>
              <p>Ust. Rifqi: <span className="font-medium text-zinc-900">{CONTACT_PERSONS[1].phone}</span></p>
              <p>Ust. Taufiq: <span className="font-medium text-zinc-900">{CONTACT_PERSONS[2].phone}</span></p>
            </div>
            <p className="text-[11px] text-zinc-400 pt-1">
              Pelayanan Silaturahmi: Setiap Hari 08.00 - 17.00 WIB
            </p>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-400">
          <p>
            &copy; {new Date().getFullYear()} {PESANTREN_INFO.name}. Hak Cipta Dilindungi Undang-Undang.
          </p>
          <div className="flex items-center gap-4">
            <span>Khusus Santri Putra</span>
            <span>&bull;</span>
            <span>Kapasitas Terbatas (±25 Santri)</span>
            <span>&bull;</span>
            <a href="#psb" className="text-emerald-800 font-semibold hover:underline">
              Pendaftaran Santri Baru
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
