/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  PhoneCall,
  Activity,
  ChevronRight
} from 'lucide-react';
import { CARE_DATA } from './constants';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-sleek-bg font-sans selection:bg-blue-100 selection:text-blue-800">
      {/* Header */}
      <header className="bg-sleek-card px-6 md:px-10 py-6 border-b border-sleek-border flex flex-col md:flex-row justify-between items-center gap-6 sticky top-0 z-40">
        <div className="flex flex-col text-center md:text-left">
          <span className="text-sleek-accent text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold mb-1 opacity-80">
            Cat Sitter Dashboard
          </span>
          <h1 className="text-2xl md:text-3xl font-extrabold text-sleek-text-main tracking-tight">
            오대수 케어 가이드 🐾
          </h1>
        </div>
        
        <div className="flex gap-4">
          <div className="bg-slate-50 px-4 py-2 rounded-xl border border-sleek-border flex flex-col min-w-[140px]">
            <span className="text-sleek-text-sub text-[9px] uppercase font-bold tracking-wider mb-0.5">Owner</span>
            <span className="text-xs md:text-sm font-semibold text-sleek-text-main flex items-center gap-2">
              <PhoneCall size={12} className="text-sleek-accent" /> 010-9845-7738
            </span>
          </div>
          <div className="bg-slate-50 px-4 py-2 rounded-xl border border-sleek-border flex flex-col min-w-[140px]">
            <span className="text-sleek-text-sub text-[9px] uppercase font-bold tracking-wider mb-0.5">Emergency (Mom)</span>
            <span className="text-xs md:text-sm font-semibold text-sleek-text-main flex items-center gap-2">
              <PhoneCall size={12} className="text-sleek-accent" /> 010-3373-7721
            </span>
          </div>
        </div>
      </header>

      {/* Grid Dashboard */}
      <main className="flex-1 p-6 md:p-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CARE_DATA.map((section, idx) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: idx * 0.05, duration: 0.3 }}
              className={`sleek-card flex flex-col h-full bg-white relative overflow-hidden group ${
                section.id === 'emergency' 
                  ? 'bg-red-50 border-red-100' 
                  : 'hover:border-sleek-accent/30 hover:shadow-md'
              }`}
            >
              {/* Highlight bar for active or important items */}
              {section.important && !section.id.includes('emergency') && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-blue-400 opacity-40"></div>
              )}
              
              <div className="flex items-center gap-3 mb-4">
                <div className={`icon-box shrink-0 group-hover:scale-110 transition-transform ${
                  section.id === 'emergency' 
                    ? 'bg-red-100 text-sleek-danger' 
                    : 'bg-blue-50 text-sleek-accent'
                }`}>
                  <section.icon size={20} />
                </div>
                <h2 className={`text-base font-bold tracking-tight ${
                  section.id === 'emergency' ? 'text-sleek-danger' : 'text-slate-700'
                }`}>
                  {section.title.split(' ')[1]}
                </h2>
              </div>

              {section.important && section.id !== 'emergency' && (
                <div className="flex items-center gap-1.5 text-xs font-bold text-sleek-accent mb-3">
                  <Activity size={10} /> 가장 중요한 임무!
                </div>
              )}

              <div className={`text-[13px] leading-relaxed flex-1 ${
                section.id === 'emergency' ? 'text-red-900/80' : 'text-sleek-text-sub'
              }`}>
                <div className="whitespace-pre-wrap">
                  {section.content.split('\n').map((line, i) => {
                    const searchTerms = ['하루 3번', '가장 중요한 임무', '신선한 수돗물', '하루 10분', '전용 식물', '새 구경 명당'];
                    const hasMatch = searchTerms.some(term => line.includes(term));

                    if (hasMatch) {
                      const regex = new RegExp(`(${searchTerms.join('|')})`, 'g');
                      return (
                        <p key={i} className="mb-2">
                          {line.split(regex).map((part, pIdx) => (
                            <span key={pIdx} className={searchTerms.includes(part) ? 'text-sleek-text-main font-bold bg-blue-50 px-1 rounded' : ''}>
                              {part}
                            </span>
                          ))}
                        </p>
                      );
                    }
                    return <p key={i} className="mb-2">{line}</p>;
                  })}
                </div>
              </div>

              {section.id === 'emergency' && (
                <div className="mt-4 pt-4 border-t border-red-200/50 flex items-center justify-between">
                  <span className="text-xs font-bold text-red-800 flex items-center gap-1.5 italic">
                    다솜동물병원: 051-632-7580
                  </span>
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                    <ChevronRight size={14} />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </main>

      {/* Footer Bar */}
      <footer className="px-6 md:px-10 py-4 text-[10px] md:text-xs text-sleek-text-sub border-t border-sleek-border bg-sleek-card flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2.5">
          <div className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </div>
          <span className="font-semibold tracking-wide">SYSTEM STATUS: DAESU-OH IS HEALTHY</span>
        </div>
        <div className="font-medium opacity-60">
          &copy; 2025 CARE GUIDE SYSTEM • DESIGNED BY SONGYI
        </div>
      </footer>
    </div>
  );
}

