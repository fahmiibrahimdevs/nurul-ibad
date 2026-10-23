import React from 'react';
import { MAIN_TEACHERS } from '../data/pesantrenData';

export const TeachersSection: React.FC = () => {
  return (
    <section id="pengajar" className="py-16 sm:py-20 bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-800">
            Dewan Masyayikh & Pengajar
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold text-zinc-950 tracking-tight">
            Keteladanan Sanad Ilmu & Pembinaan Berkelanjutan
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
            Pendidikan di Pondok Pesantren Nurul Ibad diasuh langsung oleh dewan asatidz dan masyayikh 
            yang menjaga kemurnian sanad Ahlussunnah wal Jama'ah serta mendampingi santri secara intensif.
          </p>
        </div>

        {/* 1 Row with 3 Main Teachers (Pendiri di Tengah) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {MAIN_TEACHERS.map((teacher) => {
            const isFounder = teacher.id === 'founder';

            return (
              <div
                key={teacher.id}
                className={`rounded-2xl p-6 sm:p-8 text-center flex flex-col items-center transition duration-200 group ${
                  isFounder
                    ? 'bg-white border-2 border-emerald-800 shadow-md md:-translate-y-2'
                    : 'bg-zinc-50/80 border border-zinc-200 hover:border-emerald-600/40 hover:bg-white hover:shadow-xs'
                }`}
              >
                {/* Circular Avatar / Photo Container */}
                <div className="relative mb-5">
                  <div
                    className={`rounded-full bg-white border-2 border-emerald-800 flex items-center justify-center text-emerald-900 shadow-xs group-hover:scale-102 transition-transform overflow-hidden ${
                      isFounder
                        ? 'w-32 h-32 sm:w-36 sm:h-36 ring-4 ring-emerald-50'
                        : 'w-26 h-26 sm:w-28 sm:h-28'
                    }`}
                  >
                    {teacher.imageSrc ? (
                      <img
                        src={teacher.imageSrc}
                        alt={teacher.name}
                        className="w-full h-full object-cover object-top"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center">
                        <span className="font-serif text-2xl sm:text-3xl font-bold text-emerald-800">
                          {teacher.avatarInitial}
                        </span>
                        <span className="text-[9px] uppercase font-semibold tracking-widest text-zinc-400 mt-0.5">
                          Foto Asatidz
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Role badge floating at bottom of avatar */}
                  <span
                    className={`absolute -bottom-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-bold px-3 py-0.5 rounded-full shadow-xs ${
                      isFounder
                        ? 'bg-emerald-900 text-emerald-100 ring-2 ring-white'
                        : 'bg-emerald-800 text-white'
                    }`}
                  >
                    {teacher.badge}
                  </span>
                </div>

                {/* Name & Role */}
                <div className="mt-2 space-y-1">
                  <h3
                    className={`font-bold text-zinc-950 group-hover:text-emerald-900 transition ${
                      isFounder ? 'text-lg sm:text-xl' : 'text-base sm:text-lg'
                    }`}
                  >
                    {teacher.name}
                  </h3>
                  <p className="text-xs font-semibold text-emerald-700">
                    {teacher.role}
                  </p>
                </div>

                {/* Bio */}
                <p className="text-xs text-zinc-600 leading-relaxed mt-4 max-w-sm">
                  {teacher.bio}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
