import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Quote, Newspaper } from 'lucide-react';
import { Testimonial } from '../types';
import SEO from '../components/SEO';
import { getBlogData } from '../data/blogData';
import { getServicesData, iconMap } from '../data/servicesData';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Owner",
    company: "Lumina Tech",
    content: "DPBuzz helped our business grow online. Within 3 months, we started getting more customers through our website.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=60&w=150"
  },
  {
    id: 2,
    name: "Anita Sharma",
    role: "Marketing Manager",
    company: "EvoRetail",
    content: "Very professional team. They gave us the best results for our social media ads.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=60&w=150"
  },
  {
    id: 3,
    name: "Suresh Reddy",
    role: "Founder",
    company: "GreenVibe",
    content: "They made a beautiful website for us. Now our brand looks very premium online.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=60&w=150"
  }
];

const Home: React.FC = () => {
  const brandKeywords = ["RELIABLE", "STRATEGIC", "CREATIVE", "DATA-DRIVEN", "GROWTH"];
  const dynamicBlogData = getBlogData();
  // Changed slice from 3 to 4 as requested
  const latestPosts = Object.values(dynamicBlogData).slice(0, 4);
  
  const dynamicServicesData = getServicesData();
  const servicesList = Object.values(dynamicServicesData);

  // Helper to handle Base64 vs External URLs
  const getSafeImageSrc = (img: string, params: string) => {
    if (!img) return "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=60&w=800";
    if (img.startsWith('data:')) return img;
    return img + params;
  };

  return (
    <div className="space-y-16 md:space-y-32 pb-20 overflow-x-hidden">
      <SEO 
        title="Best Digital Marketing Agency in Hyderabad" 
        description="DPBuzz is a top-rated digital marketing agency in Hyderabad helping brands grow with GMB ranking, SEO, Google Ads, and high-performance Web Design."
      />
      
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[var(--hero-bg)]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=60&w=1200" 
            className="w-full h-full object-cover opacity-20" 
            alt="DPBuzz Strategic Agency"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/30"></div>
          <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[var(--accent)] rounded-full opacity-5"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 pt-32 md:pt-48 pb-20">
          <div className="max-w-6xl space-y-6 md:space-y-12">
            
            <div className="reveal flex justify-center md:justify-start">
              <div className="inline-flex items-center space-x-3 bg-white/5 border border-white/10 px-4 py-2">
                 <span className="w-2 h-2 rounded-full animate-pulse bg-white"></span>
                 <span className="text-white text-[9px] sm:text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em]">Next-Gen Digital Agency</span>
              </div>
            </div>
            
            <div className="space-y-2 md:space-y-4 text-center md:text-left">
              <h1 className="text-[14vw] sm:text-7xl md:text-9xl lg:text-[10rem] font-black text-white leading-[0.9] uppercase italic tracking-tighter">
                <span className="mask-container block opacity-60">
                  <span className="mask-text">WE IGNITE</span>
                </span>
                <span className="inline-block bg-[var(--accent)] text-[var(--accent-fg)] px-3 sm:px-4 md:px-8 transform -skew-x-6 my-2 md:my-4 shadow-xl">
                  <span className="typing-container">DIGITAL</span>
                </span> <br />
                <span className="mask-container block">
                  <span className="mask-text" style={{animationDelay: '0.4s'}}>GROWTH.</span>
                </span>
              </h1>
            </div>
            
            <div className="max-w-3xl space-y-8 md:space-y-12 reveal-up stagger-2 mx-auto md:mx-0">
              <p className="text-base sm:text-lg md:text-2xl lg:text-3xl text-slate-300 font-bold leading-tight border-l-0 md:border-l-8 border-[var(--accent)] md:pl-8 text-center md:text-left">
                Helping Indian brands grow faster with smart online marketing and professional <span className="text-white">website designs.</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 md:gap-8 pt-4 justify-center md:justify-start">
                <Link to="/strategy-audit" className="btn-primary px-8 sm:px-10 md:px-16 py-4 sm:py-5 md:py-8 text-[10px] sm:text-[11px] md:text-sm tracking-[0.2em] sm:tracking-[0.3em] flex items-center justify-center group shadow-2xl transition-all active:scale-95 md:hover:scale-105">
                  Free Strategy Audit <ArrowRight className="ml-3 sm:ml-4 md:group-hover:translate-x-2 transition-transform" size={20} />
                </Link>
                <Link to="/services" className="reveal-scale stagger-3 border-4 border-white/20 text-white px-8 sm:px-10 md:px-16 py-4 sm:py-5 md:py-8 font-black uppercase text-[10px] sm:text-[11px] md:text-sm tracking-[0.2em] sm:tracking-[0.3em] flex items-center justify-center active:bg-white active:text-black md:hover:bg-white md:hover:text-black transition-all">
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-10 md:py-20 border-y border-slate-200 overflow-hidden whitespace-nowrap">
        <div className="flex animate-scroll-right opacity-40 md:hover:opacity-100 transition-opacity cursor-default">
          {brandKeywords.map((text, i) => (
            <div key={`ticker-1-${i}`} className="text-lg sm:text-2xl md:text-4xl font-black italic px-6 sm:px-12 md:px-16 flex-shrink-0">
              {text}
            </div>
          ))}
          {brandKeywords.map((text, i) => (
            <div key={`ticker-2-${i}`} className="text-lg sm:text-2xl md:text-4xl font-black italic px-6 sm:px-12 md:px-16 flex-shrink-0">
              {text}
            </div>
          ))}
        </div>
      </section>

      {/* Dynamic Services Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 md:mb-24 gap-6 md:gap-8 reveal">
          <div className="max-w-2xl space-y-4 text-center md:text-left">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-black uppercase italic leading-none">Our Core <span className="text-slate-300">Services</span></h2>
            <p className="text-slate-500 font-bold uppercase tracking-[0.5em] text-[9px] md:text-xs">Tailored Performance Marketing</p>
          </div>
          <Link to="/services" className="text-black font-black uppercase tracking-[0.2em] text-[9px] sm:text-[10px] flex items-center md:hover:opacity-70 border-b-4 md:border-b-8 border-black pb-2 group active:scale-95">
            Explore All <ArrowRight className="ml-2 md:group-hover:translate-x-2 transition-transform" size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border-[4px] md:border-[8px] border-black">
          {servicesList.map((s, i) => {
            const IconComponent = iconMap[s.iconName] || Zap;
            return (
              <Link 
                key={s.id} 
                to="/services"
                className={`group p-6 sm:p-8 md:p-10 bg-white md:hover:bg-black transition-all duration-700 border-black reveal-up stagger-${(i%3)+1} ${i % 3 !== 2 ? 'lg:border-r-4' : ''} ${i >= 3 ? 'lg:border-t-4' : ''} block text-left relative overflow-hidden`}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-black text-white flex items-center justify-center mb-6 md:mb-10 md:group-hover:bg-[var(--accent)] md:group-hover:text-[var(--accent-fg)] transition-all duration-500 mx-auto md:mx-0">
                  <IconComponent size={20} className="sm:w-6 sm:h-6 md:w-7 md:h-7" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-black uppercase mb-4 md:mb-6 md:group-hover:text-white transition-colors tracking-tighter text-center md:text-left">{s.title}</h3>
                <p className="text-slate-500 text-[10px] sm:text-[11px] md:text-sm font-bold leading-relaxed mb-8 md:mb-12 md:group-hover:text-slate-400 transition-colors uppercase tracking-tight text-center md:text-left line-clamp-2">{s.description}</p>
                
                <div className="flex items-center justify-center md:justify-start space-x-3 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500">
                  <span className="w-6 sm:w-8 h-[2px] sm:h-[2.5px] bg-[var(--accent)]"></span>
                  <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] text-black md:text-white italic">View Details</span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Insights / Blog Section - Updated to 4 items */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 md:mb-16 gap-6 reveal">
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-black uppercase italic leading-none">The <span className="text-slate-300">Insights</span></h2>
            <p className="text-slate-500 font-bold uppercase tracking-[0.4em] text-[8px] sm:text-[10px]">Deep dives into growth engineering</p>
          </div>
          <Link to="/blog" className="bg-black text-white px-6 sm:px-8 py-3 text-[9px] sm:text-[10px] font-black uppercase tracking-widest md:hover:bg-[var(--accent)] md:hover:text-black transition-colors flex items-center space-x-3 active:scale-95">
             <Newspaper size={16} />
             <span>View All Insights</span>
          </Link>
        </div>

        {/* Updated Grid for 4 items: lg:grid-cols-4 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-[4px] border-black">
          {latestPosts.map((post, i) => (
            <Link 
              key={post.id} 
              to={`/blog/${post.id}`}
              className={`group p-6 sm:p-8 border-black transition-all duration-500 md:hover:bg-[var(--accent)] 
                ${i % 2 === 0 ? 'sm:border-r-[4px]' : ''} 
                ${i % 4 !== 3 ? 'lg:border-r-[4px]' : 'lg:border-r-0'} 
                ${i < 3 ? 'border-b-[4px] lg:border-b-0' : ''} 
                ${i === 2 ? 'border-b-[4px] sm:border-b-0' : ''}
                ${i === 1 ? 'border-b-[4px] lg:border-b-0' : ''}
                reveal-up stagger-${i+1}`}
            >
              <div className="aspect-video bg-slate-100 mb-6 overflow-hidden border-2 border-black transition-all">
                <img src={getSafeImageSrc(post.image, "&w=500&q=60")} loading="lazy" alt={post.title} className="w-full h-full object-cover opacity-100 md:opacity-80 md:group-hover:opacity-100 md:group-hover:scale-105 transition-all duration-500" />
              </div>
              <span className="text-[9px] sm:text-[10px] font-black uppercase text-slate-400 md:group-hover:text-[var(--accent-fg)] transition-colors">{post.category}</span>
              <h3 className="text-lg sm:text-xl font-black uppercase italic mt-2 mb-4 md:group-hover:text-[var(--accent-fg)] transition-colors line-clamp-2">{post.title}</h3>
              
              <div className="pt-4 overflow-hidden">
                <div className="inline-flex items-center space-x-3 bg-black/5 border border-black/10 px-4 py-2 rounded-full transition-all md:group-hover:bg-[var(--accent-fg)] md:group-hover:border-[var(--accent-fg)]">
                  <span className="text-[9px] sm:text-[10px] font-black uppercase text-black tracking-widest md:group-hover:text-[var(--accent)] transform md:group-hover:translate-x-1 transition-transform duration-500">
                    Read Article
                  </span>
                  <div>
                    <ArrowRight size={16} className="text-black md:group-hover:text-[var(--accent)]" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-black py-20 md:py-40 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16 md:mb-32 space-y-4 md:space-y-6 reveal">
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase italic leading-none text-center">Client <br className="sm:hidden" /> <span className="text-slate-600 underline underline-offset-[8px] sm:underline-offset-[16px]">Validation.</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16">
            {testimonials.map((t, i) => (
              <div key={t.id} className={`p-6 sm:p-8 md:p-12 bg-white/5 border border-white/10 md:hover:bg-white/10 transition-all duration-300 reveal-up stagger-${i+1} relative group ${i === 2 && 'sm:col-span-2 lg:col-span-1'}`}>
                <Quote className="text-white/10 absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 transition-colors md:group-hover:text-[var(--accent)]" />
                <p className="text-sm sm:text-base md:text-xl italic font-medium text-slate-300 leading-relaxed mb-10 md:mb-12 relative z-10">"{t.content}"</p>
                <div className="flex items-center justify-center md:justify-start space-x-4 md:space-x-5 pt-8 border-t border-white/10">
                  <img src={t.avatar} loading="lazy" alt={t.name} className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 border-2 border-white/20 transition-all" />
                  <div>
                    <h4 className="font-black uppercase text-[10px] sm:text-[11px] md:text-sm tracking-widest">{t.name}</h4>
                    <p className="text-[8px] sm:text-[9px] md:text-[10px] text-slate-500 font-black uppercase mt-1">{t.role} @ {t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 mb-20">
        <div className="bg-black p-8 sm:p-16 md:p-32 text-center text-white space-y-8 sm:space-y-12 md:space-y-16 relative overflow-hidden border-8 border-white/10 reveal-scale">
          <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black uppercase italic leading-[1] md:leading-[0.9] relative z-10 reveal-up stagger-1">Ready for <br/> <span className="text-slate-500">Market Dominance?</span></h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 md:gap-10 relative z-10">
            <Link to="/strategy-audit" className="btn-primary px-8 sm:px-10 md:px-16 py-4 sm:py-5 md:py-8 text-[10px] sm:text-[11px] md:text-sm tracking-[0.2em] sm:tracking-[0.3em] transition-all active:scale-95 md:hover:scale-110">
              Get Free Strategy
            </Link>
            <Link to="/contact" className="border-2 sm:border-4 border-white text-white px-8 sm:px-10 md:px-16 py-4 sm:py-5 md:py-8 font-black uppercase text-[10px] sm:text-[11px] md:text-sm tracking-[0.2em] sm:tracking-[0.3em] active:bg-white active:text-black md:hover:bg-white md:hover:text-black transition-all flex items-center justify-center reveal-right stagger-2">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;