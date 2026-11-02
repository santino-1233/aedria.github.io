import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { About } from './components/About';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Process } from './components/Process';
import { Differentials } from './components/Differentials';
import { FinalCTA } from './components/FinalCTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedServiceForContact, setSelectedServiceForContact] = useState<string>('');

  const handleSelectService = (serviceName: string) => {
    setSelectedServiceForContact(serviceName);
  };

  const handleSelectProject = (projectNote: string) => {
    setSelectedServiceForContact(projectNote);
  };

  return (
    <div className="min-h-screen bg-[#090A0F] text-[#F3F1F7] selection:bg-[#9065F5]/30 selection:text-white flex flex-col antialiased">
      {/* 01. NAVBAR */}
      <Navbar onOpenContact={() => setSelectedServiceForContact('')} />

      <main className="flex-1 w-full">
        {/* 02. HERO SECTION */}
        <Hero />

        {/* 03. MARQUEE / MANIFIESTO */}
        <Marquee />

        {/* 04. PRESENTACIÓN DE AEDRIA */}
        <About />

        {/* 05. SERVICIOS */}
        <Services onSelectService={handleSelectService} />

        {/* 06. PROYECTOS DESTACADOS */}
        <Projects onSelectProject={handleSelectProject} />

        {/* 07. PROCESO DE TRABAJO */}
        <Process />

        {/* 08. DIFERENCIALES */}
        <Differentials />

        {/* 09. CTA FINAL */}
        <FinalCTA onActionClick={() => setSelectedServiceForContact('')} />

        {/* 10. CONTACTO */}
        <Contact preselectedService={selectedServiceForContact} />
      </main>

      {/* 11. FOOTER */}
      <Footer />
    </div>
  );
}
