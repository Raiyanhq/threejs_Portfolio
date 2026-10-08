export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Projects',
    href: '#work',
  },
  { id: 5, name: 'Experience', href: '#experience' },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const myProjects = [
  {
    id: 'elevest',
    logo: '/assets/projects/elevest-logo.svg',
    poster: '/assets/projects/elevest-screen.svg',
    title: 'Elevest',
    category: 'Fintech / Interactive web',
    filter: 'Web',
    year: '2025 · Financial planning prototype',
    role: 'Frontend & financial modeling',
    desc: 'A financial planning prototype that turns everyday transactions into a clearer picture of saving and investing. Explore spare-change round-ups, salary allocation, and interactive growth projections in one dashboard.',
    subdesc:
      'Built with React, Vite, and Recharts. Separate components handle transactions, income planning, risk profiles, and a 52-week compound-growth model. ETF comparisons use mock data and assumed returns; the project is a simulation, not a brokerage integration.',
    href: 'https://github.com/Raiyanhq/elevest-micro-invest-',
    tags: [
      {
        name: 'React',
        path: '/assets/react.svg',
      },
      {
        name: 'JavaScript',
        path: '/assets/javascript.png',
      },
      {
        name: 'Recharts',
      },
      {
        name: 'Vite',
      },
    ],
    highlights: [
      'Transaction round-ups and monthly budgeting',
      'Salary allocation and risk-profile inputs',
      'Interactive 52-week investment projections',
    ],
    accent: '#b5efd2',
    overview: {
      subtitle: 'SMARTER MONEY, CLEARER DECISIONS',
      steps: ['Transactions', 'Round-ups', 'Projections'],
      focus: 'Interactive financial modeling',
    },
  },
  {
    id: 'wellco',
    logo: '/assets/projects/wellco-logo.svg',
    poster: '/assets/projects/wellco-screen.svg',
    title: 'WellCo',
    category: 'Applied AI / Full-stack',
    filter: 'AI & Data',
    year: '2024 · AIATL',
    role: 'Full-stack & AI integration',
    desc: 'An AI-powered wellness companion bringing conversational support and fitness guidance into one experience. Context-aware interactions help users explore routines, goals, and everyday well-being.',
    subdesc:
      'The project combines a React interface with Gemini-powered conversational features and Firebase-backed context. The repository includes chatbot components, API experiments, and a Python backend, exploring how an AI assistant can fit into a usable web application.',
    href: 'https://github.com/Raiyanhq/WellCo',
    texture: '/textures/project/project1.mp4',
    tags: [
      {
        name: 'React',
        path: '/assets/react.svg',
      },
      {
        name: 'Python',
        path: '/assets/python.png',
      },
      {
        name: 'Gemini API',
        path: '/assets/geminiapi.png',
      },
      {
        name: 'Firebase',
      },
    ],
    highlights: [
      'Context-aware wellness conversations',
      'Personalized fitness and well-being guidance',
      'Frontend, API, and data integration',
    ],
    accent: '#b5efd2',
    overview: {
      subtitle: 'A LITTLE SUPPORT, EVERY DAY',
      steps: ['Conversation', 'Context', 'Guidance'],
      focus: 'AI-powered wellness companion',
    },
  },
  {
    id: 'focusnflow',
    logo: '/assets/projects/focusnflow-logo.svg',
    poster: '/assets/projects/focusnflow-screen.svg',
    title: 'FocusNFlow',
    category: 'Mobile / Collaborative planning',
    filter: 'Mobile',
    year: '2026 · Team project',
    role: 'Frontend / UI Lead',
    desc: 'A mobile study planner for students balancing deadlines, coursework, and group study. A transparent scheduling engine helps organize the week, while shared groups and chat make studying collaborative.',
    subdesc:
      'As the team’s Frontend / UI Lead, my role centers on the Flutter experience. The project pairs Dart with Firebase Authentication, Firestore, Storage, and Cloud Messaging. Its rule-based planner weighs deadline urgency, course weight, and estimated effort. The repository documents this as a project in development.',
    href: 'https://github.com/Raiyanhq/U28_FocusNFlow',
    tags: [
      {
        name: 'Flutter',
      },
      {
        name: 'Dart',
      },
      {
        name: 'Firebase',
      },
      {
        name: 'Firestore',
      },
    ],
    highlights: [
      'Task prioritization and weekly study planning',
      'Real-time study groups, chat, and shared sessions',
      'Frontend/UI leadership on a two-person team',
    ],
    accent: '#bac7ff',
    overview: {
      subtitle: 'MAKE ROOM FOR WHAT MATTERS',
      steps: ['Prioritize', 'Plan', 'Collaborate'],
      focus: 'Student-first mobile experience',
    },
  },
  {
    id: 'noteit',
    logo: '/assets/projects/noteit-logo.svg',
    poster: '/assets/projects/noteit-screen.svg',
    title: 'Note!t',
    category: 'AI / Learning & productivity',
    filter: 'AI & Data',
    year: '2024 · UGAHacks',
    role: 'Full-stack learning tools',
    desc: 'A hackathon learning tool that brings AI-assisted questions, text extraction, and PDF annotation into a study workflow. Built around making information easier to work with and revisit.',
    subdesc:
      'Pairs a lightweight HTML/CSS interface with Python/Flask services for question answering and text processing. Keras experiments explore learning from question-answer data, alongside OCR and PDF annotation workflows.',
    href: 'https://github.com/Raiyanhq/Note-t_project',
    tags: [
      {
        name: 'Python',
        path: '/assets/python.png',
      },
      {
        name: 'Flask',
      },
      {
        name: 'HTML / CSS',
      },
      {
        name: 'NLP',
      },
    ],
    highlights: [
      'AI-assisted questions and answers',
      'OCR and PDF annotation workflows',
      'Python text-processing and web interface prototypes',
    ],
    accent: '#f3d0a0',
    overview: {
      subtitle: 'TURN INFORMATION INTO UNDERSTANDING',
      steps: ['Capture', 'Ask', 'Learn'],
      focus: 'AI-assisted study workflows',
    },
  },
  {
    id: 'golapi',
    logo: '/assets/projects/golapi-logo.svg',
    poster: '/assets/projects/golapi-screen.svg',
    title: 'Golapi Care',
    category: 'Machine learning / Health data',
    filter: 'AI & Data',
    year: '2023 · HackHarvard',
    role: 'Data pipelines & machine learning',
    desc: 'A healthcare research prototype exploring patterns associated with mild cognitive impairment. It connects wearable data with data processing and classification to investigate accessible approaches to early screening.',
    subdesc:
      'The project uses Python and a Terra API integration to receive wearable data through Flask webhook endpoints. The prototype explored data from 40+ sources and achieved 65% classification accuracy, with a focus on data preparation, feature extraction, and accessible wearable-data workflows.',
    href: 'https://github.com/Raiyanhq/Golapi-Care',
    texture: '/textures/project/project3.mp4',
    tags: [
      {
        name: 'Python',
        path: '/assets/python.png',
      },
      {
        name: 'Flask',
      },
      {
        name: 'Terra API',
        path: '/assets/terraapi.png',
      },
      {
        name: 'Machine learning',
      },
    ],
    highlights: [
      'Wearable data ingestion through Terra webhooks',
      'Data cleaning and feature extraction',
      'Prototype classification of cognitive impairment patterns',
    ],
    accent: '#f2b5c7',
    overview: {
      subtitle: 'FINDING SIGNALS IN EVERYDAY DATA',
      steps: ['Wearables', 'Features', 'Patterns'],
      focus: 'Health-data research prototype',
    },
  },
  {
    id: 'popdalock',
    logo: '/assets/projects/popdalock-logo.svg',
    poster: '/assets/projects/popdalock-screen.svg',
    title: 'PopDaLock',
    category: 'iOS / Game development',
    filter: 'Mobile',
    year: '2024 · Native iOS game',
    role: 'iOS interaction & game logic',
    desc: 'A timing game with a simple interaction and a deceptively difficult challenge: tap when the rotating marker meets its target. Each completed lock raises the difficulty and rewards precision.',
    subdesc:
      'Built in Swift for iOS with Xcode. The game manages rotating dial states, tap timing, level progression, and restart behavior. It explores how animation and immediate feedback can make a minimal interface feel engaging.',
    href: 'https://github.com/Raiyanhq/PopDaLock-app',
    texture: '/textures/project/project2.mp4',
    tags: [
      {
        name: 'Swift',
        path: '/assets/swift.png',
      },
      {
        name: 'iOS',
        path: '/assets/ios.png',
      },
      {
        name: 'Xcode',
        path: '/assets/xcode.png',
      },
    ],
    highlights: [
      'Tap-to-play timing mechanics',
      'Progressive difficulty and level state',
      'Animation and immediate interaction feedback',
    ],
    accent: '#f5bf91',
    overview: {
      subtitle: 'ONE TAP. PERFECT TIMING.',
      steps: ['Watch', 'Time', 'Unlock'],
      focus: 'Native mobile interaction',
    },
  },
];

