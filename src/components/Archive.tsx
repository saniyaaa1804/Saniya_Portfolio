import React, { useState } from 'react';
import { ARCHIVE_ITEMS, ArchiveItem } from '../data/portfolioData';
import { 
  Archive, 
  Search, 
  Code2, 
  BookOpen, 
  CheckCircle2, 
  FileCode, 
  Terminal, 
  Layers,
  Sparkles
} from 'lucide-react';

export const ArchiveSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Practicals' },
    { id: 'Machine Learning', label: 'Machine Learning Labs' },
    { id: 'Natural Language Processing', label: 'NLP Labs' },
    { id: 'Data Structures and Algorithms', label: 'Data Structures & Java' },
    { id: 'Database Management', label: 'DBMS & SQL' },
    { id: 'Web Development', label: 'Web Engineering' },
    { id: 'IoT and Embedded Systems', label: 'IoT & Embedded' },
    { id: 'Cyber Forensics & Security', label: 'Cyber Forensics' },
  ];

  const filteredItems = ARCHIVE_ITEMS.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch = !q
      || item.title.toLowerCase().includes(q)
      || item.description.toLowerCase().includes(q)
      || item.technologies.some(t => t.toLowerCase().includes(q))
      || item.topicsCovered.some(top => top.toLowerCase().includes(q));

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="archive" className="py-20 relative bg-white/40 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/70 border border-indigo-200 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Archive className="w-3.5 h-3.5" />
            <span>Academic Tasks &amp; Practical Rigor</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            My Learning &amp; Engineering Archive
          </h2>
          <div className="w-16 h-1 bg-indigo-600 rounded-full mx-auto mt-4 mb-4" />
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            A searchable catalog of foundational lab experiments, practical assignments, algorithmic proofs, and systems engineering coursework completed throughout my four-year B.Tech journey.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="space-y-4 mb-10 max-w-5xl mx-auto">
          
          {/* Search Box */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search practicals (e.g. SVM, Naive Bayes, Dijkstra, SQL, LoRa)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 shadow-sm"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-indigo-300'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

        </div>

        {/* Practicals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 p-6 shadow-sm hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-700 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2 py-0.5 rounded text-[11px] font-bold font-mono bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                    {item.semester}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-400 dark:text-slate-500">
                    {item.year}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Topics Covered */}
                <div className="mb-4 space-y-1.5 p-3 rounded-xl bg-slate-50/70 dark:bg-slate-850/50 border border-slate-100 dark:border-slate-800">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block">
                    Key Concepts Evaluated:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {item.topicsCovered.map((topic, idx) => (
                      <span key={idx} className="text-[11px] text-slate-700 dark:text-slate-300">
                        • {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Technologies Badges */}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap gap-1">
                  {item.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {item.verifiedCode && (
                  <span className="inline-flex items-center gap-1 text-[10px] font-medium text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Verified Lab Work</span>
                  </span>
                )}
              </div>

            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 max-w-md mx-auto">
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-2">
              No academic practicals matched your search.
            </p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold hover:underline"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

