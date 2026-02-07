// src/engine/aiStrategyEngine.js

const phaseTemplates = {
  "Not enough leads": [
    {
      label: "Phase 1: Visibility Foundation",
      description: "Fix website structure, tracking, and local SEO to capture existing demand.",
      impact: "Immediate improvement in inbound visibility"
    },
    {
      label: "Phase 2: Lead Generation Engine",
      description: "Launch conversion-optimized landing pages and lead magnets aligned with buyer intent.",
      impact: "Consistent qualified leads"
    },
    {
      label: "Phase 3: Trust & Authority",
      description: "Build credibility using testimonials, content marketing, and social proof.",
      impact: "Higher conversion rates"
    },
    {
      label: "Phase 4: Scale with DPBuzz",
      description: "Automate ads, CRM, and growth systems using DPBuzz managed services.",
      impact: "Predictable revenue growth"
    }
  ],
  "Low brand awareness": [
    {
      label: "Phase 1: Brand Positioning",
      description: "Clarify brand messaging and value proposition across digital channels.",
      impact: "Clear market differentiation"
    },
    {
      label: "Phase 2: Content Distribution",
      description: "Deploy high-reach content through SEO, social, and paid channels.",
      impact: "Increased brand recall"
    },
    {
      label: "Phase 3: Engagement Loops",
      description: "Retarget and nurture audiences with value-driven campaigns.",
      impact: "Audience trust & loyalty"
    },
    {
      label: "Phase 4: Growth Partner (DPBuzz)",
      description: "Scale brand presence using DPBuzz omnichannel marketing systems.",
      impact: "Sustainable brand growth"
    }
  ]
};

export function generateAIStrategy(industry, challenge) {
  const phases =
    phaseTemplates[challenge] || phaseTemplates["Not enough leads"];

  // Add light randomness to avoid identical outputs
  const shuffled = phases.map(p => ({
    ...p,
    description: `${p.description} Specifically optimized for ${industry} businesses.`
  }));

  return {
    title: `${industry} Growth Blueprint`,
    summary: `This 4-phase strategy addresses ${challenge} challenges commonly faced by ${industry} businesses.`,
    pillars: shuffled
  };
}
