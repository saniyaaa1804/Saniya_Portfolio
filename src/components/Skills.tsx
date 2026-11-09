import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { 
  Code2, 
  Terminal, 
  Brain, 
  Globe, 
  LineChart, 
  Database, 
  Cloud, 
  FileEdit,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export const Skills: React.FC = () => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState<number | null>(null);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Programming Languages':
        return <Terminal className="w-5 h-5 text-indigo-500" />;
      case 'AI & Machine Learning':
        return <Brain className="w-5 h-5 text-violet-500" />;
      case 'Web Development':
        return <Globe className="w-5 h-5 text-blue-500" />;
      case 'Data Analytics & Mathematics':
        return <LineChart className="w-5 h-5 text-emerald-500" />;
      case 'Databases & Tools':
        return <Database className="w-5 h-5 text-amber-500" />;
      case 'Cloud & IoT':
        return <Cloud className="w-5 h-5 text-sky-500" />;
      case 'Technical Documentation & Research':
        return <FileEdit className="w-5 h-5 text-rose-500" />;
      default:
        return <Code2 className="w-5 h-5 text-indigo-500" />;
    }
  };

  const displayedCategories = selectedCategoryIndex !== null
    ? [SKILL_CATEGORIES[selectedCategoryIndex]]
    : SKILL_CATEGORIES;

  return (
    <section id="skills" className="py-20 relative bg-slate-50/60 dark:bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/70 border border-indigo-200 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Code2 className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Technical Skills Matrix
          </h2>
          <div className="w-16 h-1 bg-indigo-600 rounded-full mx-auto mt-4 mb-4" />
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            A comprehensive, verified taxonomy of technical proficiencies across core languages, machine learning pipelines, web engineering, and scholarly documentation.
          </p>
        </div>

        {/* Quick Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setSelectedCategoryIndex(null)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
              selectedCategoryIndex === null
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-indigo-300'
            }`}
          >
            All Disciplines
          </button>
          {SKILL_CATEGORIES.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCategoryIndex(idx)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                selectedCategoryIndex === idx
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-indigo-300'
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map((categoryGroup) => (
            <div
              key={categoryGroup.category}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-sm hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-700/80 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                    {getCategoryIcon(categoryGroup.category)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      {categoryGroup.category}
                    </h3>
                    <span className="text-[11px] text-slate-400 font-mono">
                      {categoryGroup.skills.length} competencies
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-500 dark:text-slate-400 mb-5 leading-relaxed">
                  {categoryGroup.description}
                </p>

                {/* Skills List */}
                <div className="space-y-3">
                  {categoryGroup.skills.map((skill, sIdx) => (
                    <div 
                      key={sIdx}
                      className="p-3 rounded-xl bg-slate-50/70 dark:bg-slate-850/50 border border-slate-100 dark:border-slate-800/80 hover:bg-slate-100/70 dark:hover:bg-slate-800 transition-colors"
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">
                          {skill.name}
                        </span>
                        <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                          skill.level === 'Advanced' || skill.level === 'Published' || skill.level === 'Certified'
                            ? 'bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                        }`}>
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
                        {skill.highlight}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

