import React from 'react';
import { motion } from 'motion/react';
import { 
  Code2, 
  BrainCircuit, 
  Rocket, 
  BookOpen, 
  GraduationCap, 
  Sparkles, 
  CheckCircle2,
  Terminal,
  Cpu,
  Layers,
  ArrowRight
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: Code2,
      title: "Software Development",
      description: "Dedicated to architecting clean, maintainable, and responsive web applications from front to back using modern frameworks and best coding practices.",
      color: "from-cyan-500/20 to-blue-500/10",
      border: "border-cyan-500/30",
      iconColor: "text-cyan-400"
    },
    {
      icon: BrainCircuit,
      title: "Problem Solving & DSA",
      description: "Regularly practicing Data Structures & Algorithms in C++ and Python, focusing on time-space optimization, graph traversals, and dynamic programming.",
      color: "from-emerald-500/20 to-teal-500/10",
      border: "border-emerald-500/30",
      iconColor: "text-emerald-400"
    },
    {
      icon: BookOpen,
      title: "Continuous Learning",
      description: "Consistently expanding technical horizons by learning new stacks, exploring artificial intelligence/machine learning basics, and adopting emerging developer tools.",
      color: "from-purple-500/20 to-indigo-500/10",
      border: "border-purple-500/30",
      iconColor: "text-purple-400"
    },
    {
      icon: Rocket,
      title: "Building Practical Projects",
      description: "Believing that true mastery comes from hands-on implementation—turning concepts into working software that solves real student and developer problems.",
      color: "from-amber-500/20 to-orange-500/10",
      border: "border-amber-500/30",
      iconColor: "text-amber-400"
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>GET TO KNOW ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full mt-3 mb-4" />
          <p className="text-slate-400 text-base max-w-2xl">
            A glance into my academic journey, engineering mindset, and the drive behind my daily code.
          </p>
        </div>

        {/* Main Grid: Narrative & Quick Facts */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Narrative Story */}
          <motion.div 
            className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2.5">
              <span className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <GraduationCap className="w-5 h-5" />
              </span>
              Driven by curiosity, fueled by code
            </h3>
            
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                I am <strong className="text-white">Salabh Kumar Pandey</strong>, currently in my <span className="text-cyan-300 font-medium">2nd Year of B.Tech Computer Science and Engineering</span> at <span className="text-white font-medium">Lovely Professional University (LPU)</span>.
              </p>
              <p>
                My passion lies at the intersection of <strong className="text-white">practical software engineering</strong> and <strong className="text-white">algorithmic problem solving</strong>. I enjoy untangling complex problems through Data Structures & Algorithms, whether optimizing algorithms in C++ or crafting intuitive web interfaces using modern full-stack web technologies.
              </p>
              <p>
                Beyond standard coursework, I am constantly exploring new technologies, writing code daily on GitHub, and experimenting with basic machine learning models and AI integrations to build meaningful, responsive projects.
              </p>
            </div>

            {/* Key principles list */}
            <div className="mt-6 pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Strong foundation in DSA & C++</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Modern Full Stack Web Development</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Version Control & Git Collaboration</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Quick learner with high adaptability</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Info & Highlights Panel */}
          <motion.div 
            className="lg:col-span-5 flex flex-col gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            {/* Quick Profile Specs */}
            <div className="glass-panel p-6 rounded-2xl border border-slate-800">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 font-mono mb-4 flex items-center justify-between">
                <span>Quick Profile Info</span>
                <Terminal className="w-4 h-4 text-cyan-400" />
              </h4>

              <div className="space-y-3 font-mono text-xs">
                <div className="flex justify-between py-2 border-b border-slate-800/60">
                  <span className="text-slate-400">Current Degree</span>
                  <span className="text-slate-200 font-semibold text-right">B.Tech CSE</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-800/60">
                  <span className="text-slate-400">University</span>
                  <span className="text-cyan-300 font-semibold text-right">Lovely Professional Univ (LPU)</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-800/60">
                  <span className="text-slate-400">Current Academic Standing</span>
                  <span className="text-emerald-400 font-semibold text-right">2nd Year (2023 - 2027)</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-800/60">
                  <span className="text-slate-400">Primary Focus</span>
                  <span className="text-slate-200 font-semibold text-right">Full Stack & DSA</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-slate-400">Location</span>
                  <span className="text-slate-200 font-semibold text-right">Punjab, India</span>
                </div>
              </div>
            </div>

            {/* Current Focus Banner */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-cyan-950/50 via-slate-900 to-indigo-950/40 border border-cyan-500/20">
              <div className="flex items-center gap-2 text-xs font-semibold text-cyan-300 uppercase tracking-wider mb-2 font-mono">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                Current Focus & Goals
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Sharpening graph algorithms & dynamic programming in C++, building full-stack applications with React & Node.js, and seeking internship roles for practical industry impact.
              </p>
              <a
                href="#projects"
                className="inline-flex items-center gap-1.5 text-xs text-cyan-400 font-medium hover:text-cyan-300 mt-3 pt-2"
              >
                <span>Explore my featured projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`glass-panel p-6 rounded-2xl border ${pillar.border} hover:-translate-y-1 transition-all duration-300 flex flex-col`}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pillar.color} border ${pillar.border} flex items-center justify-center ${pillar.iconColor} mb-4`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">{pillar.title}</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed flex-1">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
