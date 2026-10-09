import type { SkillGroup } from '../types';

// Highlighted (daily: true) = practices and tools named in the current Unicred role. Confirm with Renata.
export const skills: SkillGroup[] = [
  { group: 'Research methods', items: [{ name: 'Qualitative research', daily: true }, { name: 'Quantitative research', daily: true }, { name: 'Usability testing', daily: true }, { name: 'Interviews' }, { name: 'In-person forums', daily: true }, { name: 'Discovery', daily: true }, { name: 'Personas' }, { name: 'Journey mapping' }] },
  { group: 'Voice of the Customer and insights', items: [{ name: 'Voice of the Customer (VoC)', daily: true }, { name: 'Voice of the Member', daily: true }, { name: 'Consumer Insights' }, { name: 'Customer & People Insights' }, { name: 'Feedback analysis at scale', daily: true }] },
  { group: 'Tools', items: [{ name: 'Qualtrics', daily: true }, { name: 'Maze', daily: true }, { name: 'Figma', daily: true }] },
  { group: 'AI in research', items: [{ name: 'Generative AI', daily: true }, { name: 'Analytical agents', daily: true }, { name: 'Comment synthesis at scale' }, { name: 'Theme identification' }] },
  { group: 'Facilitation and communication', items: [{ name: 'Workshop facilitation' }, { name: 'Storytelling' }, { name: 'Script co-creation' }, { name: 'Strategic scripts' }, { name: 'Internal communication' }, { name: 'Culture change' }] },
  { group: 'People and culture', items: [{ name: 'People Analytics' }, { name: 'OKRs and KPIs' }, { name: 'Organizational climate and culture' }, { name: 'Employee journey' }, { name: 'HR Business Partner' }] },
  { group: 'I work with', items: [{ name: 'Design' }, { name: 'Product' }, { name: 'Technology' }, { name: 'Data' }, { name: 'Marketing' }, { name: 'Business' }] },
  { group: 'Languages', items: [{ name: 'Portuguese' }, { name: 'English (elementary)' }] },
];
