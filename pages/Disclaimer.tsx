import React from 'react';
import SEO from '../components/SEO';
import { legalData } from '../data/legalData';

const Disclaimer: React.FC = () => {
  const data = legalData['disclaimer'];

  return (
    <div className="pt-32 pb-20 max-w-4xl mx-auto px-4">
      <SEO 
        title={data.title} 
        description={`Legal disclaimer for DPBuzz Digital Marketing Agency. Last updated ${data.lastUpdated}.`} 
      />
      <div className="space-y-12">
        <header className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-black uppercase italic text-black reveal-up">
            Legal <span className="text-slate-300">Disclaimer.</span>
          </h1>
          <p className="text-slate-400 font-black uppercase text-[10px] tracking-widest border-b-4 border-black pb-4">Effective Date: {data.lastUpdated}</p>
        </header>

        <section className="space-y-8 text-lg text-slate-700 leading-relaxed font-medium reveal-up stagger-1">
          {data.sections.map((section, idx) => (
            <div key={idx} className="space-y-4">
              <h2 className="text-2xl font-black uppercase italic text-black">{section.heading}</h2>
              <p>{section.content}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Disclaimer;