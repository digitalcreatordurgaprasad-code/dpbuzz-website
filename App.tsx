import React, { useState, useEffect, useRef } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle, ArrowRight, Instagram, Linkedin, Twitter, Phone, Mail, MapPin, Palette, Newspaper, Zap, Search } from 'lucide-react';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Admin from './pages/Admin';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Disclaimer from './pages/Disclaimer';
import TermsConditions from './pages/TermsConditions';
import StrategyAudit from './pages/StrategyAudit';

const Logo: React.FC<{ className?: string, invert?: boolean }> = ({ className = "h-12", invert = false }) => (
  <div className={`flex items-center ${className}`}>
    <svg viewBox="0 0 500 200" className="h-full w-auto" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M140 20 L170 85 L480 95 L190 115 L220 185 L140 135 L60 185 L90 115 L10 95 L110 85 Z" 
        fill={invert ? "white" : "black"} 
      />
      <rect 
        x="80" y="85" width="280" height="75" 
        fill={invert ? "black" : "white"} 
        stroke={invert ? "white" : "black"} 
        strokeWidth="6" 
      />
      <text 
        x="95" y="142" 
        fontFamily="Montserrat, sans-serif" 
        fontSize="55" 
        fontWeight="900" 
        fill={invert ? "white" : "black"} 
        letterSpacing="-2"
      >
        DPBUZZ
      </text>
    </svg>
  </div>
);

