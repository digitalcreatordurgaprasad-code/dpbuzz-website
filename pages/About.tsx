import React from 'react';
import { Target, Users, ShieldCheck, Rocket } from 'lucide-react';
import SEO from '../components/SEO';

const About: React.FC = () => {
  return (
    <div className="pt-24 md:pt-32 space-y-16 md:space-y-32 pb-20 overflow-x-hidden">
      <SEO 
        title="About DPBuzz | Digital Marketing Strategy in Hyderabad" 
        description="Learn about the DPBuzz story, our mission to grow Indian brands, and why we are the top choice for performance marketing."
      />
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8 md:space-y-10 reveal-left">
            <h1 className="text-5xl md:text-8xl font-black text-black uppercase leading-[0.9] italic text-center md:text-left">
              Our <br />
              <span className="text-slate-400">Story.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed text-center md:text-left">
              DPBuzz started with one goal: To help local Indian businesses succeed in the digital world. We provide high-quality marketing services at a fair price with maximum impact.
            </p>
            <div className="grid grid-cols-2 gap-8 md:gap-12 py-4 md:py-6 max-w-sm mx-auto md:mx-0">
              <div className="border-l-4 md:border-l-8 border-black pl-4 md:pl-6 reveal-up stagger-1">
                <p className="text-4xl md:text-5xl font-black text-black">150+</p>
                <p className="text-[9px] md:text-[10px] uppercase font-black tracking-widest text-slate-500 mt-2">Partnerships</p>
              </div>
              <div className="border-l-4 md:border-l-8 border-slate-200 pl-4 md:pl-6 reveal-up stagger-2">
                <p className="text-4xl md:text-5xl font-black text-black">98%</p>
                <p className="text-[9px] md:text-[10px] uppercase font-black tracking-widest text-slate-500 mt-2">ROI Rate</p>
              </div>
            </div>
          </div>
          <div className="relative group reveal-right stagger-2">
             <div className="absolute inset-0 bg-black translate-x-3 translate-y-3 md:translate-x-4 md:translate-y-4 -z-10 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500"></div>
             <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=60&w=600" loading="lazy" alt="About DPBuzz Team" className="themed-border opacity-90 hover:opacity-100 transition-all duration-700 w-full h-[350px] md:h-[500px] object-cover" />
             <div className="absolute -bottom-6 md:-bottom-8 -left-6 md:-left-8 bg-[var(--accent)] text-[var(--accent-fg)] p-6 md:p-10 font-black uppercase text-lg md:text-xl italic leading-none transition-transform hover:scale-105">
               Results <br /> Focused.
             </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-100 py-16 md:py-32 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-0 border-[4px] border-black reveal-scale">
          <div className="bg-white p-10 md:p-16 space-y-6 md:space-y-8 border-b-[4px] md:border-b-0 md:border-r-[4px] border-black text-center md:text-left group">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-[var(--accent)] text-[var(--accent-fg)] flex items-center justify-center transform -rotate-12 group-hover:rotate-0 transition-transform duration-500 mx-auto md:mx-0">
              <Target size={32} className="md:w-10 md:h-10" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black uppercase italic">Our Mission</h2>
            <p className="text-slate-600 font-medium leading-relaxed text-base md:text-lg">
              To help every small and big business in India reach their full potential online using smart marketing tools and strategic thinking.
            </p>
          </div>
          <div className="bg-black p-10 md:p-16 text-white space-y-6 md:space-y-8 text-center md:text-left group">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white text-black flex items-center justify-center transform rotate-12 group-hover:rotate-0 transition-transform duration-500 mx-auto md:mx-0">
              <Rocket size={32} className="md:w-10 md:h-10" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black uppercase italic">Our Vision</h2>
            <p className="text-slate-400 font-medium leading-relaxed text-base md:text-lg">
              To become India's most trusted digital marketing agency that provides real results, honest service, and scalable growth.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-24 space-y-4 reveal-up">
          <h2 className="text-4xl md:text-5xl font-black text-black uppercase italic">Why Us?</h2>
          <p className="text-slate-500 font-bold uppercase tracking-[0.4em] text-[9px] md:text-[10px]">What makes us different</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {[
            { icon: Users, title: "Expert Team", desc: "Our team members are specialists in SEO, Paid Ads, and Digital Product Design." },
            { icon: ShieldCheck, title: "Total Transparency", desc: "We provide clear reporting every month. No hidden costs, just visible growth." },
            { icon: Target, title: "ROI Driven", desc: "We focus on business sales and enquiries rather than just clicks and views." }
          ].map((item, i) => (
            <div key={i} className={`text-center space-y-6 md:space-y-8 group reveal-up stagger-${i+1} hover-lift`}>
              <div className="w-20 h-20 md:w-24 md:h-24 bg-white themed-border text-black flex items-center justify-center mx-auto group-hover:bg-[var(--accent)] group-hover:text-[var(--accent-fg)] transition-all duration-300 group-hover:rotate-6">
                <item.icon size={36} className="md:w-11 md:h-11" />
              </div>
              <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter italic">{item.title}</h3>
              <p className="text-slate-600 font-medium leading-relaxed text-sm md:text-base">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;