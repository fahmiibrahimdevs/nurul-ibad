import React from 'react';
import { HelpCircle, Check, MessageCircle, FileText, Users, HandHeart } from 'lucide-react';
import { CONTACT_PERSONS } from '../data/pesantrenData';

export const ScholarshipSection: React.FC = () => {
  return (
    <section id="biaya" className="py-16 sm:py-20 bg-zinc-50/70 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-800">
            Informasi Infaq & Pendaftaran
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold text-zinc-950 tracking-tight">
            Biaya Transparan & Penuh Semangat Kekeluargaan
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
            Mengingat Pondok Pesantren Nurul Ibad berfokus pada pembinaan santri binaan terbatas (±25 santri), 
            segala rincian infaq awal dan syahriah bulanan disampaikan secara transparan melalui musyawarah langsung dengan pihak sekretariat.
          </p>
        </div>

        {/* 2 Clean Modest Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          
          {/* Card 1: Direct WhatsApp Consultation for Fees */}
          <div className="bg-white rounded-2xl border border-zinc-200 p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center">
                <FileText className="w-6 h-6" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-zinc-950">
                  Konsultasi Rincian Infaq & Syahriah
                </h3>
                <p className="text-xs sm:text-sm text-zinc-500 font-semibold mt-1">
                  Langsung Terhubung dengan Sekretariat Pondok
                </p>
              </div>

              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                Untuk mendapatkan rincian infaq perlengkapan, asrama, dan syahriah bulanan santri secara rinci, 
                bapak/ibu calon wali santri dapat langsung menghubungi sekretariat via WhatsApp.
              </p>

              <div className="space-y-2 pt-2 text-xs sm:text-sm text-zinc-700">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Rincian infaq transparan tanpa biaya tersembunyi</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Penjelasan kebutuhan kitab dan seragam santri</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Konfirmasi ketersediaan sisa kuota (±25 santri)</span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <a
                href={`https://wa.me/${CONTACT_PERSONS[1].phoneRaw}?text=${encodeURIComponent("Assalamu'alaikum Warahmatullahi Wabarakatuh Ust. Rifqi, mohon informasi rincian infaq pendaftaran dan biaya bulanan santri baru di Pondok Pesantren Nurul Ibad.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-xs sm:text-sm transition shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                Tanya Rincian Biaya via WhatsApp
              </a>
            </div>
          </div>

          {/* Card 2: Silaturahmi & Musyawarah Kekeluargaan */}
          <div className="bg-white rounded-2xl border border-zinc-200 p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-zinc-100 text-zinc-700 flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-zinc-950">
                  Silaturahmi & Dialog Terbuka
                </h3>
                <p className="text-xs sm:text-sm text-zinc-500 font-semibold mt-1">
                  Kunjungan Langsung ke Pondok Pesantren
                </p>
              </div>

              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                Kami sangat menganjurkan orang tua atau calon wali santri untuk datang bersilaturahmi langsung. 
                Dengan melihat langsung suasana asrama yang tenang dan berdialog dengan pengasuh, 
                orang tua dapat merasa lebih mantap menitipkan putranya.
              </p>

              <div className="space-y-2 pt-2 text-xs sm:text-sm text-zinc-700">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Melihat langsung asrama santri dan sarana ngaji</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Dialog ramah tamah bersama dewan asatidz</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Pelayanan kunjungan setiap hari 08.00 - 17.00 WIB</span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <a
                href={`https://wa.me/${CONTACT_PERSONS[2].phoneRaw}?text=${encodeURIComponent(CONTACT_PERSONS[2].defaultMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-zinc-300 hover:bg-zinc-50 text-zinc-800 font-semibold text-xs sm:text-sm transition"
              >
                <MessageCircle className="w-4 h-4 text-emerald-700" />
                Atur Jadwal Kunjungan ke Pondok
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
