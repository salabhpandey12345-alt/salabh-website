import React from 'react';
import { motion } from 'motion/react';
import { 
  GraduationCap, 
  BookOpen, 
  Award, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  Sparkles,
  Building2,
  Code
} from 'lucide-react';
import { EDUCATION, PERSONAL_INFO } from '../data/portfolioData';

export const Education: React.FC = () => {
  const edu = EDUCATION[0];

  return (
    <section id="education" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-400 text-xs font-mono mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Education
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mt-3 mb-4" />
          <p className="text-slate-400 text-base max-w-2xl">
            My formal engineering foundation in Computer Science & Engineering at Lovely Professional University.
          </p>
        </div>

        {/* Education Timeline & Showcase Card */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-panel rounded-3xl border border-slate-800 p-6 sm:p-10 relative overflow-hidden shadow-2xl"
          >
            {/* Background accent */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

            {/* Top university header */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-slate-800">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0 shadow-inner">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-indigo-950/80 border border-indigo-500/30 text-indigo-300 text-[11px] font-mono mb-2">
                    <span>{edu.currentYear}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                    {edu.degree}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs sm:text-sm text-slate-300 mt-1.5 font-medium">
                    <span className="flex items-center gap-1.5 text-cyan-300">
                      <Building2 className="w-4 h-4" />
                      {edu.institution}
                    </span>
                    <span className="flex items-center gap-1 text-slate-400">
                      <MapPin className="w-3.5 h-3.5" />
                      {edu.location}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-row sm:flex-col items-start sm:items-end justify-between sm:justify-start gap-1">
                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{edu.period}</span>
                </div>
                <span className="text-[11px] text-emerald-400 font-mono mt-1 font-semibold">
                  {edu.cgpa}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-6">
              {edu.description}
            </p>

            {/* Core Coursework Grid */}
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono mb-3 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-cyan-400" />
                <span>Key Academic Coursework</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {edu.coursework.map((course, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-200 font-mono hover:border-slate-700 transition-colors"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

            {/* Academic & Campus Involvement Highlights */}
            <div className="pt-6 border-t border-slate-800/80">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono mb-3 flex items-center gap-2">
                <Award className="w-4 h-4 text-emerald-400" />
                <span>Activities & Engagement</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {edu.achievements.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
};
