import React from 'react';
import { PUBLICATIONS } from '../data/portfolioData';
import { 
  BookOpen, 
  ExternalLink, 
  FileCheck, 
  Sparkles, 
  Award, 
  Calendar, 
  Quote,
  Share2
} from 'lucide-react';

export const Research: React.FC = () => {
  return (
    <section id="research" className="py-20 relative bg-white/40 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/70 border border-indigo-200 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Scholarly Research &amp; Publications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Research &amp; Publications
          </h2>
          <div className="w-16 h-1 bg-indigo-600 rounded-full mx-auto mt-4 mb-4" />
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Scholarly contributions investigating Context-Aware Multi-Agent AI, Smart City IoT Infrastructure, and Distributed Digital Healthtech Platforms.
          </p>
        </div>

        {/* Publications Cards Grid */}
        <div className="space-y-8 max-w-5xl mx-auto">
          {PUBLICATIONS.map((pub, idx) => (
            <div
              key={pub.id}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-indigo-300 dark:hover:border-indigo-700 transition-all duration-300 p-6 sm:p-8 relative overflow-hidden group"
            >
              {/* Top Accent Gradient Border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 opacity-80" />

              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                
                {/* Left: Metadata & Narrative */}
                <div className="space-y-4 flex-1">
                  
                  {/* Meta Badges */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-mono text-xs font-bold border border-indigo-200 dark:border-indigo-800">
                      {pub.year}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-md bg-purple-50 dark:bg-purple-950 text-purple-700 dark:text-purple-300 text-xs font-semibold border border-purple-200 dark:border-purple-800">
                      {pub.domain}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-medium">
                      {pub.source}
                    </span>
                    {pub.paperId && (
                      <span className="text-xs font-mono text-slate-400">
                        ID: {pub.paperId}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-snug">
                    {pub.title}
                  </h3>

                  {/* Journal Venue */}
                  <p className="text-xs sm:text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                    {pub.journal}
                  </p>

                  {/* Abstract */}
                  <div className="p-4 rounded-xl bg-slate-50/80 dark:bg-slate-850/60 border border-slate-100 dark:border-slate-800">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-1.5 flex items-center gap-1.5">
                      <FileCheck className="w-3.5 h-3.5 text-indigo-500" />
                      <span>Abstract Overview</span>
                    </span>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {pub.abstract}
                    </p>
                  </div>

                  {/* Citation */}
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-mono">
                    <Quote className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                    <span className="truncate">{pub.citation}</span>
                  </div>

                </div>

                {/* Right / Bottom Action Button */}
                <div className="flex lg:flex-col items-center justify-end gap-3 lg:pt-2">
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs sm:text-sm shadow-md shadow-indigo-600/25 transition-all duration-200 whitespace-nowrap group/btn hover:-translate-y-0.5"
                    title={`Open full paper on ${pub.source}`}
                  >
                    <span>Read Publication</span>
                    <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

