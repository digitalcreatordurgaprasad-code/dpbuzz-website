import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Sparkles, Image as ImageIcon, Download, Layout, Maximize2, Loader2, AlertCircle } from 'lucide-react';
import SEO from '../components/SEO';

const AIImageGenerator: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [size, setSize] = useState<'1K' | '2K' | '4K'>('1K');
  const [aspectRatio, setAspectRatio] = useState<'1:1' | '16:9' | '9:16' | '4:3' | '3:4'>('1:1');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;

    setError(null);
    setIsGenerating(true);

    try {
      // Mandated Check for API key selection for Gemini 3 models
      if (typeof (window as any).aistudio?.hasSelectedApiKey === 'function') {
        const hasKey = await (window as any).aistudio.hasSelectedApiKey();
        if (!hasKey) {
          await (window as any).aistudio.openSelectKey();
          // Assuming selection was successful to avoid race condition delays
        }
      }

      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-image-preview',
        contents: {
          parts: [{ text: prompt }],
        },
        config: {
          imageConfig: {
            aspectRatio: aspectRatio,
            imageSize: size
          }
        },
      });

      let foundImage = false;
      if (response.candidates?.[0]?.content?.parts) {
        for (const part of response.candidates[0].content.parts) {
          if (part.inlineData) {
            const base64Data = part.inlineData.data;
            const mimeType = part.inlineData.mimeType;
            setGeneratedImage(`data:${mimeType};base64,${base64Data}`);
            foundImage = true;
            break;
          }
        }
      }

      if (!foundImage) {
        throw new Error("No visual data was returned. Try refining your prompt.");
      }
    } catch (err: any) {
      console.error(err);
      if (err.message?.includes("Requested entity was not found")) {
        setError("Invalid API Project. Please re-select your paid project API key.");
        if (typeof (window as any).aistudio?.openSelectKey === 'function') {
          await (window as any).aistudio.openSelectKey();
        }
      } else {
        setError(err.message || "An error occurred during generation.");
      }
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDownload = () => {
    if (!generatedImage) return;
    const link = document.createElement('a');
    link.href = generatedImage;
    link.download = `dpbuzz-ai-${Date.now()}.png`;
    link.click();
  };

  return (
    <div className="pt-24 md:pt-32 pb-20 min-h-screen bg-slate-50 overflow-x-hidden">
      <SEO 
        title="Visual AI Studio | 4K Marketing Asset Generator" 
        description="Generate high-resolution (1K, 2K, 4K) premium marketing visuals for your brand using Gemini 3 Pro AI."
      />

      <section className="max-w-7xl mx-auto px-4 text-center space-y-6 md:space-y-8 mb-16">
        <h1 className="text-4xl sm:text-5xl md:text-8xl font-black text-black uppercase italic leading-none reveal text-center">
          Visual <span className="text-slate-400">Studio.</span>
        </h1>
        <p className="text-xs sm:text-sm md:text-xl text-slate-500 font-bold uppercase tracking-widest max-w-2xl mx-auto reveal stagger-1 text-center">
          Render premium 4K digital assets for your marketing campaigns.
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4 space-y-8">
          <div className="bg-white border-4 border-black p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] space-y-8">
            <div className="space-y-4">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Creative Brief</label>
              <textarea 
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe the visual you want (e.g., 'Modern glass office in a futuristic Indian city, cinematic lighting, photorealistic')..."
                className="w-full p-4 bg-slate-50 border-2 border-slate-100 outline-none focus:border-black transition-all font-medium leading-relaxed resize-none h-32"
              />
            </div>

            <div className="space-y-4">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Resolution (High-Def)</label>
              <div className="grid grid-cols-3 gap-2">
                {(['1K', '2K', '4K'] as const).map(s => (
                  <button 
                    key={s} 
                    onClick={() => setSize(s)}
                    className={`py-3 text-[10px] font-black border-2 transition-all ${size === s ? 'bg-black text-white border-black' : 'bg-transparent text-slate-400 border-slate-100 hover:border-black'}`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Frame Format</label>
              <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-3 gap-2">
                {(['1:1', '16:9', '9:16', '4:3', '3:4'] as const).map(r => (
                  <button 
                    key={r} 
                    onClick={() => setAspectRatio(r)}
                    className={`py-2 text-[10px] font-black border-2 transition-all ${aspectRatio === r ? 'bg-black text-white border-black' : 'bg-transparent text-slate-400 border-slate-100 hover:border-black'}`}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>

            <button 
              onClick={handleGenerate}
              disabled={isGenerating || !prompt.trim()}
              className="w-full btn-primary py-5 text-[11px] md:text-sm flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed group shadow-[6px_6px_0px_0px_rgba(0,0,0,0.1)]"
            >
              {isGenerating ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  <span>Rendering...</span>
                </>
              ) : (
                <>
                  <Sparkles size={18} className="group-hover:rotate-12 transition-transform" />
                  <span>Generate Asset</span>
                </>
              )}
            </button>
          </div>
        </div>

        <div className="lg:col-span-8">
          <div className="bg-black border-4 border-black aspect-square md:aspect-video relative overflow-hidden flex items-center justify-center shadow-[12px_12px_0px_0px_rgba(0,0,0,0.1)]">
            {isGenerating ? (
              <div className="text-center p-12 space-y-6 animate-pulse">
                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                   <Sparkles size={40} className="text-[var(--accent)]" />
                </div>
                <h3 className="text-white text-2xl font-black uppercase italic">Processing Reality...</h3>
              </div>
            ) : generatedImage ? (
              <>
                <img src={generatedImage} alt="AI Result" className="w-full h-full object-contain" />
                <button 
                  onClick={handleDownload}
                  className="absolute bottom-6 right-6 p-4 bg-white text-black hover:bg-black hover:text-white border-2 border-black transition-all shadow-xl rounded-none"
                >
                  <Download size={24} />
                </button>
              </>
            ) : error ? (
              <div className="text-center p-12 space-y-6">
                <AlertCircle size={48} className="text-red-500 mx-auto" />
                <h3 className="text-white text-xl font-black uppercase italic">Failed</h3>
                <p className="text-slate-500 text-xs">{error}</p>
              </div>
            ) : (
              <div className="text-center p-12 space-y-6 opacity-20">
                <ImageIcon size={80} className="text-white mx-auto" strokeWidth={1} />
                <h3 className="text-white text-3xl font-black uppercase italic tracking-tighter text-center">Canvas Awaiting</h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIImageGenerator;