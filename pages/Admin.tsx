import React, { useState, useEffect } from 'react';
import { blogData as initialBlogData, BlogPost, getBlogData } from '../data/blogData';
import { legalData as initialLegalData, LegalPageData, LegalSection } from '../data/legalData';
import { ServiceData, getServicesData, iconMap } from '../data/servicesData';
import { Plus, Trash2, Copy, Check, Lock, Newspaper, FileText, ChevronRight, Hash, Image as ImageIcon, Calendar, Clock, Type, Upload, X, PenTool, Briefcase, ListChecks } from 'lucide-react';

const Admin: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState<'blogs' | 'legal' | 'services'>('blogs');
  
  // Load data dynamically
  const [localBlogData, setLocalBlogData] = useState<Record<string, BlogPost>>(getBlogData());
  const [localLegalData, setLocalLegalData] = useState<Record<string, LegalPageData>>(initialLegalData);
  const [localServicesData, setLocalServicesData] = useState<Record<string, ServiceData>>(getServicesData());

  const ADMIN_PASSWORD = 'dpbuzz2026'; 

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Invalid Access Key. Access Denied.');
      setPassword('');
    }
  };

  // --- EDITOR STATE ---
  const [activeId, setActiveId] = useState<string | null>(null);
  const [copySuccess, setCopySuccess] = useState(false);

  // Current Editing Items
  const [editingBlog, setEditingBlog] = useState<BlogPost | null>(null);
  const [editingLegal, setEditingLegal] = useState<LegalPageData | null>(null);
  const [editingService, setEditingService] = useState<ServiceData | null>(null);

  const blogCategories = ['Website Design', 'Google SEO', 'Google Ads', 'Meta Ads', 'Digital Marketing'];
  const availableIcons = Object.keys(iconMap);

  const loadItem = (id: string) => {
    setActiveId(id);
    if (activeTab === 'blogs') {
      setEditingBlog({ ...localBlogData[id] });
      setEditingLegal(null);
      setEditingService(null);
    } else if (activeTab === 'legal') {
      setEditingLegal({ ...localLegalData[id] });
      setEditingBlog(null);
      setEditingService(null);
    } else {
      setEditingService({ ...localServicesData[id] });
      setEditingBlog(null);
      setEditingLegal(null);
    }
  };

  const createNew = () => {
    const tempId = `new-${Date.now()}`;
    setActiveId(tempId);
    if (activeTab === 'blogs') {
      const newPost: BlogPost = {
        id: '',
        title: 'New Blog Post',
        category: 'Website Design',
        date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
        readTime: '5 min read',
        image: '',
        content: ['Start writing your first paragraph here...']
      };
      setEditingBlog(newPost);
      setEditingLegal(null);
      setEditingService(null);
    } else if (activeTab === 'legal') {
      const newLegal: LegalPageData = {
        title: 'New Legal Page',
        lastUpdated: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
        sections: [{ heading: 'Section 1', content: 'Enter legal content here...' }]
      };
      setEditingLegal(newLegal);
      setEditingBlog(null);
      setEditingService(null);
    } else {
      const newService: ServiceData = {
        id: '',
        title: 'New Service',
        iconName: 'Zap',
        description: 'Describe this service here...',
        benefits: ['Fast results', 'Expert team'],
        img: ''
      };
      setEditingService(newService);
      setEditingBlog(null);
      setEditingLegal(null);
    }
  };

  const deleteItem = (id: string) => {
    if (!window.confirm('Delete this permanently?')) return;
    
    if (activeTab === 'blogs') {
      const newData = { ...localBlogData };
      delete newData[id];
      setLocalBlogData(newData);
      localStorage.setItem('dpbuzz_blog_data', JSON.stringify(newData));
    } else if (activeTab === 'legal') {
      const newData = { ...localLegalData };
      delete newData[id];
      setLocalLegalData(newData);
    } else {
      const newData = { ...localServicesData };
      delete newData[id];
      setLocalServicesData(newData);
      localStorage.setItem('dpbuzz_services_data', JSON.stringify(newData));
    }
    setActiveId(null);
    setEditingBlog(null);
    setEditingLegal(null);
    setEditingService(null);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert("Image is too large (Max 2MB).");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        if (activeTab === 'blogs' && editingBlog) {
          setEditingBlog({ ...editingBlog, image: reader.result as string });
        } else if (activeTab === 'services' && editingService) {
          setEditingService({ ...editingService, img: reader.result as string });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const saveToLocal = () => {
    if (activeTab === 'blogs' && editingBlog) {
      const newId = editingBlog.id;
      const updatedData = { ...localBlogData };
      if (activeId && activeId !== newId && !activeId.startsWith('new-')) delete updatedData[activeId];
      updatedData[newId] = editingBlog;
      setLocalBlogData(updatedData);
      setActiveId(newId);
      localStorage.setItem('dpbuzz_blog_data', JSON.stringify(updatedData));
      alert("Article Updated!");
    } 
    else if (activeTab === 'services' && editingService) {
      const newId = editingService.id;
      const updatedData = { ...localServicesData };
      if (activeId && activeId !== newId && !activeId.startsWith('new-')) delete updatedData[activeId];
      updatedData[newId] = editingService;
      setLocalServicesData(updatedData);
      setActiveId(newId);
      localStorage.setItem('dpbuzz_services_data', JSON.stringify(updatedData));
      alert("Service Updated!");
    }
    else if (activeTab === 'legal' && editingLegal) {
      const newId = activeId && !activeId.startsWith('new-') ? activeId : editingLegal.title.toLowerCase().replace(/\s+/g, '-');
      const updatedData = { ...localLegalData };
      updatedData[newId] = editingLegal;
      setLocalLegalData(updatedData);
      setActiveId(newId);
      alert("Legal pages updated locally!");
    }
  };

  const generateCode = () => {
    let code = '';
    if (activeTab === 'blogs') {
      code = `export const blogData = ${JSON.stringify(localBlogData, null, 2)};`;
    } else if (activeTab === 'services') {
      code = `export const servicesData = ${JSON.stringify(localServicesData, null, 2)};`;
    } else {
      code = `export const legalData = ${JSON.stringify(localLegalData, null, 2)};`;
    }
    navigator.clipboard.writeText(code);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4">
        <div className="max-w-md w-full space-y-8 text-center">
          <div className="flex justify-center">
             <div className="w-20 h-20 bg-white text-black flex items-center justify-center rounded-none transform rotate-45">
                <Lock size={32} className="-rotate-45" />
             </div>
          </div>
          <h1 className="text-white text-4xl font-black uppercase italic tracking-tighter">Secure Access</h1>
          <form onSubmit={handleLogin} className="mt-12 space-y-4">
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Secret Key"
              className="w-full bg-slate-900 border-2 border-slate-800 p-5 text-white text-center font-black tracking-[0.5em] outline-none focus:border-white transition-all"
            />
            {error && <p className="text-red-500 font-black uppercase text-[10px] tracking-widest">{error}</p>}
            <button type="submit" className="w-full bg-white text-black py-5 font-black uppercase text-xs tracking-[0.2em] hover:bg-slate-200 transition-all">Verify Identity</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Navigation Tabs */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
          <div className="flex bg-white border-4 border-black p-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <button 
              onClick={() => { setActiveTab('blogs'); setActiveId(null); setEditingBlog(null); }}
              className={`flex items-center space-x-2 px-6 py-3 font-black uppercase text-[10px] tracking-widest transition-all ${activeTab === 'blogs' ? 'bg-black text-white' : 'text-slate-400'}`}
            >
              <Newspaper size={16} /> <span>Blogs</span>
            </button>
            <button 
              onClick={() => { setActiveTab('services'); setActiveId(null); setEditingService(null); }}
              className={`flex items-center space-x-2 px-6 py-3 font-black uppercase text-[10px] tracking-widest transition-all ${activeTab === 'services' ? 'bg-black text-white' : 'text-slate-400'}`}
            >
              <Briefcase size={16} /> <span>Services</span>
            </button>
            <button 
              onClick={() => { setActiveTab('legal'); setActiveId(null); setEditingLegal(null); }}
              className={`flex items-center space-x-2 px-6 py-3 font-black uppercase text-[10px] tracking-widest transition-all ${activeTab === 'legal' ? 'bg-black text-white' : 'text-slate-400'}`}
            >
              <FileText size={16} /> <span>Legal</span>
            </button>
          </div>
          
          <div className="flex items-center space-x-4">
            <button onClick={generateCode} className="flex items-center space-x-2 bg-green-500 text-white border-2 border-black px-8 py-4 font-black uppercase text-[10px] tracking-widest shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all">
              {copySuccess ? <Check size={16} /> : <Copy size={16} />}
              <span>{copySuccess ? 'Copied!' : 'Copy File Code'}</span>
            </button>
            <button onClick={() => setIsAuthenticated(false)} className="text-slate-400 hover:text-black font-black uppercase text-[10px] tracking-widest">Exit</button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* List Sidebar */}
          <aside className="w-full md:w-80 space-y-6">
            <div className="flex justify-between items-center">
               <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Library</h2>
               <button onClick={createNew} className="bg-black text-white p-2"><Plus size={18} /></button>
            </div>
            <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
              {Object.entries(activeTab === 'blogs' ? localBlogData : activeTab === 'services' ? localServicesData : localLegalData).map(([id, item]) => (
                <div key={id} className="relative group">
                  <button onClick={() => loadItem(id)} className={`w-full text-left p-5 border-4 flex justify-between items-center transition-all ${activeId === id ? 'border-black bg-white shadow-none translate-x-1' : 'border-slate-200 bg-white hover:border-black'}`}>
                    <span className="text-[11px] font-black uppercase italic truncate pr-4">{(item as any).title}</span>
                    <ChevronRight size={14} className={activeId === id ? 'opacity-100' : 'opacity-0'} />
                  </button>
                  <button onClick={(e) => { e.stopPropagation(); deleteItem(id); }} className="absolute -right-2 -top-2 bg-red-500 text-white p-1 opacity-0 group-hover:opacity-100 border-2 border-black"><Trash2 size={12} /></button>
                </div>
              ))}
            </div>
          </aside>

          {/* Editor Container */}
          <main className="flex-grow bg-white border-4 border-black p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative min-h-[70vh]">
            {!activeId ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20 opacity-30">
                <PenTool size={80} />
                <h3 className="text-2xl font-black uppercase italic mt-8">Select Entry to Start</h3>
              </div>
            ) : (
              <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end border-b-4 border-slate-50 pb-8 gap-4">
                  <h2 className="text-3xl font-black uppercase italic">Editor</h2>
                  <button onClick={saveToLocal} className="bg-black text-white px-10 py-4 font-black uppercase text-[10px] tracking-widest shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]">Update Local View</button>
                </div>

                {/* Service Editor */}
                {activeTab === 'services' && editingService && (
                  <div className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase text-slate-400">Slug (ID)</label>
                        <input type="text" value={editingService.id} onChange={(e) => setEditingService({...editingService, id: e.target.value})} className="w-full p-4 border-2 border-slate-100 font-bold focus:border-black outline-none" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase text-slate-400">Icon Component</label>
                        <select value={editingService.iconName} onChange={(e) => setEditingService({...editingService, iconName: e.target.value})} className="w-full p-4 border-2 border-slate-100 font-bold bg-white">
                          {availableIcons.map(icon => <option key={icon} value={icon}>{icon}</option>)}
                        </select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-slate-400">Service Title</label>
                      <input type="text" value={editingService.title} onChange={(e) => setEditingService({...editingService, title: e.target.value})} className="w-full p-4 border-2 border-slate-100 font-black uppercase italic text-2xl focus:border-black outline-none" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-slate-400">Description</label>
                      <textarea value={editingService.description} onChange={(e) => setEditingService({...editingService, description: e.target.value})} rows={3} className="w-full p-4 border-2 border-slate-100 font-medium focus:border-black outline-none" />
                    </div>
                    
                    {/* Benefits Section */}
                    <div className="space-y-4">
                       <div className="flex justify-between items-center">
                          <label className="text-[10px] font-black uppercase text-slate-400">Key Benefits</label>
                          <button onClick={() => setEditingService({...editingService, benefits: [...editingService.benefits, '']})} className="text-[10px] font-black uppercase text-blue-500 hover:underline flex items-center">
                            <Plus size={12} className="mr-1"/> Add Benefit
                          </button>
                       </div>
                       {editingService.benefits.map((benefit, i) => (
                         <div key={i} className="relative group">
                           <input 
                            type="text" 
                            value={benefit} 
                            onChange={(e) => {
                              const newBenefits = [...editingService.benefits];
                              newBenefits[i] = e.target.value;
                              setEditingService({...editingService, benefits: newBenefits});
                            }} 
                            className="w-full p-4 border-2 border-slate-100 font-bold pr-12"
                           />
                           <button onClick={() => setEditingService({...editingService, benefits: editingService.benefits.filter((_, idx) => idx !== i)})} className="absolute right-4 top-1/2 -translate-y-1/2 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">
                             <Trash2 size={16} />
                           </button>
                         </div>
                       ))}
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-slate-400">Featured Image</label>
                      {editingService.img ? (
                        <div className="relative h-48 border-4 border-black group">
                          <img src={editingService.img} className="w-full h-full object-cover" alt="Service preview" />
                          <button onClick={() => setEditingService({...editingService, img: ''})} className="absolute top-2 right-2 bg-red-500 text-white p-2 border-2 border-black opacity-0 group-hover:opacity-100"><X size={16} /></button>
                        </div>
                      ) : (
                        <div className="h-48 border-4 border-dashed border-slate-100 flex flex-col items-center justify-center relative hover:border-black cursor-pointer group">
                           <Upload size={32} className="text-slate-300 group-hover:text-black" />
                           <input type="file" accept="image/*" onChange={handleImageUpload} className="absolute inset-0 opacity-0 cursor-pointer" />
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Blog Editor */}
                {activeTab === 'blogs' && editingBlog && (
                  <div className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase text-slate-400">URL Slug (ID)</label>
                        <input type="text" value={editingBlog.id} onChange={(e) => setEditingBlog({...editingBlog, id: e.target.value})} className="w-full p-4 border-2 border-slate-100 font-bold focus:border-black outline-none" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase text-slate-400">Category</label>
                        <select value={editingBlog.category} onChange={(e) => setEditingBlog({...editingBlog, category: e.target.value})} className="w-full p-4 border-2 border-slate-100 font-bold bg-white">
                          {blogCategories.map(c => <option key={c} value={c}>{c}</option>)}
                        </select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-slate-400">Main Title</label>
                      <input type="text" value={editingBlog.title} onChange={(e) => setEditingBlog({...editingBlog, title: e.target.value})} className="w-full p-4 border-2 border-slate-100 font-black uppercase italic text-2xl focus:border-black outline-none" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-slate-400">Featured Image</label>
                      {editingBlog.image ? (
                        <div className="relative h-64 border-4 border-black group">
                          <img src={editingBlog.image} className="w-full h-full object-cover" alt="Blog preview" />
                          <button onClick={() => setEditingBlog({...editingBlog, image: ''})} className="absolute top-2 right-2 bg-red-500 text-white p-2 border-2 border-black opacity-0 group-hover:opacity-100"><X size={16} /></button>
                        </div>
                      ) : (
                        <div className="h-64 border-4 border-dashed border-slate-100 flex flex-col items-center justify-center relative hover:border-black cursor-pointer group">
                           <Upload size={40} className="text-slate-300 group-hover:text-black" />
                           <input type="file" accept="image/*" onChange={handleImageUpload} className="absolute inset-0 opacity-0 cursor-pointer" />
                        </div>
                      )}
                    </div>
                    <div className="space-y-4">
                      {editingBlog.content.map((para, i) => (
                        <div key={i} className="relative group">
                          <textarea value={para} onChange={(e) => {
                            const newContent = [...editingBlog.content];
                            newContent[i] = e.target.value;
                            setEditingBlog({...editingBlog, content: newContent});
                          }} rows={4} className="w-full p-6 border-2 border-slate-100 font-medium focus:border-black outline-none" placeholder={`Paragraph ${i+1}`} />
                          <button onClick={() => setEditingBlog({...editingBlog, content: editingBlog.content.filter((_, idx) => idx !== i)})} className="absolute -top-2 -right-2 bg-red-500 text-white p-2 border-2 border-black opacity-0 group-hover:opacity-100"><Trash2 size={12} /></button>
                        </div>
                      ))}
                      <button onClick={() => setEditingBlog({...editingBlog, content: [...editingBlog.content, '']})} className="text-xs font-black uppercase border-b-2 border-black">+ Add Section</button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Admin;