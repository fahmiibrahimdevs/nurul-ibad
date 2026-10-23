import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ItInitiativeSection } from './components/ItInitiativeSection';
import { TeachersSection } from './components/TeachersSection';
import { HumasSection } from './components/HumasSection';
import { ScholarshipSection } from './components/ScholarshipSection';
import { PsbSection } from './components/PsbSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PsbModal } from './components/PsbModal';

export const App: React.FC = () => {
  const [isPsbModalOpen, setIsPsbModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-zinc-900 flex flex-col antialiased">
      {/* Top Navbar */}
      <Navbar onOpenPsbModal={() => setIsPsbModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenPsbModal={() => setIsPsbModalOpen(true)} />
        <AboutSection />
        <ItInitiativeSection />
        <TeachersSection />
        <HumasSection />
        <ScholarshipSection />
        <PsbSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Quick PSB Modal Popup */}
      <PsbModal
        isOpen={isPsbModalOpen}
        onClose={() => setIsPsbModalOpen(false)}
      />
    </div>
  );
};

export default App;