const ThemeSwitcher: React.FC = () => {
  const [activeTheme, setActiveTheme] = useState('default');
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const themes = [
    { id: 'default', label: 'Classic', color: 'bg-black' },
    { id: 'diwali', label: 'Diwali', color: 'bg-yellow-500' },
    { id: 'holi', label: 'Holi', color: 'bg-pink-500' },
    { id: 'festive', label: 'Festive', color: 'bg-red-600' }
  ];

  const changeTheme = (theme: string) => {
    document.documentElement.setAttribute('data-theme', theme);
    setActiveTheme(theme);
    setIsExpanded(false); // Close menu after selection
  };

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsExpanded(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="fixed bottom-6 left-6 z-[100] no-print">
      {/* Theme Options Container */}
      <div className={`flex flex-col-reverse items-center space-y-reverse space-y-3 mb-4 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isExpanded 
          ? 'opacity-100 translate-y-0 pointer-events-auto' 
          : 'opacity-0 translate-y-10 pointer-events-none'
      }`}>
        {themes.map(t => (
          <button
            key={t.id}
            onClick={() => changeTheme(t.id)}
            className={`w-12 h-12 rounded-full border-2 border-white shadow-xl flex items-center justify-center text-[8px] font-black text-white uppercase ${t.color} active:scale-90 md:hover:scale-110 transition-transform ${activeTheme === t.id ? 'ring-4 ring-offset-2 ring-black' : ''}`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Main Trigger Button */}
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className={`w-14 h-14 bg-white border-2 border-black rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 active:scale-90 ${isExpanded ? 'rotate-180 bg-black text-white' : 'text-black'}`}
        aria-label="Toggle Theme Menu"
      >
        <Palette size={24} className={isExpanded ? 'text-white' : 'text-black'} />
      </button>
    </div>
  );
};

const FloatingBlogButton: React.FC = () => (
  <Link
    to="/blog"
    className="fixed bottom-24 right-6 z-[100] bg-black text-white w-14 h-14 rounded-full shadow-2xl transition-all group flex items-center justify-center border-2 border-white no-print active:scale-90 md:hover:scale-110"
    title="Read Marketing Insights"
  >
    <Newspaper size={24} />
    <span className="absolute -top-1 -right-1 w-4 h-4 bg-[var(--accent)] rounded-full animate-ping"></span>
    <span className="absolute -top-1 -right-1 w-4 h-4 bg-[var(--accent)] rounded-full border border-white"></span>
  </Link>
);

const WhatsAppButton: React.FC = () => (
  <a
    href="https://wa.me/917893647600"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-[100] bg-[#25D366] text-white w-14 h-14 rounded-full shadow-2xl transition-all flex items-center justify-center no-print active:scale-90 md:hover:scale-110"
    title="Chat with us on WhatsApp"
  >
    <MessageCircle size={26} fill="currentColor" />
  </a>
);

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog', featured: true },
    { name: 'Contact', path: '/contact' },
  ];

  const navbarBg = scrolled ? 'bg-black py-2 shadow-2xl' : 'bg-white py-4 shadow-sm';
  const textColor = scrolled ? 'text-white' : 'text-black';
  const activeBorder = scrolled ? 'border-white' : 'border-black';
  const logoInvert = scrolled;

  return (
    <nav className={`fixed w-full z-[150] transition-all duration-500 no-print ${navbarBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center" onClick={() => setIsOpen(false)}>
            <Logo className="h-10 sm:h-12 md:h-14" invert={logoInvert} />
          </Link>

          <div className="hidden md:flex space-x-4 lg:space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[9px] lg:text-[11px] uppercase tracking-[0.2em] font-black transition-all md:hover:opacity-70 relative group ${
                  location.pathname === link.path ? `${textColor} border-b-2 ${activeBorder}` : `${scrolled ? 'text-slate-400' : 'text-slate-600'}`
                }`}
              >
                {link.name}
                {link.featured && (
                  <span className={`absolute -top-3 -right-3 ${scrolled ? 'bg-white text-black' : 'bg-black text-white'} text-[7px] px-1 py-0.5 animate-bounce rounded-sm`}>NEW</span>
                )}
              </Link>
            ))}
            
            <Link
              to="/strategy-audit"
              className={`${scrolled ? 'bg-white text-black' : 'bg-black text-white'} px-6 py-3 text-[10px] font-black uppercase tracking-widest flex items-center space-x-2 shadow-sm transition-all active:scale-95 md:hover:scale-105`}
            >
              <Zap size={14} className="animate-pulse" />
              <span>Free Strategy</span>
            </Link>
          </div>

          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className={`md:hidden p-3 z-[200] relative transition-all duration-300 active:scale-90 ${isOpen ? 'text-white' : textColor}`}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={34} /> : <Menu size={34} />}
          </button>
        </div>
      </div>

      <div className={`md:hidden fixed inset-0 bg-black z-[140] transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] flex flex-col items-center justify-center ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col items-center space-y-6 sm:space-y-8 p-6 text-center w-full">
          <Link to="/" onClick={() => setIsOpen(false)} className="mb-12 active:scale-90">
            <Logo className="h-14 sm:h-20" invert={true} />
          </Link>
          
          <div className="flex flex-col space-y-4 sm:space-y-6 w-full max-w-xs">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-3xl sm:text-5xl font-black uppercase italic tracking-tighter transition-all active:scale-95 ${
                  location.pathname === link.path ? 'text-[var(--accent)] border-l-8 border-[var(--accent)] pl-4' : 'text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <Link
            to="/strategy-audit"
            onClick={() => setIsOpen(false)}
            className="w-full max-w-xs bg-white text-black py-5 sm:py-6 text-lg sm:text-2xl font-black uppercase italic mt-10 active:scale-90 shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)]"
          >
            Get Free Strategy
          </Link>
          
          <div className="flex space-x-8 pt-12">
            {[Instagram, Linkedin, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="text-white transition-all transform active:scale-125">
                <Icon size={28} />
              </a>
            ))}
          </div>
        </div>
        
        <div className="absolute bottom-10 left-10 opacity-5 pointer-events-none select-none">
          <span className="text-[15vw] font-black italic text-white leading-none">DPBUZZ</span>
        </div>
      </div>
    </nav>
  );
};

const Footer: React.FC = () => (
  <footer className="bg-black text-white pt-20 pb-10 no-print border-t-8 border-white/5">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6 text-center sm:text-left">
          <Link to="/" className="inline-block active:scale-90">
            <Logo className="h-12" invert={true} />
          </Link>
          <p className="text-slate-400 leading-relaxed font-medium text-sm">
            Helping Indian brands grow faster with smart online marketing and beautiful website designs.
          </p>
          <div className="flex justify-center sm:justify-start space-x-4">
            {[Instagram, Linkedin, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 border border-slate-800 flex items-center justify-center md:hover:bg-white md:hover:text-black transition-colors active:scale-90">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="text-center sm:text-left">
          <h4 className="text-xs font-black uppercase tracking-widest mb-8 border-b border-slate-800 pb-2 text-white">Quick Links</h4>
          <ul className="space-y-4 text-slate-400 text-[10px] sm:text-xs font-bold uppercase tracking-tighter">
            <li><Link to="/about" className="md:hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/services" className="md:hover:text-white transition-colors">Our Services</Link></li>
            <li><Link to="/projects" className="md:hover:text-white transition-colors">Our Work</Link></li>
            <li><Link to="/blog" className="text-white md:hover:opacity-70 transition-colors">Marketing Blog ★</Link></li>
            <li><Link to="/contact" className="md:hover:text-white transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        <div className="text-center sm:text-left">
          <h4 className="text-xs font-black uppercase tracking-widest mb-8 border-b border-slate-800 pb-2 text-white">Legal</h4>
          <ul className="space-y-4 text-slate-400 text-[10px] sm:text-xs font-bold uppercase tracking-tighter">
            <li><Link to="/privacy-policy" className="md:hover:text-white transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms-conditions" className="md:hover:text-white transition-colors">Terms & Conditions</Link></li>
            <li><Link to="/disclaimer" className="md:hover:text-white transition-colors">Disclaimer</Link></li>
          </ul>
        </div>

        <div className="text-center sm:text-left">
          <h4 className="text-xs font-black uppercase tracking-widest mb-8 border-b border-slate-800 pb-2 text-white">Reach Us</h4>
          <ul className="space-y-4 text-slate-400 text-sm">
            <li className="flex items-start justify-center sm:justify-start space-x-3">
              <Phone size={18} className="text-white mt-1" />
              <a href="tel:+917893647600" className="font-bold tracking-tight md:hover:text-white transition-colors text-xs sm:text-sm">+91 7893647600</a>
            </li>
            <li className="flex items-start justify-center sm:justify-start space-x-3">
              <Mail size={18} className="text-white mt-1" />
              <a href="mailto:digitalcreatordurgaprasad@gmail.com" className="font-bold tracking-tight text-[10px] sm:text-xs md:hover:text-white transition-colors break-all">digitalcreatordurgaprasad@gmail.com</a>
            </li>
            <li className="flex items-start justify-center sm:justify-start space-x-3">
              <MapPin size={18} className="text-white mt-1" />
              <a 
                href="https://maps.google.com/?q=Financial+District,+Nanakaramguda,+Hyderabad,+Telangana" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="font-bold tracking-tight text-[10px] sm:text-xs uppercase md:hover:text-white transition-colors"
              >
                Hyderabad, Telangana, IN
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-600 text-[10px] font-black uppercase tracking-[0.2em] text-center md:text-left gap-4">
        <p>© {new Date().getFullYear()} DPBuzz Digital Solutions. All rights reserved. Best Digital Marketing Agency in Hyderabad.</p>
        <div className="flex space-x-6">
          <Link to="/admin" className="md:hover:text-white transition-colors">Admin</Link>
        </div>
      </div>
    </div>
  </footer>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    if ((window as any).refreshAnimations) {
      (window as any).refreshAnimations();
    }
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col relative bg-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<Blog />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/strategy-audit" element={<StrategyAudit />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
          </Routes>
        </main>
        <Footer />
        <ThemeSwitcher />
        <FloatingBlogButton />
        <WhatsAppButton />
      </div>
    </Router>
  );
};

export default App;