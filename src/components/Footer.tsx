import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from './SocialIcons';
import { 
  ArrowUp, 
  Mail, 
  Heart,
  ExternalLink
} from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800/80 pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-100 dark:border-slate-850">
          
          {/* Brand & Identity Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-700 to-violet-600 flex items-center justify-center text-white font-bold text-lg shadow-md">
                {PERSONAL_INFO.monogram}
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white tracking-tight text-base">
                  {PERSONAL_INFO.name}
                </h3>
                <p className="text-xs text-indigo-600 dark:text-indigo-400 font-mono">
                  B.Tech CSE (AI &amp; Analytics) • Class of 2027
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed">
              Software Developer Intern at Tata Motors Limited. Published researcher in Multi-Agent AI and Smart City systems. Passionate about translating complex engineering concepts into scalable solutions.
            </p>

            <div className="pt-2">
              <p className="text-xs font-mono font-medium text-slate-500 dark:text-slate-400 italic">
                "{PERSONAL_INFO.motto}"
              </p>
            </div>
          </div>

          {/* Quick Sitemap Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4 text-xs">
            <div>
              <h4 className="font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
                Navigation
              </h4>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                <li><a href="#home" className="hover:text-indigo-600 dark:hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-indigo-600 dark:hover:text-white transition-colors">About</a></li>
                <li><a href="#journey" className="hover:text-indigo-600 dark:hover:text-white transition-colors">4-Year Journey</a></li>
                <li><a href="#projects" className="hover:text-indigo-600 dark:hover:text-white transition-colors">Projects</a></li>
                <li><a href="#experience" className="hover:text-indigo-600 dark:hover:text-white transition-colors">Experience</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
                Scholarly &amp; Tasks
              </h4>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                <li><a href="#research" className="hover:text-indigo-600 dark:hover:text-white transition-colors">Research Papers</a></li>
                <li><a href="#skills" className="hover:text-indigo-600 dark:hover:text-white transition-colors">Skills Matrix</a></li>
                <li><a href="#certifications" className="hover:text-indigo-600 dark:hover:text-white transition-colors">Certifications</a></li>
                <li><a href="#achievements" className="hover:text-indigo-600 dark:hover:text-white transition-colors">Achievements</a></li>
                <li><a href="#archive" className="hover:text-indigo-600 dark:hover:text-white transition-colors">Academic Archive</a></li>
                <li><a href="#contact" className="hover:text-indigo-600 dark:hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

          {/* Social Profiles & Direct Touch */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-bold uppercase tracking-wider text-slate-900 dark:text-white text-xs">
              Connect Directly
            </h4>
            
            <div className="flex items-center gap-2">
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.leetcodeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                aria-label="LeetCode"
              >
                <LeetcodeIcon className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400">
              MIT ADT University • Pune, Maharashtra, India
            </p>
          </div>

        </div>

        {/* Bottom Copyright & Back-to-Top Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. Designed &amp; Developed with engineering precision.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 transition-colors"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
