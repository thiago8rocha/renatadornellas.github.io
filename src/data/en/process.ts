import type { ProcessStep } from '../types';

// TODO: draft built from the LinkedIn summary only, review and adjust the steps and deliverables with Renata.
export const process: ProcessStep[] = [
  { title: 'Frame', text: 'Understand the problem, the hypotheses and the decision the research has to support.', deliverables: ['Problem definition', 'Hypotheses'] },
  { title: 'Design', text: 'Choose the method and the sample, and build the script or the questionnaire.', deliverables: ['Research plan', 'Interview script', 'Questionnaire'] },
  { title: 'Collect', text: 'Go to the field with qualitative and quantitative methods, in person or remote.', deliverables: ['Interviews and forums', 'Surveys', 'Usability tests'] },
  { title: 'Synthesize', text: 'Turn large volumes of data and quotes into patterns, themes and hypotheses.', deliverables: ['Personas', 'Journeys', 'Themes and patterns'] },
  { title: 'Decide', text: 'Tell the story with actionable recommendations for Product, Design, Technology and Business.', deliverables: ['Report with recommendations', 'Workshops', 'Prioritization support'] },
];
