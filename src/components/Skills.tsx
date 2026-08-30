import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Code2, 
  Binary, 
  Layout, 
  GitBranch, 
  BrainCircuit, 
  Sparkles, 
  Terminal, 
  Cpu, 
  FileCode, 
  FileJson, 
  Layers, 
  Check, 
  Copy,
  ExternalLink
} from 'lucide-react';
import { SKILLS } from '../data/portfolioData';
import { SkillItem } from '../types';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(SKILLS[0]);
  const [copiedSnippet, setCopiedSnippet] = useState(false);

  const categories = [
    { id: 'all', label: 'All Skills', count: SKILLS.length },
    { id: 'languages', label: 'Languages', count: SKILLS.filter(s => s.category === 'languages').length },
    { id: 'dsa', label: 'DSA & Algorithms', count: SKILLS.filter(s => s.category === 'dsa').length },
    { id: 'web', label: 'Web Tech', count: SKILLS.filter(s => s.category === 'web').length },
    { id: 'tools', label: 'Git & Tools', count: SKILLS.filter(s => s.category === 'tools').length },
    { id: 'ai', label: 'AI & ML', count: SKILLS.filter(s => s.category === 'ai').length },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? SKILLS 
    : SKILLS.filter(skill => skill.category === activeCategory);

  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-5 h-5" />;
      case 'FileCode': return <FileCode className="w-5 h-5" />;
      case 'Cpu': return <Cpu className="w-5 h-5" />;
      case 'Binary': return <Binary className="w-5 h-5" />;
      case 'FileJson': return <FileJson className="w-5 h-5" />;
      case 'Layout': return <Layout className="w-5 h-5" />;
      case 'Layers': return <Layers className="w-5 h-5" />;
      case 'GitBranch': return <GitBranch className="w-5 h-5" />;
      case 'BrainCircuit': return <BrainCircuit className="w-5 h-5" />;
      default: return <Code2 className="w-5 h-5" />;
    }
  };

  // Sample code snippets for interactive preview
  const getSkillCodeSnippet = (skillName: string) => {
    if (skillName.includes('C++')) {
      return `// C++: Fast Binary Search & STL Vector
#include <iostream>
#include <vector>
#include <algorithm>

int binarySearch(const std::vector<int>& arr, int target) {
    int left = 0, right = arr.size() - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (arr[mid] == target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1; // Element not found
}`;
    }
    if (skillName.includes('Python')) {
      return `# Python: Data processing & clean dictionary manipulation
def analyze_metrics(data_stream: list[dict]) -> dict:
    summary = {"total_events": len(data_stream), "valid": 0}
    for item in data_stream:
        if item.get("status") == "success":
            summary["valid"] += 1
    return summary`;
    }
    if (skillName.includes('DSA')) {
      return `// Graph Breadth-First Search (BFS) Traversal
void bfsTraversal(int startNode, const vector<vector<int>>& adjList) {
    vector<bool> visited(adjList.size(), false);
    queue<int> q;
    visited[startNode] = true;
    q.push(startNode);
    while (!q.empty()) {
        int curr = q.front(); q.pop();
        for (int neighbor : adjList[curr]) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                q.push(neighbor);
            }
        }
    }
}`;
    }
    if (skillName.includes('JavaScript') || skillName.includes('React')) {
      return `// Modern React + TypeScript Async State Hook
const useAsyncFetch = <T,>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    fetch(url, { signal: controller.signal })
      .then(res => res.json())
      .then(setData)
      .finally(() => setLoading(false));
    return () => controller.abort();
  }, [url]);

  return { data, loading };
};`;
    }
    if (skillName.includes('Git')) {
      return `# Standard Collaborative Git Workflow
git checkout -b feature/dsa-visualizer
git add src/algorithms/dijkstra.ts
git commit -m "feat(dsa): implement Dijkstra shortest path"
git push origin feature/dsa-visualizer
# Open Pull Request for peer review`;
    }
    return `# Basic ML Data Exploration with Python & Pandas
import pandas as pd
import numpy as np

df = pd.read_csv('dataset.csv')
features = df[['feature_1', 'feature_2']].values
normalized = (features - features.mean()) / features.std()`;
  };

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  return (
    <section id="skills" className="py-20 lg:py-28 relative bg-dots-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Skills & Competencies
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full mt-3 mb-4" />
          <p className="text-slate-400 text-base max-w-2xl">
            A comprehensive overview of programming languages, data structures, web frameworks, and developer tools in my tech stack.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              id={`skill-filter-${cat.id}`}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.2)]'
                  : 'bg-slate-900/80 text-slate-400 border border-slate-800 hover:text-slate-200 hover:bg-slate-800/80'
              }`}
            >
              <span>{cat.label}</span>
              <span className={`px-1.5 py-0.2 text-[10px] rounded-full font-mono ${
                activeCategory === cat.id ? 'bg-cyan-500/30 text-cyan-200' : 'bg-slate-800 text-slate-400'
              }`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Skills Layout: Grid on Left + Interactive Code/Details Pane on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Skills Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <AnimatePresence mode="popLayout">
              {filteredSkills.map((skill, idx) => {
                const isSelected = selectedSkill?.name === skill.name;
                return (
                  <motion.div
                    key={skill.name}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, delay: idx * 0.04 }}
                    onClick={() => setSelectedSkill(skill)}
                    className={`p-4 rounded-2xl glass-panel border cursor-pointer transition-all duration-200 relative group ${
                      isSelected
                        ? 'border-cyan-400/80 bg-slate-900/90 shadow-[0_0_20px_rgba(6,182,212,0.15)] ring-1 ring-cyan-400/40'
                        : 'border-slate-800 hover:border-slate-700 hover:bg-slate-900/70'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className={`p-2.5 rounded-xl border transition-colors ${
                          isSelected
                            ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40'
                            : 'bg-slate-800/80 text-slate-300 border-slate-700/60 group-hover:text-cyan-300 group-hover:border-cyan-500/30'
                        }`}>
                          {getSkillIcon(skill.iconName)}
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                            {skill.name}
                          </h4>
                          <span className="text-[11px] text-slate-400">
                            {skill.experience}
                          </span>
                        </div>
                      </div>
                      
                      <span className="text-xs font-mono font-bold text-cyan-400">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden mb-3">
                      <motion.div
                        className="h-full bg-gradient-to-r from-cyan-500 to-emerald-400 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                      />
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {skill.tags.slice(0, 3).map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded-md bg-slate-800/70 text-[10px] text-slate-300 font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                      {skill.tags.length > 3 && (
                        <span className="px-1.5 py-0.5 rounded-md bg-slate-800/40 text-[10px] text-slate-400 font-mono">
                          +{skill.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Interactive Skill Detail & Code Sandbox Preview Pane */}
          {selectedSkill && (
            <motion.div 
              className="lg:col-span-5 glass-panel rounded-2xl border border-slate-700/80 p-6 sticky top-24 overflow-hidden"
              key={selectedSkill.name}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                    {getSkillIcon(selectedSkill.iconName)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{selectedSkill.name}</h3>
                    <p className="text-xs text-emerald-400 font-mono">{selectedSkill.experience}</p>
                  </div>
                </div>
                
                <span className="px-2.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold">
                  {selectedSkill.level}% Proficiency
                </span>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-300 my-4 leading-relaxed">
                {selectedSkill.description}
              </p>

              {/* Verified Certificate Callout for Python */}
              {selectedSkill.name.includes('Python') && (
                <div className="mb-4 p-3.5 rounded-xl bg-gradient-to-r from-blue-950/70 via-slate-900 to-cyan-950/60 border border-cyan-500/40">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-[11px] font-mono font-bold text-cyan-300 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                      INFOSYS SPRINGBOARD CERTIFIED
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-500/30">
                      Part 1 & 2 Completed
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 mb-2">
                    Verified completion in <strong className="text-white">Programming Fundamentals using Python (Part 1 & 2)</strong> by Infosys Limited on July 28, 2026.
                  </p>
                  <a
                    href="#certifications"
                    className="inline-flex items-center gap-1 text-xs font-mono text-cyan-400 hover:text-cyan-300 underline font-semibold"
                  >
                    View Official Certificate & Verification &rarr;
                  </a>
                </div>
              )}

              {/* Key Concept Badges */}
              <div className="mb-4">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                  Key Concepts & Libraries:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {selectedSkill.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Code Snippet Box */}
              <div className="rounded-xl bg-[#060a12] border border-slate-800/90 overflow-hidden mt-4">
                <div className="px-3.5 py-2 bg-slate-900/90 border-b border-slate-800/80 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                    example_implementation
                  </span>
                  <button
                    onClick={() => copyCode(getSkillCodeSnippet(selectedSkill.name))}
                    className="flex items-center gap-1 text-[11px] font-mono text-slate-400 hover:text-cyan-300 transition-colors"
                  >
                    {copiedSnippet ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <pre className="p-4 text-[11px] font-mono text-slate-300 overflow-x-auto leading-relaxed max-h-[190px]">
                  <code>{getSkillCodeSnippet(selectedSkill.name)}</code>
                </pre>
              </div>
            </motion.div>
          )}

        </div>

      </div>
    </section>
  );
};
