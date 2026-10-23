import React from 'react';
import { MessageCircle, Phone, Clock, UserCheck } from 'lucide-react';
import { HUMAS_PERSONS } from '../data/pesantrenData';

export const HumasSection: React.FC = () => {
  return (
    <section id="humas" className="py-16 sm:py-20 bg-zinc-50/70 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-800">
            Tim Layanan & Komunikasi
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold text-zinc-950 tracking-tight">
            Tim Humas & Sekretariat Pondok
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
            Untuk memudahkan bapak/ibu calon wali santri, silakan menghubungi ustadz pembina 
            sesuai bidang kebutuhan informasi Anda. Kami siap melayani dialog ramah dan bersahaja.
          </p>
        </div>

        {/* 1 Row with 3 Humas Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {HUMAS_PERSONS.map((person) => (
            <div
              key={person.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-zinc-200 flex flex-col justify-between hover:border-emerald-700/50 hover:shadow-xs transition duration-200 group"
            >
              <div>
                {/* Avatar Placeholder Circle */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-emerald-50 border-2 border-emerald-800 flex items-center justify-center text-emerald-900 font-bold text-lg shadow-xs group-hover:scale-105 transition-transform overflow-hidden">
                      {person.imageSrc ? (
                        <img
                          src={person.imageSrc}
                          alt={person.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="font-serif text-lg font-bold text-emerald-800">
                          {person.avatarInitial}
                        </span>
                      )}
                    </div>
                  </div>

                  <div>
                    <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 mb-1">
                      {person.badge}
                    </span>
                    <h3 className="text-base font-bold text-zinc-950 group-hover:text-emerald-900 transition">
                      {person.name}
                    </h3>
                    <p className="text-xs font-semibold text-emerald-700">
                      Akrab disapa: {person.nickName}
                    </p>
                  </div>
                </div>

                {/* Role & Bio */}
                <p className="text-xs text-zinc-600 leading-relaxed mt-2">
                  {person.bio}
                </p>

                {/* Available Hours */}
                <div className="mt-4 pt-3 border-t border-zinc-100 flex items-center justify-between text-[11px] text-zinc-500">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-zinc-400" />
                    Setiap Hari: 08.00 - 20.00 WIB
                  </span>
                  <span className="font-medium text-zinc-700">
                    {person.phone}
                  </span>
                </div>
              </div>

              {/* Direct WhatsApp Action Button */}
              <div className="mt-6 pt-2">
                <a
                  href={`https://wa.me/${person.phoneRaw}?text=${encodeURIComponent(person.defaultMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-xs transition shadow-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat WhatsApp {person.nickName}
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
