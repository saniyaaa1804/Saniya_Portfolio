export interface Project {
  id: string;
  title: string;
  tagline: string;
  year: string;
  category: 'ai' | 'ml' | 'cv' | 'fullstack' | 'web' | 'iot' | 'analytics' | 'academic' | 'research';
  categoryLabel: string;
  featured: boolean;
  technologies: string[];
  description: string;
  problemStatement: string;
  proposedSolution: string;
  myContribution: string[];
  keyFeatures: string[];
  architectureOverview?: string;
  githubUrl?: string;
  liveUrl?: string;
  researchUrl?: string;
  stars?: number;
}

export interface JourneyYear {
  yearRange: string;
  academicYear: string;
  phaseTitle: string;
  phaseSubtitle: string;
  cgpaHighlight: string;
  summary: string;
  technologies: string[];
  projects: string[];
  academicWork: string[];
  internships?: string[];
  hackathons?: string[];
  research?: string[];
  milestones: string[];
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  isCurrent: boolean;
  type: 'Internship' | 'Full-Time';
  description: string;
  responsibilities: string[];
  technologies: string[];
  verified: boolean;
}

export interface Publication {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: string;
  domain: string;
  abstract: string;
  link: string;
  source: 'JATIR' | 'ResearchGate';
  citation: string;
  paperId?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  domain: string;
  credentialUrl?: string;
  verified: boolean;
}

export interface Achievement {
  title: string;
  organization: string;
  year: string;
  type: 'academic' | 'hackathon' | 'leadership' | 'research';
  description: string;
  badge: string;
}

export interface ArchiveItem {
  id: string;
  title: string;
  category: string;
  semester: string;
  year: string;
  description: string;
  technologies: string[];
  topicsCovered: string[];
  verifiedCode?: boolean;
}

export const PERSONAL_INFO = {
  name: "Saniya Salim Tamboli",
  preferredName: "Saniya Tamboli",
  monogram: "ST",
  degree: "B.Tech in Computer Science Engineering (Artificial Intelligence & Analytics)",
  university: "MIT ADT University, Pune",
  academicDuration: "2023–2027",
  cgpa: "9.15",
  location: "Pune, Maharashtra, India",
  headline: "Building Intelligent Solutions Through AI, Software & Innovation.",
  shortBio: "I'm a Computer Science undergraduate specializing in Artificial Intelligence & Analytics at MIT ADT University. I enjoy building practical technology solutions, exploring intelligent systems, developing software applications and translating complex technical concepts into meaningful products.",
  extendedBio: "I'm Saniya Salim Tamboli, a Computer Science undergraduate specializing in Artificial Intelligence and Analytics at MIT ADT University, Pune. My journey has been driven by curiosity, continuous learning and a passion for solving real-world problems through technology. Across my engineering journey, I've explored AI, machine learning, computer vision, IoT, full-stack development and research. I've also gained practical industry experience through internships and collaborative technical projects. I enjoy transforming ideas into working solutions, documenting technical concepts and continuously improving my engineering skills.",
  motto: "Learn. Build. Innovate. Repeat.",
  email: "saniyatamboli0018@gmail.com",
  phoneDisplay: "+91 81779 73774",
  whatsappUrl: "https://wa.me/918177973774",
  linkedinUrl: "https://www.linkedin.com/in/saniya-tamboli-1804-/",
  githubUrl: "https://github.com/saniyaaa1804",
  leetcodeUrl: "https://leetcode.com/u/saniyaaa_1804/",
  prn: "ADT23SOCB0975",
  quickHighlights: [
    { label: "CGPA", value: "9.15", subtext: "MIT ADT University" },
    { label: "Academic Journey", value: "2023–2027", subtext: "B.Tech CSE (AI & Analytics)" },
    { label: "Industry Role", value: "Tata Motors Intern", subtext: "Software & Transmission Design" },
    { label: "Scholarly Research", value: "3 Publications", subtext: "JATIR & ResearchGate" },
  ],
  interests: [
    "Artificial Intelligence & Agentic AI",
    "Computer Vision & Pattern Recognition",
    "Full-Stack Web Engineering",
    "Data Analytics & Exploratory Modeling",
    "Smart City IoT Systems",
    "Technical Research & Documentation"
  ]
};

