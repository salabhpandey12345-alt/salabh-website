import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, Sparkles, CornerDownLeft } from 'lucide-react';
import { PERSONAL_INFO, SKILLS, PROJECTS, EDUCATION, CERTIFICATIONS } from '../data/portfolioData';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandHistory {
  command: string;
  output: React.ReactNode;
}

export const TerminalModal: React.FC<TerminalModalProps> = ({ isOpen, onClose }) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      command: 'welcome',
      output: (
        <div className="space-y-1 text-slate-300">
          <p className="text-emerald-400 font-bold">Salabh.dev Interactive Shell [Version 2.4.0]</p>
          <p>Welcome! Type <span className="text-cyan-300 font-bold">help</span> to list available CLI commands.</p>
        </div>
      )
    }
  ]);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    let output: React.ReactNode = null;

    switch (trimmed) {
      case 'help':
        output = (
          <div className="space-y-1 text-slate-300">
            <p className="text-cyan-300 font-bold">Available Commands:</p>
            <p><span className="text-emerald-400 font-mono w-28 inline-block">about</span> : Display developer background & bio</p>
            <p><span className="text-emerald-400 font-mono w-28 inline-block">skills</span> : List all technical skills & proficiency</p>
            <p><span className="text-emerald-400 font-mono w-28 inline-block">projects</span> : View Waterproof Heart Rate Monitoring System</p>
            <p><span className="text-emerald-400 font-mono w-28 inline-block">education</span> : Show B.Tech CSE details at LPU</p>
            <p><span className="text-emerald-400 font-mono w-28 inline-block">certs</span> : Display verified Python certifications</p>
            <p><span className="text-emerald-400 font-mono w-28 inline-block">contact</span> : Get email, GitHub, and LinkedIn info</p>
            <p><span className="text-emerald-400 font-mono w-28 inline-block">hire</span> : Quick message & status for recruiters</p>
            <p><span className="text-emerald-400 font-mono w-28 inline-block">clear</span> : Clear terminal screen</p>
            <p><span className="text-emerald-400 font-mono w-28 inline-block">exit</span> : Close the terminal</p>
          </div>
        );
        break;

      case 'about':
      case 'whoami':
        output = (
          <div className="space-y-1.5 text-slate-300">
            <p className="text-white font-bold">{PERSONAL_INFO.name} ({PERSONAL_INFO.role})</p>
            <p>🎓 {PERSONAL_INFO.year} at {PERSONAL_INFO.university}</p>
            <p>📍 Location: {PERSONAL_INFO.location}</p>
            <p className="text-slate-400">{PERSONAL_INFO.shortBio}</p>
          </div>
        );
        break;

      case 'skills':
        output = (
          <div className="space-y-2 text-slate-300">
            <p className="text-cyan-300 font-bold">Technical Skills Matrix:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs">
              {SKILLS.map(s => (
                <div key={s.name} className="flex justify-between border-b border-slate-800/80 py-0.5">
                  <span className="text-emerald-300">{s.name}</span>
                  <span className="text-slate-400">{s.experience} ({s.level}%)</span>
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case 'projects':
        output = (
          <div className="space-y-3 text-slate-300">
            <p className="text-cyan-300 font-bold">Featured Projects:</p>
            {PROJECTS.map(p => (
              <div key={p.id} className="p-2 rounded bg-slate-900/80 border border-slate-800 text-xs">
                <div className="font-bold text-white flex justify-between">
                  <span>{p.title}</span>
                  <span className="text-cyan-400">[{p.category}]</span>
                </div>
                <p className="text-slate-400 mt-1">{p.tagline}</p>
                <div className="text-[11px] text-emerald-400 mt-1">Tech: {p.technologies.join(', ')}</div>
              </div>
            ))}
          </div>
        );
        break;

      case 'education':
        output = (
          <div className="space-y-1.5 text-slate-300">
            <p className="text-emerald-400 font-bold">{EDUCATION[0].degree}</p>
            <p className="text-cyan-300">{EDUCATION[0].institution} • {EDUCATION[0].location}</p>
            <p className="text-slate-400">Duration: {EDUCATION[0].period} ({EDUCATION[0].currentYear})</p>
            <p className="text-xs text-slate-400">Core Coursework: {EDUCATION[0].coursework.join(', ')}</p>
          </div>
        );
        break;

      case 'certs':
      case 'certifications':
        output = (
          <div className="space-y-2 text-slate-300 text-xs">
            <p className="text-cyan-300 font-bold">Verified Certifications (Infosys Springboard):</p>
            {CERTIFICATIONS.map(c => (
              <div key={c.id} className="p-2 rounded bg-slate-900 border border-slate-800 space-y-1">
                <div className="flex justify-between items-center">
                  <span className="text-white font-bold">{c.title}</span>
                  <span className="text-emerald-400 font-mono">[{c.date}]</span>
                </div>
                <div className="text-slate-400 text-[11px]">{c.issuer} • Awarded to Salabh Kumar Pandey</div>
                <div className="text-cyan-400 text-[10px]">Verification: {c.verificationUrl}</div>
              </div>
            ))}
          </div>
        );
        break;

      case 'contact':
        output = (
          <div className="space-y-1.5 text-slate-300 text-xs">
            <p className="text-cyan-300 font-bold">Direct Channels:</p>
            <p>📧 Email: <a href={`mailto:${PERSONAL_INFO.email}`} className="text-emerald-300 underline">{PERSONAL_INFO.email}</a></p>
            <p>🌐 GitHub: <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-emerald-300 underline">{PERSONAL_INFO.github}</a></p>
            <p>💼 LinkedIn: <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-emerald-300 underline">{PERSONAL_INFO.linkedin}</a></p>
          </div>
        );
        break;

      case 'hire':
      case 'status':
        output = (
          <div className="p-3 rounded-lg bg-emerald-950/50 border border-emerald-500/40 text-emerald-300 space-y-1 text-xs">
            <p className="font-bold text-white">✨ Available for Internships & Projects!</p>
            <p>Ready to join innovative engineering teams for Summer 2025/2026. Reach me at {PERSONAL_INFO.email}</p>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        return;

      case 'exit':
      case 'quit':
        onClose();
        return;

      case '':
        output = null;
        break;

      default:
        output = (
          <p className="text-rose-400 text-xs">
            command not found: "{cmd}". Type <span className="text-cyan-300 font-bold">help</span> for a list of available commands.
          </p>
        );
    }

    setHistory(prev => [...prev, { command: cmd, output }]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
      setInputVal('');
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="bg-[#050811] border border-slate-700/90 rounded-2xl w-full max-w-3xl h-[520px] flex flex-col shadow-2xl overflow-hidden font-mono"
        >
          {/* Terminal Titlebar */}
          <div className="px-4 py-3 bg-[#0a0f1d] border-b border-slate-800 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2">
              <button onClick={onClose} className="w-3 h-3 rounded-full bg-rose-500 hover:opacity-80 transition-opacity" />
              <div className="w-3 h-3 rounded-full bg-amber-500" />
              <div className="w-3 h-3 rounded-full bg-emerald-500" />
              <span className="text-xs text-slate-400 ml-2 font-mono flex items-center gap-1.5">
                <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
                salabh@lpu-cse-node: ~ (zsh)
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setHistory([])}
                className="px-2 py-0.5 text-[11px] rounded bg-slate-800 text-slate-400 hover:text-white"
              >
                Clear
              </button>
              <button
                onClick={onClose}
                className="p-1 rounded text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Terminal Output Area */}
          <div 
            className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4 text-xs leading-relaxed text-slate-300"
            onClick={() => inputRef.current?.focus()}
          >
            {history.map((item, idx) => (
              <div key={idx} className="space-y-1.5">
                {item.command && (
                  <div className="flex items-center gap-2 text-cyan-300">
                    <span className="text-emerald-400 font-bold">➜</span>
                    <span className="text-slate-400 font-semibold">salabh-pandey</span>
                    <span className="text-cyan-400 font-bold">$ {item.command}</span>
                  </div>
                )}
                {item.output && <div className="pl-4">{item.output}</div>}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Command Prompt Line */}
          <div className="p-3 sm:px-6 bg-[#070b16] border-t border-slate-800/80 flex items-center gap-2 shrink-0">
            <span className="text-emerald-400 font-bold text-xs">➜</span>
            <span className="text-cyan-400 font-bold text-xs">$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="type 'help', 'skills', 'projects', 'contact'..."
              className="flex-1 bg-transparent text-white font-mono text-xs focus:outline-none placeholder:text-slate-600"
              autoFocus
            />
            <CornerDownLeft className="w-3.5 h-3.5 text-slate-500" />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
