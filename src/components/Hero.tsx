import React from 'react';
import { ArrowRight, MessageSquare, BookOpen, Laptop, CheckCircle2, Users } from 'lucide-react';
import { PESANTREN_INFO, CONTACT_PERSONS } from '../data/pesantrenData';

interface HeroProps {
  onOpenPsbModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenPsbModal }) => {
  return (
    <section className="relative bg-white pt-10 pb-16 lg:pt-16 lg:pb-24 overflow-hidden border-b border-zinc-200">
      {/* Subtle dotted background grid */}
      <div className="absolute inset-0 pattern-dots opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Arabic Basmalah & Subtitle */}
            <div className="space-y-1">
              <p className="font-arabic text-xl sm:text-2xl text-emerald-800 font-bold tracking-wide">
                بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-900">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                Pesantren Salafiyah Nahdlatul Ulama &bull; Khusus Putra
              </div>
            </div>

            {/* Main Title */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-zinc-950 tracking-tight leading-[1.18]">
                Membina Akhlak & Kemandirian Santri Putra: Mengaji Kitab Salaf, Mengenal Dasar Komputer.
              </h1>
              <p className="text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
                <strong className="text-zinc-900 font-semibold">{PESANTREN_INFO.name}</strong> Jakarta Timur 
                menyelenggarakan pendidikan pesantren salafiyah khusus santri putra dengan daya tampung 
                terbatas <span className="text-emerald-900 font-semibold">(±25 santri)</span>. 
                Suasana kekeluargaan yang guyub menjadikan pembinaan adab, ibadah, dan pendampingan belajar santri berlangsung lebih dekat dan terpantau secara intensif.
              </p>
            </div>

            {/* Institutional Key Points (Humble & Authentic) */}
            <div className="grid sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-zinc-700">
                  Didirikan oleh <strong>{PESANTREN_INFO.founder}</strong>
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-zinc-700">
                  <strong>Khusus Santri Putra</strong> (lingkungan kondusif)
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <Users className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-zinc-700">
                  <strong>Binaan Terbatas (±25 Santri)</strong> — fokus & guyub
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <Laptop className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-zinc-700">
                  Bimbingan dasar komputer & literasi digital santri
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={onOpenPsbModal}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-sm transition shadow-sm"
              >
                Formulir Pendaftaran Santri
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/${CONTACT_PERSONS[1].phoneRaw}?text=${encodeURIComponent(CONTACT_PERSONS[1].defaultMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border border-zinc-300 hover:bg-zinc-50 text-zinc-800 font-semibold text-sm transition"
              >
                <MessageSquare className="w-4 h-4 text-emerald-700" />
                Konsultasi WhatsApp Panitia
              </a>
            </div>

            {/* Micro note */}
            <p className="text-xs text-zinc-500 pt-1">
              * Lokasi: Jl. Gorda No. 44, Lubang Buaya, Cipayung, Jakarta Timur. Terbuka silaturahmi langsung.
            </p>
          </div>

          {/* Right Column: Clean Visual Card Frame (Humble & Sincere) */}
          <div className="lg:col-span-5">
            <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-4 sm:p-5 shadow-sm space-y-4">
              
              {/* Photo / Campus Graphic Placeholder */}
              <div className="relative aspect-4/3 rounded-xl bg-zinc-100 border border-zinc-200 overflow-hidden flex flex-col items-center justify-center p-6 text-center group">
                {/* User can replace this inner element with a real <img src="/foto-pondok.jpg" /> */}
                <div className="w-20 h-20 rounded-2xl bg-white border border-zinc-200/80 p-2 flex items-center justify-center mb-3 shadow-xs">
                  <img
                    src="/logo-nurul-ibad.png"
                    alt="Logo Yayasan Nurul Ibad"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="font-bold text-zinc-900 text-base">
                  Lingkungan Pondok Pesantren
                </h3>
                <p className="text-xs text-zinc-500 max-w-xs mt-1">
                  Ruang pengajian kitab, asrama santri putra yang hangat dan bersih, serta ruang belajar komputer santri.
                </p>
                <span className="mt-3 text-[11px] font-medium text-emerald-800 bg-emerald-100/70 px-2.5 py-1 rounded-full">
                  Area Foto Lingkungan Pondok (Placeholder)
                </span>
                
                {/* Quick overlay badge */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs border border-zinc-200 px-2.5 py-1 rounded-md text-[10px] font-bold text-zinc-800 uppercase tracking-wide">
                  Jakarta Timur
                </div>
              </div>

              {/* Snapshot Info Grid */}
              <div className="grid grid-cols-3 gap-2 text-center pt-1">
                <div className="bg-white p-3 rounded-xl border border-zinc-200">
                  <p className="text-xs text-zinc-500">Santri</p>
                  <p className="text-sm font-bold text-zinc-900 mt-0.5">Khusus Putra</p>
                </div>
                <div className="bg-white p-3 rounded-xl border border-zinc-200">
                  <p className="text-xs text-zinc-500">Kapasitas</p>
                  <p className="text-sm font-bold text-emerald-800 mt-0.5">±25 Santri</p>
                </div>
                <div className="bg-white p-3 rounded-xl border border-zinc-200">
                  <p className="text-xs text-zinc-500">Pembinaan</p>
                  <p className="text-sm font-bold text-zinc-900 mt-0.5">Intensif & Adab</p>
                </div>
              </div>

              {/* Modest Callout box */}
              <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-3.5 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-800 text-white flex items-center justify-center shrink-0">
                  <Laptop className="w-5 h-5 text-emerald-200" />
                </div>
                <div className="text-xs">
                  <p className="font-semibold text-emerald-950">Bimbingan Belajar Komputer</p>
                  <p className="text-emerald-800">Membekali santri keterampilan komputer dasar dan etika digital tanpa meninggalkan fokus ngaji kitab.</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
