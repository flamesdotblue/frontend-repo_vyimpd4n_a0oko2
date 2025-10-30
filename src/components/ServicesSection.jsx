import React from 'react';
import { Building2, Workflow, Server, Lock } from 'lucide-react';

const Pill = ({ children }) => (
  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">{children}</span>
);

const ServicesSection = () => {
  return (
    <section id="services" className="bg-slate-50 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Service Models</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <div className="flex items-center gap-2 text-slate-900">
              <Building2 className="h-5 w-5 text-emerald-600" />
              <h3 className="text-lg font-semibold">Build–Operate–Transfer (BOT)</h3>
            </div>
            <p className="mt-2 text-slate-600">
              Ideal for SMBs planning long-term offshore operations. We recruit, operate, and stabilize your center before transferring ownership to you.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Pill>Recruitment & HR</Pill>
              <Pill>Operations</Pill>
              <Pill>Compliance</Pill>
              <Pill>Ownership Transfer</Pill>
            </div>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <div className="flex items-center gap-2 text-slate-900">
              <Workflow className="h-5 w-5 text-emerald-600" />
              <h3 className="text-lg font-semibold">Dedicated Offshore Team</h3>
            </div>
            <p className="mt-2 text-slate-600">
              Best when you want to scale quickly without ownership. A handpicked team works 100% for you while we handle logistics, HR, and administration.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Pill>Rapid Scale</Pill>
              <Pill>Full Focus</Pill>
              <Pill>Zero Overhead</Pill>
              <Pill>Transparent Billing</Pill>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-semibold text-slate-900">Industries We Serve</h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              'FinTech & Banking – KYC, automation, app dev, analytics',
              'Healthcare – AI workflows, data entry, claim processing',
              'E-commerce & Retail – digital marketing, backend ops',
              'Education & EdTech – content development, LMS support',
              'Real Estate & Construction – CRM, process automation, support',
              'SaaS & Product Startups – dev pods, testing, support',
            ].map((item) => (
              <div key={item} className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center gap-2 text-slate-800">
                  <Server className="h-4 w-4 text-emerald-600" />
                  <span>{item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-lg font-semibold text-slate-900">Technology & Infrastructure</h3>
            <ul className="mt-4 space-y-3 text-slate-600">
              <li className="flex items-start gap-3"><Lock className="mt-1 h-5 w-5 text-emerald-600" /> Modern offices in Ahmedabad & Pune tech hubs</li>
              <li className="flex items-start gap-3"><Lock className="mt-1 h-5 w-5 text-emerald-600" /> High-speed connectivity, VPN & security protocols</li>
              <li className="flex items-start gap-3"><Lock className="mt-1 h-5 w-5 text-emerald-600" /> ISO 27001-based data privacy compliance</li>
              <li className="flex items-start gap-3"><Lock className="mt-1 h-5 w-5 text-emerald-600" /> Cloud-based HR, finance, and project tracking</li>
              <li className="flex items-start gap-3"><Lock className="mt-1 h-5 w-5 text-emerald-600" /> 24×7 monitoring & access control</li>
            </ul>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-lg font-semibold text-slate-900">Team & Organization</h3>
            <ul className="mt-4 space-y-2 text-slate-600">
              <li>Client Team Lead (Onshore)</li>
              <li>Offshore Delivery Manager (PGCS)</li>
              <li>HR & Admin Support</li>
              <li>IT & Security Lead</li>
              <li>QA & Compliance Officer</li>
            </ul>
            <div className="mt-4 text-slate-600">
              Optional: legal compliance, payroll, and finance reporting.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
