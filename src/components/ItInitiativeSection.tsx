import React from 'react';
import { Laptop, Code, ShieldCheck, Palette, FileText, CheckCircle2 } from 'lucide-react';
import { CONTACT_PERSONS } from '../data/pesantrenData';

export const ItInitiativeSection: React.FC = () => {
  return (
    <section id="bimbingan-it" className="py-16 sm:py-20 bg-zinc-50/70 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-900">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-700" />
            Program Bimbingan Santri
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-zinc-950 tracking-tight">
            Bimbingan Komputer & Pengenalan IT Santri
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
            Menjawab kebutuhan zaman secara bertahap dan bersahaja. 
            Santri putra dibekali pemahaman dasar komputer dan etika digital, 
            dengan tetap menempatkan pengajian Al-Qur'an dan kitab kuning sebagai poros utama pendidikan.
          </p>
        </div>

        {/* 2-Column Overview: Grounded & Realistic Approach for ~25 Santri */}
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Sincere, humble setup */}
          <div className="lg:col-span-5 space-y-5 bg-white p-6 sm:p-8 rounded-2xl border border-zinc-200 shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-emerald-800 text-white flex items-center justify-center">
              <Laptop className="w-6 h-6" />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold text-zinc-950">
                Porsi Seimbang: Ngaji Tetap Utama
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                Karena pesantren kami berkapasitas sekitar 25 santri, belajar komputer dilakukan dalam kelompok kecil yang hangat dan terbimbing. 
                Kami tidak menjanjikan fasilitas megah bertaraf industri, melainkan sarana belajar komputer yang bersahaja dan fungsional agar santri tidak gagap teknologi.
              </p>
            </div>

            <div className="space-y-3 pt-2 text-xs sm:text-sm text-zinc-700">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span>Jadwal bergantian teratur dan selalu didampingi asatidz pembina.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span>Internet terfilter untuk menjaga santri dari dampak buruk dunia maya.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span>Mengasah nalar berpikir runtut dan ketelitian santri putra.</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={`https://wa.me/${CONTACT_PERSONS[0].phoneRaw}?text=${encodeURIComponent(CONTACT_PERSONS[0].defaultMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-800 hover:text-emerald-950 transition"
              >
                Tanya Ust. Mazen seputar bimbingan IT &rarr;
              </a>
            </div>
          </div>

          {/* Right Column: 4 Grounded Practical Modules */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            
            <div className="bg-white p-5 rounded-xl border border-zinc-200 shadow-xs space-y-2.5">
              <div className="w-9 h-9 rounded-lg bg-zinc-100 text-emerald-800 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-zinc-900">
                1. Adab & Literasi Digital Santri
              </h4>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Menanamkan etika berinternet, membedakan kabar bohong (tabayyun), 
                serta membentengi diri dari pengaruh negatif game berlebihan, pornografi, dan judi online.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-zinc-200 shadow-xs space-y-2.5">
              <div className="w-9 h-9 rounded-lg bg-zinc-100 text-emerald-800 flex items-center justify-center">
                <FileText className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-zinc-900">
                2. Pengoperasian Komputer Dasar
              </h4>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Membiasakan santri mengoperasikan sistem operasi komputer, pengetikan rapi naskah Arab dan naskah Latin, 
                serta pembuatan dokumen santri sederhana.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-zinc-200 shadow-xs space-y-2.5">
              <div className="w-9 h-9 rounded-lg bg-zinc-100 text-emerald-800 flex items-center justify-center">
                <Palette className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-zinc-900">
                3. Desain Grafis Sederhana Dakwah
              </h4>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Belajar dasar tata visual untuk membuat poster kutipan hadits, kata mutiara ulama, 
                dan jadwal kegiatan pondok untuk melatih kreativitas santri.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-zinc-200 shadow-xs space-y-2.5">
              <div className="w-9 h-9 rounded-lg bg-zinc-100 text-emerald-800 flex items-center justify-center">
                <Code className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-zinc-900">
                4. Dasar Logika & Wawasan Web
              </h4>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Mengenalkan alur berpikir logika (computational thinking) dan pengenalan dasar struktur halaman web bagi santri yang memiliki minat di bidang teknologi.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
