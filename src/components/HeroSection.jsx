import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, MessageCircle, Calendar, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const handleBook = () => {
    const bookUrl = 'https://cal.com/';
    window.open(bookUrl, '_blank');
  };

  const handleWhatsApp = () => {
    const phone = '15551234567'; // replace with your WhatsApp number including country code
    const text = encodeURIComponent('Hi PGCS team! I would like to explore setting up a mini-GCC / dedicated offshore team.');
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
  };

  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[560px] w-full">
        <Spline
          scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent" />
      </div>

      <div className="container mx-auto -mt-48 px-6 pb-10 sm:-mt-56 md:-mt-64 lg:-mt-72">
        <div className="max-w-3xl rounded-2xl bg-white/80 p-6 backdrop-blur-md shadow-xl ring-1 ring-black/5">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-emerald-700 text-sm font-medium">
            <Rocket className="h-4 w-4" />
            Build your mini-GCC in 6–8 weeks
          </div>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            70% cheaper than local hiring. Build, operate, and scale your Global Capability Center with PGCS.
          </h1>
          <p className="mt-4 text-slate-600 text-lg">
            Get a dedicated, culture-aligned offshore team with full control, transparency, and enterprise-grade security — without the overhead.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              onClick={handleBook}
              className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-3 text-white hover:bg-slate-800 transition"
            >
              <Calendar className="h-4 w-4" />
              Book Free Consultation
            </button>
            <button
              onClick={handleWhatsApp}
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-3 text-white hover:bg-emerald-500 transition"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </button>
            <a href="#services" className="inline-flex items-center gap-1 text-slate-700 hover:text-slate-900">
              Learn more
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
