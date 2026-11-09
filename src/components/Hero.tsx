import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, LeetcodeIcon, WhatsappIcon } from './SocialIcons';
import { 
  ArrowRight, 
  FileText, 
  Mail, 
  Award, 
  BookOpen, 
  Briefcase, 
  GraduationCap, 
  Sparkles, 
  CheckCircle2, 
  MapPin 
} from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-gradient-to-tr from-indigo-500/10 via-violet-500/10 to-blue-500/10 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute top-12 right-10 w-72 h-72 bg-blue-500/5 blur-2xl pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple-500/5 blur-2xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Narrative, Badges, CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50/80 dark:bg-indigo-950/60 border border-indigo-200/80 dark:border-indigo-800/80 text-indigo-700 dark:text-indigo-300 text-xs font-semibold mb-6 shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Software Developer Intern @ Tata Motors</span>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <span className="text-slate-600 dark:text-slate-400">Class of 2027</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-4">
              Hi, I'm <span className="text-gradient">Saniya Tamboli</span>.
            </h1>

            {/* Professional Headline */}
            <h2 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-200 tracking-tight mb-4">
              {PERSONAL_INFO.headline}
            </h2>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8 max-w-2xl">
              {PERSONAL_INFO.shortBio}
            </p>

            {/* Key Verified Badges Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full max-w-2xl mb-8">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/70 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800 shadow-sm">
                <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">Academic Merit</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">9.15 CGPA</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/70 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800 shadow-sm">
                <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">Undergraduate</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">B.Tech 2027</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/70 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800 shadow-sm">
                <div className="p-2 rounded-lg bg-violet-100 dark:bg-violet-950/80 text-violet-600 dark:text-violet-400">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">Specialization</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">AI &amp; Analytics</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/70 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800 shadow-sm">
                <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-950/80 text-purple-600 dark:text-purple-400">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">Research</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">3 Publications</div>
                </div>
              </div>

              <div className="col-span-2 sm:col-span-2 flex items-center gap-2.5 p-3 rounded-xl bg-white/70 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800 shadow-sm">
                <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">Current Industry Role</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white truncate">
                    Software Developer Intern @ Tata Motors
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/35 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-sm border border-slate-200 dark:border-slate-700/80 shadow-sm hover:-translate-y-0.5 transition-all duration-200"
              >
                <FileText className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>Download Resume</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-sm transition-all duration-200"
              >
                <Mail className="w-4 h-4" />
                <span>Let's Connect</span>
              </a>
            </div>

            {/* Social Icons Links */}
            <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Profiles
              </span>
              <div className="h-4 w-px bg-slate-200 dark:bg-slate-800" />
              
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white hover:border-indigo-300 dark:hover:border-indigo-700 transition-all shadow-sm hover:-translate-y-0.5"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300 dark:hover:border-blue-700 transition-all shadow-sm hover:-translate-y-0.5"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.leetcodeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 hover:border-amber-300 dark:hover:border-amber-700 transition-all shadow-sm hover:-translate-y-0.5"
                aria-label="LeetCode Profile"
              >
                <LeetcodeIcon className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-300 dark:hover:border-emerald-700 transition-all shadow-sm hover:-translate-y-0.5"
                aria-label="WhatsApp Contact"
              >
                <WhatsappIcon className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Profile Area & Architecture Identity Card */}
          <div className="lg:col-span-5 flex justify-center relative">
            
            {/* Visual Profile Area Card */}
            <div className="relative w-full max-w-md">
              {/* Outer Glow Halo */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 rounded-3xl blur opacity-30 dark:opacity-40 animate-pulse-subtle"></div>
              
              <div className="relative bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xl">
                
                {/* Profile Placeholder Avatar Container */}
                <div className="relative mx-auto w-40 h-40 sm:w-48 sm:h-48 rounded-2xl bg-gradient-to-tr from-slate-100 via-indigo-50 to-violet-100 dark:from-slate-800 dark:via-slate-850 dark:to-indigo-950 border-2 border-indigo-200 dark:border-indigo-800/80 flex items-center justify-center overflow-hidden mb-6 group shadow-inner">
                  
                  {!imageError ? (
                    <img 
                      src="/profile.jpg" 
                      alt="Saniya Tamboli" 
                      className={`w-full h-full object-cover object-top transition-all duration-500 ${
                        imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                      }`}
                      onLoad={() => setImageLoaded(true)}
                      onError={() => setImageError(true)}
                    />
                  ) : null}

                  {/* Monogram Fallback if image fails or before load */}
                  {(!imageLoaded || imageError) && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 bg-gradient-to-tr from-slate-100 via-indigo-50 to-violet-100 dark:from-slate-850 dark:via-slate-900 dark:to-indigo-950">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-600 text-white flex items-center justify-center text-2xl font-bold shadow-md mb-2">
                        {PERSONAL_INFO.monogram}
                      </div>
                      <span className="text-xs font-medium text-slate-500 dark:text-slate-400 font-mono">
                        Saniya Tamboli
                      </span>
                      <span className="text-[10px] text-indigo-600 dark:text-indigo-400 font-semibold uppercase tracking-wider mt-0.5">
                        Engineer &amp; Researcher
                      </span>
                    </div>
                  )}

                  {/* Corner Verification Stamp */}
                  <div className="absolute bottom-2 right-2 bg-emerald-500 text-white p-1 rounded-full shadow-md z-10" title="Verified Engineering Profile">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Profile Identity Details */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {PERSONAL_INFO.name}
                  </h3>
                  <p className="text-xs font-medium text-indigo-600 dark:text-indigo-400 mt-1">
                    AI &amp; Machine Learning Developer • Full-Stack Engineer
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center justify-center gap-1 mt-1.5 font-mono">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{PERSONAL_INFO.university}</span>
                  </p>
                </div>

                {/* Quick Academic & Professional Summary Grid */}
                <div className="space-y-2.5 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs">
                  <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 dark:bg-slate-800/60">
                    <span className="text-slate-500 dark:text-slate-400">Current Pointer:</span>
                    <span className="font-bold text-indigo-600 dark:text-indigo-400 font-mono">9.15 / 10.0 CGPA</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 dark:bg-slate-800/60">
                    <span className="text-slate-500 dark:text-slate-400">Current Role:</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200">Transmission Design Intern</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 dark:bg-slate-800/60">
                    <span className="text-slate-500 dark:text-slate-400">Scholarly Papers:</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200">3 Published (JATIR &amp; RG)</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 dark:bg-slate-800/60">
                    <span className="text-slate-500 dark:text-slate-400">Hackathon Honors:</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200">HackPrix, ByteCamp, SIH</span>
                  </div>
                </div>

                {/* Motto Footer */}
                <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 text-center">
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 italic">
                    "{PERSONAL_INFO.motto}"
                  </p>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
