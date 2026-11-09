import React from 'react';
import { ACHIEVEMENTS } from '../data/portfolioData';
import { 
  Trophy, 
  Award, 
  Sparkles, 
  Flag, 
  Users, 
  BookOpen, 
  CheckCircle2,
  Calendar
} from 'lucide-react';

export const Achievements: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'academic':
        return <Award className="w-5 h-5 text-indigo-500" />;
      case 'hackathon':
        return <Trophy className="w-5 h-5 text-amber-500" />;
      case 'leadership':
        return <Users className="w-5 h-5 text-emerald-500" />;
      case 'research':
        return <BookOpen className="w-5 h-5 text-purple-500" />;
      default:
        return <Sparkles className="w-5 h-5 text-indigo-500" />;
    }
  };

  return (
    <section id="achievements" className="py-20 relative bg-slate-50/60 dark:bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/70 border border-indigo-200 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>Honors &amp; Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Achievements &amp; Hackathons
          </h2>
          <div className="w-16 h-1 bg-indigo-600 rounded-full mx-auto mt-4 mb-4" />
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            A track record of consistent academic distinction, hackathon finalist performances across Hyderabad and Mumbai, student body leadership, and published scientific research.
          </p>
        </div>

        {/* Milestone Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {ACHIEVEMENTS.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 p-6 shadow-sm hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-700 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                    {getIcon(item.type)}
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-200/80 dark:border-indigo-800">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-3">
                  {item.organization}
                </p>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{item.year}</span>
                </span>
                <span className="text-[11px] font-sans capitalize text-slate-400">
                  {item.type}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

