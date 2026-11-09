import React, { useState } from 'react';
import { JOURNEY_DATA, JourneyYear } from '../data/portfolioData';
import { 
  Calendar, 
  ChevronDown, 
  ChevronUp, 
  FolderGit2, 
  Cpu, 
  BookOpen, 
  Trophy, 
  Briefcase, 
  Sparkles, 
  CheckCircle2,
  Layers,
  ArrowRight
} from 'lucide-react';

export const Journey: React.FC = () => {
  // State to track which years have expanded detail tabs
  const [expandedYears, setExpandedYears] = useState<{ [key: string]: boolean }>({
    '2026–2027': true,
    '2025–2026': true,
    '2024–2025': true,
    '2023–2024': true,
  });

  const [activeFilter, setActiveFilter] = useState<'all' | '2023–2024' | '2024–2025' | '2025–2026' | '2026–2027'>('all');

  const toggleYear = (yearRange: string) => {
    setExpandedYears(prev => ({
      ...prev,
      [yearRange]: !prev[yearRange]
    }));
  };

  const expandAll = () => {
    const allExpanded: { [key: string]: boolean } = {};
    JOURNEY_DATA.forEach(y => allExpanded[y.yearRange] = true);
    setExpandedYears(allExpanded);
  };

  const collapseAll = () => {
    const allCollapsed: { [key: string]: boolean } = {};
    JOURNEY_DATA.forEach(y => allCollapsed[y.yearRange] = false);
    setExpandedYears(allCollapsed);
  };

  const filteredYears = activeFilter === 'all' 
    ? JOURNEY_DATA 
    : JOURNEY_DATA.filter(y => y.yearRange === activeFilter);

  return (
    <section id="journey" className="py-20 relative bg-slate-50/60 dark:bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/70 border border-indigo-200 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>Four-Year Academic &amp; Technical Evolution</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            My B.Tech Journey (2023–2027)
          </h2>
          <div className="w-16 h-1 bg-indigo-600 rounded-full mx-auto mt-4 mb-4" />
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            A comprehensive, verified chronicle of my growth at MIT ADT University — from core programming fundamentals to computer vision, national hackathons, research publications, and software engineering at Tata Motors.
          </p>
        </div>

        {/* Journey Filter Tabs & Expand/Collapse Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200 dark:border-slate-800">
          
          {/* Year Filter Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeFilter === 'all'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-indigo-300'
              }`}
            >
              Full Journey (All 4 Years)
            </button>
            {JOURNEY_DATA.map(item => (
              <button
                key={item.yearRange}
                onClick={() => setActiveFilter(item.yearRange as any)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeFilter === item.yearRange
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-indigo-300'
                }`}
              >
                {item.yearRange}
              </button>
            ))}
          </div>

          {/* Toggle All Expand / Collapse */}
          <div className="flex items-center gap-2 text-xs">
            <button
              onClick={expandAll}
              className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
            >
              Expand All
            </button>
            <span className="text-slate-300 dark:text-slate-700">|</span>
            <button
              onClick={collapseAll}
              className="text-slate-500 dark:text-slate-400 hover:underline font-medium"
            >
              Collapse All
            </button>
          </div>
        </div>

        {/* Timeline Stream */}
        <div className="relative pl-4 sm:pl-8 border-l-2 border-indigo-200 dark:border-indigo-900/60 ml-2 sm:ml-6 space-y-12">
          
          {filteredYears.map((yearItem, index) => {
            const isExpanded = !!expandedYears[yearItem.yearRange];

            return (
              <div key={yearItem.yearRange} className="relative group">
                
                {/* Timeline Node Dot */}
                <div className={`absolute -left-[25px] sm:-left-[41px] top-1.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full border-4 border-white dark:border-slate-950 flex items-center justify-center transition-transform group-hover:scale-110 ${
                  index === 0 
                    ? 'bg-emerald-500 shadow-md shadow-emerald-500/30' 
                    : 'bg-indigo-600'
                }`}>
                  <div className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                </div>

                {/* Card Container */}
                <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                  
                  {/* Card Header (Always Visible, Clickable to Toggle) */}
                  <div 
                    onClick={() => toggleYear(yearItem.yearRange)}
                    className="p-6 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-50/40 dark:bg-slate-850/40 hover:bg-slate-50 dark:hover:bg-slate-850 transition-colors border-b border-slate-100 dark:border-slate-800"
                  >
                    <div>
                      <div className="flex flex-wrap items-center gap-2.5 mb-2">
                        <span className="px-2.5 py-1 rounded-md bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-bold font-mono text-xs">
                          {yearItem.yearRange}
                        </span>
                        <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                          {yearItem.academicYear}
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 text-[11px] font-bold">
                          {yearItem.cgpaHighlight}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                        {yearItem.phaseTitle}
                      </h3>
                      <p className="text-xs sm:text-sm text-indigo-600 dark:text-indigo-400 font-medium mt-1">
                        {yearItem.phaseSubtitle}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 self-end md:self-center">
                      <span className="text-xs font-semibold text-slate-400 hidden sm:inline">
                        {isExpanded ? 'Hide Details' : 'View Full Details'}
                      </span>
                      <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </div>
                    </div>
                  </div>

                  {/* Summary Paragraph */}
                  <div className="px-6 pt-5 pb-3">
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {yearItem.summary}
                    </p>
                  </div>

                  {/* Expandable Deep Breakdown */}
                  {isExpanded && (
                    <div className="px-6 pb-6 pt-2 space-y-6 animate-fade-in">
                      
                      {/* Technologies Learned Pills */}
                      <div>
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5">
                          <Cpu className="w-3.5 h-3.5 text-indigo-500" />
                          <span>Technologies Mastered</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {yearItem.technologies.map((tech, idx) => (
                            <span 
                              key={idx}
                              className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Projects & Academic Assignments Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        
                        {/* Projects Completed */}
                        <div className="p-4 rounded-xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800">
                          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-3">
                            <FolderGit2 className="w-4 h-4" />
                            <span>Projects Completed</span>
                          </div>
                          <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                            {yearItem.projects.map((proj, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-indigo-500 font-bold">•</span>
                                <span>{proj}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Academic Practical Assignments */}
                        <div className="p-4 rounded-xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800">
                          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-3">
                            <BookOpen className="w-4 h-4" />
                            <span>Academic Practicals &amp; Coursework</span>
                          </div>
                          <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                            {yearItem.academicWork.map((work, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-blue-500 font-bold">•</span>
                                <span>{work}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                      </div>

                      {/* Internships, Hackathons & Research (If available for that year) */}
                      {(yearItem.internships || yearItem.hackathons || yearItem.research) && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
                          
                          {/* Internships */}
                          {yearItem.internships && (
                            <div className="p-3.5 rounded-xl bg-indigo-50/40 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/40">
                              <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-700 dark:text-indigo-300 mb-2">
                                <Briefcase className="w-3.5 h-3.5" />
                                <span>Industry Internship</span>
                              </div>
                              <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                                {yearItem.internships.map((intern, idx) => (
                                  <li key={idx} className="leading-snug">{intern}</li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Hackathons */}
                          {yearItem.hackathons && (
                            <div className="p-3.5 rounded-xl bg-amber-50/40 dark:bg-amber-950/20 border border-amber-100 dark:border-amber-900/40">
                              <div className="flex items-center gap-1.5 text-xs font-bold text-amber-700 dark:text-amber-300 mb-2">
                                <Trophy className="w-3.5 h-3.5" />
                                <span>Hackathons &amp; Contests</span>
                              </div>
                              <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                                {yearItem.hackathons.map((hack, idx) => (
                                  <li key={idx} className="leading-snug">{hack}</li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Research Publications */}
                          {yearItem.research && (
                            <div className="p-3.5 rounded-xl bg-purple-50/40 dark:bg-purple-950/20 border border-purple-100 dark:border-purple-900/40">
                              <div className="flex items-center gap-1.5 text-xs font-bold text-purple-700 dark:text-purple-300 mb-2">
                                <Sparkles className="w-3.5 h-3.5" />
                                <span>Scholarly Research</span>
                              </div>
                              <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                                {yearItem.research.map((res, idx) => (
                                  <li key={idx} className="leading-snug">{res}</li>
                                ))}
                              </ul>
                            </div>
                          )}

                        </div>
                      )}

                      {/* Important Milestones List */}
                      <div className="p-4 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/40">
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300 mb-2.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                          <span>Key Milestones &amp; Honors</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                          {yearItem.milestones.map((ms, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                              <span>{ms}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                  )}

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

