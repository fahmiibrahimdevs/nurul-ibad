import React, { useState } from 'react';
import { Send, CheckCircle2, MessageCircle, FileCheck, Calendar, Users2, AlertCircle } from 'lucide-react';
import { CONTACT_PERSONS } from '../data/pesantrenData';

export const PsbSection: React.FC = () => {
  const [formData, setFormData] = useState({
    santriName: '',
    parentName: '',
    whatsapp: '',
    currentLevel: 'Usia SMP / Lulus SD',
    city: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Format clean message for WhatsApp
    const message = 
      `*FORMULIR PENDAFTARAN AWAL SANTRI PUTRA*\n` +
      `Pondok Pesantren Nurul Ibad Jakarta Timur\n` +
      `----------------------------------------\n` +
      `*Nama Calon Santri:* ${formData.santriName}\n` +
      `*Nama Orang Tua / Wali:* ${formData.parentName}\n` +
      `*No. WhatsApp:* ${formData.whatsapp}\n` +
      `*Usia / Tingkat Saat Ini:* ${formData.currentLevel}\n` +
      `*Kota / Daerah Asal:* ${formData.city || '-'}\n` +
      `*Catatan / Rencana Silaturahmi:* ${formData.notes || '-'}\n` +
      `----------------------------------------\n` +
      `Mohon informasi ketersediaan sisa kuota (kapasitas ±25 santri) dan jadwal silaturahmi. Terima kasih.`;

    const waUrl = `https://wa.me/${CONTACT_PERSONS[1].phoneRaw}?text=${encodeURIComponent(message)}`;
    
    setSubmitted(true);
    window.open(waUrl, '_blank');
  };

  return (
    <section id="psb" className="py-16 sm:py-20 bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-800">
            Penerimaan Santri Baru (PSB)
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold text-zinc-950 tracking-tight">
            Alur Pendaftaran Santri Putra (Binaan Terbatas ±25)
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
            Untuk menjaga mutu bimbingan adab dan pengawasan asrama yang dekat, kami hanya menerima sekitar 25 santri putra. 
            Silakan mengisi data awal berikut atau langsung menghubungi panitia melalui WhatsApp.
          </p>
        </div>

        {/* 4-Step Process Bar */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          <div className="bg-zinc-50 p-5 rounded-xl border border-zinc-200">
            <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-md">
              Langkah 1
            </span>
            <h4 className="text-sm font-bold text-zinc-900 mt-3">Konsultasi / Isi Form</h4>
            <p className="text-xs text-zinc-500 mt-1">
              Isi data awal santri atau chat panitia via WhatsApp untuk cek kuota.
            </p>
          </div>

          <div className="bg-zinc-50 p-5 rounded-xl border border-zinc-200">
            <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-md">
              Langkah 2
            </span>
            <h4 className="text-sm font-bold text-zinc-900 mt-3">Silaturahmi ke Pondok</h4>
            <p className="text-xs text-zinc-500 mt-1">
              Wali santri dan calon santri datang langsung melihat suasana pondok.
            </p>
          </div>

          <div className="bg-zinc-50 p-5 rounded-xl border border-zinc-200">
            <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-md">
              Langkah 3
            </span>
            <h4 className="text-sm font-bold text-zinc-900 mt-3">Wawancara & Pemetaan</h4>
            <p className="text-xs text-zinc-500 mt-1">
              Melihat bacaan Al-Qur'an dan kesiapan santri tinggal di asrama.
            </p>
          </div>

          <div className="bg-zinc-50 p-5 rounded-xl border border-zinc-200">
            <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-md">
              Langkah 4
            </span>
            <h4 className="text-sm font-bold text-zinc-900 mt-3">Daftar Ulang & Mukim</h4>
            <p className="text-xs text-zinc-500 mt-1">
              Penetapan kamar asrama, pembagian kitab, dan santri mulai menetap.
            </p>
          </div>
        </div>

        {/* Clean Interactive Form Card */}
        <div className="max-w-2xl mx-auto bg-zinc-50/70 border border-zinc-200 rounded-2xl p-6 sm:p-10 shadow-xs">
          
          <div className="flex items-center justify-between border-b border-zinc-200 pb-5 mb-6">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-zinc-950">
                Formulir Pendaftaran Awal (Online)
              </h3>
              <p className="text-xs text-zinc-500 mt-0.5">
                Data akan diteruskan langsung ke WhatsApp Panitia PSB ({CONTACT_PERSONS[1].name}).
              </p>
            </div>
            <span className="text-[11px] font-bold px-2.5 py-1 rounded bg-emerald-100 text-emerald-900">
              Khusus Putra
            </span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-700 mb-1">
                  Nama Lengkap Calon Santri (Putra) *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Muhammad Fatih"
                  value={formData.santriName}
                  onChange={(e) => setFormData({ ...formData, santriName: e.target.value })}
                  className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg bg-white border border-zinc-300 focus:outline-none focus:border-emerald-700 transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-700 mb-1">
                  Nama Orang Tua / Wali *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Bapak H. Abdullah"
                  value={formData.parentName}
                  onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                  className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg bg-white border border-zinc-300 focus:outline-none focus:border-emerald-700 transition"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-700 mb-1">
                  Nomor WhatsApp Aktif *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="081234567890"
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg bg-white border border-zinc-300 focus:outline-none focus:border-emerald-700 transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-700 mb-1">
                  Usia / Tingkat Saat Ini *
                </label>
                <select
                  value={formData.currentLevel}
                  onChange={(e) => setFormData({ ...formData, currentLevel: e.target.value })}
                  className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg bg-white border border-zinc-300 focus:outline-none focus:border-emerald-700 transition"
                >
                  <option value="Usia SD / MI">Usia SD / MI</option>
                  <option value="Lulus SD / Masuk SMP">Lulus SD / Masuk Usia SMP</option>
                  <option value="Usia SMP / MTs">Usia SMP / MTs</option>
                  <option value="Usia SMA / MA">Usia SMA / MA</option>
                  <option value="Kajian Kitab Kuning & Tahfidz Murni">Kajian Kitab Kuning & Tahfidz Murni</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-700 mb-1">
                Kota / Wilayah Tempat Tinggal
              </label>
              <input
                type="text"
                placeholder="Contoh: Jakarta Timur, Bekasi, Depok, dll."
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg bg-white border border-zinc-300 focus:outline-none focus:border-emerald-700 transition"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-700 mb-1">
                Catatan / Rencana Silaturahmi Langsung
              </label>
              <textarea
                rows={3}
                placeholder="Tuliskan jika ingin mengatur jadwal survei asrama atau ada pertanyaan seputar mukim santri."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg bg-white border border-zinc-300 focus:outline-none focus:border-emerald-700 transition"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 px-6 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-sm transition flex items-center justify-center gap-2 shadow-xs"
              >
                <Send className="w-4 h-4" />
                Kirim Data Awal via WhatsApp Panitia
              </button>
            </div>

            {submitted && (
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg flex items-center gap-2 text-xs text-emerald-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Formulir telah disiapkan dan dialihkan ke WhatsApp Panitia PSB ({CONTACT_PERSONS[1].phone}).</span>
              </div>
            )}

            <p className="text-[11px] text-zinc-400 text-center pt-2">
              Pondok Pesantren Nurul Ibad menjaga amanah data dan privasi calon santri.
            </p>
          </form>

        </div>

      </div>
    </section>
  );
};
