export type StrategyPillar = {
  label: string;
  description: string;
  impact: string;
};

export type AIStrategy = {
  title: string;
  summary: string;
  pillars: StrategyPillar[];
};

export function generateAIStrategy(
  industry: string,
  challenge: string
): AIStrategy;
