import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Heart, 
  Activity, 
  Droplets, 
  ShieldCheck, 
  Wifi, 
  Cpu, 
  Layers, 
  Github, 
  ExternalLink, 
  CheckCircle2, 
  Play, 
  Pause, 
  RotateCcw,
  Sparkles,
  Zap,
  Radio,
  Sliders,
  AlertTriangle,
  FileCode2,
  Maximize2,
  X
} from 'lucide-react';
import { PROJECTS, PERSONAL_INFO } from '../data/portfolioData';

export const Projects: React.FC = () => {
  const project = PROJECTS[0]; // The Waterproof Heart Rate Monitoring System

  // Interactive Live Biometric Telemetry Simulator State
  const [isPlaying, setIsPlaying] = useState(true);
  const [bpm, setBpm] = useState(74);
  const [activeMode, setActiveMode] = useState<'normal' | 'swimming' | 'intense'>('swimming');
  const [isWaterproofActive, setIsWaterproofActive] = useState(true);
  const [waterPressureDepth, setWaterPressureDepth] = useState(2.4); // meters underwater
  const [wavePoints, setWavePoints] = useState<number[]>([]);
  const [showArchModal, setShowArchModal] = useState(false);
  const [selectedTab, setSelectedTab] = useState<'overview' | 'hardware' | 'software' | 'telemetry'>('overview');

  // Generate simulated real-time ECG/PPG wave stream
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      // Dynamic BPM based on mode
      const targetBpm = activeMode === 'normal' ? 72 : activeMode === 'swimming' ? 118 : 142;
      const variation = Math.sin(Date.now() / 1200) * 4 + (Math.random() * 2 - 1);
      const calculatedBpm = Math.round(targetBpm + variation);
      setBpm(calculatedBpm);

      // Depth variation during swimming
      if (activeMode === 'swimming') {
        setWaterPressureDepth(parseFloat((2.0 + Math.sin(Date.now() / 3000) * 0.8).toFixed(1)));
      } else {
        setWaterPressureDepth(0);
      }

      // Generate ECG/PPG pulse point
      setWavePoints(prev => {
        const t = (Date.now() % 1000) / 1000;
        let sample = 20;
        // P-Q-R-S-T simulated waveform peak
        if (t > 0.25 && t < 0.32) sample = 85; // R peak
        else if (t >= 0.32 && t < 0.38) sample = 8; // S dip
        else if (t > 0.45 && t < 0.58) sample = 38; // T wave
        else sample = 20 + Math.random() * 4;

        const next = [...prev, sample];
        if (next.length > 32) next.shift();
        return next;
      });
    }, 120);

    return () => clearInterval(interval);
  }, [isPlaying, activeMode]);

  return (
    <section id="projects" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-950/60 border border-rose-500/30 text-rose-400 text-xs font-mono mb-3">
            <Heart className="w-3.5 h-3.5 animate-pulse text-rose-400" />
            <span>FEATURED ENGINEERING PROJECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Waterproof Heart Rate Monitoring System
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-rose-500 via-pink-500 to-cyan-500 rounded-full mt-3 mb-4" />
          <p className="text-slate-400 text-base max-w-3xl">
            An IoT-driven biomedical wearable combining low-level C/C++ digital signal processing, an IP68-rated waterproof hardware enclosure, and real-time cloud telemetry.
          </p>
        </div>

        {/* Featured Project Showcase Container */}
        <div className="glass-panel rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-900/90 via-[#0c1322] to-[#090d16] overflow-hidden shadow-[0_20px_50px_-20px_rgba(244,63,94,0.15)]">
          
          {/* Top Bar with Project Status & Badges */}
          <div className="px-6 py-4 border-b border-slate-800/80 bg-slate-950/60 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500" />
              </span>
              <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                FLAGSHIP BIOMEDICAL EMBEDDED SYSTEM
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-rose-500/10 text-rose-300 border border-rose-500/20">
                IP68 Certified Architecture
              </span>
            </div>

            <div className="flex items-center gap-3">
              <a
                id="project-github-repo-link"
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white text-xs font-medium transition-colors"
                title="View GitHub Repository"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Source Code</span>
              </a>

              <button
                id="project-architecture-modal-btn"
                onClick={() => setShowArchModal(true)}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/40 text-cyan-300 text-xs font-bold transition-colors cursor-pointer"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Full System Specs</span>
              </button>
            </div>
          </div>

          {/* Main Grid: Left is Project Details & Tabs; Right is Live Interactive Simulator */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-slate-800/80">
            
            {/* Left Column: Project Architectural Details & Specifications (7 Cols) */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 space-y-6">
              
              {/* Navigation Tabs for In-Depth Understanding */}
              <div className="flex items-center gap-2 border-b border-slate-800/80 pb-3 overflow-x-auto no-scrollbar">
                {[
                  { id: 'overview', label: 'System Overview', icon: Layers },
                  { id: 'hardware', label: 'Hardware & IP68', icon: Cpu },
                  { id: 'software', label: 'C++ Firmware & DSP', icon: FileCode2 },
                  { id: 'telemetry', label: 'BLE & Web Dashboard', icon: Radio },
                ].map((tab) => {
                  const Icon = tab.icon;
                  const isActive = selectedTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setSelectedTab(tab.id as any)}
                      className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                        isActive
                          ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30 shadow-[0_0_15px_rgba(244,63,94,0.2)]'
                          : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Tab Content Display */}
              <div className="min-h-[260px]">
                {selectedTab === 'overview' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                      {project.description}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                        <div className="text-xs font-mono text-slate-400">Target Users</div>
                        <div className="text-sm font-semibold text-white mt-0.5">Swimmers, Triathletes & Hydrotherapists</div>
                      </div>
                      <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                        <div className="text-xs font-mono text-slate-400">Key Innovation</div>
                        <div className="text-sm font-semibold text-rose-300 mt-0.5">Waterproof Motion Artifact Suppression</div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {selectedTab === 'hardware' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-rose-400">
                      Hardware Specs & Water-Sealing Architecture
                    </h4>
                    <div className="space-y-2 text-xs sm:text-sm text-slate-300">
                      <div className="flex items-start gap-2 bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                        <Droplets className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-white">IP68 Hermetic Enclosure:</strong> Sealed using biomedical-grade silicone O-rings with ultrasonic welding, rated up to 50 meters water submersion.
                        </div>
                      </div>
                      <div className="flex items-start gap-2 bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                        <Cpu className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-white">Dual-Wavelength PPG Optical Sensor:</strong> High-sensitivity infrared/green LEDs designed for accurate subcutaneous blood volume pulse detection through water layers.
                        </div>
                      </div>
                      <div className="flex items-start gap-2 bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                        <Zap className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-white">Ultra Low-Power Microcontroller:</strong> Dual-core 32-bit SoC with active dynamic power scaling achieving 14+ hours continuous logging.
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {selectedTab === 'software' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-rose-400">
                      C++ Digital Signal Processing & Peak Detection
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300">
                      Raw biometric sensor output during water activity is prone to motion artifacts caused by splashing and fluid resistance. The firmware implements custom DSP filters in C++:
                    </p>
                    <div className="p-3.5 rounded-xl bg-[#070b14] border border-slate-800 font-mono text-xs text-slate-300 space-y-1.5">
                      <div className="text-slate-500">// Real-time Butterworth 2nd-Order Bandpass (0.5Hz - 4.0Hz)</div>
                      <div className="text-cyan-300">float filteredSignal = butterworthFilter.process(rawPPG);</div>
                      <div className="text-emerald-300">if (detectPeak(filteredSignal, adaptiveThreshold)) &#123;</div>
                      <div className="text-slate-300 pl-4">uint16_t currentBPM = calculateMovingAvgBPM(peakIntervals);</div>
                      <div className="text-slate-300 pl-4">bleTelemetryService.broadcastHeartRate(currentBPM);</div>
                      <div className="text-emerald-300">&#125;</div>
                    </div>
                  </motion.div>
                )}

                {selectedTab === 'telemetry' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-rose-400">
                      Wireless Protocols & Responsive Dashboard
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300">
                      Seamless dual-radio connectivity ensures zero data loss during swimming workouts or laboratory trials:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                        <div className="font-bold text-white flex items-center gap-1.5">
                          <Radio className="w-3.5 h-3.5 text-cyan-400" /> Bluetooth Low Energy (BLE)
                        </div>
                        <p className="text-slate-400 mt-1">Standard Heart Rate Profile (0x180D) for direct pairing with iOS/Android and smart coaching rings.</p>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                        <div className="font-bold text-white flex items-center gap-1.5">
                          <Wifi className="w-3.5 h-3.5 text-emerald-400" /> WebSockets & MQTT
                        </div>
                        <p className="text-slate-400 mt-1">Direct Wi-Fi telemetry stream broadcasting JSON packets with 85ms latency to the live cloud dashboard.</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Technical Highlights Checklist */}
              <div className="space-y-2 pt-4 border-t border-slate-800/80">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                  Key Technical Achievements
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {project.highlights.slice(0, 4).map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-slate-300 bg-slate-900/40 p-2.5 rounded-xl border border-slate-800/60">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Stack Pills */}
              <div className="pt-2">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 hover:border-rose-500/30 hover:text-rose-300 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Interactive Biometric Telemetry Simulator & Live Waveform (5 Cols) */}
            <div className="lg:col-span-5 p-6 sm:p-8 bg-[#070b14]/90 flex flex-col justify-between space-y-6">
              
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                    <Activity className="w-4 h-4 text-rose-400" />
                    <span className="font-bold text-white">Live Telemetry Simulator</span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-950 text-emerald-400 border border-emerald-500/30">
                    ONLINE • BLE PAIRED
                  </span>
                </div>

                {/* Main Telemetry Readout Card */}
                <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-950 border border-slate-800 relative overflow-hidden">
                  
                  {/* Subtle Background Heartbeat Glow */}
                  <div 
                    className="absolute -right-8 -bottom-8 w-36 h-36 bg-rose-500/10 rounded-full blur-2xl pointer-events-none transition-all duration-300"
                    style={{
                      transform: isPlaying ? `scale(${1 + (bpm - 60) / 100})` : 'scale(1)',
                      opacity: isPlaying ? 0.35 : 0.1
                    }}
                  />

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                        Cardiac Pulse (BPM)
                      </span>
                      <div className="flex items-baseline gap-2 mt-1">
                        <span className="text-4xl sm:text-5xl font-black font-mono tracking-tight text-white">
                          {isPlaying ? bpm : '--'}
                        </span>
                        <span className="text-xs font-mono text-rose-400 font-bold">
                          BPM
                        </span>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400">
                        <Heart 
                          className={`w-6 h-6 ${isPlaying ? 'animate-ping' : ''}`}
                          style={{ animationDuration: `${Math.max(0.4, 60 / bpm)}s` }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Real-time Waveform Canvas/Visualizer */}
                  <div className="mt-4 pt-3 border-t border-slate-800">
                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2">
                      <span>DSP PPG Waveform Stream</span>
                      <span className="text-cyan-400">{activeMode.toUpperCase()} FILTER</span>
                    </div>

                    <div className="h-20 w-full bg-[#050811] rounded-xl border border-slate-800/80 p-2 flex items-end gap-1.5 overflow-hidden">
                      {wavePoints.map((val, idx) => (
                        <div
                          key={idx}
                          className="flex-1 bg-gradient-to-t from-cyan-500 to-rose-400 rounded-t transition-all duration-100"
                          style={{ height: `${val}%` }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Secondary Sensor Gauges (Depth & Battery) */}
                  <div className="grid grid-cols-2 gap-2.5 mt-4 pt-3 border-t border-slate-800/80 text-xs">
                    <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/60">
                      <div className="text-slate-400 text-[11px] flex items-center gap-1">
                        <Droplets className="w-3 h-3 text-cyan-400" />
                        <span>Water Submersion</span>
                      </div>
                      <div className="text-sm font-mono font-bold text-cyan-300 mt-0.5">
                        {isPlaying ? `${waterPressureDepth}m (IP68 Safe)` : '0.0m'}
                      </div>
                    </div>

                    <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/60">
                      <div className="text-slate-400 text-[11px] flex items-center gap-1">
                        <Zap className="w-3 h-3 text-emerald-400" />
                        <span>Battery Reserve</span>
                      </div>
                      <div className="text-sm font-mono font-bold text-emerald-400 mt-0.5">
                        94% (14.2h left)
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Activity Mode Selector */}
              <div className="space-y-3">
                <label className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block">
                  Simulate Activity Environment:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'normal', label: 'Resting (72 BPM)', desc: 'Dry land baseline' },
                    { id: 'swimming', label: 'Swimming (118 BPM)', desc: 'Submerged pool' },
                    { id: 'intense', label: 'Sprint (142 BPM)', desc: 'High hydro-drag' },
                  ].map((m) => (
                    <button
                      key={m.id}
                      onClick={() => setActiveMode(m.id as any)}
                      className={`p-2.5 rounded-xl text-left border text-xs transition-all cursor-pointer ${
                        activeMode === m.id
                          ? 'bg-rose-500/20 border-rose-500/50 text-white shadow-[0_0_15px_rgba(244,63,94,0.2)]'
                          : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <div className="font-bold text-[11px] truncate">{m.label}</div>
                      <div className="text-[10px] text-slate-400 mt-0.5 truncate">{m.desc}</div>
                    </button>
                  ))}
                </div>

                {/* Simulator Play/Pause Control */}
                <div className="flex items-center gap-2 pt-2">
                  <button
                    onClick={() => setIsPlaying(p => !p)}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs font-bold transition-colors cursor-pointer"
                  >
                    {isPlaying ? <Pause className="w-3.5 h-3.5 text-amber-400" /> : <Play className="w-3.5 h-3.5 text-emerald-400" />}
                    <span>{isPlaying ? 'Pause Simulator' : 'Resume Telemetry'}</span>
                  </button>

                  <a
                    id="project-primary-demo-btn"
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      e.preventDefault();
                      setShowArchModal(true);
                    }}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-400 hover:to-pink-500 text-white font-bold text-xs transition-all shadow-md shadow-rose-500/20 cursor-pointer"
                  >
                    <span>Inspect Specs</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* In-Depth Architecture & Specs Modal */}
        <AnimatePresence>
          {showArchModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="bg-[#0c1222] border border-slate-700/80 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 relative"
              >
                {/* Close Button */}
                <button
                  onClick={() => setShowArchModal(false)}
                  className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Modal Title */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-rose-950 border border-rose-500/30 text-rose-300">
                    Embedded Biomedical Engineering
                  </span>
                  <span className="text-xs text-slate-400 font-mono">By Salabh Kumar Pandey</span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">
                  Waterproof Heart Rate Monitoring System
                </h3>
                <p className="text-sm text-cyan-300 font-mono mb-6">
                  Complete Technical Specifications & System Architecture
                </p>

                {/* Metrics Grid */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {project.metrics?.map((m, i) => (
                    <div key={i} className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-center">
                      <div className="text-xs text-slate-400">{m.label}</div>
                      <div className="text-sm sm:text-base font-bold text-rose-300 font-mono mt-0.5">{m.value}</div>
                    </div>
                  ))}
                </div>

                {/* Full Highlights */}
                <div className="space-y-4 mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                    Complete Architectural Highlights
                  </h4>
                  <div className="space-y-2">
                    {project.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono mb-2">
                    Technology & Firmware Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-rose-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact Author CTA */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs sm:text-sm transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>View GitHub Repository</span>
                  </a>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}?subject=Regarding your Waterproof Heart Rate Monitoring System`}
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 text-white font-bold text-xs sm:text-sm transition-colors"
                  >
                    <span>Discuss Architecture</span>
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
