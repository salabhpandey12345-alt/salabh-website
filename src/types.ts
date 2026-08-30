export interface SkillItem {
  name: string;
  category: 'languages' | 'dsa' | 'web' | 'tools' | 'ai';
  level: number; // 1-100
  experience: string;
  iconName: string;
  tags: string[];
  description: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  technologies: string[];
  category: string;
  githubUrl: string;
  demoUrl: string;
  stars?: number;
  featured: boolean;
  metrics?: { label: string; value: string }[];
  accentColor: string;
}


export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  currentYear: string;
  cgpa?: string;
  description: string;
  coursework: string[];
  achievements: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  verificationUrl: string;
  skillsCovered: string[];
  category: 'DSA & Algorithms' | 'Python & AI' | 'Web Development' | 'Tools & Version Control';
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  username: string;
}
