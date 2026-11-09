import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  User, 
  Brain, 
  Code, 
  Search, 
  LineChart, 
  Lightbulb, 
  GraduationCap, 
  Award, 
  Users, 
  Layers,
  Sparkles,
  CheckCircle2,
  Cpu
} from 'lucide-react';

export const About: React.FC = () => {
  const corePillars = [
    {
      icon: <Brain className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
      title: "Artificial Intelligence & ML",
      description: "Designing applied ML models, YOLOv5 real-time vision pipelines, and multi-agent AI systems for real-world automation."
    },
    {
      icon: <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: "Software Engineering & Full Stack",
      description: "Developing responsive frontend architectures with React and Tailwind, building clean REST APIs, and writing performant Java/Python code."
    },
    {
      icon: <Search className="w-5 h-5 text-violet-600 dark:text-violet-400" />,
      title: "Research & Technical Publications",
      description: "Published researcher in JATIR and ResearchGate, investigating multi-agent orchestration, smart city traffic, and healthcare platforms."
    },
    {
      icon: <LineChart className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      title: "Data Analytics & Insights",
      description: "Transforming raw datasets into actionable insights using Pandas, NumPy, statistical testing, and exploratory visualization in Python and R."
    },
    {
      icon: <Cpu className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
      title: "Embedded & Smart City IoT",
      description: "Integrating microcontrollers (ESP32, NodeMCU, Raspberry Pi) and wireless protocols (LoRa) with cloud backends for edge intelligence."
    },
    {
      icon: <Users className="w-5 h-5 text-rose-600 dark:text-rose-400" />,
      title: "Leadership & Collaboration",
      description: "Served as elected Class Representative, fostering team collaboration across national hackathons in Hyderabad, Mumbai, and SIH."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white/60 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/70 border border-indigo-200 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <User className="w-3.5 h-3.5" />
            <span>Profile &amp; Perspective</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About Me
          </h2>
          <div className="w-16 h-1 bg-indigo-600 rounded-full mx-auto mt-4 mb-4" />
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            A passionate Computer Science engineer bridging academic research, applied artificial intelligence, and industry software development.
          </p>
        </div>

        {/* Narrative & Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          
          {/* Main Story Narrative */}
          <div className="lg:col-span-7 space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed text-base">
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800 space-y-4">
              <p className="font-medium text-slate-900 dark:text-white text-lg">
                "I'm <span className="text-indigo-600 dark:text-indigo-400 font-semibold">Saniya Salim Tamboli</span>, a Computer Science undergraduate specializing in Artificial Intelligence and Analytics at MIT ADT University, Pune."
              </p>
              
              <p>
                My journey has been driven by curiosity, continuous learning, and a passion for solving real-world problems through technology. Across my engineering journey, I've explored AI, machine learning, computer vision, IoT, full-stack development, and scholarly research.
              </p>
              
              <p>
                I have gained direct industry experience through internships — currently supporting software development and procedure automation at <span className="font-semibold text-slate-900 dark:text-white">Tata Motors Limited</span> in the Transmission Design Department, alongside previous roles at <span className="font-semibold text-slate-900 dark:text-white">Embedkari Pvt. Ltd.</span> and <span className="font-semibold text-slate-900 dark:text-white">Innobytes</span>.
              </p>

              <p>
                I enjoy transforming ideas into working solutions, documenting technical concepts, and continuously improving my engineering skills. Whether building real-time computer vision models for crowd safety or designing context-aware multi-agent AI frameworks, my focus remains on engineering reliable, impactful technology.
              </p>
            </div>

            {/* Academic Credentials Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-indigo-50/60 to-violet-50/60 dark:from-indigo-950/40 dark:to-violet-950/40 border border-indigo-100 dark:border-indigo-900/60 flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-indigo-700 dark:text-indigo-300">
                  Institution &amp; Program
                </span>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  MIT ADT University, Pune
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  B.Tech CSE (AI &amp; Analytics) • 2023–2027 • PRN: ADT23SOCB0975
                </p>
              </div>

              <div className="text-right">
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
                  Academic Standing
                </span>
                <div className="text-xl font-extrabold text-indigo-600 dark:text-indigo-400 font-mono">
                  9.15 CGPA
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  Merit Certificate Recipient
                </p>
              </div>
            </div>

          </div>

          {/* Core Areas of Interest Cards */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
              Primary Technical Focus &amp; Interests
            </h3>
            
            <div className="space-y-3">
              {PERSONAL_INFO.interests.map((interest, idx) => (
                <div 
                  key={idx}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-indigo-300 dark:hover:border-indigo-700 transition-all hover:translate-x-1"
                >
                  <div className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-400" />
                  <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                    {interest}
                  </span>
                </div>
              ))}
            </div>

            {/* Leadership Spotlight Card */}
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 shadow-sm mt-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400">
                  <Users className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                  Leadership &amp; Campus Coordination
                </h4>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Elected Class Representative for one year at MIT ADT University. Led peer academic alignment, facilitated student-faculty communication, and spearheaded collaborative hackathon project teams.
              </p>
            </div>

          </div>

        </div>

        {/* 6 Engineering Mindset Cards */}
        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight text-center mb-8">
            Engineering &amp; Research Mindset
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {corePillars.map((pillar, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-700/80 transition-all duration-300 group"
              >
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 w-fit mb-4 group-hover:scale-110 transition-transform">
                  {pillar.icon}
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {pillar.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

