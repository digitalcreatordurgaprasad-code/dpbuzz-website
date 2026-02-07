import React, { useState } from 'react';
import { GoogleGenAI, Type } from "@google/genai";
import { Search, ListChecks, Calendar, Rocket, Loader2, Sparkles, AlertCircle, Copy, Check } from 'lucide-react';
import SEO from '../components/SEO';

interface SEOPlan {
  businessName: string;
  niche: string;
  city: string;
  weeks: {
    week: number;
    tasks: {
      category: 'Technical' | 'On-Page' | 'Local' | 'Off-Page';
      task: string;
      expectedImpact: string;
    }[];
  }[];
}

const SEOAssistant: React.FC = () => {
  const [clientInfo, setClientInfo] = useState({ niche: '', city: '' });
  const [isGenerating, setIsGenerating] = useState(false);
  const [plan, setPlan] = useState<SEOPlan | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const generatePlan = async () => {
    if (!clientInfo.niche || !clientInfo.city) return;
    setIsGenerating(true);
    setError(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const prompt = `Generate a 4-week SEO action plan for a "${clientInfo.niche}" business located in "${clientInfo.city}". 
      Focus on Local SEO and GMB optimization. Each week should have 3 specific, actionable tasks.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              businessName: { type: Type.STRING },
              niche: { type: Type.STRING },
              city: { type: Type.STRING },
              weeks: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    week: { type: Type.NUMBER },
                    tasks: {
                      type: Type.ARRAY,
                      items: {
                        type: Type.OBJECT,
                        properties: {
                          category: { type: Type.STRING, enum: ['Technical', 'On-Page', 'Local', 'Off-Page'] },
                          task: { type: Type.STRING },
                          expectedImpact: { type: Type.STRING }
                        },
                        required: ['category', 'task', 'expectedImpact']
                      }
                    }
                  },
                  required: ['week', 'tasks']
                }
              }
            },
            required: ['weeks', 'niche', 'city']
          }
        },
      });

      const result = JSON.parse(response.text);
      setPlan(result);
    } catch (err: any) {
      setError("The SEO engine encountered an error. Please try again.");
      console.error(err);
    } finally {
      setIsGenerating(false);
    }
  };

  const copyToClipboard = () => {
    if (!plan) return;
    const text = JSON.stringify(plan, null, 2);
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="pt-24 md:pt-32 pb-20 min-h-screen bg-slate-50">
      <SEO 
        title="AI SEO Campaign Architect | Agency Workflow" 
        description="A specialized AI tool for agencies to generate 30-day SEO roadmaps for any client niche."
      />

      <div className="max-w-7xl mx-auto px-4">
        <header className="text-center space-y-4 mb-16">
          <h1 className="text-4xl md:text-7xl font-black uppercase italic leading-none">Campaign <span className="text-slate-400">Architect.</span></h1>
          <p className="text-slate-500 font-bold uppercase tracking-[0.4em] text-[10px]">Generate 30-Day SEO Roadmaps for Clients</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Input Side */}
          <div className="lg:col-span-4">
            <div className="bg-white border-4 border-black p-8 space-y-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Client Niche</label>
                <input 
                  type="text" 
                  value={clientInfo.niche}
                  onChange={(e) => setClientInfo({...clientInfo, niche: e.target.value})}
                  placeholder="e.g., Dentist, Lawyer, Cafe"
                  className="w-full p-4 border-2 border-slate-100 font-bold focus:border-black outline-none"
                />
              </div>
              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Client City</label>
                <input 
                  type="text" 
                  value={clientInfo.city}
                  onChange={(e) => setClientInfo({...clientInfo, city: e.target.value})}
                  placeholder="e.g., Hyderabad, Mumbai"
                  className="w-full p-4 border-2 border-slate-100 font-bold focus:border-black outline-none"
                />
              </div>
              <button 
                onClick={generatePlan}
                disabled={isGenerating || !clientInfo.niche || !clientInfo.city}
                className="w-full btn-primary py-6 text-sm flex items-center justify-center space-x-3 group disabled:opacity-50"
              >
                {isGenerating ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  <Rocket size={20} className="group-hover:-translate-y-1 transition-transform" />
                )}
                <span>GENERATE 30-DAY PLAN</span>
              </button>
            </div>
          </div>

          {/* Result Side */}
          <div className="lg:col-span-8">
            {!plan && !isGenerating && (
              <div className="bg-slate-200 border-4 border-dashed border-slate-300 h-full flex flex-col items-center justify-center p-12 text-center space-y-6 opacity-40">
                <Search size={64} className="text-slate-400" />
                <h3 className="text-2xl font-black uppercase italic">Awaiting Client Data</h3>
                <p className="text-xs font-bold uppercase tracking-widest">Enter details to generate your execution roadmap</p>
              </div>
            )}

            {isGenerating && (
              <div className="bg-black text-white h-full flex flex-col items-center justify-center p-12 text-center space-y-8">
                <div className="w-20 h-20 border-[8px] border-white/10 border-t-[var(--accent)] rounded-full animate-spin"></div>
                <h3 className="text-2xl font-black uppercase italic animate-pulse">Architecting Strategy...</h3>
              </div>
            )}

            {plan && (
              <div className="bg-white border-4 border-black p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] space-y-12 animate-in fade-in slide-in-from-bottom-4">
                <div className="flex justify-between items-start border-b-4 border-slate-50 pb-8">
                  <div className="space-y-2">
                    <span className="bg-black text-white px-3 py-1 text-[10px] font-black uppercase tracking-widest">30-Day Campaign</span>
                    <h2 className="text-4xl font-black uppercase italic">{plan.niche} SEO in {plan.city}</h2>
                  </div>
                  <button 
                    onClick={copyToClipboard}
                    className="p-3 bg-slate-50 border-2 border-slate-100 hover:border-black transition-all"
                  >
                    {copied ? <Check className="text-green-500" /> : <Copy size={20} />}
                  </button>
                </div>

                <div className="space-y-12">
                  {plan.weeks.map((week, idx) => (
                    <div key={idx} className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-black text-white flex items-center justify-center font-black">0{week.week}</div>
                        <h4 className="text-xl font-black uppercase italic">Week {week.week}: Momentum Phase</h4>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {week.tasks.map((task, tIdx) => (
                          <div key={tIdx} className="p-6 bg-slate-50 border-2 border-slate-100 hover:border-black transition-all space-y-4">
                            <span className="text-[8px] font-black uppercase bg-slate-200 px-2 py-1">{task.category}</span>
                            <p className="text-xs font-bold uppercase tracking-tight text-black leading-relaxed">{task.task}</p>
                            <div className="pt-2 border-t border-slate-200">
                               <p className="text-[8px] font-black text-slate-400 uppercase">Impact: {task.expectedImpact}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SEOAssistant;