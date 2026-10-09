import type { Profile } from '../types';

export const profile: Profile = {
  name: 'Renata Dornellas',
  title: 'UX Researcher',
  tagline: 'I turn evidence from the real customer experience into product decisions, from research to prioritization.',
  location: 'Florianópolis, SC, Brazil',
  email: 'renatadornellass@gmail.com',
  linkedin: 'https://www.linkedin.com/in/renatadornellas',
  // No resume PDF yet: add the file to public/resume/ and set resumeFile (e.g. '/resume/Renata-Dornellas-Resume.pdf').
  evidence: {
    title: 'From evidence to decision',
    lines: [
      'Qualitative and quantitative methods, from plan to synthesis',
      'Qualtrics, Maze and Figma',
      'Generative AI and analytical agents for analysis at scale',
      'Evidence taken to Design, Product, Technology, Data and Business',
    ],
    summary: 'In a Pix study, the evidence helped reprioritize the initiative before investing in its implementation.',
  },
  stats: [
    { value: '1M+', label: 'feedback data points analyzed between 2025 and 2026' },
    { value: '10+', label: 'products and journeys directly informed by research' },
    { value: '~200', label: 'individual and business members in the Lab Unicred community' },
  ],
};