export const JOURNEY_DATA: JourneyYear[] = [
  {
    yearRange: "2023–2024",
    academicYear: "Year 1 – Semester 1 & 2",
    phaseTitle: "Foundations of Computer Science & Algorithmic Thinking",
    phaseSubtitle: "Object-Oriented Programming, Data Structures & Web Fundamentals",
    cgpaHighlight: "9.1+ Pointer",
    summary: "Built an uncompromising computer science foundation through low-level memory concepts, data structure implementations, object-oriented software engineering in Java and C++, and introductory database systems.",
    technologies: ["C++", "Java", "Object-Oriented Programming", "Data Structures", "HTML5", "CSS3", "JavaScript", "SQL", "Git"],
    projects: [
      "Student Academic Record Management (Java OOP)",
      "Interactive Web Portfolios & Layouts (HTML/CSS/JS)",
      "Algorithmic Problem Solving in Java (DS Implementations)"
    ],
    academicWork: [
      "Core Programming Fundamentals Lab (C++ & Java)",
      "Data Structures practicals (Stacks, Queues, Linked Lists, Binary Trees)",
      "Database Management Systems & Relational Schema Design",
      "Computer Organization and Hardware Fundamentals"
    ],
    milestones: [
      "Achieved 9+ CGPA milestone in freshman year",
      "Elected as Class Representative for academic coordination and student-faculty leadership",
      "Consistent problem-solving practice on LeetCode"
    ]
  },
  {
    yearRange: "2024–2025",
    academicYear: "Year 2 – Semester 3 & 4",
    phaseTitle: "Machine Learning, Computer Vision & Full-Stack Expansion",
    phaseSubtitle: "Applied AI, IoT Integration & National Hackathons",
    cgpaHighlight: "9.19 Pointer Peak",
    summary: "Rapid technical acceleration into applied artificial intelligence, YOLOv5 real-time vision pipelines, and full-stack web applications. Led engineering efforts at competitive national hackathons in Hyderabad and Mumbai, and completed dual internships.",
    technologies: ["Python", "YOLOv5", "OpenCV", "Flask", "React.js", "Tailwind CSS", "REST APIs", "Embedded C", "ESP32", "NodeMCU", "MongoDB"],
    projects: [
      "CrowdFlow Analytics System (HackPrix Hyderabad - Real-time Vision)",
      "AyuBarter – AI-Integrated Ayurvedic Healthcare Platform",
      "AgriGuard / AgriNex – Smart IoT-Based Agricultural Monitoring System",
      "Healthcare Management System (Hospital Workflow Automation)",
      "AI-Powered Smart Train Planner (ByteCamp Mumbai - Team 404 Not Found)"
    ],
    academicWork: [
      "Design & Analysis of Algorithms (DAA - NPTEL certified coursework)",
      "Machine Learning Lab practicals (Regression, Classification, Clustering)",
      "Database Systems with MongoDB and MySQL integration",
      "Embedded Systems, Microcontrollers and Sensor interfacing"
    ],
    internships: [
      "Embedkari Pvt. Ltd., Bangalore (Embedded Systems Intern) – Microcontroller debugging and C firmware",
      "Innobytes (Full Stack Development Intern) – React.js components and REST API integration"
    ],
    hackathons: [
      "HackPrix 2025 (Hyderabad) – Built CrowdFlow AI Analytics with YOLOv5 & Flask",
      "ByteCamp 2025 (Mumbai) – Built AI Smart Train Planner with Team 404 Not Found",
      "Smart India Hackathon (SIH) – AgriNex Mine & Agricultural Monitoring System"
    ],
    research: [
      "Authored AyuBarter research publication for integrated tele-consultation and barter healthcare"
    ],
    milestones: [
      "Merit Certificate for maintaining 9+ CGPA at MIT ADT University",
      "First national hackathon finalist honors in Hyderabad & Mumbai",
      "Published first preprint on ResearchGate"
    ]
  },
  {
    yearRange: "2025–2026",
    academicYear: "Year 3 – Semester 5 & 6",
    phaseTitle: "Smart City Infrastructure & Research Publications",
    phaseSubtitle: "Urban Intelligence, Cloud Platforms & Advanced ML",
    cgpaHighlight: "9.15 CGPA Maintained",
    summary: "Scaled algorithmic knowledge into large-scale urban infrastructure modeling and scholarly research. Designed smart city transportation algorithms, published peer-reviewed research, and earned cloud foundations certifications.",
    technologies: ["Python", "TensorFlow", "Scikit-Learn", "Computer Vision", "Next.js", "Node.js", "Docker", "AWS Cloud", "Exploratory Data Analysis"],
    projects: [
      "Smart Traffic and Parking Management System (Pune Smart City)",
      "Emotion-Detector (Convolutional Neural Network for Facial Affect)",
      "E-Cart & Food-Del Full-Stack Applications",
      "Digital Validation and Tracking System (DVTS) Foundations"
    ],
    academicWork: [
      "Machine Learning Lab Experiments 1 through 9 (SVM, Naive Bayes, Decision Trees, K-Means)",
      "Cyber Forensics & Information Security Coursework",
      "Natural Language Processing Foundations & Statistical Text Analysis",
      "Cloud Foundations & Serverless Architectures"
    ],
    research: [
      "Pune Smart City: An AI & IoT Based Smart Traffic & Parking Management System for Pune City (ResearchGate 2026)",
      "AyuBarter: An Integrated E-commerce Platform with Barter Exchange and Tele-Consultation for Ayurvedic Healthcare (ResearchGate 2025)"
    ],
    milestones: [
      "Two active research papers indexed on ResearchGate",
      "Earned AWS Academy Cloud Foundations and DeepLearning.AI credentials",
      "Secured prestigious technical internship at Tata Motors Limited"
    ]
  },
  {
    yearRange: "2026–2027",
    academicYear: "Year 4 – Semester 7 & 8",
    phaseTitle: "Agentic AI, Multi-Agent Systems & Industrial Engineering",
    phaseSubtitle: "Tata Motors Internship, International Journal Publication & Industry Readiness",
    cgpaHighlight: "9.15 Overall CGPA",
    summary: "Applying advanced software engineering and industrial data automation within the Transmission Design Department at Tata Motors Limited. Published groundbreaking research in JATIR on Context-Aware Multi-Agent AI Frameworks (BizMind).",
    technologies: ["Agentic AI", "Multi-Agent Architectures", "RAG & Vector Memory", "Python Data Automation", "Transmission Telemetry", "Enterprise Software Engineering"],
    projects: [
      "BizMind Multi-Agent Autonomous Business Intelligence Framework",
      "Tata Motors Transmission Design Validation & Procedure Automation",
      "Enterprise NLP & Semantic Query Engine",
      "Capstone Engineering Artifacts & Placement Portfolios"
    ],
    academicWork: [
      "Natural Language Processing Lab Practicals 1 to 10 (Transformers, Embeddings, Tokenization)",
      "Advanced Agentic Systems & Autonomous Workflow Modeling",
      "Enterprise Software Lifecycle & Production Quality Assurance"
    ],
    internships: [
      "Tata Motors Limited (Software Developer & Transmission Design Intern, 2026–Present)"
    ],
    research: [
      "BizMind: A Context-Aware Multi-Agent AI Framework for Business Planning, Daily Management, and Decision Support (JATIR Journal, Nov 2026)"
    ],
    milestones: [
      "Published in peer-reviewed Journal of Academic Trends & Innovative Research (JATIR)",
      "Direct technical contributions to transmission design analysis at Tata Motors",
      "Comprehensive four-year B.Tech journey culminating in top academic honors (9.15 CGPA)"
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "smart-traffic-parking",
    title: "Smart Traffic and Parking Management System",
    tagline: "AI and IoT-based smart city solution for real-time traffic flow prediction and automated parking allocation.",
    year: "2026",
    category: "ai",
    categoryLabel: "Artificial Intelligence & IoT",
    featured: true,
    technologies: ["Python", "Machine Learning", "IoT Sensors", "JavaScript", "React.js", "Predictive Analytics", "REST APIs"],
    description: "An AI-based smart city transportation solution that monitors vehicular flow and parking slot availability in real time using edge sensors and predictive machine learning models. Built to tackle urban congestion in high-density metropolitan areas like Pune City.",
    problemStatement: "Metropolitan centers face extreme vehicular congestion, prolonged parking search times (averaging 15–20 minutes per vehicle), and elevated carbon emissions due to a complete lack of real-time predictive visibility across road junctions and parking facilities.",
    proposedSolution: "Developed a distributed AI & IoT framework that ingests live sensor feeds, runs predictive traffic congestion models, dynamically adjusts signal timing recommendations, and guides commuters to the nearest available parking space via an interactive map dashboard.",
    myContribution: [
      "Designed the end-to-end data processing pipeline for multi-sensor traffic density telemetry.",
      "Developed predictive analytics scripts in Python to estimate junction bottle-necks up to 30 minutes in advance.",
      "Integrated the interactive frontend dashboard for municipal transit monitors and commuters.",
      "Co-authored the accompanying research paper published on ResearchGate."
    ],
    keyFeatures: [
      "Real-time sensor-driven congestion monitoring across junctions",
      "Predictive parking space availability indexing with smart route recommendations",
      "Municipal authority command dashboard with heatmap analytics",
      "Scalable RESTful API architecture ready for smart city deployment",
      "Verified research publication backing the core algorithmic model"
    ],
    architectureOverview: "Edge IoT Sensors & Cameras -> Message Broker -> Python Machine Learning Analytics Engine -> FastAPI/REST Endpoints -> React Interactive Map Dashboard",
    githubUrl: "https://github.com/saniyaaa1804/Smart-Traffic-and-Parking-Management-System",
    researchUrl: "https://www.researchgate.net/publication/404209076_Pune_Smart_City_An_AI_and_IoT_Based_Smart_Traffic_and_Parking_Management_System_for_Pune_City"
  },
  {
    id: "crowdflow-analytics",
    title: "CrowdFlow Analytics System",
    tagline: "Real-time crowd monitoring and density analytics using YOLOv5 computer vision and live camera feeds.",
    year: "2025",
    category: "cv",
    categoryLabel: "Computer Vision & Edge AI",
    featured: true,
    technologies: ["Python", "YOLOv5", "OpenCV", "Flask", "Raspberry Pi", "React.js", "Tailwind CSS"],
    description: "An intelligent computer vision platform engineered during HackPrix (Hyderabad) that processes live camera streams using custom-tuned YOLOv5 models to calculate crowd density, detect stampede risks, and generate spatial heatmaps for public transit hubs and stadiums.",
    problemStatement: "Public gatherings, railway stations, and stadiums frequently experience fatal stampedes and suffocating bottlenecks because security staff lack automated, real-time spatial density awareness and predictive early-warning triggers.",
    proposedSolution: "Deployed an edge-compatible computer vision pipeline using YOLOv5 and OpenCV connected to live camera feeds and Raspberry Pi hardware. The system calculates real-time occupant counts, generates density gradient heatmaps, and issues automated alerts when safe thresholds are breached.",
    myContribution: [
      "Fine-tuned the YOLOv5 object detection pipeline for overhead and oblique camera angles.",
      "Engineered the Flask REST service delivering low-latency inference coordinates to the frontend.",
      "Built the responsive React.js live dashboard displaying real-time metrics, warnings, and hub statistics (Metro, Railway, Malls).",
      "Represented the team in live hackathon demonstrations at HackPrix Hyderabad."
    ],
    keyFeatures: [
      "Real-time people detection and bi-directional boundary counting",
      "Dynamic density zone classification (Normal, Elevated, Critical Risk)",
      "Real-time visual heatmap rendering over live video feeds",
      "Specialized modules for Railway platforms, Metro stations, and Commercial Malls",
      "Low-latency alert broadcast system for safety dispatchers"
    ],
    architectureOverview: "Live RTSP Camera Stream -> OpenCV Preprocessing -> YOLOv5 Inference -> Flask WebSocket/REST API -> React + Tailwind Visual Dashboard",
    githubUrl: "https://github.com/saniyaaa1804/CrowdFlow_HackPrix"
  },
  {
    id: "ayubarter-platform",
    title: "AyuBarter – AI-Integrated Healthcare Platform",
    tagline: "Ayurvedic wellness ecosystem merging AI health recommendations, tele-consultation, and barter exchange.",
    year: "2025",
    category: "fullstack",
    categoryLabel: "Full Stack & AI HealthTech",
    featured: true,
    technologies: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "REST APIs", "Socket.IO", "AI Diagnosis Engine"],
    description: "A comprehensive health-tech platform that pairs holistic Ayurvedic medicine with modern AI intelligence, enabling users to access personalized wellness regimens, book verified practitioner tele-consultations, and trade authentic wellness goods through a community barter exchange.",
    problemStatement: "Traditional Ayurvedic medicine suffers from a lack of digital verification, scattered supply chains for authentic herbs, and limited access to qualified Ayurvedic practitioners for urban and rural populations.",
    proposedSolution: "Constructed an integrated web platform featuring an AI symptom-to-remedy recommendation engine, a verified doctor consultation booking scheduler, and a hyperlocal peer-to-peer barter marketplace for organic medicinal supplies.",
    myContribution: [
      "Engineered frontend user flows using React, TypeScript, and modern component architectures.",
      "Implemented the Ayurvedic recommendation logic matching user health profiles with validated botanical remedies.",
      "Built the barter exchange negotiation interface allowing users to propose, counter, and complete product swaps.",
      "Co-authored the peer-reviewed research paper detailing the platform's multi-tier architecture."
    ],
    keyFeatures: [
      "AI-driven Ayurvedic wellness and Dosha assessment engine",
      "Interactive HealthCart with community barter exchange mechanism",
      "Tele-consultation booking interface with certified practitioners",
      "Real-time notification engine powered by WebSockets / Socket.IO",
      "Published research paper on ResearchGate"
    ],
    architectureOverview: "Next.js/React Frontend -> TypeScript REST & Socket API -> Authentication & Database Tier -> AI Remedy Matching Model",
    githubUrl: "https://github.com/saniyaaa1804/AyuBarter",
    researchUrl: "https://www.researchgate.net/publication/397386324_AyuBarter_An_Integrated_E-commerce_Platform_with_Barter_Exchange_and_Tele-Consultation_for_Ayurvedic_Healthcare"
  },
  {
    id: "smart-train-planner",
    title: "AI Smart Train Planner – Mumbai Local Railways",
    tagline: "Intelligent crowd-aware train mobility assistant developed at ByteCamp Mumbai (Team 404 Not Found).",
    year: "2025",
    category: "ai",
    categoryLabel: "AI & Smart Mobility",
    featured: true,
    technologies: ["Python", "YOLOv5", "OpenCV", "Flask", "HTML5/CSS3", "JavaScript", "IoT Sensors"],
    description: "Built for the high-density Mumbai Suburban Railway system carrying 7.5+ million daily commuters. Leverages YOLO computer vision and IoT sensor estimation to monitor platform congestion, predict train compartment occupancy, and suggest safer alternative boarding routes.",
    problemStatement: "Extreme platform rush and unexpected compartment bottlenecks in Mumbai locals cause dangerous accidents, severe delays, and zero visibility for daily commuters attempting to board safely.",
    proposedSolution: "An automated commuter intelligence platform that detects crowd density on platforms using YOLOv5, estimates compartment fill rates, and delivers real-time congestion alerts to both travelers and railway station masters.",
    myContribution: [
      "Co-developed the YOLO-based passenger detection and occupancy calculation algorithms.",
      "Designed the Flask web backend and commuter guidance interface under 36-hour hackathon constraints.",
      "Implemented congestion predictive alerts based on peak-hour arrival timetables.",
      "Collaborated as a core developer in Team '404 Not Found' at ByteCamp Mumbai."
    ],
    keyFeatures: [
      "Real-time platform crowd density estimation",
      "Train compartment occupancy indicators (Green / Amber / Red)",
      "Peak-hour congestion forecasting using historical traffic data",
      "Alternative route and safer coach boarding recommendations",
      "Dedicated authority dashboard for station management"
    ],
    architectureOverview: "Station CCTV Feed -> YOLOv5 Person Detection -> Compartment Fill Model -> Flask API Server -> Public Display & Mobile Web UI",
    githubUrl: "https://github.com/saniyaaa1804/404_NOT_FOUND_byteCamp2025"
  },
  {
    id: "agriguard-iot",
    title: "AgriGuard – Smart IoT Agricultural Monitoring & Automation",
    tagline: "Precision farming and irrigation automation system powered by ESP32 microcontrollers and LoRa.",
    year: "2025",
    category: "iot",
    categoryLabel: "IoT & Embedded Systems",
    featured: false,
    technologies: ["ESP32", "NodeMCU", "LoRa", "Node.js", "MongoDB", "React.js", "Embedded C"],
    description: "An automated precision agriculture system built to monitor soil moisture, ambient humidity, temperature, and solar irradiance across distributed crop zones, activating automated drip irrigation valves when moisture drops below threshold levels.",
    problemStatement: "Over-irrigation and manual water valve operation in agriculture cause massive freshwater wastage, root rot, and increased operational costs for farmers lacking access to distributed telemetry.",
    proposedSolution: "A distributed sensor node network utilizing low-power ESP32 and NodeMCU microcontrollers with LoRa communication for long-range farmland data transmission to a central gateway, with an interactive web dashboard for real-time monitoring and override control.",
    myContribution: [
      "Wrote and calibrated embedded C firmware for sensor reading and ADC calibration on ESP32.",
      "Configured data serialization and transmission packets across LoRa point-to-point links.",
      "Developed the Node.js backend to log telemetry into MongoDB and serve telemetry to the React dashboard."
    ],
    keyFeatures: [
      "Automated solenoid valve trigger based on soil moisture thresholds",
      "Long-range LoRa wireless communication for large farm acreage",
      "Historical soil moisture trend analysis and weather correlation",
      "Manual remote irrigation override from any mobile or desktop browser"
    ],
    architectureOverview: "Soil/Temp/Humidity Sensors -> ESP32/NodeMCU -> LoRa Transmitter -> LoRa Receiver Gateway -> Node.js/Express API -> MongoDB -> React Dashboard"
  },
  {
    id: "bizmind-ai-framework",
    title: "BizMind: Context-Aware Multi-Agent AI Framework",
    tagline: "Autonomous multi-agent architecture for enterprise business planning, daily operations, and decision intelligence.",
    year: "2026",
    category: "research",
    categoryLabel: "Agentic AI & Research",
    featured: true,
    technologies: ["Agentic AI", "Multi-Agent Systems", "Python", "RAG", "LLM Orchestration", "Vector Memory"],
    description: "Scholarly research and reference implementation of a context-aware multi-agent architecture designed to automate strategic business analysis, daily task prioritization, financial projection simulations, and executive decision support through collaborative autonomous agents.",
    problemStatement: "Modern enterprises drown in fragmented data silos, where traditional monolithic AI tools fail to maintain contextual continuity across multi-departmental workflows such as finance, supply chain, and daily task management.",
    proposedSolution: "Proposed and prototyped a hierarchical multi-agent framework where specialized autonomous agents (Planner, Financial Analyst, Task Orchestrator, Reviewer) collaborate via a shared vector memory and contextual message bus.",
    myContribution: [
      "Conceived the multi-agent orchestration architecture and inter-agent communication protocol.",
      "Formulated the contextual memory retrieval mechanisms for long-horizon enterprise workflows.",
      "Authored the full research paper published in the Journal of Academic Trends & Innovative Research (JATIR).",
      "Validated agent role specialization against simulated business operational cases."
    ],
    keyFeatures: [
      "Role-specialized autonomous agent swarms (Strategic Planner, Operator, Critic)",
      "Context-aware persistent vector memory preventing hallucination across conversations",
      "Automated daily task decomposition and dependency resolution",
      "Peer-reviewed publication in JATIR (Volume 2, Issue 11, November 2026)"
    ],
    githubUrl: "https://github.com/saniyaaa1804/BizMind_Research-Paper-",
    researchUrl: "https://jatir.org/article.php?paperid=141252"
  },
  {
    id: "emotion-detector-cv",
    title: "Facial Emotion Recognition System",
    tagline: "Deep learning computer vision application for real-time facial expression and affect classification.",
    year: "2025",
    category: "cv",
    categoryLabel: "Computer Vision & Deep Learning",
    featured: false,
    technologies: ["Python", "OpenCV", "TensorFlow", "Keras", "Convolutional Neural Networks", "Haar Cascades"],
    description: "A real-time facial emotion recognition pipeline that captures live video frames, detects facial bounding boxes using Haar Cascade classifiers, and categorizes emotional states (Happy, Neutral, Sad, Surprised, Angry) via a trained Convolutional Neural Network.",
    problemStatement: "Human-computer interaction and mental health monitoring interfaces struggle to accurately quantify user emotional response in real time without bulky wearable hardware.",
    proposedSolution: "Trained a multi-layer CNN on facial expression benchmarks, integrated with OpenCV for high-frame-rate webcam tracking and live classification visualization.",
    myContribution: [
      "Engineered data augmentation scripts for balanced facial emotion training datasets.",
      "Optimized CNN layer architecture to achieve high inference speed on standard CPU machines.",
      "Built the live video overlay displaying confidence percentages for predicted emotions."
    ],
    keyFeatures: [
      "Real-time webcam inference at 30+ frames per second",
      "Multi-face simultaneous emotion tracking",
      "Confidence histogram overlay for top predicted sentiments",
      "Modular Python codebase easily integrated into user experience testing"
    ],
    githubUrl: "https://github.com/saniyaaa1804/Emotion-Detector"
  },
  {
    id: "healthcare-mgmt-system",
    title: "Healthcare Management System",
    tagline: "Centralized hospital workflow application for patient admissions, diagnostic records, and doctor scheduling.",
    year: "2024",
    category: "academic",
    categoryLabel: "Full Stack & Academic Engineering",
    featured: false,
    technologies: ["Java", "MySQL", "JDBC", "HTML/CSS", "JavaScript", "OOP"],
    description: "An academic healthcare informatics solution designed to streamline hospital administration, maintaining encrypted electronic health records (EHR), physician availability calendars, patient admission histories, and pharmacy dispensing logs.",
    problemStatement: "Paper-based and disjointed hospital recordkeeping introduces human transcription errors, delayed emergency consultations, and lost patient diagnostic histories.",
    proposedSolution: "Developed a secure multi-role desktop and web application ensuring normalized database relationships, role-based access control for doctors and nurses, and automated appointment scheduling.",
    myContribution: [
      "Designed normalized 3NF relational database schemas for hospital operations.",
      "Implemented secure CRUD controllers and appointment validation algorithms in Java.",
      "Created the user interface for administrative staff and clinical practitioners."
    ],
    keyFeatures: [
      "Role-based authentication for Administrators, Doctors, and Receptionists",
      "Automated appointment conflict resolution engine",
      "Comprehensive patient diagnostic history and prescription tracking",
      "Automated invoice and discharge summary generation"
    ]
  },
  {
    id: "tata-motors-dvts",
    title: "Digital Validation & Tracking System (DVTS)",
    tagline: "Internal procedure tracking and transmission telemetry validation developed during Tata Motors internship.",
    year: "2026",
    category: "fullstack",
    categoryLabel: "Enterprise Software & Automation",
    featured: false,
    technologies: ["Python", "Data Automation", "Structured Workflows", "System Testing", "Technical Verification"],
    description: "Software and data automation tools developed within the Transmission Design Department at Tata Motors Limited to assist engineers in validating transmission test telemetry, tracking testing procedures, and enforcing rigorous engineering compliance.",
    problemStatement: "Automotive transmission design requires thousands of rigorous validation checks across test cycles, which previously suffered from fragmented documentation and manual verification lags.",
    proposedSolution: "Developed structured data parsing scripts and procedure tracking workflows to verify test compliance, cross-reference simulation logs, and maintain uncompromising accuracy in technical reporting.",
    myContribution: [
      "Authored automated verification scripts to process and validate engineering telemetry.",
      "Maintained structured test procedure logs compliant with automotive industry standards.",
      "Assisted senior transmission design engineers in data consolidation and anomaly flagging."
    ],
    keyFeatures: [
      "Automated verification of transmission sensor logs against threshold benchmarks",
      "Structured procedure validation adhering to strict engineering protocols",
      "Fast data aggregation reducing manual review time for design leads",
      "Industrial-grade accuracy and repeatability"
    ]
  },
  {
    id: "challenge-code-dsa",
    title: "Algorithmic Problem Solving & Data Structures Suite",
    tagline: "Optimized Java and C++ implementations of advanced data structures, graph traversals, and algorithms.",
    year: "2024",
    category: "academic",
    categoryLabel: "Algorithms & Data Structures",
    featured: false,
    technologies: ["Java", "C++", "Data Structures", "Algorithms", "Dynamic Programming", "Graph Theory"],
    description: "A comprehensive repository of verified algorithmic solutions spanning dynamic programming, binary search trees, graph shortest-path algorithms, priority queues, and recursion, built throughout B.Tech coursework and competitive programming on LeetCode.",
    problemStatement: "Developing high-efficiency software requires mastery of time and space complexity trade-offs and deep understanding of low-level memory allocation.",
    proposedSolution: "Constructed documented, benchmarked implementations of fundamental and advanced data structures with unit tests verifying asymptotic bounds.",
    myContribution: [
      "Implemented 100+ algorithmic solutions in Java and C++.",
      "Authored clean technical explanations and time complexity proofs for each problem pattern."
    ],
    keyFeatures: [
      "Implementations of AVL Trees, Segment Trees, Disjoint Set Union (DSU)",
      "Graph traversal algorithms (Dijkstra, BFS, DFS, Bellman-Ford)",
      "Complete LeetCode challenge tracking and revision notes",
      "Rigorous unit testing for boundary condition validation"
    ],
    githubUrl: "https://github.com/saniyaaa1804/Challenge-code"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Tata Motors Limited",
    role: "Software Developer & Transmission Design Intern",
    location: "Pune, Maharashtra, India",
    period: "2026 – Present",
    isCurrent: true,
    type: "Internship",
    description: "Selected to work within the prestigious Transmission Design Department at Tata Motors Limited, supporting critical engineering workflows through software development, automated data analysis, and procedure verification.",
    responsibilities: [
      "Supporting software and design automation initiatives in the Transmission Design Department.",
      "Building scripts for data analysis, sensor telemetry validation, and procedure tracking.",
      "Adhering to structured technical procedures, verifying experimental results, and upholding strict automotive quality standards.",
      "Collaborating with senior transmission engineers to optimize testing documentation and workflow repeatability."
    ],
    technologies: ["Python", "Data Automation", "Telemetry Verification", "Software Engineering", "Technical Documentation"],
    verified: true
  },
  {
    company: "Embedkari Pvt. Ltd.",
    role: "Embedded Systems Intern",
    location: "Bangalore, India (Remote)",
    period: "2025",
    isCurrent: false,
    type: "Internship",
    description: "Gained intensive hands-on experience in embedded C programming, hardware-software co-design, and real-time microcontroller validation for industrial applications.",
    responsibilities: [
      "Tested, debugged, and optimized embedded C firmware for microcontroller targets.",
      "Executed hardware-software integration tests and verified sensor peripheral communication protocols.",
      "Identified timing bugs and validated system behavior under varied operating conditions.",
      "Documented embedded test benches and operational diagnostics for engineering peers."
    ],
    technologies: ["Embedded C", "Microcontrollers", "Debugging", "Hardware Integration", "Sensor Protocols"],
    verified: true
  },
  {
    company: "Innobytes",
    role: "Full Stack Development Intern",
    location: "Pune, India (Hybrid)",
    period: "2025",
    isCurrent: false,
    type: "Internship",
    description: "Contributed to production web application modules, focusing on reusable component engineering with React.js, responsive layouts with Tailwind CSS, and REST API integration.",
    responsibilities: [
      "Developed high-performance frontend UI modules in React.js and modern JavaScript.",
      "Engineered styled, responsive user interfaces following strict design system guidelines using Tailwind CSS.",
      "Integrated and tested RESTful API endpoints for asynchronous data fetching and state synchronization.",
      "Conducted unit testing and cross-browser validation against functional product requirements."
    ],
    technologies: ["React.js", "Tailwind CSS", "JavaScript", "REST APIs", "Git", "Frontend Testing"],
    verified: true
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    id: "bizmind-jatir-2026",
    title: "BizMind: A Context-Aware Multi-Agent AI Framework for Business Planning, Daily Management, and Decision Support",
    authors: "Saniya Salim Tamboli, et al.",
    journal: "Journal of Academic Trends & Innovative Research (JATIR)",
    year: "2026",
    domain: "Agentic AI & Multi-Agent Systems",
    abstract: "Modern enterprise operations suffer from disjointed operational silos and lack of context retention across business workflows. In this paper, we propose BizMind, an autonomous context-aware multi-agent AI framework that orchestrates specialized AI agents across strategic business planning, daily operational management, and financial decision support. The framework utilizes dynamic vector memory architectures and hierarchical multi-agent coordination protocols to ensure seamless alignment between long-term corporate roadmaps and daily execution.",
    link: "https://jatir.org/article.php?paperid=141252",
    source: "JATIR",
    citation: "Journal of Academic Trends & Innovative Research (JATIR), Volume 2, Issue 11, November 2026. Paper ID: 141252.",
    paperId: "141252"
  },
  {
    id: "pune-smart-city-2026",
    title: "Pune Smart City: An AI & IoT Based Smart Traffic & Parking Management System for Pune City",
    authors: "Saniya Salim Tamboli, et al.",
    journal: "ResearchGate Technical Publications",
    year: "2026",
    domain: "Smart Cities, AI & Internet of Things",
    abstract: "Rapid urban growth in metropolitan centers like Pune has overwhelmed existing transport networks, causing high vehicular emissions and extensive delays. This research proposes an integrated AI and IoT architecture combining edge sensor networks, computer vision traffic flow monitoring, and predictive machine learning models to dynamically balance traffic light cycles and route motorists to real-time available parking infrastructure across city nodes.",
    link: "https://www.researchgate.net/publication/404209076_Pune_Smart_City_An_AI_and_IoT_Based_Smart_Traffic_and_Parking_Management_System_for_Pune_City",
    source: "ResearchGate",
    citation: "ResearchGate Publication ID: 404209076, 2026.",
    paperId: "404209076"
  },
  {
    id: "ayubarter-research-2025",
    title: "AyuBarter: An Integrated E-commerce Platform with Barter Exchange and Tele-Consultation for Ayurvedic Healthcare",
    authors: "Saniya Salim Tamboli, et al.",
    journal: "ResearchGate Technical Publications",
    year: "2025",
    domain: "HealthTech & Distributed E-Commerce",
    abstract: "Ayurvedic wellness represents a holistic healthcare paradigm that often lacks accessible digital integration. This paper details AyuBarter, a multi-tier web platform uniting an AI-driven symptom-to-remedy recommendation engine with certified practitioner tele-consultation and a hyperlocal barter exchange system. The system bridges digital accessibility barriers, promoting community-supported wellness resource redistribution.",
    link: "https://www.researchgate.net/publication/397386324_AyuBarter_An_Integrated_E-commerce_Platform_with_Barter_Exchange_and_Tele-Consultation_for_Ayurvedic_Healthcare",
    source: "ResearchGate",
    citation: "ResearchGate Publication ID: 397386324, 2025.",
    paperId: "397386324"
  }
];

