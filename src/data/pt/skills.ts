import type { SkillGroup } from '../types';

// Highlighted (daily: true) = practices and tools named in the current Unicred role. Confirm with Renata.
export const skills: SkillGroup[] = [
  { group: 'Métodos de pesquisa', items: [{ name: 'Pesquisa qualitativa', daily: true }, { name: 'Pesquisa quantitativa', daily: true }, { name: 'Testes de usabilidade', daily: true }, { name: 'Entrevistas' }, { name: 'Fóruns presenciais', daily: true }, { name: 'Discovery', daily: true }, { name: 'Personas' }, { name: 'Mapeamento de jornadas' }] },
  { group: 'Voz do Cliente e insights', items: [{ name: 'Voz do Cliente (VoC)', daily: true }, { name: 'Voz do Cooperado', daily: true }, { name: 'Consumer Insights' }, { name: 'Customer & People Insights' }, { name: 'Análise de feedbacks em escala', daily: true }] },
  { group: 'Ferramentas', items: [{ name: 'Qualtrics', daily: true }, { name: 'Maze', daily: true }, { name: 'Figma', daily: true }] },
  { group: 'IA na pesquisa', items: [{ name: 'IA generativa', daily: true }, { name: 'Agentes analíticos', daily: true }, { name: 'Síntese de comentários em escala' }, { name: 'Identificação de temas' }] },
  { group: 'Facilitação e comunicação', items: [{ name: 'Facilitação de workshops' }, { name: 'Storytelling' }, { name: 'Cocriação de roteiros' }, { name: 'Roteiros estratégicos' }, { name: 'Comunicação interna' }, { name: 'Mudança de cultura' }] },
  { group: 'Pessoas e cultura', items: [{ name: 'People Analytics' }, { name: 'OKRs e KPIs' }, { name: 'Clima e cultura organizacional' }, { name: 'Jornada do colaborador' }, { name: 'HR Business Partner' }] },
  { group: 'Trabalho com', items: [{ name: 'Design' }, { name: 'Produto' }, { name: 'Tecnologia' }, { name: 'Dados' }, { name: 'Marketing' }, { name: 'Negócios' }] },
  { group: 'Idiomas', items: [{ name: 'Português' }, { name: 'Inglês (básico)' }] },
];
