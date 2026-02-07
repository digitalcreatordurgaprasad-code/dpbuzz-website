import React from 'react';
import { Phone, Mail, MapPin, Send, Instagram, Twitter, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Our team will contact you very soon.");
  };

  return (
    <div className="pt-24 md:pt-32 pb-20 overflow-x-hidden">
      <section className="max-w-7xl mx-auto px-4 mb-16 md:mb-24">
        <div className="text-center space-y-4 md:space-y-6 mb-16 md:mb-24 reveal">
          <h1 className="text-5xl md:text-8xl font-black text-black uppercase italic leading-none">
            Contact <span className="text-slate-400">Us.</span>
          </h1>
          <p className="text-base md:text-xl text-slate-500 font-bold uppercase tracking-widest text-[10px] md:text-sm">Success starts with a single conversation.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border-[4px] border-black reveal stagger-1">
          {/* Contact Details */}
          <div className="bg-black text-white p-8 md:p-16 space-y-12 md:space-y-16">
            <div className="space-y-8 md:space-y-12">
              <h2 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter">Reach Out</h2>
              <div className="space-y-8 md:space-y-10">
                <a href="tel:+917893647600" className="flex items-center space-x-4 md:space-x-6 group hover:opacity-80 transition-opacity">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-white text-black flex items-center justify-center transition-all group-hover:scale-110 flex-shrink-0">
                    <Phone size={24} className="md:w-7 md:h-7" />
                  </div>
                  <div>
                    <p className="text-[9px] md:text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Call Us Directly</p>
                    <p className="text-lg md:text-xl font-black transition-colors group-hover:text-[var(--accent)]">+91 7893647600</p>
                  </div>
                </a>
                <a href="mailto:digitalcreatordurgaprasad@gmail.com" className="flex items-center space-x-4 md:space-x-6 group hover:opacity-80 transition-opacity">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-white text-black flex items-center justify-center transition-all group-hover:scale-110 flex-shrink-0">
                    <Mail size={24} className="md:w-7 md:h-7" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[9px] md:text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Email Us</p>
                    <p className="text-sm md:text-lg font-black break-all transition-colors group-hover:text-[var(--accent)]">digitalcreatordurgaprasad@gmail.com</p>
                  </div>
                </a>
                <a 
                  href="https://maps.google.com/?q=Financial+District,+Nanakaramguda,+Hyderabad,+Telangana" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center space-x-4 md:space-x-6 group hover:opacity-80 transition-opacity"
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-white text-black flex items-center justify-center transition-all group-hover:scale-110 flex-shrink-0">
                    <MapPin size={24} className="md:w-7 md:h-7" />
                  </div>
                  <div>
                    <p className="text-[9px] md:text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Office Location</p>
                    <p className="text-lg md:text-xl font-black transition-colors group-hover:text-[var(--accent)]">Hyderabad, India</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="space-y-6 pt-10 border-t border-slate-800">
              <h3 className="font-black text-slate-500 uppercase tracking-widest text-[10px]">Follow DPBuzz</h3>
              <div className="flex space-x-4">
                {[Instagram, Linkedin, Twitter].map((Icon, i) => (
                  <a key={i} href="#" className="w-12 h-12 md:w-14 md:h-14 border-2 border-slate-800 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all">
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            <div className="w-full h-48 md:h-64 bg-slate-900 grayscale contrast-125 border border-slate-800 overflow-hidden">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15228.455208639535!2d78.33644365!3d17.4302302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93a276e92d3d%3A0x101a0fd352613942!2sFinancial%20District%2C%20Nanakaramguda%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1715850000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Google Maps Hyderabad"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-16 space-y-12">
            <h2 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter">Send Enquiry</h2>
            <form onSubmit={handleSubmit} className="space-y-8 md:space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                <div className="space-y-2 border-b-4 border-black">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Full Name</label>
                  <input type="text" required placeholder="Enter Your Name" className="w-full py-4 bg-transparent outline-none font-bold placeholder:text-slate-300 text-sm md:text-base" />
                </div>
                <div className="space-y-2 border-b-4 border-black">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Email Address</label>
                  <input type="email" required placeholder="Enter Your Email" className="w-full py-4 bg-transparent outline-none font-bold placeholder:text-slate-300 text-sm md:text-base" />
                </div>
              </div>
              <div className="space-y-2 border-b-4 border-black">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Select Service</label>
                <select className="w-full py-4 bg-transparent outline-none font-black text-black uppercase text-xs tracking-tighter cursor-pointer appearance-none">
                  <option>Website Design</option>
                  <option>Local GMB & Maps Dominance</option>
                  <option>Social Media Management</option>
                  <option>Google Ranking (SEO)</option>
                  <option>Google Ads</option>
                  <option>Meta Ads (FB/IG)</option>
                  <option>Digital Strategy</option>
                </select>
              </div>
              <div className="space-y-2 border-b-4 border-black">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Your Business Goals</label>
                <textarea rows={4} required placeholder="Tell us briefly about your project..." className="w-full py-4 bg-transparent outline-none font-bold resize-none placeholder:text-slate-300 text-sm md:text-base"></textarea>
              </div>
              <button type="submit" className="w-full btn-primary py-5 md:py-6 text-[11px] md:text-sm flex items-center justify-center group shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)]">
                Send Message <Send className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;