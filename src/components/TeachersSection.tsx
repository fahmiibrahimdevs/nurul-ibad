import React from 'react';
import { LEADERSHIP_MEMBERS, TEACHER_MEMBERS } from '../data/pesantrenData';

export const TeachersSection: React.FC = () => {
  return (
    <section id="pengajar" className="py-16 sm:py-20 bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-800">
            Pimpinan Yayasan & Dewan Pengajar
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold text-zinc-950 tracking-tight">
            Keteladanan Sanad Keilmuan & Pembina Pesantren
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
            Amanah pendidikan berakar dari keteladanan almaghfurlah pendiri, diteruskan oleh kepemimpinan yayasan, 
            serta dibimbing langsung oleh asatidz yang mendampingi keseharian santri putra secara intensif.
          </p>
        </div>

        {/* TIER 1: Dewan Masyayikh & Pimpinan Yayasan (2 Kartu Berkelas Bersanding Sejajar) */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px bg-zinc-200 flex-1" />
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-900 bg-emerald-50 border border-emerald-200 px-3.5 py-1 rounded-full">
              Dewan Masyayikh & Pimpinan Yayasan
            </span>
            <span className="h-px bg-zinc-200 flex-1" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {LEADERSHIP_MEMBERS.map((leader) => {
              const isFounder = leader.id === 'founder';

              return (
                <div
                  key={leader.id}
                  className={`rounded-2xl p-6 sm:p-8 text-center flex flex-col items-center transition duration-200 group ${
                    isFounder
                      ? 'bg-white border-2 border-emerald-800 shadow-md ring-4 ring-emerald-50/70'
                      : 'bg-white border-2 border-emerald-700/60 shadow-sm hover:border-emerald-800 hover:shadow-md'
                  }`}
                >
                  {/* Circular Avatar / Photo Container */}
                  <div className="relative mb-5">
                    <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-white border-2 border-emerald-800 flex items-center justify-center text-emerald-900 shadow-xs group-hover:scale-102 transition-transform overflow-hidden">
                      {leader.imageSrc ? (
                        <img
                          src={leader.imageSrc}
                          alt={leader.name}
                          className="w-full h-full object-cover object-top"
                        />
                      ) : (
                        <div className="flex flex-col items-center justify-center">
                          <span className="font-serif text-2xl sm:text-3xl font-bold text-emerald-800">
                            {leader.avatarInitial}
                          </span>
                          <span className="text-[9px] uppercase font-semibold tracking-widest text-zinc-400 mt-0.5">
                            Foto
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Badge */}
                    <span className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-bold px-3 py-0.5 rounded-full bg-emerald-900 text-emerald-100 ring-2 ring-white shadow-xs">
                      {leader.badge}
                    </span>
                  </div>

                  {/* Name & Role */}
                  <div className="mt-2 space-y-1">
                    <h3 className="text-lg sm:text-xl font-bold text-zinc-950 group-hover:text-emerald-900 transition">
                      {leader.name}
                    </h3>
                    <p className="text-xs font-semibold text-emerald-700">
                      {leader.role}
                    </p>
                  </div>

                  {/* Bio */}
                  <p className="text-xs text-zinc-600 leading-relaxed mt-4 max-w-sm">
                    {leader.bio}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* TIER 2: Dewan Asatidz Pengampu Pendidikan Santri (2 Kartu Pengampu) */}
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px bg-zinc-200 flex-1" />
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-700 bg-zinc-100 border border-zinc-200 px-3.5 py-1 rounded-full">
              Asatidz Pengampu Pendidikan Santri
            </span>
            <span className="h-px bg-zinc-200 flex-1" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {TEACHER_MEMBERS.map((teacher) => (
              <div
                key={teacher.id}
                className="bg-zinc-50/80 rounded-2xl p-6 sm:p-8 border border-zinc-200 text-center flex flex-col items-center hover:border-emerald-600/40 hover:bg-white hover:shadow-xs transition duration-200 group"
              >
                {/* Circular Avatar Container */}
                <div className="relative mb-5">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white border-2 border-emerald-800/80 flex items-center justify-center text-emerald-900 shadow-xs group-hover:scale-102 transition-transform overflow-hidden">
                    {teacher.imageSrc ? (
                      <img
                        src={teacher.imageSrc}
                        alt={teacher.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center">
                        <span className="font-serif text-xl sm:text-2xl font-bold text-emerald-800">
                          {teacher.avatarInitial}
                        </span>
                        <span className="text-[9px] uppercase font-semibold tracking-widest text-zinc-400 mt-0.5">
                          Asatidz
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Badge */}
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-800 text-white shadow-xs">
                    {teacher.badge}
                  </span>
                </div>

                {/* Name & Role */}
                <div className="mt-2 space-y-1">
                  <h3 className="text-base sm:text-lg font-bold text-zinc-950 group-hover:text-emerald-900 transition">
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
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
