import React, { useState } from 'react';
import { Sparkles, Download } from 'lucide-react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import html2pdf from 'html2pdf.js';
import { generateAIStrategy } from "../components/engine/aiStrategyEngine";

/* 🔹 TYPES (REQUIRED) */
type StrategyPillar = {
  label: string;
  description: string;
  impact: string;
};

type AIStrategy = {
  title: string;
  summary: string;
  pillars: StrategyPillar[];
};

const StrategyAudit: React.FC = () => {
  const [step, setStep] = useState<'input' | 'generating' | 'result' | 'contact' | 'preparing' | 'success'>('input');
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    businessName: '',
    industry: 'Real Estate',
    challenge: 'Not enough leads',
    userName: '',
    userPhone: ''
  });

  const [strategy, setStrategy] = useState<AIStrategy | null>(null);
  const [prepProgress, setPrepProgress] = useState(0);

  const industries = [
    'Real Estate','Healthcare & Clinics','E-commerce & D2C','Education & EdTech',
    'Technology & SaaS','Hospitality (Hotels/Restos)','Finance & Fintech'
  ];

  const challenges = [
    'Not enough leads',
    'Low brand awareness',
    'Slow website',
    'Poor social media engagement',
    'High ad costs'
  ];

  const generateStrategy = () => {
    if (!formData.businessName) {
      setError("Business name is required");
      return;
    }

    setError(null);
    setStep("generating");

    setTimeout(() => {
      const result = generateAIStrategy(
        formData.industry,
        formData.challenge
      );
      setStrategy(result);
      setStep("result");
    }, 1200);
  };

  const downloadPDF = () => {
    const element = document.querySelector('.printable-report') as HTMLElement | null;
    if (!element) return;

    html2pdf()
      .from(element)
      .set({
        margin: 10,
        filename: 'DPBuzz-Strategy-Report.pdf',
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
      })
      .save();
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-50">
      <SEO title="Free Strategy Audit | DPBuzz" description="Instant AI-powered growth blueprint." />

      <div className="max-w-4xl mx-auto px-4">

        {step === 'input' && (
          <div className="space-y-6">
            <input
              value={formData.businessName}
              onChange={e => setFormData({ ...formData, businessName: e.target.value })}
              placeholder="Business Name"
              className="w-full p-4 border"
            />

            <select
              value={formData.industry}
              onChange={e => setFormData({ ...formData, industry: e.target.value })}
              className="w-full p-4 border"
            >
              {industries.map(i => <option key={i}>{i}</option>)}
            </select>

            <select
              value={formData.challenge}
              onChange={e => setFormData({ ...formData, challenge: e.target.value })}
              className="w-full p-4 border"
            >
              {challenges.map(c => <option key={c}>{c}</option>)}
            </select>

            {error && <p className="text-red-500">{error}</p>}

  <button
  onClick={generateStrategy}
  className="
    btn-primary
    w-full
    py-4
    flex
    items-center
    justify-center
    gap-3
    text-base
    md:text-lg
    font-semibold
  "
>
  <Sparkles
    className="
      w-5
      h-5
      min-w-[20px]
      min-h-[20px]
      flex-shrink-0
      translate-y-[1px]
    "
  />

  <span className="leading-none text-center">
    Generate Growth Blueprint
  </span>
</button>
            </div>
        )}

        {step === 'result' && strategy && (
          <>
          <div className="space-y-6 printable-report">
            <h1 className="text-4xl font-bold">{strategy.title}</h1>
            <p>{strategy.summary}</p>

            {strategy.pillars.map((p, i) => (
              <div key={i} className="border p-4">
                <h3>{p.label}</h3>
                <p>{p.description}</p>
                <small>{p.impact}</small>
              </div>
            ))}
</div>
             <div className="mt-8">
      <button
        onClick={downloadPDF}
        className="btn-primary w-full py-6 flex items-center justify-center gap-3"
      >
        <Download className="w-5 h-5" />
        <span>Download PDF</span>
      </button>
    </div>
  </>
)}
      </div>
    </div>
  );
};

export default StrategyAudit;
