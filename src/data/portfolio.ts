export type Link = {
  label: string
  href: string
}

export type Hero = {
  name: string
  role: string
  summary: string
  education: string
}

export type Project = {
  title: string
  description: string
  stack: string[]
  contributions: string[]
  links: Link[]
}

export type Experience = {
  organization: string
  role: string
  location: string
  dates: string
  tools: string[]
  bullets: string[]
}

export type SkillGroup = {
  title: string
  skills: string[]
}

export type Contact = {
  email: string
  linkedin: string
  github: string
  resumeUrl: string | null
}

export const hero: Hero = {
  name: 'Adit Singh',
  role: 'Software engineering intern candidate',
  summary:
    'I build backend systems, real-time data infrastructure, and applied ML tools where latency and correctness matter.',
  education:
    'Computer Science Honors and Mathematics at UW-Madison. Expected May 2028. 3.97 GPA.',
}

export const contact: Contact = {
  email: 'aditksingh@gmail.com',
  linkedin: 'https://www.linkedin.com/in/adit-singh-b5188b273/',
  github: 'https://github.com/AditSingh10',
  resumeUrl: null,
}

export const projects: Project[] = [
  {
    title: 'AlphaStream',
    description:
      'Real-time market data infrastructure for equity ticks from Polygon.io and FRED, with normalized PostgreSQL storage and Kafka streams for downstream trading and backtesting.',
    stack: [
      'Python',
      'C++',
      'SQL',
      'PostgreSQL',
      'Apache Kafka',
      'Pandas',
      'NumPy',
    ],
    contributions: [
      'Built a pipeline processing 2M+ daily equity ticks with normalized PostgreSQL schemas, idempotent upserts, and schema versioning.',
      'Developed a C++ order book reconstructor for live market events at microsecond granularity, piping OHLCV snapshots through Kafka.',
    ],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/AditSingh10/AlphaStream',
      },
    ],
  },
  {
    title: 'Live Blockchain Transaction Risk Scorer',
    description:
      'Fraud detection dashboard for streaming Bitcoin transaction risk scoring using GNN inference over transaction subgraphs.',
    stack: [
      'Python',
      'PyTorch Geometric',
      'FastAPI',
      'Apache Kafka',
      'React',
      'WebSockets',
      'Graph Neural Networks',
    ],
    contributions: [
      'Built a horizontally scalable GNN inference pipeline on Kafka and streamed risk scores to a React dashboard with FastAPI and WebSockets.',
      'Used 2-hop subgraph inference over the Elliptic dataset, with the project reporting sub-270ms latency and 0.94 weighted F1.',
    ],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/AditSingh10/Blockchain-Transaction-Risk-Scorer',
      },
    ],
  },
  {
    title: 'Qualcomm Edge AI Hackathon',
    description:
      'Offline edge AI system for real-time denoising and transcription of emergency radio communications.',
    stack: ['Python', 'FastAPI', 'React/TypeScript', 'ONNX'],
    contributions: [
      'Reduced model latency from 1200ms to 170ms with NPU-accelerated ONNX Runtime deployment and quantization.',
      'Demoed to Qualcomm engineers and placed second across 200+ competing teams.',
    ],
    links: [],
  },
  {
    title: 'Nike Industry Project',
    description:
      'Adaptive recommendation and fit analytics system designed with a Nike PM to reduce online retail return rates.',
    stack: ['Python', 'React/TypeScript', 'FastAPI', 'Machine Learning'],
    contributions: [
      'Led a 6-person engineering team over 12 weeks while coordinating product direction with a Nike PM.',
      'Built recommendation and fit analytics workflows; the resume reports a 25% return-rate reduction in trials.',
    ],
    links: [],
  },
]

export const experiences: Experience[] = [
  {
    organization: 'Cisco',
    role: 'Software Engineer Intern',
    location: 'San Jose, CA',
    dates: 'May 2026 - Present',
    tools: ['Go', 'Zap', 'Cisco Intersight'],
    bullets: [
      'Developed a Go testing framework for Cisco Intersight notification alerts, enabling automated validation for email notifications serving 860+ enterprise customers.',
      'Refactored production logging to structured Zap fields, reducing log volume by 68% and preventing concurrent goroutine resource leaks.',
      'Reduced peak backend service memory usage by 20%.',
    ],
  },
  {
    organization: 'University of Wisconsin - Madison',
    role: 'Machine Learning Researcher',
    location: 'Madison, WI',
    dates: 'September 2025 - Present',
    tools: ['Transformers', 'Time-series classification', 'FPGA deployment'],
    bullets: [
      'Designed a transformer for quantum bit time-series classification, reducing error rate by 32% over deep learning baselines.',
      'Engineered a compact variant with 98% fewer parameters and 45% less FPGA utilization than larger baselines.',
      'Preparing Attention for Accurate and Fast Superconducting Qubit Readout for HPCA 2027.',
    ],
  },
  {
    organization: 'Cisco',
    role: 'Software Engineer Intern',
    location: 'San Jose, CA',
    dates: 'May 2025 - July 2025',
    tools: [
      'Spring Boot',
      'Kafka',
      'Docker',
      'Kubernetes',
      'Jenkins',
      'Splunk',
    ],
    bullets: [
      'Redesigned a legacy monolith into Spring Boot microservices, scaling log-processing throughput to 5B+ logs per day for a platform used by 200+ telecom customers.',
      'Reduced log ingestion latency by 35% with concurrent inputs, multithreading, and ring buffers while streaming 200k+ events per second to Kafka.',
      'Addressed 30+ CVEs and automated deployments with Docker, Kubernetes, and Jenkins, reducing release times by 40%.',
    ],
  },
]

export const skillGroups: SkillGroup[] = [
  {
    title: 'Programming Languages',
    skills: ['Python', 'Java', 'Go', 'C/C++', 'SQL/Postgres', 'JavaScript', 'R'],
  },
  {
    title: 'Frameworks',
    skills: ['FastAPI', 'Flask', 'Spring Boot', 'Node.js', 'React', 'Next.js'],
  },
  {
    title: 'Systems and Cloud',
    skills: [
      'Git',
      'Bash/Shell',
      'Linux',
      'AWS',
      'GCP',
      'Kafka',
      'Spark',
      'Redis',
      'Docker',
      'Kubernetes',
      'Jenkins CI/CD',
    ],
  },
  {
    title: 'Libraries',
    skills: ['PyTorch', 'TensorFlow', 'scikit-learn', 'pandas', 'NumPy'],
  },
]

export const about =
  'I am a Computer Science Honors and Mathematics student at UW-Madison, graduating in May 2028. My work has mostly been in backend systems, real-time data pipelines, and ML infrastructure: Go services at Cisco, quantum readout research, and projects that connect model inference to practical dashboards. I like work where correctness, latency, and clear interfaces matter.'
