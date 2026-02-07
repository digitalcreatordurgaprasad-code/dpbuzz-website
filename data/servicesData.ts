import { Layout, MapPin, Instagram, Search, Zap, Globe, BarChart3, Rocket, ShieldCheck } from 'lucide-react';

export interface ServiceData {
  id: string;
  title: string;
  iconName: string;
  description: string;
  benefits: string[];
  img: string;
}

const staticServicesData: Record<string, ServiceData> = {
  'web-design': {
    id: 'web-design',
    title: "Website Design",
    iconName: "Layout",
    description: "We create professional and beautiful websites that look great on both mobiles and computers.",
    benefits: [
      "User-Centric Design",
      "Fast Loading Speed",
      "Mobile First Approach",
      "SEO Friendly Core"
    ],
    img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=60&w=600"
  },
  'gmb-dominance': {
    id: 'gmb-dominance',
    title: "Local GMB Dominance",
    iconName: "MapPin",
    description: "Get your business in the Google Map 'Top 3' pack. We handle your ranking, reviews, and local visibility.",
    benefits: [
      "Google Maps Ranking",
      "Review Growth Automation",
      "Local Keyword Setup",
      "Direct Call Generation"
    ],
    img: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=60&w=600"
  },
  'seo': {
    id: 'seo',
    title: "Google Ranking (SEO)",
    iconName: "Search",
    description: "We help your business website appear at the top when people search for your services on Google naturally.",
    benefits: [
      "Organic Traffic Growth",
      "Strategic Keyword Map",
      "Local GMB SEO",
      "Authority Building"
    ],
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=60&w=600"
  },
  'ads': {
    id: 'ads',
    title: "Performance Ads",
    iconName: "Zap",
    description: "High-ROI campaigns on Google and Meta (FB/IG) designed to bring you leads instantly.",
    benefits: [
      "Immediate Visibility",
      "Data-Driven Scaling",
      "Lead Quality Control",
      "WhatsApp CRM Leads"
    ],
    img: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&q=60&w=600"
  }
};

export const getServicesData = (): Record<string, ServiceData> => {
  const savedData = localStorage.getItem('dpbuzz_services_data');
  if (savedData) {
    try {
      return JSON.parse(savedData);
    } catch (e) {
      return staticServicesData;
    }
  }
  return staticServicesData;
};

export const iconMap: Record<string, any> = {
  Layout,
  MapPin,
  Instagram,
  Search,
  Zap,
  Globe,
  BarChart3,
  Rocket,
  ShieldCheck
};