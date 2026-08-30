import { SkillItem, ProjectItem, EducationItem, CertificationItem, SocialLink } from '../types';

export const PERSONAL_INFO = {
  name: "Salabh Kumar Pandey",
  nickname: "Salabh",
  role: "Full Stack Developer & Computer Science Student",
  university: "Lovely Professional University (LPU)",
  year: "2nd Year B.Tech CSE (2023 - 2027)",
  location: "Punjab, India",
  email: "pandeysalabh9@gmail.com",
  github: "https://github.com/salabhpandey12345-alt/my_portfolio",
  linkedin: "https://linkedin.com",
  shortBio: "Passionate 2nd-year Computer Science undergraduate dedicated to crafting performant full-stack web applications, mastering algorithmic problem solving (DSA), and exploring practical AI/ML integrations.",
  status: "Open for Summer 2025/2026 Internships & Projects",
  stats: [
    { label: "Python Certification", value: "Infosys" },
    { label: "Academic Standing", value: "2nd Year" },
    { label: "Institution", value: "LPU CSE" }
  ]
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/salabhpandey12345-alt/my_portfolio",
    icon: "Github",
    username: "salabhpandey12345-alt"
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com",
    icon: "Linkedin",
    username: "salabh-kumar-pandey"
  },
  {
    name: "Email",
    url: "mailto:pandeysalabh9@gmail.com",
    icon: "Mail",
    username: "pandeysalabh9@gmail.com"
  }
];

