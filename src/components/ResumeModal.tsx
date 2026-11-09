import React from 'react';
import { 
  PERSONAL_INFO, 
  EXPERIENCES, 
  PUBLICATIONS, 
  PROJECTS_DATA, 
  CERTIFICATIONS, 
  ACHIEVEMENTS,
  SKILL_CATEGORIES
} from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from './SocialIcons';
import { 
  X, 
  Printer, 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink,
  Award,
  BookOpen,
  Briefcase,
  GraduationCap
} from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div 
        className="relative bg-white text-slate-900 border border-slate-200 rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar (Hidden during print) */}
        <div className="no-print sticky top-0 bg-slate-900 text-white px-6 py-4 flex items-center justify-between z-20 rounded-t-2xl">
          <div className="flex items-center gap-2">
            <span className="font-bold text-sm tracking-tight">Saniya Tamboli — Professional Technical Resume</span>
            <span className="text-xs text-slate-400 hidden sm:inline">• B.Tech CSE (AI &amp; Analytics)</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-xs transition-colors shadow-sm"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              aria-label="Close Resume"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="p-8 sm:p-12 space-y-6 text-slate-800 font-sans text-xs sm:text-[13px] leading-relaxed">
          
          {/* Header */}
          <div className="border-b-2 border-slate-900 pb-5">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight uppercase">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-xs sm:text-sm font-bold text-indigo-700 mt-1">
              AI &amp; Machine Learning Developer • Software Developer • Full-Stack Engineer
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-600 mt-3 font-mono">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-slate-500" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:underline">{PERSONAL_INFO.email}</a>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-slate-500" />
                <span>{PERSONAL_INFO.phoneDisplay}</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                <span>{PERSONAL_INFO.location}</span>
              </span>
              <span>•</span>
              <a href={PERSONAL_INFO.linkedinUrl} target="_blank" rel="noreferrer" className="hover:underline text-indigo-700">LinkedIn</a>
              <span>•</span>
              <a href={PERSONAL_INFO.githubUrl} target="_blank" rel="noreferrer" className="hover:underline text-indigo-700">GitHub</a>
              <span>•</span>
              <a href={PERSONAL_INFO.leetcodeUrl} target="_blank" rel="noreferrer" className="hover:underline text-indigo-700">LeetCode</a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Professional Summary
            </h2>
            <p className="text-slate-700 leading-normal">
              Computer Science undergraduate specializing in Artificial Intelligence &amp; Analytics at MIT ADT University (9.15 CGPA). Software Developer Intern at Tata Motors Limited within the Transmission Design Department. Author of 3 published scientific research papers (JATIR and ResearchGate) in Multi-Agent AI and Smart City IoT. Hands-on expertise in Python, Machine Learning, YOLOv5, React.js, Java, and IoT edge systems with a strong track record across national hackathons.
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Education
            </h2>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-slate-900 text-sm">MIT ADT University, Pune</h3>
                <p className="font-medium text-slate-700">
                  Bachelor of Technology in Computer Science &amp; Engineering (Specialization: Artificial Intelligence &amp; Analytics)
                </p>
                <p className="text-[11px] text-slate-500">PRN: {PERSONAL_INFO.prn} • Class Representative (1 Year)</p>
              </div>
              <div className="text-right font-mono">
                <span className="font-bold text-indigo-700">CGPA: 9.15 / 10.0</span>
                <p className="text-[11px] text-slate-500">2023 – 2027</p>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Professional Experience
            </h2>
            <div className="space-y-4">
              {EXPERIENCES.map((exp, idx) => (
                <div key={idx}>
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-slate-900 text-sm">{exp.role} — <span className="text-indigo-700">{exp.company}</span></h3>
                    <span className="font-mono text-[11px] text-slate-500">{exp.period} | {exp.location}</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-slate-700 mt-1 pl-1">
                    {exp.responsibilities.map((r, rIdx) => (
                      <li key={rIdx} className="leading-snug">{r}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Publications */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Scholarly Publications &amp; Research
            </h2>
            <div className="space-y-3">
              {PUBLICATIONS.map((pub, idx) => (
                <div key={idx}>
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-slate-900">{pub.title}</h3>
                    <span className="font-mono text-[11px] text-slate-500">{pub.year}</span>
                  </div>
                  <p className="text-indigo-700 font-medium text-[11px]">{pub.citation}</p>
                  <p className="text-slate-600 text-[11px] line-clamp-2 mt-0.5">{pub.abstract}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Featured Projects
            </h2>
            <div className="space-y-3">
              {PROJECTS_DATA.slice(0, 4).map((p, idx) => (
                <div key={idx}>
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-slate-900">
                      {p.title} <span className="font-normal text-slate-500 text-[11px]">({p.technologies.slice(0, 4).join(', ')})</span>
                    </h3>
                    <span className="font-mono text-[11px] text-slate-500">{p.year}</span>
                  </div>
                  <p className="text-slate-700 text-[11px] mt-0.5">{p.description}</p>
                  <p className="text-slate-600 text-[11px] mt-0.5">
                    <span className="font-semibold text-slate-800">Impact: </span>{p.myContribution[0]}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Technical Skills Matrix
            </h2>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-[11px]">
              <div>
                <span className="font-bold text-slate-900">Languages: </span>
                <span className="text-slate-700">Python, Java, C++, SQL, JavaScript (ES6+), TypeScript</span>
              </div>
              <div>
                <span className="font-bold text-slate-900">AI / ML: </span>
                <span className="text-slate-700">YOLOv5, OpenCV, Scikit-Learn, TensorFlow, Multi-Agent AI, CNNs</span>
              </div>
              <div>
                <span className="font-bold text-slate-900">Web / Full Stack: </span>
                <span className="text-slate-700">React.js, Next.js, Tailwind CSS, REST APIs, Node.js, Flask</span>
              </div>
              <div>
                <span className="font-bold text-slate-900">Data Analytics: </span>
                <span className="text-slate-700">Pandas, NumPy, Matplotlib, Seaborn, ggplot2 (R), EDA</span>
              </div>
              <div>
                <span className="font-bold text-slate-900">Databases &amp; Cloud: </span>
                <span className="text-slate-700">MySQL, MongoDB, AWS Cloud Foundations, Google Cloud AI</span>
              </div>
              <div>
                <span className="font-bold text-slate-900">Embedded / IoT: </span>
                <span className="text-slate-700">ESP32, NodeMCU, LoRa wireless, Raspberry Pi, Embedded C</span>
              </div>
            </div>
          </div>

          {/* Honors & Hackathons */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Honors, Leadership &amp; Hackathons
            </h2>
            <ul className="list-disc list-inside space-y-1 text-slate-700 text-[11px]">
              <li><span className="font-bold text-slate-900">Merit Certificate for 9+ CGPA: </span>Awarded for maintaining top academic standing (9.15 CGPA) across 6 consecutive semesters.</li>
              <li><span className="font-bold text-slate-900">HackPrix Hackathon (Hyderabad): </span>Finalist for building real-time CrowdFlow Analytics on YOLOv5 and Raspberry Pi.</li>
              <li><span className="font-bold text-slate-900">ByteCamp Hackathon (Mumbai): </span>Built AI-Powered Smart Train Planner for Mumbai Local Railways (Team 404 Not Found).</li>
              <li><span className="font-bold text-slate-900">Smart India Hackathon (SIH): </span>Selected for presenting AgriNex Smart IoT Environmental Monitoring System.</li>
              <li><span className="font-bold text-slate-900">Class Representative: </span>Elected to represent the department for 1 year, coordinating student-faculty academic workflows.</li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
};
