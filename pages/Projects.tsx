import React from 'react';
import { ShieldCheck, Zap, Cpu, ArrowRight, Instagram, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const industryBlueprints = [
  { 
    id: 1, 
    name: "Real Estate Growth Engine", 
    industry: "Property & Construction", 
    description: "A high-conversion landing page system designed to capture premium property leads with automated WhatsApp integration.", 
    imageUrl: "https://images.unsplash.com/photo-1582408921715-18e7806365c1?auto=format&fit=crop&q=60&w=600",
    tags: ["Lead Gen", "PPC Ready"]
  },
  { 
    id: 2, 
    name: "Local Map Dominator", 
    industry: "Clinics / Local Shops", 
    description: "Full GMB optimization and review funnel setup to capture 80% of local search intent in a 5km radius.", 
    imageUrl: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?auto=format&fit=crop&q=60&w=600",
    tags: ["GMB", "Local Rank"]
  },
  { 
    id: 3, 
    name: "Content Authority Blueprint", 
    industry: "Lifestyle / Personal Brands", 
    description: "30-day viral Reels strategy combined with community engagement framework for maximizing organic brand reach.", 
    imageUrl: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&q=60&w=600",
    tags: ["Viral", "Engagement"]
  }
];

const arsenal = [
  { icon: Zap, name: "Google Ads", desc: "Precision targeting for intent-based search traffic." },
  { icon: MapPin, name: "GMB Mastery", desc: "Ranking local businesses in the Google Map Pack." },
  { icon: Instagram, name: "Social Content", desc: "Viral Reel scripts and high-impact visual grids." },
  { icon: ShieldCheck, name: "GA4 / GTM", desc: "Advanced conversion tracking & attribution." }
];

const Projects: React.FC = () => {
  return (
    <div className="pt-24 md:pt-32 space-y-24 pb-20 overflow-x-hidden">
      <SEO 
        title="Our Capabilities | Strategic Marketing Blueprints" 
        description="See how DPBuzz approaches digital growth. We showcase our technical blueprints and performance guarantees for Indian businesses."
      />

      <section className="max-w-7xl mx-auto px-4 text-center space-y-8">
        <div className="reveal">
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[var(--accent)] border-b-2 border-black pb-1">Proof of Capability</span>
        </div>
        <h1 className="text-5xl md:text-8xl font-black text-black uppercase italic leading-none text-center reveal-up">
          Our <span className="text-slate-400">Arsenal.</span>
        </h1>
        <p className="text-sm md:text-xl text-slate-500 font-bold uppercase tracking-widest max-w-2xl mx-auto reveal-up stagger-1 text-center">
          We don't just 'do' marketing. We engineer growth through data and performance-first design.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-[4px] border-black reveal-scale">
          <div className="p-10 bg-black text-white space-y-4">
            <Zap className="text-[var(--accent)]" size={32} />
            <h3 className="text-xl font-black uppercase italic">Speed Guarantee</h3>
            <p className="text-slate-400 text-sm font-medium leading-relaxed uppercase tracking-tighter">Every website we build is optimized for a 90+ PageSpeed score. Speed equals more sales.</p>
          </div>
          <div className="p-10 bg-white text-black space-y-4 border-y-[4px] md:border-y-0 md:border-x-[4px] border-black">
            <ShieldCheck size={32} />
            <h3 className="text-xl font-black uppercase italic">Full Transparency</h3>
            <p className="text-slate-500 text-sm font-medium leading-relaxed uppercase tracking-tighter">Real-time dashboards. No hidden metrics. You see every rupee spent and every lead generated.</p>
          </div>
          <div className="p-10 bg-slate-50 text-black space-y-4">
            <Cpu size={32} />
            <h3 className="text-xl font-black uppercase italic">Modern Tech</h3>
            <p className="text-slate-500 text-sm font-medium leading-relaxed uppercase tracking-tighter">We use AI-driven bidding and the latest coding frameworks to stay ahead of your competition.</p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-6 reveal">
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-black text-black uppercase italic leading-none">Industry <span className="text-slate-300">Blueprints</span></h2>
            <p className="text-slate-500 font-bold uppercase tracking-[0.4em] text-[10px]">What we can do for you</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 border-[4px] md:border-[8px] border-black overflow-hidden">
          {industryBlueprints.map((blueprint, i) => (
            <div key={blueprint.id} className={`group relative bg-white overflow-hidden border-black ${i < 2 ? 'md:border-r-[4px] lg:border-r-[8px]' : ''} reveal-up stagger-${i+1}`}>
              <div className="aspect-[4/5] overflow-hidden relative">
                <img 
                  src={blueprint.imageUrl} 
                  loading="lazy"
                  alt={blueprint.name} 
                  className="w-full h-full object-cover opacity-100 md:opacity-90 md:group-hover:opacity-100 md:group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {blueprint.tags.map(tag => (
                    <span key={tag} className="bg-black text-white px-3 py-1 text-[8px] font-black uppercase tracking-widest">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="p-8 space-y-6">
                <div>
                  <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 block mb-2">{blueprint.industry}</span>
                  <h3 className="text-2xl font-black uppercase italic leading-tight md:group-hover:text-slate-600 transition-colors">{blueprint.name}</h3>
                </div>
                <p className="text-slate-600 text-[11px] md:text-xs font-bold leading-relaxed uppercase tracking-tight line-clamp-3">
                  {blueprint.description}
                </p>
                <Link to="/strategy-audit" className="flex items-center space-x-2 text-[10px] font-black uppercase tracking-widest md:group-hover:text-[var(--accent)] transition-colors active:translate-x-1">
                  <span>Get This Blueprint</span>
                  <ArrowRight size={14} className="md:group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-black py-24 md:py-32 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16 md:mb-24 space-y-4 reveal">
            <h2 className="text-4xl md:text-5xl font-black uppercase italic leading-none">The <span className="text-slate-600 underline underline-offset-[12px]">Arsenal.</span></h2>
            <p className="text-slate-500 font-bold uppercase tracking-[0.5em] text-[10px]">Standard Operating Procedures</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {arsenal.map((item, i) => (
              <div key={i} className={`p-8 border border-white/10 md:hover:border-white transition-all duration-500 reveal-up stagger-${i+1} group`}>
                <div className="w-12 h-12 bg-white text-black flex items-center justify-center mb-8 md:group-hover:bg-[var(--accent)] md:group-hover:text-white transition-colors">
                  <item.icon size={24} />
                </div>
                <h4 className="text-lg font-black uppercase mb-4 italic">{item.name}</h4>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-tighter leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 mb-20">
        <div className="bg-white border-8 border-black p-12 md:p-24 text-center space-y-8 md:space-y-12 reveal-scale">
          <h2 className="text-4xl md:text-7xl font-black uppercase italic leading-none">Want your own <br/> <span className="text-slate-300">Success Blueprint?</span></h2>
          <p className="text-base md:text-xl text-slate-500 font-bold uppercase tracking-widest max-w-2xl mx-auto">
            We offer a FREE strategic audit where we show you exactly how we will grow your business before you pay a single rupee.
          </p>
          <div className="flex justify-center pt-4">
            <Link to="/strategy-audit" className="btn-primary px-12 md:px-20 py-6 md:py-8 text-sm tracking-[0.3em] active:scale-95">
              Claim Free Strategy Audit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;