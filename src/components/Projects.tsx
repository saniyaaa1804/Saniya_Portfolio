import React, { useState } from 'react';
import { PROJECTS_DATA, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { GithubIcon } from './SocialIcons';
import { 
  FolderGit2, 
  Search, 
  ExternalLink, 
  ArrowUpRight, 
  Cpu, 
  CheckCircle2, 
  BookOpen, 
  Sparkles,
  Layers
} from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai', label: 'Artificial Intelligence' },
    { id: 'ml', label: 'Machine Learning' },
    { id: 'cv', label: 'Computer Vision' },
    { id: 'fullstack', label: 'Full Stack Development' },
    { id: 'iot', label: 'IoT & Embedded Systems' },
    { id: 'academic', label: 'Academic Projects' },
    { id: 'research', label: 'Research & Innovation' },
  ];

  const filteredProjects = PROJECTS_DATA.filter(proj => {
    // category filter
    const matchesCategory = selectedCategory === 'all' 
      || proj.category === selectedCategory
      || (selectedCategory === 'ml' && (proj.category === 'ai' || proj.category === 'cv'))
      || (selectedCategory === 'ai' && (proj.category === 'cv' || proj.category === 'research'));

    // search query filter
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch = !q 
      || proj.title.toLowerCase().includes(q)
      || proj.description.toLowerCase().includes(q)
      || proj.technologies.some(t => t.toLowerCase().includes(q));

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-20 relative bg-white/40 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/70 border border-indigo-200 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Engineering Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Projects &amp; Technical Portfolio
          </h2>
          <div className="w-16 h-1 bg-indigo-600 rounded-full mx-auto mt-4 mb-4" />
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            A curated showcase of real-time computer vision systems, smart city IoT architectures, full-stack web platforms, and multi-agent AI research.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="space-y-4 mb-12">
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by project name, tech (e.g. YOLO, Python, IoT, React)..."
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
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                  selectedCategory === cat.id
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-indigo-300 dark:hover:border-indigo-700/80 transition-all duration-300 flex flex-col justify-between overflow-hidden relative"
            >
              {/* Card Header & Badge */}
              <div className="p-6 pb-4">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 font-mono text-xs font-bold border border-indigo-100 dark:border-indigo-900">
                      {project.year}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                      {project.categoryLabel}
                    </span>
                  </div>

                  {project.featured && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800 text-[10px] font-bold">
                      <Sparkles className="w-3 h-3 text-amber-500" />
                      Featured
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors mb-2 leading-snug">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3 mb-4">
                  {project.description}
                </p>

                {/* Key Contribution Highlights Snippet */}
                <div className="mb-4 p-3 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-100 dark:border-slate-800">
                  <span className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider block mb-1">
                    Key Contribution:
                  </span>
                  <p className="text-xs text-slate-700 dark:text-slate-300 line-clamp-2">
                    {project.myContribution[0]}
                  </p>
                </div>

                {/* Technology Badges */}
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {project.technologies.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/50 dark:border-slate-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-1.5 py-0.5 text-[10px] text-slate-400 font-mono">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer: Action Links */}
              <div className="px-6 py-4 bg-slate-50/70 dark:bg-slate-850/60 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 flex items-center gap-1 group/btn"
                >
                  <span>Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white border border-slate-200 dark:border-slate-700 transition-colors"
                      title="View Verified GitHub Repository"
                      aria-label={`${project.title} GitHub Repository`}
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}

                  {project.researchUrl && (
                    <a
                      href={project.researchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-indigo-900 border border-indigo-200 dark:border-indigo-800 transition-colors"
                      title="Read Verified Research Publication"
                      aria-label={`${project.title} Research Paper`}
                    >
                      <BookOpen className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-2">
              No projects found matching "{searchQuery}" in this category.
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

      {/* Case Study Modal */}
      <ProjectModal 
        project={activeModalProject} 
        onClose={() => setActiveModalProject(null)} 
      />
    </section>
  );
};
