import React from 'react';
import { Quote, Star, DollarSign, ArrowRight } from 'lucide-react';

const CaseCard = ({ title, bullets }) => (
  <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
    <div className="flex items-center gap-2 text-slate-900">
      <Quote className="h-5 w-5 text-emerald-600" />
      <h4 className="font-semibold">{title}</h4>
    </div>
    <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-600">
      {bullets.map((b, i) => (
        <li key={i}>{b}</li>
      ))}
    </ul>
  </div>
);

const Testimonial = ({ name, role, quote }) => (
  <div className="rounded-xl bg-gradient-to-br from-white to-slate-50 p-6 shadow-sm ring-1 ring-slate-200">
    <div className="flex items-center gap-2 text-amber-500">
      <Star className="h-5 w-5" />
      <Star className="h-5 w-5" />
      <Star className="h-5 w-5" />
      <Star className="h-5 w-5" />
      <Star className="h-5 w-5" />
    </div>
    <p className="mt-3 text-slate-700 italic">“{quote}”</p>
    <div className="mt-4 text-sm text-slate-500">{name} — {role}</div>
  </div>
);

const ProofCTASection = () => {
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Case Studies</h2>
          <div className="mt-6 grid gap-6">
            <CaseCard
              title="SaaS Startup from California"
              bullets={[
                'Set up 12-member offshore center in Ahmedabad (Backend + UI/UX)',
                '68% reduction in operational costs',
                '2.3× faster release cycle',
                '100% transparency in reporting and delivery',
                'Transitioned to full BOT within 9 months',
              ]}
            />
            <CaseCard
              title="UK FinTech Scale-up"
              bullets={[
                'Built 20-person KYC + Automation pod in 7 weeks',
                'Cut vendor dependency and improved data control',
                'Increased compliance accuracy to 99.3%',
              ]}
            />
            <CaseCard
              title="US HealthTech Platform"
              bullets={[
                'Deployed 10-member data ops + ML-assist team',
                'HIPAA-aware processes and secure infra',
                'Reduced claims processing time by 45%',
              ]}
            />
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold text-slate-900">What clients say</h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <Testimonial
                name="CTO, SaaS Company"
                role="California, USA"
                quote="PGCS gave us the speed of a startup and the rigor of an enterprise. Our offshore team feels like an extension of our HQ."
              />
              <Testimonial
                name="Operations Head, FinTech"
                role="London, UK"
                quote="Seamless compliance, predictable costs, and full transparency. The BOT transition was smooth."
              />
            </div>
          </div>

          <div className="mt-10 rounded-2xl bg-slate-900 p-6 text-white">
            <div className="flex items-start gap-3">
              <DollarSign className="mt-1 h-6 w-6 text-emerald-400" />
              <div>
                <h4 className="text-lg font-semibold">Pricing & Engagement</h4>
                <p className="mt-1 text-slate-300">Request a transparent quote tailored to your team size, stack, and roadmap. No lock-ins, no hidden fees.</p>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); window.open('https://cal.com/', '_blank'); }}
                className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-3 font-medium text-slate-900 hover:bg-slate-100"
              >
                Get a Quote
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); const t = encodeURIComponent('Hi PGCS, I would like a pricing estimate.'); window.open(`https://wa.me/15551234567?text=${t}`, '_blank'); }}
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-3 font-medium text-white hover:bg-emerald-500"
              >
                Chat on WhatsApp
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 rounded-xl bg-emerald-50 p-6 text-emerald-900">
        <h4 className="text-lg font-semibold">Marketing & Growth Strategy</h4>
        <p className="mt-2">
          We drive outreach via LinkedIn and B2B campaigns, partner with accelerators and incubators, speak at industry events and webinars, run client referral programs, and offer white-label collaboration to global IT firms.
        </p>
      </div>
    </section>
  );
};

export default ProofCTASection;
