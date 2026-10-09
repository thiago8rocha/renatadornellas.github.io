import type { Lang } from './types';
import * as enProfile from './en/profile';
import * as enAbout from './en/about';
import * as enProcess from './en/process';
import * as enExperience from './en/experience';
import * as enProjects from './en/projects';
import * as enSkills from './en/skills';
import * as enEducation from './en/education';
import * as enUi from './en/ui';
import * as ptProfile from './pt/profile';
import * as ptAbout from './pt/about';
import * as ptProcess from './pt/process';
import * as ptExperience from './pt/experience';
import * as ptProjects from './pt/projects';
import * as ptSkills from './pt/skills';
import * as ptEducation from './pt/education';
import * as ptUi from './pt/ui';

const content = {
  en: { ...enProfile, ...enAbout, ...enProcess, ...enExperience, ...enProjects, ...enSkills, ...enEducation, ...enUi },
  pt: { ...ptProfile, ...ptAbout, ...ptProcess, ...ptExperience, ...ptProjects, ...ptSkills, ...ptEducation, ...ptUi },
};

export const getContent = (lang: Lang) => content[lang];
export type Content = ReturnType<typeof getContent>;
/** Portuguese (pt-BR) is the default language and lives at the site root. */
export const basePath = (lang: Lang) => (lang === 'pt' ? '/' : '/en/');
