import type { Job } from '../types';

// Source: LinkedIn profile export (Profile.pdf, local only).
export const experience: Job[] = [
  {
    company: 'Unicred do Brasil',
    place: 'Florianópolis, SC',
    roles: [{ title: 'UX Researcher', period: 'Nov 2023 – Present' }],
    summary: 'CX and UX Research at Unicred, connecting the Voice of the Member, research and Discovery.',
    bullets: [
      'Structured the VoC Program, mobilizing 7 teams and taking evidence from multiple feedback sources into Product, Technology and Business prioritization discussions.',
      'Lead Lab Unicred, a community of about 200 individual and business members for research, experimentation and validation of solutions, plus in-person forums with members.',
      'Run studies on Pix, Open Finance, investments, financial products, brand and digital journeys, as well as personas, journeys and usability tests. In one Pix study, the evidence helped reprioritize the initiative before investing in its implementation.',
    ],
    extraBullets: [
      'Combine qualitative and quantitative methods to reduce uncertainty, challenge hypotheses and turn the voice of the customer into product decisions.',
      'Bring generative AI and analytical agents into the research process to speed up synthesis, analyze comments at scale and identify themes.',
      'Support strategies to spread a customer experience culture, such as trainings, podcasts and events focused on putting the member first.',
    ],
    tags: ['Voice of the Customer', 'Discovery', 'Qualtrics', 'Maze', 'Figma', 'Generative AI'],
    current: true,
  },
  {
    company: 'Zallpy Digital',
    place: 'Florianópolis, SC',
    roles: [{ title: 'UX Researcher', period: 'Sep 2022 – Nov 2023' }],
    summary: "Allocated to Unicred's research team, where I built my foundation in VoC and Consumer Insights applied to the cooperative financial sector, an experience that led to a direct hire by Unicred.",
    bullets: [
      'End-to-end mapping of the employee journey, identifying critical points and recommending improvements to the internal experience.',
      'End-to-end qualitative and quantitative research: plan, script, collection, analysis and storytelling for Product, Business, Customer Service and Marketing teams.',
      'Co-creation of interview scripts and research strategies with multidisciplinary teams.',
    ],
    extraBullets: [
      'Presented kickoffs and reports with actionable recommendations for product teams.',
      'Facilitated workshops to develop solutions and business goals.',
    ],
    tags: ['VoC', 'Consumer Insights', 'Journeys', 'Workshops'],
  },
  {
    company: 'Brognoli Negócios Imobiliários',
    place: 'Florianópolis, SC',
    roles: [{ title: 'HR Business Partner', period: 'May 2021 – Sep 2022' }],
    summary: 'Worked directly with the CEO and directors (Legal, Finance, DHO, CX and Startups) on strategic people and business decisions. This is where I developed the listening I now apply in user research.',
    bullets: [
      'Led the Emotional Health project: data mapping and internal engagement and well-being actions for employees.',
      'Presented OKR, KPI and mental health strategy results to the Board of Directors.',
      'Co-responsible for the innovation culture and digital transformation project at Grupo Brognoli.',
    ],
    extraBullets: ['Tracked and updated the leadership succession map and the PDLs.'],
    tags: ['People Analytics', 'OKRs and KPIs', 'Culture', 'Emotional health'],
  },
  {
    company: 'Catarinas Design',
    place: 'Florianópolis, SC',
    roles: [
      { title: 'Human and Organizational Development Analyst', period: 'Jul 2020 – May 2021' },
      { title: 'People and Culture Trainee', period: 'Aug 2019 – Jul 2020' },
    ],
    summary: 'People and culture at a design company, from trainee to data analysis supporting management decisions.',
    bullets: [
      'Ran and analyzed internal surveys and organizational climate and culture analyses.',
      'Built the employee experience journey.',
      "Led the creation of the company's culture code and best practices guide (policies).",
    ],
    extraBullets: [
      'Organized data for decision making and supported management decisions.',
      'Performance reviews and PDI guidance, plus recruiting and selection.',
      'Mapped and improved internal processes, and ran internal marketing and communication actions.',
    ],
    tags: ['Climate and culture', 'Employee journey', 'Culture code', 'Internal surveys'],
  },
  {
    company: 'RG Contadores Associados',
    place: 'Florianópolis and region',
    roles: [{ title: 'Intern', period: 'Oct 2017 – Feb 2019' }],
    summary: 'Internship at an accounting firm.',
    bullets: [],
    extraBullets: [],
    tags: [],
  },
];
