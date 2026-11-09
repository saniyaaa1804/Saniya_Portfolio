import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Journey } from './components/Journey';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Research } from './components/Research';
import { Skills } from './components/Skills';
import { Certifications } from './components/Certifications';
import { Achievements } from './components/Achievements';
import { ArchiveSection } from './components/Archive';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export const App: React.FC = () => {
  // Dark mode state with localStorage persistence
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('saniya_theme');
    if (saved !== null) {
      return saved === 'dark';
    }
    // Default to dark or system preference
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Resume modal state
  const [resumeOpen, setResumeOpen] = useState<boolean>(false);

  // Scroll progress percentage
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('saniya_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('saniya_theme', 'light');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        const scrollPercent = (totalScroll / windowHeight) * 100;
        setScrollProgress(scrollPercent);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-indigo-600 selection:text-white transition-colors duration-300">
      
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-indigo-600 via-violet-600 to-blue-500 z-[60] transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      {/* Navigation Bar */}
      <Navbar 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        onOpenResume={() => setResumeOpen(true)} 
      />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenResume={() => setResumeOpen(true)} />
        <About />
        <Journey />
        <Projects />
        <Experience />
        <Research />
        <Skills />
        <Certifications />
        <Achievements />
        <ArchiveSection />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Printable & Downloadable Resume Modal */}
      <ResumeModal 
        isOpen={resumeOpen} 
        onClose={() => setResumeOpen(false)} 
      />

    </div>
  );
};

export default App;