export const SKILL_CATEGORIES = [
  {
    category: "Programming Languages",
    description: "Core languages used across production systems, algorithmic modeling, and systems programming.",
    skills: [
      { name: "Python", level: "Advanced", highlight: "Primary language for AI, ML, Data Analytics & Scripting" },
      { name: "Java", level: "Advanced", highlight: "Enterprise OOP, Data Structures & Spring foundations" },
      { name: "C++", level: "Proficient", highlight: "Systems programming, DSA & Memory optimization" },
      { name: "SQL", level: "Advanced", highlight: "Complex queries, indexing, joins & schema normalization" }
    ]
  },
  {
    category: "AI & Machine Learning",
    description: "Modern machine learning frameworks, computer vision algorithms, and agentic workflows.",
    skills: [
      { name: "Machine Learning", level: "Advanced", highlight: "Supervised, unsupervised, regression, classification & clustering" },
      { name: "YOLOv5", level: "Advanced", highlight: "Real-time object detection, transfer learning & edge inference" },
      { name: "Computer Vision", level: "Advanced", highlight: "OpenCV, video stream processing, Haar cascades & heatmaps" },
      { name: "TensorFlow & Keras", level: "Proficient", highlight: "CNN architectures, neural networks & model training" },
      { name: "Scikit-Learn", level: "Advanced", highlight: "Feature engineering, model pipelines, SVM, Random Forests" },
      { name: "Agentic AI", level: "Advanced", highlight: "Multi-agent frameworks, tool-use, RAG & autonomous planning" },
      { name: "Generative AI & LLMs", level: "Proficient", highlight: "Prompt engineering, contextual embeddings & fine-tuning" },
      { name: "NLP Basics", level: "Proficient", highlight: "Tokenization, lemmatization, TF-IDF, sentiment analysis" }
    ]
  },
  {
    category: "Web Development",
    description: "Frontend and backend web technologies building accessible, scalable user interfaces.",
    skills: [
      { name: "React.js", level: "Advanced", highlight: "Modern hooks, component lifecycles, context API & SPA design" },
      { name: "JavaScript (ES6+)", level: "Advanced", highlight: "Async/await, DOM manipulation, promises & event architecture" },
      { name: "Tailwind CSS", level: "Advanced", highlight: "Design systems, responsive utility layouts & dark mode" },
      { name: "REST APIs", level: "Advanced", highlight: "API design, endpoint integration, JSON schemas & Postman" },
      { name: "HTML5 & CSS3", level: "Advanced", highlight: "Semantic layout, CSS Grid, Flexbox & accessible markup" },
      { name: "TypeScript", level: "Proficient", highlight: "Static typing, interfaces & robust scalable architecture" }
    ]
  },
  {
    category: "Data Analytics & Mathematics",
    description: "Statistical computing, exploratory data analysis, and visual storytelling.",
    skills: [
      { name: "Pandas", level: "Advanced", highlight: "Data manipulation, cleaning, aggregation & timeseries analysis" },
      { name: "NumPy", level: "Advanced", highlight: "Multi-dimensional array operations & mathematical computing" },
      { name: "Matplotlib & Seaborn", level: "Advanced", highlight: "Statistical plotting, heatmaps, distribution graphs" },
      { name: "ggplot2 (R)", level: "Proficient", highlight: "Grammar of graphics and academic data visualization" },
      { name: "Exploratory Data Analysis", level: "Advanced", highlight: "Hypothesis testing, outlier detection & correlation analysis" }
    ]
  },
  {
    category: "Databases & Tools",
    description: "Storage engines, developer tooling, and collaborative engineering environments.",
    skills: [
      { name: "MySQL", level: "Advanced", highlight: "Relational modeling, triggers, stored procedures & optimization" },
      { name: "MongoDB", level: "Proficient", highlight: "Document storage, aggregation pipelines & NoSQL schema design" },
      { name: "Git & GitHub", level: "Advanced", highlight: "Version control, branching strategies, PRs & collaboration" },
      { name: "VS Code", level: "Advanced", highlight: "Configured developer environment with linting & debugging" },
      { name: "Google Colab", level: "Advanced", highlight: "Cloud GPU acceleration for deep learning experiments" }
    ]
  },
  {
    category: "Cloud & IoT",
    description: "Cloud infrastructure fundamentals and edge microcontroller systems.",
    skills: [
      { name: "AWS Cloud Foundations", level: "Certified", highlight: "EC2, S3, IAM, VPC & serverless architectural principles" },
      { name: "Google Cloud AI", level: "Proficient", highlight: "Vertex AI basics and cloud vision APIs" },
      { name: "Embedded C & IoT", level: "Proficient", highlight: "ESP32, NodeMCU, LoRa wireless and sensor interfaces" }
    ]
  },
  {
    category: "Technical Documentation & Research",
    description: "Scholarly writing, documentation rigor, and technical communication.",
    skills: [
      { name: "Technical Research", level: "Published", highlight: "3 published papers across JATIR and ResearchGate" },
      { name: "Product Documentation", level: "Advanced", highlight: "Clear architecture guides, user manuals & release notes" },
      { name: "Markdown & READMEs", level: "Advanced", highlight: "Exemplary open-source documentation standards" },
      { name: "Structured Fact-checking", level: "Advanced", highlight: "Verifiable citation tracking and data integrity auditing" }
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "Generative AI: Introduction and Applications",
    issuer: "IBM",
    year: "2024",
    domain: "Artificial Intelligence",
    verified: true
  },
  {
    name: "GenAI in Data Analytics",
    issuer: "Meta",
    year: "2024",
    domain: "Data Analytics & AI",
    verified: true
  },
  {
    name: "Neural Networks and Deep Learning",
    issuer: "DeepLearning.AI",
    year: "2024",
    domain: "Deep Learning",
    verified: true
  },
  {
    name: "Exploratory Data Analysis for Machine Learning",
    issuer: "IBM",
    year: "2024",
    domain: "Machine Learning & Statistics",
    verified: true
  },
  {
    name: "Data Visualization in R with ggplot2",
    issuer: "Johns Hopkins University",
    year: "2024",
    domain: "Data Visualization",
    verified: true
  },
  {
    name: "AWS Academy – Cloud Foundations",
    issuer: "Amazon Web Services (AWS)",
    year: "2025",
    domain: "Cloud Computing",
    verified: true
  },
  {
    name: "Advanced Java Programming Certification",
    issuer: "Academic & Professional Credential",
    year: "2024",
    domain: "Software Engineering",
    verified: true
  },
  {
    name: "Google Cybersecurity Specialization",
    issuer: "Google",
    year: "2024",
    domain: "Information Security & Networks",
    verified: true
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "Merit Certificate for 9+ CGPA",
    organization: "MIT ADT University, Pune",
    year: "2023–2026",
    type: "academic",
    description: "Awarded formal institutional academic merit for maintaining a cumulative GPA above 9.0 (current 9.15 CGPA) across 6 consecutive semesters.",
    badge: "Academic Distinction"
  },
  {
    title: "Three Published Research Works",
    organization: "JATIR & ResearchGate",
    year: "2025–2026",
    type: "research",
    description: "Published research on Multi-Agent AI (BizMind in JATIR) and Smart City IoT Systems & AyuBarter on ResearchGate.",
    badge: "Published Author"
  },
  {
    title: "HackPrix Hackathon (Hyderabad)",
    organization: "HackPrix National Technical Hackathon",
    year: "2025",
    type: "hackathon",
    description: "Engineered and demonstrated the CrowdFlow Analytics System live on Raspberry Pi and YOLOv5 under 24-hour sprint.",
    badge: "National Finalist"
  },
  {
    title: "ByteCamp Hackathon (Mumbai)",
    organization: "ByteCamp Hackathon — Open Innovation Track",
    year: "2025",
    type: "hackathon",
    description: "Built the AI-Powered Smart Train Planner for Mumbai Local Railways with Team '404 Not Found', addressing local overcrowding.",
    badge: "Hackathon Competitor"
  },
  {
    title: "Smart India Hackathon (SIH)",
    organization: "Government of India / Inter-College Round",
    year: "2024–2025",
    type: "hackathon",
    description: "Selected to present the AgriNex IoT Mine & Agricultural Environmental Monitoring system for national problem statements.",
    badge: "SIH Contender"
  },
  {
    title: "Elected Class Representative",
    organization: "School of Computing, MIT ADT University",
    year: "2023–2024",
    type: "leadership",
    description: "Served as the primary liaison between faculty leadership and student body, coordinating academic schedules, events, and feedback loops.",
    badge: "Student Leadership"
  }
];

export const ARCHIVE_ITEMS: ArchiveItem[] = [
  {
    id: "ml-lab-svm",
    title: "ML Lab: Support Vector Machine (SVM) Classification",
    category: "Machine Learning",
    semester: "Semester 5",
    year: "2025",
    description: "Comprehensive implementation and hyperparameter evaluation of linear, polynomial, and RBF kernel SVMs on multidimensional decision boundaries.",
    technologies: ["Python", "Scikit-Learn", "Matplotlib", "NumPy"],
    topicsCovered: ["Linear vs Non-linear Kernels", "C and Gamma Regularization", "Confusion Matrix Analysis", "ROC-AUC Curves"],
    verifiedCode: true
  },
  {
    id: "ml-lab-naive-bayes",
    title: "ML Lab: Naive Bayes Probabilistic Classifier",
    category: "Machine Learning",
    semester: "Semester 5",
    year: "2025",
    description: "Building Gaussian and Multinomial Naive Bayes models with Bayes Theorem conditional probability analysis on real-world datasets.",
    technologies: ["Python", "Pandas", "Scikit-Learn", "Seaborn"],
    topicsCovered: ["Prior and Posterior Probabilities", "Feature Independence Assumption", "Multivariate Text Classification"],
    verifiedCode: true
  },
  {
    id: "ml-lab-decision-trees",
    title: "ML Lab: Decision Trees & Random Forest Ensemble",
    category: "Machine Learning",
    semester: "Semester 5",
    year: "2025",
    description: "Tree splitting metrics evaluation (Gini Impurity vs Information Gain / Entropy), tree pruning to avoid overfitting, and Random Forest aggregation.",
    technologies: ["Python", "Graphviz", "Scikit-Learn"],
    topicsCovered: ["Information Gain", "Gini Impurity", "Cost-Complexity Pruning", "Ensemble Averaging"],
    verifiedCode: true
  },
  {
    id: "ml-lab-kmeans",
    title: "ML Lab: K-Means Clustering & Unsupervised Grouping",
    category: "Machine Learning",
    semester: "Semester 5",
    year: "2025",
    description: "Implementation of centroid initialization, distance metric calculation (Euclidean vs Manhattan), and the Elbow Method with Silhouette Score analysis.",
    technologies: ["Python", "NumPy", "Matplotlib"],
    topicsCovered: ["Centroid Convergence", "Elbow Curve Optimization", "Silhouette Coefficient", "Cluster Visualizations"],
    verifiedCode: true
  },
  {
    id: "nlp-lab-tokenization",
    title: "NLP Lab: Text Preprocessing, Tokenization & Lemmatization",
    category: "Natural Language Processing",
    semester: "Semester 7",
    year: "2026",
    description: "Systematic evaluation of word vs sentence tokenizers, stopword filtering, regex normalization, stemming (Porter vs Snowball), and WordNet lemmatization.",
    technologies: ["Python", "NLTK", "SpaCy", "Regex"],
    topicsCovered: ["Tokenization Strategies", "Part-of-Speech Tagging", "Morphological Analysis", "Vocabulary Pruning"],
    verifiedCode: true
  },
  {
    id: "nlp-lab-tfidf",
    title: "NLP Lab: TF-IDF Vectorization & Semantic Search",
    category: "Natural Language Processing",
    semester: "Semester 7",
    year: "2026",
    description: "Transforming unstructured textual corpora into numerical vector spaces using Term Frequency - Inverse Document Frequency and Cosine Similarity.",
    technologies: ["Python", "Scikit-Learn", "NumPy"],
    topicsCovered: ["Sparse Matrix Representation", "N-gram Modeling", "Cosine Similarity Ranking", "Document Retrieval"],
    verifiedCode: true
  },
  {
    id: "nlp-lab-sentiment",
    title: "NLP Lab: Sentiment Analysis & Text Classification",
    category: "Natural Language Processing",
    semester: "Semester 7",
    year: "2026",
    description: "Fine-tuning deep and probabilistic classifiers to perform multi-class sentiment identification across customer reviews and social commentary.",
    technologies: ["Python", "PyTorch", "Transformers", "Scikit-Learn"],
    topicsCovered: ["Sentiment Polarity Scoring", "Subjectivity Analysis", "Confusion Metrics", "Pre-trained Embeddings"],
    verifiedCode: true
  },
  {
    id: "java-dsa-trees-graphs",
    title: "Java DSA: Binary Tree Traversals & Graph Shortest Path",
    category: "Data Structures and Algorithms",
    semester: "Semester 3 & 4",
    year: "2024",
    description: "Object-oriented implementation of Pre-Order, In-Order, and Post-Order recursive and iterative traversals, plus Unidirectional Weighted Graph algorithms.",
    technologies: ["Java", "OOP", "JUnit"],
    topicsCovered: ["Binary Search Tree Balance", "Breadth-First Search (BFS)", "Depth-First Search (DFS)", "Dijkstra's Shortest Path"],
    verifiedCode: true
  },
  {
    id: "dbms-sql-schema",
    title: "DBMS: Normalized Relational Database Design & Triggers",
    category: "Database Management",
    semester: "Semester 3",
    year: "2024",
    description: "Design of 3NF/BCNF relational schemas with complex nested subqueries, foreign key constraints, automated triggers, and transaction isolation.",
    technologies: ["MySQL", "SQL Workbench", "Relational Algebra"],
    topicsCovered: ["Entity-Relationship (ER) Modeling", "3NF Normalization", "ACID Compliance", "Stored Procedures"],
    verifiedCode: true
  },
  {
    id: "web-dev-responsive-ecommerce",
    title: "Web Engineering: Full-Stack E-Cart & Food Delivery UI",
    category: "Web Development",
    semester: "Semester 4 & 5",
    year: "2024–2025",
    description: "Building responsive single-page interfaces with shopping cart state management, checkout validation, filterable food menus, and dynamic routing.",
    technologies: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
    topicsCovered: ["React State & Props", "Context API Cart Management", "Responsive UI Design", "REST API Consumption"],
    verifiedCode: true
  },
  {
    id: "cyber-forensics-security",
    title: "Cyber Forensics: Digital Artifact Recovery & Chain of Custody",
    category: "Cyber Forensics & Security",
    semester: "Semester 6",
    year: "2026",
    description: "Investigation methodologies for file system metadata extraction, packet capture dissection, steganography detection, and legal evidence handling.",
    technologies: ["Wireshark", "Autopsy", "Linux CLI"],
    topicsCovered: ["Packet Analysis", "File Header Signatures", "Chain of Custody Protocols", "Hash Integrity (SHA-256)"],
    verifiedCode: true
  },
  {
    id: "iot-esp32-embedded",
    title: "IoT Systems: ESP32 Multi-Sensor Telemetry & LoRa Packets",
    category: "IoT and Embedded Systems",
    semester: "Semester 4",
    year: "2025",
    description: "Interfacing analog soil moisture probes, DHT22 temperature/humidity sensors, and ADC calibration on ESP32 microcontrollers with LoRa packet radio.",
    technologies: ["Embedded C", "ESP32", "LoRa", "I2C/SPI Protocols"],
    topicsCovered: ["Analog-to-Digital Conversion (ADC)", "Sleep Mode Power Optimization", "Packet Payload Serialization", "Sensor Calibration Curves"],
    verifiedCode: true
  }
];

