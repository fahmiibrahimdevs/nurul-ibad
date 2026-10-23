import React from 'react';
import { MapPin, Phone, MessageSquare, Clock, ExternalLink, Navigation } from 'lucide-react';
import { PESANTREN_INFO, CONTACT_PERSONS } from '../data/pesantrenData';

export const ContactSection: React.FC = () => {
  return (
    <section id="lokasi" className="py-16 sm:py-20 bg-zinc-50/70 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-800">
            Kontak & Lokasi Pesantren
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold text-zinc-950 tracking-tight">
            Silaturahmi & Kunjungan Langsung
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
            Kami menyambut hangat kedatangan bapak/ibu calon wali santri untuk melihat langsung 
            kehidupan asrama, sarana ibadah, dan lingkungan belajar di Pondok Pesantren Nurul Ibad.
          </p>
        </div>

        {/* 2 Columns: Contacts & Map */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: 3 Contact Persons + Address */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address Box */}
            <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-xs space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-zinc-950">Alamat Lengkap</h3>
                  <p className="text-xs text-zinc-600 mt-1 leading-relaxed">
                    {PESANTREN_INFO.address.full}
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-zinc-100 flex items-center justify-between text-xs">
                <span className="text-zinc-500 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  Kunjungan: 08.00 - 17.00 WIB
                </span>
                <a
                  href={PESANTREN_INFO.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-emerald-800 hover:text-emerald-950 inline-flex items-center gap-1"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  Buka Google Maps
                </a>
              </div>
            </div>

            {/* 3 Contact Persons List */}
            <div className="space-y-3">
              <p className="text-xs font-bold text-zinc-900 uppercase tracking-wider px-1">
                Layanan Kontak WhatsApp Panitia & Humas
              </p>

              {CONTACT_PERSONS.map((cp, idx) => (
                <div
                  key={idx}
                  className="bg-white p-4 rounded-xl border border-zinc-200 shadow-xs hover:border-emerald-600/40 transition flex items-center justify-between gap-4 group"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold text-zinc-900 group-hover:text-emerald-900 transition">
                        {cp.name}
                      </h4>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-zinc-100 text-zinc-600">
                        {cp.division}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-500">
                      {cp.phone} &bull; {cp.description}
                    </p>
                  </div>

                  <a
                    href={`https://wa.me/${cp.phoneRaw}?text=${encodeURIComponent(cp.defaultMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-emerald-50 text-emerald-800 hover:bg-emerald-800 hover:text-white transition shrink-0"
                    title={`Hubungi ${cp.name} via WhatsApp`}
                  >
                    <MessageSquare className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Clean Map Placeholder & Directions */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-xs">
            
            <div className="p-4 bg-zinc-50 border-b border-zinc-200 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-zinc-900">Peta Lokasi Pesantren</p>
                <p className="text-[11px] text-zinc-500">Kecamatan Cipayung, Jakarta Timur</p>
              </div>
              <a
                href={PESANTREN_INFO.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-emerald-800 text-white hover:bg-emerald-900 transition"
              >
                Petunjuk Arah
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Embedded Google Maps iframe */}
            <div className="w-full aspect-16/10 bg-zinc-100 relative">
              <iframe
                title="Peta Lokasi Pondok Pesantren Nurul Ibad"
                src="https://maps.google.com/maps?q=-6.2918698,106.8961482&t=&z=17&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="p-4 bg-white text-xs text-zinc-600 border-t border-zinc-100 flex flex-col sm:flex-row items-center justify-between gap-2">
              <span>Akses mudah via Tol Jagorawi (Exit Taman Mini / Pondok Gede) & Jl. Raya Pondok Gede.</span>
              <span className="font-semibold text-emerald-900">Khusus Santri Putra</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
