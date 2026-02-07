
import React from 'react';
import { Link } from 'react-router-dom';
import { Check, MessageSquare, Zap } from 'lucide-react';
import SEO from '../components/SEO';
import { getServicesData, iconMap } from '../data/servicesData';

const Services: React.FC = () => {
  const services = Object.values(getServicesData());

  return (
    <div className="pt-24 md:pt-32 space-y-16 md:space-y-32 pb-20 overflow-x-hidden">
      <SEO 
        title="Our Services | GMB, SEO, Web Design, Ads & Social Media" 
        description="Explore DPBuzz services: Local GMB Dominance, Custom Web Design, SEO, Google Ads, and Social Media Management."
      />

      <section className="max-w-7xl mx-auto px-4 text-center space-y-6 md:space-y-8">
        <h1 className="text-4xl sm:text-5xl md:text-8xl font-black text-black uppercase italic leading-none reveal-up text-center">
          What We <span className="text-slate-400">Offer.</span>
        </h1>
        <p className="text-xs sm:text-sm md:text-xl text-slate-500 font-bold uppercase tracking-widest max-w-2xl mx-auto reveal-up stagger-1 text-center">
          Premium digital services to take your brand to the top.
        </p>
      </section>

      {services.map((service, index) => {
        // Fix: Added missing Zap import to fix 'Cannot find name Zap' error
        const IconComponent = iconMap[service.iconName] || Zap;
        return (
          <section key={service.id} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-10 sm:gap-12 lg:gap-20`}>
              <div className={`flex-1 space-y-6 sm:space-y-8 md:space-y-10 text-center md:text-left ${index % 2 === 0 ? 'reveal-left' : 'reveal-right'}`}>
                <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-[var(--accent)] text-[var(--accent-fg)] flex items-center justify-center transform -rotate-12 md:hover:rotate-0 transition-transform duration-500">
                    <IconComponent size={24} className="sm:w-8 sm:h-8 md:w-9 md:h-9" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase italic tracking-tighter leading-none text-center md:text-left">{service.title}</h2>
                </div>
                <p className="text-sm sm:text-base md:text-xl text-slate-600 font-medium leading-relaxed">
                  {service.description}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-md mx-auto md:mx-0">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start space-x-3 text-black font-black uppercase text-[8px] sm:text-[9px] md:text-[10px] tracking-widest justify-center md:justify-start reveal stagger-1">
                      <Check className="text-[var(--accent)] flex-shrink-0 transition-colors" size={14} strokeWidth={4} />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-center md:justify-start reveal stagger-2">
                  <Link 
                    to="/strategy-audit"
                    className="btn-primary px-8 sm:px-10 py-4 sm:py-5 inline-block text-center text-[10px] sm:text-[11px] md:text-sm shadow-xl active:scale-95"
                  >
                    Book Free Audit
                  </Link>
                </div>
              </div>
              <div className={`flex-1 w-full relative group ${index % 2 === 0 ? 'reveal-right' : 'reveal-left'}`}>
                 <div className="absolute inset-0 bg-black translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 -z-10 md:group-hover:translate-x-6 md:group-hover:translate-y-6 transition-transform duration-500"></div>
                 <img src={service.img || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=60&w=800"} loading="lazy" alt={service.title} className="themed-border w-full h-[250px] sm:h-[300px] md:h-[400px] object-cover opacity-100 md:opacity-90 md:group-hover:opacity-100 transition-all duration-700 shadow-lg" />
              </div>
            </div>
          </section>
        );
      })}

      <section className="bg-slate-50 py-16 sm:py-24 md:py-32 border-y-4 border-black">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
           <div className="space-y-6 sm:space-y-8 reveal-left">
              <div className="inline-block bg-black text-white px-4 py-1 text-[9px] sm:text-[10px] font-black uppercase tracking-widest">Premium Consulting</div>
              <h2 className="text-3xl sm:text-4xl md:text-7xl font-black uppercase italic leading-none">Strategy <br className="hidden sm:block" /> <span className="text-slate-400">Masterclass.</span></h2>
              <p className="text-slate-600 text-base sm:text-lg font-bold leading-relaxed">
                Beyond implementation, we provide 1-on-1 strategic consulting for founders who want to scale their operations. We build your roadmap; you dominate the market.
              </p>
              <Link to="/contact" className="btn-primary px-8 sm:px-12 py-5 sm:py-6 inline-flex items-center justify-center space-x-4 text-xs active:scale-95">
                 <span>BOOK CONSULTATION</span>
                 <MessageSquare size={18} />
              </Link>
           </div>
           <div className="relative group reveal-right">
              <div className="absolute inset-0 bg-black rotate-3 md:group-hover:rotate-0 transition-transform duration-500"></div>
              <div className="relative bg-white border-4 border-black p-8 sm:p-12 space-y-6">
                 <h4 className="text-xl sm:text-2xl font-black italic">"Strategic clarity is the highest ROI investment you can make."</h4>
                 <div className="h-1 w-16 sm:w-20 bg-black"></div>
                 <p className="text-slate-500 font-bold uppercase tracking-widest text-[8px] sm:text-[10px]">DPBuzz Executive Board</p>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
