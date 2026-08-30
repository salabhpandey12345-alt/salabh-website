import React from 'react';
import { 
  Code2, 
  Heart, 
  Github, 
  Linkedin, 
  Mail, 
  ArrowUp, 
  GraduationCap,
  Sparkles 
} from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
  onOpenTerminal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume, onOpenTerminal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="portfolio-footer" className="border-t border-slate-800/80 bg-[#060913] pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800/60">
          
          {/* Brand and Summary */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2 text-white font-mono text-base font-bold">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Code2 className="w-4 h-4" />
              </div>
              <span>Salabh K Pandey</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Portfolio of <strong className="text-slate-300">Salabh Kumar Pandey</strong>. 2nd Year Computer Science student at Lovely Professional University (LPU), passionate about software engineering, Data Structures & Algorithms, and modern web applications.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[11px] font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Summer 2025/2026 Internships</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
              Sections & Resources
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a href="#about" className="hover:text-cyan-300 transition-colors">About Me</a>
              <a href="#skills" className="hover:text-cyan-300 transition-colors">Skills & DSA</a>
              <a href="#projects" className="hover:text-cyan-300 transition-colors">Heart Rate System</a>
              <a href="#education" className="hover:text-cyan-300 transition-colors">Education @ LPU</a>
              <a href="#certifications" className="hover:text-cyan-300 transition-colors">Python Certificates</a>
              <a href="#contact" className="hover:text-cyan-300 transition-colors">Contact Form</a>
              <button 
                onClick={onOpenResume} 
                className="text-left text-cyan-400 hover:text-cyan-300 transition-colors font-medium cursor-pointer"
              >
                Resume Preview
              </button>
              <button 
                onClick={onOpenTerminal} 
                className="text-left text-emerald-400 hover:text-emerald-300 transition-colors font-mono cursor-pointer"
              >
                Developer CLI
              </button>
            </div>
          </div>

          {/* Connect & Socials */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
              Direct Contact
            </h4>
            <p className="text-xs text-slate-400">
              Feel free to reach out via email or LinkedIn for opportunities or discussions.
            </p>
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500/40 flex items-center justify-center text-slate-300 hover:text-blue-400 transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 flex items-center justify-center text-slate-300 hover:text-cyan-400 transition-colors"
                title="Send Direct Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-[11px] font-mono">
          <div>
            © {new Date().getFullYear()} Salabh Kumar Pandey. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span>Crafted with React, Tailwind CSS & Framer Motion</span>
            <button
              onClick={scrollToTop}
              id="back-to-top-btn"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-cyan-300 transition-colors flex items-center gap-1 cursor-pointer"
              title="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
