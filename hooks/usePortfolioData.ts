'use client'

import { useState } from 'react';
import portfolioData from '@/data/portfolio.json';

export interface PortfolioData {
  personal: {
    name: string;
    title: string;
    location: string;
    phone: string;
    email: string;
    github: string;
    linkedin: string;
    resume: string;
    heroDescription: string;
  };
  skills: Array<{
    category: string;
    items: string[];
  }>;
  experience: Array<{
    company: string;
    website: string;
    position: string;
    duration: string;
    type: string;
    tools: string[];
    responsibilities: string[];
  }>;
  projects: Array<{
    title: string;
    challenge: string;
    solution: string;
    implementation: string;
    tools: string[];
    repository: string;
    image: string;
    demo: string;
  }>;
  about: string;
}

export const usePortfolioData = () => {
  const [data, setData] = useState<PortfolioData>(portfolioData);
  const [loading, setLoading] = useState(false);

  const updateData = (newData: PortfolioData) => {
    setData(newData);
    console.log('Portfolio data updated:', newData);
  };

  return {
    data,
    loading,
    updateData
  };
};