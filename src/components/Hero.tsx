import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Download, 
  Github, 
  Linkedin, 
  Mail, 
  CheckCircle2, 
  Copy, 
  Sparkles, 
  Code, 
  Terminal as TerminalIcon,
  GraduationCap,
  MapPin,
  ExternalLink,
  Flame
} from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
  onOpenTerminal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenTerminal }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeTab, setActiveTab] = useState<'profile' | 'stats' | 'stack'>('profile');

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[92vh] pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden bg-grid-pattern"
    >
      {/* Ambient background glow accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[300px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[280px] bg-indigo-500/10 rounded-full blur-[110px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Introduction & Call to Action */}
          <motion.div 
            className="lg:col-span-7 flex flex-col items-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Status Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 backdrop-blur-md shadow-sm mb-6"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-slate-300">
                2nd Year B.Tech CSE @ LPU • Open to Internships
              </span>
            </motion.div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] mb-4">
              Hi, I’m{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
                {PERSONAL_INFO.name}
              </span>
            </h1>

            {/* Subtitle */}
            <div className="flex items-center gap-2 mb-5">
              <span className="text-lg sm:text-2xl font-medium text-cyan-300/90 font-mono">
                &gt; {PERSONAL_INFO.role}
              </span>
            </div>

            {/* Short Introduction */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
              Passionate about <span className="text-white font-medium">software development</span>,{' '}
              <span className="text-cyan-300 font-medium">algorithmic problem-solving (DSA)</span>,{' '}
              and building fast, practical web applications. Dedicated to learning new technologies, writing clean code, and engineering real-world software solutions.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto mb-9">
              <a
                id="hero-view-projects-btn"
                href="#projects"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-400 hover:from-cyan-400 hover:to-emerald-300 text-slate-950 font-bold text-sm sm:text-base transition-all duration-200 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                id="hero-contact-me-btn"
                href="#contact"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 text-white font-semibold text-sm sm:text-base transition-all duration-200 hover:border-slate-600 hover:-translate-y-0.5"
              >
                <span>Contact Me</span>
                <Mail className="w-4 h-4 text-cyan-400" />
              </a>

              <button
                id="hero-resume-btn"
                onClick={onOpenResume}
                className="flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 text-slate-300 hover:text-white text-sm font-medium transition-all duration-200 hover:-translate-y-0.5"
                title="View interactive resume"
              >
                <Download className="w-4 h-4 text-emerald-400" />
                <span>Resume</span>
              </button>
            </div>

            {/* Social & Contact Strip */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 pt-3 border-t border-slate-800/80 w-full">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold font-mono">
                Connect:
              </span>

              <div className="flex items-center gap-2">
                <a
                  id="hero-github-link"
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/70 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white text-xs transition-colors"
                >
                  <Github className="w-3.5 h-3.5 text-slate-300" />
                  <span>GitHub</span>
                </a>

                <a
                  id="hero-linkedin-link"
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/70 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white text-xs transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                  <span>LinkedIn</span>
                </a>

                <button
                  id="hero-copy-email-btn"
                  onClick={copyEmail}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/70 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white text-xs transition-colors"
                  title="Copy email address"
                >
                  {copiedEmail ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-medium">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{PERSONAL_INFO.email}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Developer Card / Live Terminal Preview */}
          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative rounded-2xl glass-panel border border-slate-700/60 shadow-2xl overflow-hidden group">
              {/* Window Header */}
              <div className="px-4 py-3 bg-[#0c1222]/90 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80 border border-rose-600/50" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80 border border-amber-600/50" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-600/50" />
                  <span className="text-xs text-slate-400 font-mono ml-2">salabh.config.ts</span>
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-1 bg-slate-900/80 p-0.5 rounded-lg border border-slate-800 text-[11px] font-mono">
                  <button
                    onClick={() => setActiveTab('profile')}
                    className={`px-2 py-0.5 rounded transition-colors ${
                      activeTab === 'profile' ? 'bg-cyan-950 text-cyan-300 font-semibold' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Profile
                  </button>
                  <button
                    onClick={() => setActiveTab('stack')}
                    className={`px-2 py-0.5 rounded transition-colors ${
                      activeTab === 'stack' ? 'bg-cyan-950 text-cyan-300 font-semibold' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Stack
                  </button>
                  <button
                    onClick={() => setActiveTab('stats')}
                    className={`px-2 py-0.5 rounded transition-colors ${
                      activeTab === 'stats' ? 'bg-cyan-950 text-cyan-300 font-semibold' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Metrics
                  </button>
                </div>
              </div>

              {/* Code Content Area */}
              <div className="p-5 font-mono text-xs leading-relaxed overflow-x-auto min-h-[290px] bg-[#070b14]/90 text-slate-300">
                {activeTab === 'profile' && (
                  <div className="space-y-1.5">
                    <p className="text-slate-400">// Salabh Kumar Pandey - Developer Snapshot</p>
                    <p>
                      <span className="text-purple-400">const</span>{' '}
                      <span className="text-cyan-300">developer</span> = {'{'}
                    </p>
                    <p className="pl-4">
                      <span className="text-slate-400">name:</span>{' '}
                      <span className="text-emerald-300">"Salabh Kumar Pandey"</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-slate-400">education:</span>{' '}
                      <span className="text-emerald-300">"B.Tech CSE, 2nd Year"</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-slate-400">university:</span>{' '}
                      <span className="text-emerald-300">"Lovely Professional University (LPU)"</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-slate-400">role:</span>{' '}
                      <span className="text-emerald-300">"Full Stack Developer"</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-slate-400">primaryPassions:</span> [
                    </p>
                    <p className="pl-8 text-amber-300">
                      "Data Structures & Algorithms",
                    </p>
                    <p className="pl-8 text-amber-300">
                      "Full Stack Web Architecture",
                    </p>
                    <p className="pl-8 text-amber-300">
                      "Machine Learning & AI Integration"
                    </p>
                    <p className="pl-4">],</p>
                    <p className="pl-4">
                      <span className="text-slate-400">status:</span>{' '}
                      <span className="text-emerald-400">"Ready for Internships & Projects"</span>
                    </p>
                    <p>{'};'}</p>
                  </div>
                )}

                {activeTab === 'stack' && (
                  <div className="space-y-1.5">
                    <p className="text-slate-400">// Core Technologies & Tooling</p>
                    <p>
                      <span className="text-purple-400">export const</span>{' '}
                      <span className="text-cyan-300">coreTechStack</span> = {'{'}
                    </p>
                    <p className="pl-4">
                      <span className="text-slate-400">languages:</span> [
                      <span className="text-emerald-300">"C++"</span>,{' '}
                      <span className="text-emerald-300">"Python"</span>,{' '}
                      <span className="text-emerald-300">"C"</span>,{' '}
                      <span className="text-emerald-300">"JavaScript (ES6+)"</span>],
                    </p>
                    <p className="pl-4">
                      <span className="text-slate-400">dsa:</span> [
                      <span className="text-emerald-300">"Trees & Graphs"</span>,{' '}
                      <span className="text-emerald-300">"DP"</span>,{' '}
                      <span className="text-emerald-300">"Complexity Analysis"</span>],
                    </p>
                    <p className="pl-4">
                      <span className="text-slate-400">webFrontend:</span> [
                      <span className="text-emerald-300">"HTML5"</span>,{' '}
                      <span className="text-emerald-300">"CSS3"</span>,{' '}
                      <span className="text-emerald-300">"React"</span>,{' '}
                      <span className="text-emerald-300">"Tailwind"</span>],
                    </p>
                    <p className="pl-4">
                      <span className="text-slate-400">toolsAndVCS:</span> [
                      <span className="text-emerald-300">"Git"</span>,{' '}
                      <span className="text-emerald-300">"GitHub"</span>,{' '}
                      <span className="text-emerald-300">"Linux"</span>,{' '}
                      <span className="text-emerald-300">"VS Code"</span>],
                    </p>
                    <p className="pl-4">
                      <span className="text-slate-400">aiAndData:</span> [
                      <span className="text-emerald-300">"Basic AI/ML"</span>,{' '}
                      <span className="text-emerald-300">"NumPy"</span>,{' '}
                      <span className="text-emerald-300">"Pandas"</span>]
                    </p>
                    <p>{'};'}</p>
                  </div>
                )}

                {activeTab === 'stats' && (
                  <div className="space-y-3 py-1">
                    <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                      <span className="text-slate-300">Python Certification:</span>
                      <span className="text-cyan-300 font-bold">Infosys Springboard (Part 1 & 2)</span>
                    </div>
                    <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                      <span className="text-slate-300">Academic Standing:</span>
                      <span className="text-emerald-400 font-bold">2nd Year B.Tech CSE (LPU)</span>
                    </div>
                    <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                      <span className="text-slate-300">Focus Areas:</span>
                      <span className="text-indigo-300 font-bold">Full Stack & Embedded IoT</span>
                    </div>
                    <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                      <span className="text-slate-300">Collaboration:</span>
                      <span className="text-amber-300 font-bold">Git & GitHub Verified</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Card Footer */}
              <div className="px-4 py-2.5 bg-[#090d16] border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span className="flex items-center gap-1 text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  Ready to compile & deploy
                </span>
                <button
                  onClick={onOpenTerminal}
                  className="text-cyan-400 hover:text-cyan-300 hover:underline flex items-center gap-1"
                >
                  <TerminalIcon className="w-3 h-3" />
                  Try interactive CLI
                </button>
              </div>
            </div>

            {/* Quick Metrics Bar below card */}
            <div className="grid grid-cols-3 gap-3 mt-4">
              {PERSONAL_INFO.stats.slice(0, 3).map((stat, idx) => (
                <div 
                  key={idx}
                  className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 text-center backdrop-blur-sm"
                >
                  <div className="text-lg sm:text-xl font-bold font-mono text-cyan-400">{stat.value}</div>
                  <div className="text-[11px] text-slate-400 font-medium leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
