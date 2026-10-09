import type { ProcessStep } from '../types';

// TODO: draft built from the LinkedIn summary only, review and adjust the steps and deliverables with Renata.
export const process: ProcessStep[] = [
  { title: 'Enquadrar', text: 'Entender o problema, as hipóteses e a decisão que a pesquisa precisa apoiar.', deliverables: ['Definição do problema', 'Hipóteses'] },
  { title: 'Desenhar', text: 'Escolher o método, a amostra e construir o roteiro ou o questionário.', deliverables: ['Plano de pesquisa', 'Roteiro', 'Questionário'] },
  { title: 'Coletar', text: 'Ir a campo com métodos qualitativos e quantitativos, ao vivo ou à distância.', deliverables: ['Entrevistas e fóruns', 'Pesquisas', 'Testes de usabilidade'] },
  { title: 'Sintetizar', text: 'Transformar grandes volumes de dados e falas em padrões, temas e hipóteses.', deliverables: ['Personas', 'Jornadas', 'Temas e padrões'] },
  { title: 'Decidir', text: 'Contar a história com recomendações acionáveis para Produto, Design, Tecnologia e Negócios.', deliverables: ['Report com recomendações', 'Workshops', 'Apoio à priorização'] },
];
