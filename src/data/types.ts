export type Lang = 'en' | 'pt';

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  location: string;
  email: string;
  linkedin: string;
  /** Optional: the GitHub link is hidden everywhere when omitted. */
  github?: string;
  /** Optional: every resume button is hidden everywhere when omitted. */
  resumeFile?: string;
  evidence: { title: string; lines: string[]; summary: string };
  stats: { value: string; unit?: string; label: string }[];
}

export interface About {
  paragraphs: string[];
  currently: string[];
  domains: string[];
  highlights: { title: string; text: string }[];
}

export interface ProcessStep {
  title: string;
  text: string;
  deliverables: string[];
}

export interface Job {
  company: string;
  place: string;
  roles: { title: string; period: string }[];
  summary: string;
  bullets: string[];
  extraBullets: string[];
  tags: string[];
  current?: boolean;
}

export interface Link {
  label: string;
  href: string;
}

export type ProjectGroup = 'research' | 'people';

export interface Project {
  title: string;
  group: ProjectGroup;
  badge: string;
  domain: string;
  client: string;
  summary: string;
  role: string;
  methods: string[];
  tools: string[];
  links?: Link[];
}

export interface FeaturedProject extends Project {
  metrics: { value: string; label: string }[];
  flow: { name: string; detail: string }[];
  flowNote: string;
  confidentialityNote: string;
}

export interface SkillGroup {
  group: string;
  items: { name: string; daily?: boolean }[];
}

export interface EducationItem {
  icon: 'course' | 'cert' | 'degree';
  title: string;
  place: string;
  meta: string;
}

export type Education = EducationItem[];

export type SectionKey = 'about' | 'process' | 'experience' | 'projects' | 'skills' | 'education' | 'contact';

export interface Ui {
  htmlLang: string;
  siteTitle: string;
  metaDescription: string;
  nav: { about: string; process: string; experience: string; projects: string; skills: string; contact: string; resume: string };
  skipToContent: string;
  menu: string;
  themeToggle: string;
  langSwitch: { label: string; targetName: string; targetHref: string; short: string };
  sections: Record<SectionKey, { label: string; heading: string; intro?: string }>;
  hero: { greeting: string; viewProjects: string; downloadResume: string; statsLabel: string };
  about: { currently: string; domains: string; illustrationLabel: string };
  experience: { showMore: string; showLess: string; current: string };
  projects: { featured: string; filterAll: string; filterLabel: string; filterResearch: string; filterPeople: string; role: string; methods: string; tools: string; flowTitle: string };
  skills: { dailyNote: string };
  contact: { intro: string; cta: string; location: string; formTitle: string; name: string; email: string; message: string; send: string; direct: string };
  footer: { backToTop: string };
}
