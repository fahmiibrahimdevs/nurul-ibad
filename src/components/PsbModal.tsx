import React, { useState } from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';
import { CONTACT_PERSONS } from '../data/pesantrenData';

interface PsbModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PsbModal: React.FC<PsbModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    santriName: '',
    parentName: '',
    whatsapp: '',
    currentLevel: 'Usia SMP / Lulus SD',
    city: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = 
      `*PENDAFTARAN SANTRI BARU (PSB) ONLINE*\n` +
      `Pondok Pesantren Nurul Ibad (Khusus Putra)\n` +
      `----------------------------------------\n` +
      `*Nama Santri (Putra):* ${formData.santriName}\n` +
      `*Nama Orang Tua / Wali:* ${formData.parentName}\n` +
      `*No. WhatsApp:* ${formData.whatsapp}\n` +
      `*Usia / Tingkat Saat Ini:* ${formData.currentLevel}\n` +
      `*Kota / Daerah Asal:* ${formData.city || '-'}\n` +
      `*Catatan:* ${formData.notes || '-'}\n` +
      `----------------------------------------\n` +
      `Mohon informasi ketersediaan sisa kuota (kapasitas ±25 santri) dan jadwal silaturahmi. Terima kasih.`;

    const waUrl = `https://wa.me/${CONTACT_PERSONS[1].phoneRaw}?text=${encodeURIComponent(message)}`;
    setSubmitted(true);
    window.open(waUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-zinc-950/40 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-lg rounded-2xl border border-zinc-200 shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        
        {/* Modal Header */}
        <div className="p-5 border-b border-zinc-200 flex items-center justify-between bg-zinc-50">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
              Binaan Terbatas (±25 Santri Putra)
            </span>
            <h3 className="text-base font-bold text-zinc-950 mt-1">
              Formulir Pendaftaran Santri Baru
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-700 hover:bg-zinc-200 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <form onSubmit={handleSubmit} className="p-5 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-zinc-700 mb-1">
              Nama Lengkap Calon Santri (Putra) *
            </label>
            <input
              type="text"
              required
              placeholder="Nama calon santri"
              value={formData.santriName}
              onChange={(e) => setFormData({ ...formData, santriName: e.target.value })}
              className="w-full text-xs px-3 py-2 rounded-lg bg-white border border-zinc-300 focus:outline-none focus:border-emerald-700 transition"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-zinc-700 mb-1">
                Nama Wali / Orang Tua *
              </label>
              <input
                type="text"
                required
                placeholder="Nama orang tua"
                value={formData.parentName}
                onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                className="w-full text-xs px-3 py-2 rounded-lg bg-white border border-zinc-300 focus:outline-none focus:border-emerald-700 transition"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-700 mb-1">
                No. WhatsApp *
              </label>
              <input
                type="tel"
                required
                placeholder="08xxxxxxxxxx"
                value={formData.whatsapp}
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                className="w-full text-xs px-3 py-2 rounded-lg bg-white border border-zinc-300 focus:outline-none focus:border-emerald-700 transition"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-zinc-700 mb-1">
                Usia / Tingkat Saat Ini
              </label>
              <select
                value={formData.currentLevel}
                onChange={(e) => setFormData({ ...formData, currentLevel: e.target.value })}
                className="w-full text-xs px-3 py-2 rounded-lg bg-white border border-zinc-300 focus:outline-none focus:border-emerald-700 transition"
              >
                <option value="Usia SD / MI">Usia SD / MI</option>
                <option value="Lulus SD / Masuk SMP">Lulus SD / Masuk SMP</option>
                <option value="Usia SMP / MTs">Usia SMP / MTs</option>
                <option value="Usia SMA / MA">Usia SMA / MA</option>
                <option value="Kajian Kitab Kuning & Tahfidz">Kajian Kitab Kuning & Tahfidz Murni</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-700 mb-1">
                Kota Asal
              </label>
              <input
                type="text"
                placeholder="Contoh: Jakarta Timur, Depok, dll."
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className="w-full text-xs px-3 py-2 rounded-lg bg-white border border-zinc-300 focus:outline-none focus:border-emerald-700 transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-zinc-700 mb-1">
              Catatan / Jadwal Silaturahmi
            </label>
            <textarea
              rows={2}
              placeholder="Tuliskan jika ingin berkunjung langsung ke pondok..."
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="w-full text-xs px-3 py-2 rounded-lg bg-white border border-zinc-300 focus:outline-none focus:border-emerald-700 transition"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-2.5 px-4 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-xs sm:text-sm transition flex items-center justify-center gap-2 shadow-xs"
            >
              <Send className="w-4 h-4" />
              Kirim ke WhatsApp Panitia PSB
            </button>
          </div>

          {submitted && (
            <div className="p-2.5 bg-emerald-50 border border-emerald-200 rounded-lg flex items-center gap-2 text-xs text-emerald-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
              <span>Dialihkan ke WhatsApp Panitia ({CONTACT_PERSONS[1].phone}).</span>
            </div>
          )}
        </form>

      </div>
    </div>
  );
};
