import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Share2, ArrowLeft, ArrowRight, Twitter, Linkedin, MessageCircle } from 'lucide-react';
import { getBlogData } from '../data/blogData';
import SEO from '../components/SEO';

const Blog: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const blogData = getBlogData();
  const currentPost = id ? blogData[id] : null;

  const handleShare = () => {
    const shareData = {
      title: currentPost?.title || 'DPBuzz Marketing Blog',
      text: 'Check out this helpful article from DPBuzz!',
      url: window.location.href,
    };

    if (navigator.share) {
      navigator.share(shareData).catch(console.error);
    } else {
      const dummy = document.createElement('input');
      document.body.appendChild(dummy);
      dummy.value = window.location.href;
      dummy.select();
      document.execCommand('copy');
      document.body.removeChild(dummy);
      alert("Link copied to clipboard!");
    }
  };

  const getSafeImageSrc = (img: string, params: string) => {
    if (!img) return "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=60&w=800";
    if (img.startsWith('data:')) return img;
    return img + params;
  };

  const shareUrl = encodeURIComponent(window.location.href);
  const shareTitle = encodeURIComponent(currentPost?.title || 'Check this out!');

  if (!id || !currentPost) {
    return (
      <div className="pt-32 pb-20 max-w-7xl mx-auto px-4">
        <SEO 
          title="Marketing Insights & Business Tips" 
          description="Read the DPBuzz blog for the latest tips on SEO, digital marketing, and web design trends in India."
        />
        <div className="text-center mb-20 space-y-6 reveal-up">
          <h1 className="text-6xl md:text-8xl font-black uppercase italic text-black text-center">
            Our <span className="text-slate-300">Blog.</span>
          </h1>
          <p className="text-sm md:text-xl text-slate-500 font-bold uppercase tracking-widest text-center">Helpful tips to grow your business in India.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {Object.values(blogData).map((post, i) => (
            <Link key={post.id} to={`/blog/${post.id}`} className={`group border-4 border-black overflow-hidden flex flex-col h-full bg-white reveal-up stagger-${(i%4)+1} md:hover-lift shadow-[8px_8px_0px_0px_rgba(0,0,0,0.05)] md:hover:shadow-none active:scale-[0.98] transition-all duration-500`}>
              <div className="h-64 overflow-hidden relative">
                <img src={getSafeImageSrc(post.image, "&w=600&q=60")} alt={post.title} className="w-full h-full object-cover opacity-100 md:opacity-90 md:group-hover:opacity-100 md:group-hover:scale-105 transition-all duration-500" />
                <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 text-[10px] font-black uppercase tracking-widest">
                  {post.category}
                </div>
              </div>
              <div className="p-8 space-y-4 flex-grow flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block text-center md:text-left">{post.date} • {post.readTime}</span>
                  <h2 className="text-2xl font-black uppercase italic mt-2 md:group-hover:text-slate-600 transition-colors leading-tight text-center md:text-left">{post.title}</h2>
                  <p className="text-slate-600 line-clamp-2 mt-4 font-medium text-center md:text-left">{post.content[0]}</p>
                </div>
                <div className="flex items-center justify-center md:justify-start text-black font-black uppercase text-[10px] tracking-[0.2em] pt-6 border-t border-slate-100">
                  Read Full Article <ArrowRight size={14} className="ml-2 md:group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 max-w-4xl mx-auto px-4">
      <SEO 
        title={currentPost.title} 
        description={currentPost.content[0].substring(0, 160)} 
        image={currentPost.image}
        article={true}
      />
      <div className="flex justify-center md:justify-start reveal-left">
        <Link to="/blog" className="flex items-center text-[10px] font-black uppercase tracking-widest mb-10 md:hover:opacity-70 group active:scale-95 transition-all">
          <ArrowLeft size={16} className="mr-2 md:group-hover:-translate-x-1 transition-transform" /> Back to Blog
        </Link>
      </div>

      <article className="space-y-12">
        <header className="space-y-6 reveal-up">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start md:space-x-4 space-y-4 md:space-y-0">
             <span className="bg-black text-white px-4 py-1 text-[10px] font-black uppercase tracking-widest">
              {currentPost.category}
            </span>
            <span className="text-slate-400 font-black uppercase text-[10px] tracking-widest">
              {currentPost.readTime}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black uppercase italic leading-tight text-black text-center md:text-left">
            {currentPost.title}
          </h1>
          
          <div className="flex flex-col md:flex-row justify-between items-center border-b-4 border-black pb-6 space-y-4 md:space-y-0">
            <p className="text-slate-400 font-black uppercase text-[10px] tracking-widest">Published on {currentPost.date}</p>
            <button 
              onClick={handleShare}
              className="flex items-center space-x-2 text-black font-black uppercase text-[10px] tracking-widest md:hover:bg-black md:hover:text-white px-4 py-2 border-2 border-black transition-all active:scale-95"
            >
              <Share2 size={14} /> <span>Share Article</span>
            </button>
          </div>
        </header>

        <div className="relative group reveal-scale">
           <div className="absolute inset-0 bg-black translate-x-3 translate-y-3 -z-10 md:group-hover:translate-x-5 md:group-hover:translate-y-5 transition-transform duration-500"></div>
           <img src={getSafeImageSrc(currentPost.image, "&w=1000&q=60")} alt={currentPost.title} className="w-full h-[450px] object-cover border-4 border-black transition-all duration-1000" />
        </div>

        <div className="space-y-8 text-xl text-slate-700 leading-relaxed font-medium text-center md:text-left reveal-up stagger-1">
          {currentPost.content.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        <div className="pt-10 border-t-4 border-black mt-16 reveal-up">
          <h3 className="text-sm font-black uppercase tracking-widest mb-8 text-black text-center md:text-left">Share this with others:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <a 
              href={`https://wa.me/?text=${shareTitle}%20${shareUrl}`}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-[#25D366] text-white py-4 font-black uppercase text-xs tracking-widest active:scale-[0.98] transition-all"
            >
              <MessageCircle size={18} /> <span>WhatsApp</span>
            </a>
            <a 
              href={`https://twitter.com/intent/tweet?text=${shareTitle}&url=${shareUrl}`}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-black text-white py-4 font-black uppercase text-xs tracking-widest active:scale-[0.98] transition-all"
            >
              <Twitter size={18} /> <span>Twitter / X</span>
            </a>
            <a 
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-[#0077b5] text-white py-4 font-black uppercase text-xs tracking-widest active:scale-[0.98] transition-all"
            >
              <Linkedin size={18} /> <span>LinkedIn</span>
            </a>
          </div>
        </div>

        <div className="bg-black text-white p-12 mt-20 text-center space-y-8 relative overflow-hidden reveal-scale">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rotate-45 translate-x-16 -translate-y-16"></div>
          <h2 className="text-3xl font-black uppercase italic relative z-10 text-center">Want to see these results for your business?</h2>
          <p className="text-slate-400 font-bold uppercase tracking-widest text-xs relative z-10 text-center">Our experts are just a message away.</p>
          <div className="flex justify-center">
            <Link to="/contact" className="bg-white text-black px-12 py-5 font-black uppercase text-xs tracking-widest md:hover:bg-slate-200 transition-all inline-block relative z-10 active:scale-95">
              Get Your Free Consultation
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Blog;