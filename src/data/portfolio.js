export const profile = {
  name: 'Sameer Paykel',
  initials: 'SP',
  email: 'sameerpaykel@gmail.com',
  resumeUrl: '/assets/sameer-paykel-resume.pdf',
  githubUrl: 'https://github.com/spaykel',
  linkedinUrl: 'https://linkedin.com/in/sameerpaykel',
  headline:
    'Computer Science graduate from Cal Poly SLO working across software, data, technology, and strategic analysis.',
  about:
    'I like working at the intersection of practical software, thoughtful analysis, and technical systems. My background is in Computer Science with an Entrepreneurship minor from Cal Poly SLO, and I am drawn to problems where clean engineering, data, and product context all matter.',
};

export const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
];

export const experience = [
  {
    company: 'Lockheed Martin',
    role: 'Strategic Operations Analyst',
    period: 'August 2026 - Present',
    type: 'Full-time',
    summary:
      'Developing simulation models, analysis tooling, and software workflows that support advanced defense system evaluation and operational decision making.',
    highlights: [
      'Developed object-oriented AFSIM software models for mission, theater, and campaign-level simulations.',
      'Designed, integrated, tested, and debugged simulation software to evaluate advanced defense system performance.',
      'Built software tools to analyze complex simulation data and support operational decision making.',
    ],
  },
  {
    company: 'General Atomics Aeronautical Systems',
    role: 'Data Engineering Intern',
    period: 'June 2025 - August 2025',
    type: 'Internship',
    summary:
      'Built data engineering systems for UAV sustainment operations, with work spanning Azure pipelines, SQL, ETL automation, and ML-assisted document parsing.',
    highlights: [
      'Designed and deployed an Azure-based data pipeline integrating legacy systems for UAV sustainment operations.',
      'Automated Python and SQL workflows, eliminating over 1,800 annual labor hours and enabling real-time reporting.',
      'Built an ML-based document parsing system that reduced technical lookup time by over 40%.',
    ],
  },
  {
    company: 'Renewable Energy Place (REplace)',
    role: 'Software Engineering Intern',
    period: 'June 2024 - August 2024',
    type: 'Internship',
    summary:
      'Shipped production software for a renewable energy platform, contributing across full-stack features, backend systems, and geospatial data workflows.',
    highlights: [
      'Built and shipped full-stack features with React, Node.js, and PostgreSQL.',
      'Designed geospatial data pipelines with GeoPandas and Mapbox to process statewide energy datasets more efficiently.',
      'Contributed to the v2.0 platform launch enabling enterprise client onboarding.',
    ],
  },
];

export const projects = [
  {
    title: 'Custom Programming Language',
    description:
      'Built a custom programming language with a parser, interpreter, runtime system, lexical scoping, multiple evaluation strategies, and typed/untyped plus mutable/immutable variants.',
    technologies: ['Racket', 'Compilers', 'Language design'],
    githubUrl: 'https://github.com/spaykel/zode',
    demoUrl: '',
    image: '',
  },
  {
    title: 'Chess Artificial Intelligence Solver',
    description:
      'Built a chess engine using Monte Carlo Tree Search with neural network evaluation, recursive search optimization, and pruning strategies to reduce computational cost.',
    technologies: ['Python', 'TensorFlow', 'MCTS'],
    githubUrl: 'https://github.com/spaykel/AI_ChessEngine',
    demoUrl: '',
    image: '',
  },
  {
    title: 'Event Finder Mobile App',
    description:
      'Built a full-stack mobile app for real-time, location-based event discovery with REST APIs, user-generated content, moderation, dynamic querying, and geolocation-based ranking.',
    technologies: ['React Native', 'Spring Boot', 'MySQL'],
    githubUrl: '[Add GitHub URL]',
    demoUrl: '',
    image: '',
  },
];

export const leadership = [
  {
    organization: 'Hack4Impact Cal Poly',
    role: 'Director of Operations, Product Manager, & Developer',
    period: 'September 2023 - June 2026',
    summary:
      'Led cross-functional teams delivering software for nonprofit clients, managed execution across 11 concurrent projects, and contributed to full-stack development and system improvements.',
  },
  {
    organization: 'Sigma Phi Delta Fraternity',
    role: 'Treasurer',
    period: 'May 2025 - May 2026',
    summary:
      'Serve on the executive board, managing a $50,000+ annual budget for a 75+ member organization while overseeing dues collection, financial planning, and transparent reporting.',
  },
];

export const skills = [
  {
    category: 'Languages',
    items: ['Python', 'Java', 'C/C++', 'JavaScript/TypeScript', 'SQL'],
  },
  {
    category: 'Frameworks',
    items: ['React', 'Node.js', 'Spring Boot', 'TensorFlow'],
  },
  {
    category: 'Data / ML',
    items: ['Pandas', 'NumPy', 'PostgreSQL', 'ETL', 'GeoPandas'],
  },
  {
    category: 'Tools',
    items: ['Git', 'REST APIs', 'Selenium', 'Mapbox'],
  },
];

export const personal = {
  title: 'Outside the Work',
  body:
    'Away from the keyboard, I make time for jazz piano, travel, hiking, and the kinds of side quests that make technical work feel connected to the wider world.',
};
