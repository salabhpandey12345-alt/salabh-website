import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Award, 
  CheckCircle2, 
  ExternalLink, 
  ShieldCheck, 
  Calendar, 
  FileCode, 
  Sparkles,
  QrCode,
  Building,
  UserCheck,
  Maximize2,
  X
} from 'lucide-react';
import { CERTIFICATIONS, PERSONAL_INFO } from '../data/portfolioData';
import { CertificationItem } from '../types';

export const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  return (
    <section id="certifications" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>VERIFIED ACADEMIC CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Python Certifications
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mt-3 mb-4" />
          <p className="text-slate-400 text-base max-w-2xl">
            Official Course Completion Certifications awarded by <strong className="text-slate-200 font-semibold">Infosys Springboard (Infosys Limited)</strong> verifying foundational and advanced programming mastery in Python.
          </p>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CERTIFICATIONS.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              className="glass-panel rounded-3xl border border-slate-800 hover:border-cyan-500/40 bg-gradient-to-b from-slate-900/90 to-[#070c18] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative group overflow-hidden shadow-lg hover:shadow-cyan-500/10"
            >
              {/* Subtle Ambient Gradient */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/10 transition-colors" />

              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-cyan-400 font-bold">
                      <FileCode className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-mono font-bold text-cyan-400 flex items-center gap-1.5">
                        <Building className="w-3.5 h-3.5" />
                        <span>Infosys Springboard</span>
                      </div>
                      <div className="text-[11px] text-slate-400">Infosys Limited</div>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-mono bg-emerald-950/80 text-emerald-400 border border-emerald-500/30">
                    <ShieldCheck className="w-3 h-3" />
                    <span>Verified</span>
                  </span>
                </div>

                {/* Certificate Title */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {cert.title}
                </h3>

                {/* Recipient & Date */}
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 mb-6 pb-4 border-b border-slate-800/80">
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <UserCheck className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Awarded to: <strong className="text-white">salabh kumar pandey</strong></span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Issued: {cert.date}</span>
                  </div>
                </div>

                {/* Key Skills & Curriculum Covered */}
                <div className="space-y-2 mb-6">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                    Curriculum & Skills Evaluated:
                  </h4>
                  <div className="grid grid-cols-1 gap-2 text-xs">
                    {cert.skillsCovered.map((skill, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2 text-slate-300 bg-slate-950/60 p-2.5 rounded-xl border border-slate-800/80">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-white text-xs font-medium transition-colors cursor-pointer"
                >
                  <Maximize2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>View Certificate Card</span>
                </button>

                <a
                  href={cert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/40 text-cyan-300 text-xs font-bold transition-colors cursor-pointer"
                >
                  <span>Verify at Wingspan</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Certificate Modal Dialog */}
        <AnimatePresence>
          {selectedCert && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="bg-[#0b101e] border border-cyan-500/30 rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 relative"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedCert(null)}
                  className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Certificate Digital Reproduction Preview */}
                <div className="border-2 border-slate-700/80 rounded-2xl p-6 sm:p-8 bg-gradient-to-b from-[#0e1628] to-[#070b14] text-center relative overflow-hidden">
                  
                  {/* Top Bar with Infosys Brand */}
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                    <div className="text-left">
                      <div className="text-xl font-bold tracking-wider text-cyan-400 font-sans">
                        Infosys
                      </div>
                      <div className="text-[10px] text-slate-400 font-mono tracking-widest uppercase">
                        Navigate your next
                      </div>
                    </div>
                    <div className="text-right font-mono text-xs text-slate-400">
                      <div className="text-emerald-400 font-bold flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5" /> Verified Authenticity
                      </div>
                      <div className="text-[10px]">Infosys Springboard</div>
                    </div>
                  </div>

                  {/* Header Title */}
                  <div className="text-xs font-mono font-bold tracking-widest uppercase text-slate-400 mb-2">
                    COURSE COMPLETION CERTIFICATE
                  </div>
                  <p className="text-xs text-slate-400 mb-4">The certificate is awarded to</p>

                  <h3 className="text-2xl sm:text-3xl font-bold text-cyan-300 font-mono tracking-tight mb-4">
                    salabh kumar pandey
                  </h3>

                  <p className="text-xs text-slate-400 mb-2">for successfully completing the course</p>
                  
                  <div className="p-3.5 rounded-xl bg-slate-900/90 border border-cyan-500/30 text-white font-bold text-base sm:text-lg mb-4 shadow-inner">
                    {selectedCert.title}
                  </div>

                  <p className="text-xs font-mono text-slate-400 mb-6">
                    on <span className="text-white font-bold">{selectedCert.date}</span>
                  </p>

                  {/* Issuer Signatory Block */}
                  <div className="grid grid-cols-2 gap-4 border-t border-slate-800 pt-6 text-left">
                    <div>
                      <div className="flex items-center gap-2 text-slate-400 text-xs font-mono">
                        <QrCode className="w-4 h-4 text-cyan-400" />
                        <span>Scan & Verification:</span>
                      </div>
                      <a 
                        href={selectedCert.verificationUrl}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-xs font-mono text-cyan-400 hover:underline block mt-1"
                      >
                        verify.onwingspan.com
                      </a>
                    </div>

                    <div className="text-right">
                      <div className="text-xs font-bold text-white">Satheesha B. Nanjappa</div>
                      <div className="text-[10px] text-slate-400 leading-tight">
                        Senior Vice President and Head<br />
                        Education, Training and Assessment<br />
                        Infosys Limited
                      </div>
                    </div>
                  </div>

                </div>

                {/* Modal Footer CTA */}
                <div className="mt-6 flex items-center justify-end gap-3">
                  <a
                    href={selectedCert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs sm:text-sm transition-colors"
                  >
                    <span>Open Wingspan Official Verification Portal</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
