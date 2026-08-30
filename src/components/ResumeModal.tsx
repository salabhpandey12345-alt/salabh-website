import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FileText, 
  X, 
  Download, 
  Printer, 
  ExternalLink, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  CheckCircle2, 
  Award,
  GraduationCap,
  Code2,
  Copy
} from 'lucide-react';
import { PERSONAL_INFO, SKILLS, PROJECTS, EDUCATION, CERTIFICATIONS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const copyPlainTextResume = () => {
    const resumeText = `
SALABH KUMAR PANDEY
Full Stack Developer & Computer Science Student (2nd Year B.Tech CSE @ LPU)
Email: ${PERSONAL_INFO.email} | Location: ${PERSONAL_INFO.location}
GitHub: ${PERSONAL_INFO.github} | LinkedIn: ${PERSONAL_INFO.linkedin}

EDUCATION
- B.Tech in Computer Science & Engineering | Lovely Professional University (LPU), Punjab (2023 - 2027)
  Coursework: Data Structures & Algorithms, OOPs, DBMS, OS, Discrete Mathematics, Web Technologies

TECHNICAL SKILLS
- Languages: Python (Infosys Springboard Certified), C++, C, JavaScript (ES6+), HTML5, CSS3
- Core Foundations: Data Structures & Algorithms, Big-O Analysis, OOPs
- Embedded & IoT: C/C++ Firmware, DSP Digital Signal Processing, PPG Biometric Sensors, BLE / MQTT
- Web & Frameworks: React, Tailwind CSS, Node.js, Express, REST APIs
- Developer Tools: Git, GitHub, VS Code, Linux CLI

CERTIFICATIONS
- Programming Fundamentals using Python - Part 1 (Infosys Springboard | July 28, 2026)
- Programming Fundamentals using Python - Part 2 (Infosys Springboard | July 28, 2026)

FEATURED PROJECT
- Waterproof Heart Rate Monitoring System
  * IoT-enabled waterproof biometric wearable for real-time pulse detection & telemetry dashboard.
  * Low-level C/C++ firmware with Butterworth bandpass filtering for aquatic motion artifact suppression.
  * IP68-sealed hardware enclosure with sub-85ms BLE/WiFi MQTT telemetry streaming to live web dashboard.
  * Built with C/C++, Embedded ESP32, React, Tailwind CSS, WebSockets, and Signal Processing (DSP).
    `.trim();

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="bg-[#0b0f19] border border-slate-700/80 rounded-2xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden my-auto"
        >
          {/* Modal Top Bar */}
          <div className="px-6 py-4 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2.5">
              <FileText className="w-5 h-5 text-cyan-400" />
              <h3 className="text-base font-bold text-white">
                Resume Preview — Salabh Kumar Pandey
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={copyPlainTextResume}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-medium transition-colors"
                title="Copy markdown / plain text"
              >
                {copied ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Text</span>
                  </>
                )}
              </button>

              <button
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-colors"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print / Save PDF</span>
              </button>

              <button
                onClick={onClose}
                className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors ml-1"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable / Rendered Resume Body */}
          <div className="p-6 sm:p-10 overflow-y-auto font-sans text-slate-200 text-sm space-y-6 bg-[#080c16]">
            
            {/* Resume Header */}
            <div className="border-b border-slate-800 pb-6 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="text-cyan-400 font-medium text-sm mt-0.5">
                  {PERSONAL_INFO.role}
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  2nd Year B.Tech CSE • {PERSONAL_INFO.university}
                </p>
              </div>

              <div className="flex flex-col sm:items-end text-xs text-slate-300 space-y-1 font-mono">
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-cyan-300 hover:underline flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  {PERSONAL_INFO.email}
                </a>
                <span className="flex items-center gap-1 text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  {PERSONAL_INFO.location}
                </span>
                <div className="flex items-center gap-3 pt-1">
                  <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white flex items-center gap-1">
                    <Github className="w-3.5 h-3.5" /> GitHub
                  </a>
                  <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white flex items-center gap-1">
                    <Linkedin className="w-3.5 h-3.5 text-blue-400" /> LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono mb-2 flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                <span>Education</span>
              </h2>
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                  <h3 className="font-bold text-white text-sm">
                    {EDUCATION[0].institution}
                  </h3>
                  <span className="text-xs font-mono text-slate-400">{EDUCATION[0].period} (2nd Year)</span>
                </div>
                <div className="text-xs text-cyan-300 mt-0.5">{EDUCATION[0].degree}</div>
                <div className="text-xs text-slate-400 mt-2">
                  <strong className="text-slate-300">Relevant Coursework:</strong> {EDUCATION[0].coursework.join(', ')}
                </div>
              </div>
            </div>

            {/* Technical Skills */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono mb-2 flex items-center gap-2">
                <Code2 className="w-4 h-4" />
                <span>Technical Skills</span>
              </h2>
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2 text-xs">
                <div>
                  <strong className="text-slate-200">Programming Languages:</strong>{' '}
                  <span className="text-slate-300">C++, Python, C, JavaScript (ES6+), HTML5, CSS3</span>
                </div>
                <div>
                  <strong className="text-slate-200">Data Structures & Algorithms:</strong>{' '}
                  <span className="text-slate-300">Arrays, Strings, Linked Lists, Trees, Graphs, DP, Recursion, Time/Space Complexity</span>
                </div>
                <div>
                  <strong className="text-slate-200">Web & Frameworks:</strong>{' '}
                  <span className="text-slate-300">React, Tailwind CSS, Node.js, Express, REST APIs, JSON</span>
                </div>
                <div>
                  <strong className="text-slate-200">Tools & Platforms:</strong>{' '}
                  <span className="text-slate-300">Git, GitHub, VS Code, Linux CLI, Vite</span>
                </div>
                <div>
                  <strong className="text-slate-200">AI & Machine Learning:</strong>{' '}
                  <span className="text-slate-300">Basic AI/ML Concepts, NumPy, Pandas, API Integration</span>
                </div>
              </div>
            </div>

            {/* Projects */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono mb-2 flex items-center gap-2">
                <Award className="w-4 h-4" />
                <span>Featured Project</span>
              </h2>
              <div className="space-y-3">
                {PROJECTS.map((proj) => (
                  <div key={proj.id} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                      <h3 className="font-bold text-white text-sm">
                        {proj.title}
                      </h3>
                      <span className="text-xs font-mono text-cyan-400">{proj.category}</span>
                    </div>
                    <p className="text-xs text-slate-300 mt-1">
                      {proj.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {proj.technologies.map((tech) => (
                        <span key={tech} className="px-2 py-0.5 rounded bg-slate-800 text-[10px] font-mono text-slate-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Python Certifications */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Verified Certifications</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {CERTIFICATIONS.map((cert) => (
                  <div key={cert.id} className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 flex justify-between items-start">
                    <div>
                      <div className="font-bold text-slate-100">{cert.title}</div>
                      <div className="text-[11px] text-cyan-400 font-mono mt-0.5">{cert.issuer} • {cert.date}</div>
                      <div className="text-[10px] text-slate-400 mt-1">Verified on Wingspan (Infosys Limited)</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
