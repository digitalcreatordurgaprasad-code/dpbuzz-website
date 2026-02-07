import React from 'react';
import { Search, Zap, Globe, Link as LinkIcon, MapPin, BarChart, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const SEOGuide: React.FC = () => {
  const roadmapSteps = [
    {
      step: "01",
      title: "Technical Foundation",
      icon: Zap,
      desc: "Before Google can rank you, it must be able to read you. We fix your site's core vitals.",
      tasks: ["Optimize Page Load Speed", "Enable SSL Security", "Generate XML Sitemap", "Fix 404 & Broken Links"]
    },
    {
      step: "02",
      title: "Keyword Intelligence",
      icon: Search,
      desc: "Finding exactly what your customers are typing into Google in your specific city.",
      tasks: ["Long-tail Keyword Research", "Competitor Gap Analysis", "Search Intent Mapping", "Local Search Vol. Audit"]
    },
    {
      step: "03",
      title: "On-Page Mastery",
      icon: Globe,
      desc: "Optimizing every single element of your page to signal relevance to search engines.",
      tasks: ["H1-H4 Header Optimization", "Meta Title & Description Crafting", "Image Alt-Text Strategy", "Internal Linking Mesh"]
    },
    {
      step: "04",
      title: "Content Engineering",
      icon: BarChart,
      desc: "Writing high-quality articles and landing pages that Google loves to recommend.",
      tasks: ["Topic Cluster Creation", "E-E-A-T Content Standards", "Regular Blog Posting", "Video & Visual Asset SEO"]
    },
    {
      step: "05",
      title: "Local Dominance",
      icon: MapPin,
      desc: "Owning the map pack so locals find you first when searching 'near me'.",
      tasks: ["Google Business Profile Setup", "NAP Consistency Check", "Local Citation Building", "Review Collection Strategy"]
    },
    {
      step: "06",
      title: "Authority (Backlinks)",
      icon: LinkIcon,
      desc: "Getting other reputable websites to link to you, proving your business is trustworthy.",
      tasks: ["Guest Posting", "Directory Submissions", "Digital PR Outreach", "Broken Link Building"]
    },
    {
      step: "07",
      title: "Tracking & Scale",
      icon: CheckCircle2,
      desc: "Measuring what works and scaling the winners to maintain your #1 spot.",
      tasks: ["GA4 & Search Console Setup", "Weekly Ranking Reports", "Heatmap Analysis", "Conversion Rate Optimization"]
    }
  ];

  return (
    <div className="pt-24 md:pt-32 pb-20 overflow-x-hidden bg-white">
      <SEO 
        title="SEO Growth Roadmap | How to Rank #1 on Google" 
        description="A complete 7-step guide on how to perform SEO for your business website. From Technical setup to Authority building."
      />

      <section className="max-w-7xl mx-auto px-4 text-center space-y-8 mb-20 md:mb-32">
        <div className="reveal">
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[var(--accent)] border-b-2 border-black pb-1">The Strategy</span>
        </div>
        <h1 className="text-5xl md:text-8xl font-black text-black uppercase italic leading-none text-center reveal-up">
          SEO <span className="text-slate-400">Roadmap.</span>
        </h1>
        <p className="text-sm md:text-xl text-slate-500 font-bold uppercase tracking-widest max-w-2xl mx-auto reveal-up stagger-1 text-center">
          The exact 7-step process we use to put Indian businesses on the first page of Google.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-0 border-y-4 border-black">
          {roadmapSteps.map((s, i) => (
            <div key={i} className={`group grid grid-cols-1 lg:grid-cols-12 gap-0 border-black ${i < roadmapSteps.length - 1 ? 'border-b-4' : ''} reveal-up stagger-${(i % 3) + 1}`}>
              {/* Step Number */}
              <div className="lg:col-span-2 flex items-center justify-center bg-black text-white p-8 lg:p-0">
                <span className="text-6xl lg:text-8xl font-black italic opacity-20 group-hover:opacity-100 group-hover:text-[var(--accent)] transition-all duration-500">{s.step}</span>
              </div>
              
              {/* Content Area */}
              <div className="lg:col-span-6 p-8 md:p-12 lg:p-16 space-y-6 border-black lg:border-x-4 bg-white">
                <div className="flex items-center space-x-4">
                   <div className="w-12 h-12 bg-slate-100 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                      <s.icon size={24} />
                   </div>
                   <h2 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter">{s.title}</h2>
                </div>
                <p className="text-slate-600 font-bold leading-relaxed uppercase text-sm md:text-base tracking-tight">
                  {s.desc}
                </p>
              </div>

              {/* Tasks Checklist */}
              <div className="lg:col-span-4 p-8 md:p-12 lg:p-16 bg-slate-50 space-y-4 flex flex-col justify-center">
                {s.tasks.map((task, idx) => (
                  <div key={idx} className="flex items-center space-x-3 text-[10px] md:text-xs font-black uppercase tracking-widest text-black">
                    <CheckCircle2 size={16} className="text-green-500 flex-shrink-0" />
                    <span>{task}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 mt-24 mb-20">
        <div className="bg-black text-white p-12 md:p-24 text-center space-y-12 reveal-scale">
          <div className="space-y-4">
             <h2 className="text-4xl md:text-7xl font-black uppercase italic leading-none">Confused by <br/> <span className="text-slate-500">The Roadmap?</span></h2>
             <p className="text-base md:text-xl text-slate-400 font-bold uppercase tracking-widest max-w-2xl mx-auto">
                Let the experts handle it. We implement this entire roadmap for you so you can focus on running your business.
             </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-4">
            <Link to="/contact" className="btn-primary px-12 py-6 text-sm flex items-center justify-center">
              GET HIRED EXPERTS
            </Link>
            <Link to="/strategy-audit" className="border-4 border-white text-white px-12 py-6 font-black uppercase text-sm tracking-widest hover:bg-white hover:text-black transition-all">
              FREE SEO AUDIT
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SEOGuide;