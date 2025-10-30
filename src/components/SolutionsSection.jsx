import React from 'react';
import { Shield, Users, CheckCircle } from 'lucide-react';

const Bullet = ({ children }) => (
  <li className="flex items-start gap-3">
    <CheckCircle className="mt-1 h-5 w-5 text-emerald-600" />
    <span className="text-slate-600">{children}</span>
  </li>
);

const SolutionsSection = () => {
  return (
    <section className="container mx-auto px-6 py-16" id="why">
      <div className="grid gap-10 md:grid-cols-2">
        <div className="space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
            <Shield className="h-4 w-4" /> The Opportunity: Why GCCs for SMBs
          </span>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Control like in-house, costs like outsourcing</h2>
          <p className="text-slate-600">
            GCCs were once exclusive to Fortune 500s. Today, SMBs can leverage mini-GCC models to scale globally while reducing costs and retaining full control over IP and culture.
          </p>
          <ul className="mt-4 space-y-3">
            <Bullet>Rising labor costs across the US, UK, and EU</Bullet>
            <Bullet>Abundant skilled talent in India across IT, finance, and operations</Bullet>
            <Bullet>Data control and security vs. generic outsourcing</Bullet>
            <Bullet>Culture-aligned, dedicated offshore teams</Bullet>
          </ul>
        </div>

        <div className="space-y-6">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
              <Users className="h-4 w-4" /> The Problem SMBs Face
            </span>
            <ul className="mt-4 space-y-3">
              <Bullet>Unreliable freelance or outsourcing partners</Bullet>
              <Bullet>Lack of control over operations and data</Bullet>
              <Bullet>High attrition and inconsistent quality</Bullet>
              <Bullet>Hidden costs and slow time-to-market</Bullet>
            </ul>
          </div>

          <div className="rounded-xl border border-slate-200 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">The PGCS Solution</h3>
            <p className="mt-2 text-slate-600">
              We deliver Build–Operate–Transfer (BOT) and Dedicated Team models with end-to-end ownership — recruitment, HR/payroll, IT, security, compliance, and performance.
            </p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              <Bullet>Establish a mini GCC in India (fully branded)</Bullet>
              <Bullet>Secure infrastructure with ISO 27001-based controls</Bullet>
              <Bullet>Transparent operations, quality management, and reporting</Bullet>
              <Bullet>Optional transfer of ownership when stable</Bullet>
            </ul>
            <div className="mt-4 rounded-lg bg-emerald-50 p-4 text-emerald-800">
              Result: High-performance offshore center in 6–8 weeks with zero operational stress.
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: '60–70% Cost Savings',
            desc: 'Reduce total hiring and operational costs vs. local markets.',
          },
          {
            title: 'Top Indian Talent',
            desc: 'Access vetted engineers, analysts, designers, and operators.',
          },
          {
            title: 'Scalable Teams (5 to 500)',
            desc: 'Start lean, scale fast based on roadmap and demand.',
          },
          {
            title: 'IP & Data Protection',
            desc: 'NDAs, access control, and secure infrastructure by design.',
          },
          {
            title: 'Daily Collaboration',
            desc: 'You control the backlog, priorities, and delivery standards.',
          },
          {
            title: 'Seamless Communication',
            desc: 'Slack, Teams, Jira, Asana — we fit your workflows.',
          },
        ].map((c) => (
          <div key={c.title} className="rounded-xl border border-slate-200 p-6 shadow-sm">
            <div className="flex items-center gap-2 text-emerald-700">
              <CheckCircle className="h-5 w-5" />
              <h4 className="font-semibold">{c.title}</h4>
            </div>
            <p className="mt-2 text-slate-600">{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SolutionsSection;
