import React, { useState } from 'react';
import { Menu, X, Phone, MessageCircle, Users } from 'lucide-react';
import { PESANTREN_INFO, CONTACT_PERSONS } from '../data/pesantrenData';

interface NavbarProps {
  onOpenPsbModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPsbModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-zinc-200">
      {/* Top Announcement Bar */}
      <div className="bg-emerald-900 text-white text-xs py-2 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-700 text-emerald-100 uppercase tracking-wider">
              PSB 2026/2027
            </span>
            <span className="text-zinc-200 font-medium">
              Penerimaan Santri Baru — <strong className="text-white font-semibold">Khusus Putra (Binaan Terbatas ±25 Santri)</strong>
            </span>
          </div>

          <div className="flex items-center gap-4 text-emerald-100 text-[11px]">
            <span className="hidden md:inline-flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-emerald-400" />
              Pengasuhan Intensif & Suasana Kekeluargaan
            </span>
            <a
              href={`https://wa.me/${CONTACT_PERSONS[1].phoneRaw}?text=${encodeURIComponent(CONTACT_PERSONS[1].defaultMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-white hover:text-emerald-300 font-medium transition"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              WhatsApp Panitia
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <img
              src="/logo-nurul-ibad.png"
              alt="Logo Pondok Pesantren Nurul Ibad (YASNI)"
              className="w-11 h-11 object-contain drop-shadow-xs group-hover:scale-105 transition-transform"
            />
            
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg sm:text-xl text-zinc-900 tracking-tight">
                  NURUL IBAD
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
                  Putra
                </span>
              </div>
              <p className="text-xs text-zinc-500 font-medium">
                Pondok Pesantren &bull; Jakarta Timur
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-zinc-600">
            <a href="#profil" className="hover:text-emerald-800 transition">Profil & Sanad</a>
            <a href="#bimbingan-it" className="hover:text-emerald-800 transition">Bimbingan IT</a>
            <a href="#pengajar" className="hover:text-emerald-800 transition">Dewan Asatidz</a>
            <a href="#humas" className="hover:text-emerald-800 transition">Tim Humas</a>
            <a href="#biaya" className="hover:text-emerald-800 transition">Infaq & Pendaftaran</a>
            <a href="#lokasi" className="hover:text-emerald-800 transition">Lokasi</a>
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`https://wa.me/${CONTACT_PERSONS[0].phoneRaw}?text=${encodeURIComponent(CONTACT_PERSONS[0].defaultMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2.5 rounded-lg border border-zinc-300 text-zinc-700 hover:bg-zinc-50 transition"
            >
              <Phone className="w-3.5 h-3.5 text-zinc-500" />
              Kontak Humas
            </a>
            
            <button
              onClick={onOpenPsbModal}
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2.5 rounded-lg bg-emerald-800 text-white hover:bg-emerald-900 transition shadow-sm"
            >
              Daftar PSB Online
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 transition"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-zinc-200 bg-white px-4 pt-3 pb-6 space-y-3">
          <div className="space-y-1 text-sm font-medium text-zinc-700">
            <a
              href="#profil"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md hover:bg-emerald-50 hover:text-emerald-800"
            >
              Profil & Sanad Aswaja
            </a>
            <a
              href="#bimbingan-it"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md hover:bg-emerald-50 hover:text-emerald-800"
            >
              Bimbingan Komputer & IT Santri
            </a>
            <a
              href="#pengajar"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md hover:bg-emerald-50 hover:text-emerald-800"
            >
              Dewan Masyayikh & Pengajar
            </a>
            <a
              href="#humas"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md hover:bg-emerald-50 hover:text-emerald-800"
            >
              Tim Humas & Layanan Wali Santri
            </a>
            <a
              href="#biaya"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md hover:bg-emerald-50 hover:text-emerald-800"
            >
              Infaq & Informasi Biaya
            </a>
            <a
              href="#lokasi"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md hover:bg-emerald-50 hover:text-emerald-800"
            >
              Lokasi & Alamat Pesantren
            </a>
          </div>

          <div className="pt-3 border-t border-zinc-100 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPsbModal();
              }}
              className="w-full py-2.5 px-4 rounded-lg bg-emerald-800 text-white font-semibold text-sm hover:bg-emerald-900 transition text-center"
            >
              Formulir PSB Online
            </button>
            <a
              href={`https://wa.me/${CONTACT_PERSONS[1].phoneRaw}?text=${encodeURIComponent(CONTACT_PERSONS[1].defaultMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-2.5 px-4 rounded-lg border border-zinc-300 text-zinc-800 font-semibold text-sm hover:bg-zinc-50 transition text-center"
            >
              Chat WhatsApp Panitia
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
