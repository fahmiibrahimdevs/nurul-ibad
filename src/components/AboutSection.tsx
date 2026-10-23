import React from 'react';
import { BookOpen, Compass, Shield, Users } from 'lucide-react';
import { PESANTREN_INFO } from '../data/pesantrenData';

export const AboutSection: React.FC = () => {
  return (
    <section id="profil" className="py-16 sm:py-20 bg-zinc-50/60 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-800">
            Profil & Sanad Keilmuan
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold text-zinc-950 tracking-tight">
            Menjaga Tradisi Salaf, Mengasuh Penuh Kekeluargaan
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
            {PESANTREN_INFO.name} didirikan oleh <strong className="text-zinc-900 font-semibold">{PESANTREN_INFO.founder}</strong> sebagai 
            wadah pembinaan thalabul 'ilmi yang berpegang teguh pada akidah Ahlussunnah wal Jama'ah An-Nahdliyyah, 
            menitikberatkan pada kedekatan asatidz dengan santri dalam asrama yang bersahaja.
          </p>
        </div>

        {/* Narrative & Institutional Pillar Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Narrative Card */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-zinc-200 shadow-xs space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-semibold px-2.5 py-1 rounded bg-zinc-100 text-zinc-700">
                Nilai Pengasuhan Santri
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-zinc-900">
                Skala Binaan Terbatas (±25 Santri Putra) yang Hangat & Terpantau
              </h3>
              <p className="text-sm text-zinc-600 leading-relaxed">
                Kami sengaja membatasi penerimaan sekitar 25 santri putra agar pembinaan tidak berjarak. 
                Di pondok yang bersahaja ini, setiap santri mendapat perhatian langsung dari para asatidz: 
                mulai dari bangun sebelum Subuh, kedisiplinan shalat berjamaah, kelancaran tahsin Al-Qur'an, pemahaman kitab kuning, hingga etika pergaulan harian.
              </p>
              <p className="text-sm text-zinc-600 leading-relaxed">
                Di tengah lingkungan kota Jakarta Timur, Nurul Ibad berupaya menjadi rumah kedua yang aman dan menenangkan, 
                di mana santri putra belajar hidup mandiri, rukun dengan saudara sesama santri, serta dibekali pengenalan dasar komputer agar melek teknologi dengan adab yang kokoh.
              </p>
            </div>

            {/* Founder Memorial Quote */}
            <div className="border-l-3 border-emerald-700 pl-4 py-1 bg-emerald-50/40 rounded-r-lg">
              <p className="text-xs sm:text-sm italic text-zinc-700">
                "Pesantren bukan sekadar tempat transfer ilmu, melainkan tempat menempa hati, melatih adab kepada guru dan orang tua, serta menumbuhkan keikhlasan dalam beramal."
              </p>
              <p className="text-xs font-semibold text-emerald-900 mt-2">
                — Nasehat {PESANTREN_INFO.founder}
              </p>
            </div>
          </div>

          {/* Right: 4 Characteristic Values of NU */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-sm font-bold text-zinc-900 uppercase tracking-wider px-1">
              Empat Pilar Karakter Aswaja Santri
            </h3>

            <div className="space-y-3">
              <div className="bg-white p-4 rounded-xl border border-zinc-200 shadow-xs flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-900">Tawassuth (Sikap Moderat)</h4>
                  <p className="text-xs text-zinc-500 mt-0.5">
                    Menghindari ifrath (berlebih-lebihan) dan tafrith (meremehkan), teguh dalam jalan tengah syariat.
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-zinc-200 shadow-xs flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-900">Tawazun (Keseimbangan)</h4>
                  <p className="text-xs text-zinc-500 mt-0.5">
                    Keseimbangan antara ilmu ukhrawi dan ilmu duniawi, antara ngaji kitab salaf dan mengenal komputer.
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-zinc-200 shadow-xs flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-900">Tasamuh & Ukhuwah</h4>
                  <p className="text-xs text-zinc-500 mt-0.5">
                    Mendidik santri putra saling menghargai, santun, dan kompak dalam persaudaraan di pondok.
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-zinc-200 shadow-xs flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-900">Al-Muhafadhotu 'ala Qadimis Shalih</h4>
                  <p className="text-xs text-zinc-500 mt-0.5">
                    Menjaga tradisi salaf yang baik dan mengambil hal baru yang bermanfaat (literasi IT santri).
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
