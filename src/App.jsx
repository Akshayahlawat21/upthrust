import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';

export function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleOpenContact = (service = null) => {
    setSelectedService(service);
    setIsContactOpen(true);
  };

  const handleCloseContact = () => {
    setIsContactOpen(false);
    setSelectedService(null);
  };

  return (
    <div className="w-full min-h-screen bg-black text-white flex flex-col selection:bg-brand-orange selection:text-white">
      {/* Header Navigation */}
      <Navbar onOpenContact={() => handleOpenContact(null)} />

      {/* Main Content Area */}
      <main className="flex-1 w-full">
        {/* Hero Section (Includes single H1 for SEO + Blueprint visual) */}
        <Hero />

        {/* 4-Card Services Reel with Continuous 3D Orange Ribbon */}
        <Services onOpenContact={handleOpenContact} />
      </main>

      {/* Footer with UPTHRUST DESIGN typography and Newsletter Lead Form */}
      <Footer />

      {/* Interactive Contact Inquiries Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={handleCloseContact}
        selectedService={selectedService}
      />
    </div>
  );
}

export default App;
