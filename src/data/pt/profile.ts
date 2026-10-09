import type { Profile } from '../types';

export const profile: Profile = {
  name: 'Renata Dornellas',
  title: 'UX Researcher',
  tagline: 'Transformo evidências da experiência real do cliente em decisões de produto, da pesquisa à priorização.',
  location: 'Florianópolis, SC',
  email: 'renatadornellass@gmail.com',
  linkedin: 'https://www.linkedin.com/in/renatadornellas',
  // No resume PDF yet: add the file to public/resume/ and set resumeFile (e.g. '/resume/Renata-Dornellas-Curriculo.pdf').
  evidence: {
    title: 'Da evidência à decisão',
    lines: [
      'Métodos qualitativos e quantitativos, do plano à síntese',
      'Qualtrics, Maze e Figma',
      'IA generativa e agentes analíticos na análise em escala',
      'Evidências levadas a Design, Produto, Tecnologia, Dados e Negócios',
    ],
    summary: 'Em um estudo de Pix, as evidências ajudaram a repriorizar a iniciativa antes do investimento em sua implementação.',
  },
  stats: [
    { value: '+1', unit: 'mi', label: 'de dados de feedback analisados entre 2025 e 2026' },
    { value: '10+', label: 'produtos e jornadas com contribuição direta da pesquisa' },
    { value: '~200', label: 'cooperados PF e PJ na comunidade do Lab Unicred' },
  ],
};