export const SKILLS: SkillItem[] = [
  {
    name: "C++",
    category: "languages",
    level: 90,
    experience: "Primary DSA & OOP Language",
    iconName: "Code2",
    tags: ["STL", "OOPs", "Pointers", "Memory Management", "Competitive Programming"],
    description: "Extensive experience using C++ and Standard Template Library (STL) for writing high-performance data structures and algorithm solutions."
  },
  {
    name: "Python",
    category: "languages",
    level: 92,
    experience: "Certified by Infosys Springboard (Part 1 & 2)",
    iconName: "FileCode",
    tags: ["Infosys Certified", "OOPs", "Data Structures", "Automation", "Flask", "Pandas"],
    description: "Certified in Python Programming Fundamentals (Part 1 & Part 2) by Infosys Springboard. Proficient in OOP, algorithms, backend scripting, exception handling, and data processing."
  },
  {
    name: "C",
    category: "languages",
    level: 85,
    experience: "Systems & Fundamentals",
    iconName: "Cpu",
    tags: ["Pointers", "Structures", "Dynamic Memory", "Low-level Logic"],
    description: "Solid foundational grasp of procedural programming, memory addressing, pointer arithmetic, and core computer science fundamentals."
  },
  {
    name: "DSA (Data Structures & Algorithms)",
    category: "dsa",
    level: 88,
    experience: "Problem Solving & Logic Design",
    iconName: "Binary",
    tags: ["Arrays", "Trees", "Graphs", "Dynamic Programming", "Recursion", "Two Pointers"],
    description: "Deep problem-solving mindset with practice across Trees, Graphs, Sorting, Binary Search, Dynamic Programming, and Space/Time Complexity analysis."
  },
  {
    name: "JavaScript (ES6+)",
    category: "languages",
    level: 85,
    experience: "Modern Web & Async Programming",
    iconName: "FileJson",
    tags: ["ES6+", "Async/Await", "DOM Manipulation", "Promises", "Fetch API"],
    description: "Proficient in modern JavaScript, event loops, closures, asynchronous workflows, and building dynamic single-page web applications."
  },
  {
    name: "HTML5 & CSS3",
    category: "web",
    level: 92,
    experience: "Responsive Layouts & Semantic UI",
    iconName: "Layout",
    tags: ["Semantic HTML", "Flexbox", "CSS Grid", "Responsive Design", "Animations"],
    description: "Crafting pixel-perfect, accessible, and responsive user interfaces with semantic HTML5 elements and modern CSS architecture."
  },
  {
    name: "React.js & Tailwind CSS",
    category: "web",
    level: 84,
    experience: "Component Architecture & UI",
    iconName: "Layers",
    tags: ["React Hooks", "Component Design", "Tailwind CSS", "State Management", "Vite"],
    description: "Building reactive, component-driven client applications with Tailwind utility classes and modern React state hooks."
  },
  {
    name: "Git & GitHub",
    category: "tools",
    level: 86,
    experience: "Version Control & Collaboration",
    iconName: "GitBranch",
    tags: ["Branching", "Pull Requests", "Merge Conflict Resolution", "CI/CD Basics", "Open Source"],
    description: "Managing codebase versions, collaborative branching strategies, commit cleanliness, and open-source contribution flows on GitHub."
  },
  {
    name: "Basic AI & Machine Learning",
    category: "ai",
    level: 78,
    experience: "ML Foundations & API Integrations",
    iconName: "BrainCircuit",
    tags: ["Supervised ML", "NumPy", "Pandas", "Scikit-Learn Basics", "Prompt Engineering", "LLM APIs"],
    description: "Understanding core machine learning principles, data preprocessing, exploratory data analysis, and integrating modern AI APIs into web apps."
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "waterproof-heart-rate-monitor",
    title: "Waterproof Heart Rate Monitoring System",
    tagline: "IoT-enabled waterproof wearable biometric system for real-time cardiac pulse detection, digital signal filtering, and telemetry dashboard.",
    description: "An end-to-end biomedical IoT and embedded software engineering project designed for continuous aquatic and sweat-resistant pulse telemetry. Built with custom embedded C/C++ firmware executing real-time PPG peak-detection and Butterworth bandpass filtering to eliminate motion artifacts during aquatic activities. Connects via Bluetooth Low Energy (BLE) and WiFi/MQTT to a live responsive web dashboard for real-time BPM graph visualization, customizable bradycardia/tachycardia threshold alarms, and historical health session logging.",
    highlights: [
      "Real-time embedded firmware written in C/C++ utilizing digital signal processing (DSP) and peak-detection algorithms",
      "Hermetically sealed IP68 waterproof enclosure engineered for swimmers, divers, and high-intensity athletic environments",
      "Wireless telemetry over Bluetooth Low Energy (BLE) and MQTT WebSockets with sub-85ms latency transmission",
      "Interactive responsive web dashboard featuring live ECG/PPG wave renderers, arrhythmia threshold alerts, and session stats",
      "Power-efficient hardware architecture with deep-sleep cycles achieving 14+ hours of continuous cardiac monitoring"
    ],
    technologies: [
      "C / C++",
      "Embedded Systems",
      "PPG Biometric Sensors",
      "ESP32 Microcontroller",
      "IoT & BLE Telemetry",
      "React & Tailwind CSS",
      "WebSockets & Chart.js",
      "Digital Signal Processing (DSP)"
    ],
    category: "Embedded & Full Stack IoT",
    githubUrl: "https://github.com/salabhpandey12345-alt/my_portfolio",
    demoUrl: "https://heartrate-monitor-iot.dev",
    featured: true,
    accentColor: "from-rose-500 via-red-500 to-cyan-500",
    metrics: [
      { label: "Water Resistance", value: "IP68 Enclosure" },
      { label: "BPM Accuracy", value: "98.4% Verified" },
      { label: "Telemetry Latency", value: "<85ms Real-Time" }
    ]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "Bachelor of Technology (B.Tech) in Computer Science & Engineering",
    institution: "Lovely Professional University (LPU)",
    location: "Phagwara, Punjab, India",
    period: "2023 — 2027",
    currentYear: "2nd Year Undergraduate",
    cgpa: "Consistent High Academic Standing",
    description: "Pursuing rigorous undergraduate coursework in computer science fundamentals, algorithm design, systems programming, and modern software engineering methodologies.",
    coursework: [
      "Data Structures & Algorithms (C++)",
      "Object-Oriented Programming (OOP)",
      "Database Management Systems (DBMS)",
      "Operating Systems & Architecture",
      "Discrete Mathematical Structures",
      "Web Technologies & Scripting",
      "Software Engineering Principles"
    ],
    achievements: [
      "Active participant in University coding contests and technical workshops",
      "Consistently solving daily LeetCode and GeeksforGeeks algorithmic challenges",
      "Collaborator in student developer study circles for Data Structures and Web Development"
    ]
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: "infosys-python-part-1",
    title: "Programming Fundamentals using Python - Part 1",
    issuer: "Infosys Springboard",
    date: "July 28, 2026",
    credentialId: "INFOSYS-PY-PART-1",
    verificationUrl: "https://verify.onwingspan.com",
    skillsCovered: [
      "Python Core Syntax & Primitives",
      "Control Flow & Conditional Logic",
      "Functions, Scopes & Modular Design",
      "Loops, Iterations & Algorithm Basics",
      "Problem Solving with Python"
    ],
    category: "Python & AI"
  },
  {
    id: "infosys-python-part-2",
    title: "Programming Fundamentals using Python - Part 2",
    issuer: "Infosys Springboard",
    date: "July 28, 2026",
    credentialId: "INFOSYS-PY-PART-2",
    verificationUrl: "https://verify.onwingspan.com",
    skillsCovered: [
      "Object-Oriented Programming (OOP)",
      "Python Data Structures (Lists, Dicts, Sets, Tuples)",
      "Exception Handling & Robust Code Design",
      "File Handling & I/O Stream Processing",
      "Advanced Functions & Recursion in Python"
    ],
    category: "Python & AI"
  }
];