export const moreProjects = [
  {
    title: 'Cognitive Memory Game',
    logo: '/assets/projects/memory-logo.svg',
    category: 'Python / Pygame',
    desc: 'A 4×4 card-matching game exploring memory, interaction state, and immediate visual feedback.',
    href: 'https://github.com/Raiyanhq/Cognitive_Impairment_Game',
    icon: 'code',
  },
  {
    title: 'This 3D Portfolio',
    logo: '/assets/projects/portfolio-logo.svg',
    category: 'React / Three.js',
    desc: 'An interactive workspace, on-demand project demos, and an animated timeline—all built for the browser.',
    href: 'https://github.com/Raiyanhq/threejs_Portfolio',
    icon: 'code',
  },
];

export const toolkitCategories = [
  {
    id: 'languages',
    label: 'Languages',
    caption: 'The building blocks',
    description:
      'From application logic and scripting to native and systems programming.',
    groups: [
      {
        label: 'Languages',
        items: ['Python', 'Java', 'JavaScript', 'C++', 'C#', 'SQL', 'Swift'],
      },
      {
        label: 'Also used in projects',
        items: ['Dart', 'HTML', 'CSS'],
      },
    ],
  },
  {
    id: 'frameworks',
    label: 'Frameworks',
    caption: 'From interface to service',
    description:
      'Frameworks and technologies for connected applications and maintainable services.',
    groups: [
      {
        label: 'Application development',
        items: [
          'React.js',
          'Node.js',
          'Spring Boot',
          'REST APIs',
          'Microservices',
          'Firebase',
        ],
      },
      {
        label: 'Also used in projects',
        items: ['Flutter', 'Flask', 'Three.js', 'Pygame', 'Recharts'],
      },
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud & DevOps',
    caption: 'Built to ship',
    description:
      'Cloud services, infrastructure, and delivery tools from my engineering internships and projects.',
    groups: [
      {
        label: 'Cloud platforms & AWS services',
        items: [
          'AWS',
          'Azure',
          'Lambda',
          'SQS',
          'DynamoDB',
          'S3',
          'Step Functions',
          'EventBridge',
          'SageMaker',
          'API Gateway',
        ],
      },
      {
        label: 'Infrastructure & delivery',
        items: [
          'Docker',
          'Jenkins',
          'GitHub Actions',
          'CI/CD',
          'Terraform (basic)',
          'Infrastructure as Code',
          'Linux',
        ],
      },
    ],
  },
  {
    id: 'data',
    label: 'Data & AI',
    caption: 'From data to decisions',
    description:
      'Storage, data processing, and AI integrations across my project and internship work.',
    groups: [
      {
        label: 'Databases',
        items: [
          'MySQL',
          'PostgreSQL',
          'SQLite',
          'NoSQL',
          'MongoDB',
          'DynamoDB',
          'Firebase Firestore',
        ],
      },
      {
        label: 'AI & data work',
        items: [
          'Anthropic Claude',
          'Gemini API',
          'Machine learning',
          'NLP',
          'OCR',
          'Data pipelines',
          'Athena',
          'DataHub',
        ],
      },
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    caption: 'The everyday workflow',
    description:
      'The editors, collaboration tools, and API clients I use to turn ideas into working software.',
    groups: [
      {
        label: 'Development & collaboration',
        items: ['Git', 'VS Code', 'Postman', 'Jira', 'Xcode', 'PyCharm'],
      },
    ],
  },
  {
    id: 'engineering',
    label: 'Engineering',
    caption: 'The thinking behind the code',
    description:
      'Principles that guide how I design, build, debug, and improve software.',
    groups: [
      {
        label: 'Foundations & design',
        items: [
          'Data Structures & Algorithms',
          'Object-Oriented Design',
          'Distributed Systems',
          'System Design',
          'API Development',
        ],
      },
      {
        label: 'Quality & delivery',
        items: [
          'Debugging & Testing',
          'Performance Optimization',
          'Concurrency',
          'Agile / Scrum',
        ],
      },
    ],
  },
];

export const workExperiences = [
  {
    id: 'cox-2026',
    group: 'cox',
    name: 'Cox Communications',
    pos: 'Software Engineer Intern',
    badge: 'Return internship',
    duration: 'May – Aug 2026',
    tenure: '4 months',
    employment: 'Internship',
    location: 'Atlanta, GA · Hybrid',
    icon: '/assets/CoxComms.png',
    animation: 'victory',
    tags: ['Python', 'Anthropic Claude', 'AWS', 'Terraform', 'Jenkins'],
    highlight: {
      value: '~80 sec',
      label: 'Reports for 7 engineering teams',
    },
    bullets: [
      'Engineered an AI-powered JIRA reporting agent using Python and Anthropic Claude, generating sprint and release PPTX reports for 7 engineering teams in ~80 seconds.',
      'Designed a serverless AWS architecture with Lambda, S3, DynamoDB, SageMaker, Step Functions, API Gateway, and SQS for automated data processing and report generation.',
      'Built a PPTX generation pipeline that transformed JIRA data into KPIs, charts, summaries, and release insights across 7 teams.',
      'Automated cloud infrastructure and deployments using Terraform and Jenkins CI/CD.',
      'Executed end-to-end testing across APIs, AWS services, data pipelines, and AI-generated reports to validate workflow reliability and output quality.',
    ],
  },
  {
    id: 'cox-analyst',
    group: 'cox',
    name: 'Cox Communications',
    pos: 'Data Analyst',
    badge: 'Part-time',
    duration: 'Sep 2025 – Jan 2026',
    tenure: '5 months',
    employment: 'Part-time',
    location: 'Atlanta, GA · Hybrid',
    icon: '/assets/CoxComms.png',
    animation: 'clapping',
    tags: [],
    highlight: {
      value: '5 months',
      label: 'Part-time Data Analyst',
    },
    summary:
      'Continued at Cox Communications in a part-time Data Analyst role after the summer 2025 internship.',
    bullets: [],
  },
  {
    id: 'cox-2025',
    group: 'cox',
    name: 'Cox Communications',
    pos: 'Data Analyst Intern',
    duration: 'May – Aug 2025',
    tenure: '4 months',
    employment: 'Internship',
    location: 'Atlanta, GA · Hybrid',
    icon: '/assets/CoxComms.png',
    animation: 'salute',
    tags: [
      'AWS Lambda',
      'SQS',
      'DynamoDB',
      'Step Functions',
      'PostgreSQL',
      'Athena',
    ],
    highlight: {
      value: '99%',
      label: 'Deployment reliability & system availability',
    },
    bullets: [
      'Drove Blue/Green (Canary) deployments for OTA Predictor, enabling safe phased Lambda rollouts with alias-based traffic routing.',
      'Standardized Lambda deployments with version control and multi-region support across Dev/QA.',
      'Configured provisioned and reserved concurrency for predictable performance and isolation.',
      'Built and unit-tested AWS clients for SQS and DynamoDB, strengthening backend data operations.',
      'Validated end-to-end workflows across EventBridge, Step Functions, and CrossHealth, with outputs in S3, Postgres, and Athena.',
      'Enabled multi-region OTA Predictor support, achieving 99% deployment reliability and system availability.',
    ],
  },
  {
    id: 'gsu-events',
    group: 'gsu-events',
    name: 'Georgia State University',
    pos: 'Student Assistant (Event Coordinator)',
    duration: 'Sep 2023 – May 2025',
    tenure: '1 year 9 months',
    employment: 'Part-time',
    location: 'Atlanta, GA · On-site',
    icon: '/assets/gsu.png',
    animation: 'salute',
    tags: ['Event coordination', 'Student records', 'Communication'],
    highlight: {
      value: 'GSU',
      label: 'Commencement & event support',
    },
    bullets: [
      'Assisted with events handled by the Management office, including commencement.',
      'Exhibited professionalism when answering and routing phone calls and responding to emails.',
      'Entered student records into the database.',
    ],
  },
  {
    id: 'gsu-research',
    group: 'gsu-research',
    name: 'Georgia State University College of Arts & Sciences',
    pos: 'Undergraduate Research Assistant',
    duration: 'Oct 2023 – Apr 2025',
    tenure: '1 year 7 months',
    employment: 'Part-time',
    location: 'Atlanta, GA',
    icon: '/assets/gsu.png',
    animation: 'victory',
    tags: ['DataHub', 'Docker', 'Virtual machines', 'Data organization'],
    highlight: {
      value: 'DataHub',
      label: 'Making research datasets accessible',
    },
    bullets: [
      'Built a front-end website connected to DataHub to make datasets available to teachers and researchers.',
      'Created and configured a virtual machine and installed Docker and DataHub.',
      'Identified the minimum feature set needed for the DataHub server.',
      'Collected and organized datasets and stored them in DataHub.',
    ],
  },
];

export const experienceGroups = [
  {
    id: 'cox',
    name: 'Cox Communications',
    note: 'Now Spectrum',
    range: '2025 – 2026',
    icon: '/assets/CoxComms.png',
    journey: ['Internship', 'Part-time', 'Return internship'],
  },
  {
    id: 'gsu-events',
    name: 'Georgia State University',
    note: 'University operations',
    range: '2023 – 2025',
    icon: '/assets/gsu.png',
  },
  {
    id: 'gsu-research',
    name: 'Georgia State University',
    note: 'College of Arts & Sciences',
    range: '2023 – 2025',
    icon: '/assets/gsu.png',
  },
];

export const contactEmail = 'raiyanhaque7@gmail.com';
