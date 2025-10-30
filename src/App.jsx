import React from 'react';
import HeroSection from './components/HeroSection';
import SolutionsSection from './components/SolutionsSection';
import ServicesSection from './components/ServicesSection';
import ProofCTASection from './components/ProofCTASection';
import { MessageCircle } from 'lucide-react';

function App() {
  const handleWhatsAppFab = () => {
    const phone = '15551234567'; // replace with your WhatsApp number including country code
    const text = encodeURIComponent('Hello! I would like to discuss setting up a mini-GCC / dedicated team with PGCS.');
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Simple top bar */}
      <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-slate-900" />
            <span className="font-semibold tracking-tight">PGCS</span>
          </div>
          <nav className="hidden gap-6 text-sm text-slate-600 sm:flex">
            <a href="#why" className="hover:text-slate-900">Why GCC</a>
            <a href="#services" className="hover:text-slate-900">Services</a>
            <a href="#proof" className="hover:text-slate-900">Case Studies</a>
          </nav>
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); const t = encodeURIComponent('Hi PGCS team, I would like to book a discovery session.'); window.open(`https://wa.me/15551234567?text=${t}`, '_blank'); }}
            className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-500"
          >
            Chat on WhatsApp
          </a>
        </div>
      </header>

      <main>
        <HeroSection />
        <SolutionsSection />
        <ServicesSection />
        <div id="proof">
          <ProofCTASection />
        </div>
      </main>

      {/* Floating WhatsApp widget */}
      <button
        onClick={handleWhatsAppFab}
        aria-label="WhatsApp chat"
        className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-white shadow-lg transition hover:scale-105 hover:bg-emerald-500"
      >
        <MessageCircle className="h-7 w-7" />
      </button>

      <footer className="mt-20 border-t border-slate-200 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} PGCS — Build, Operate, Transfer your Global Capability Center.
      </footer>
    </div>
  );
}

export default App;
