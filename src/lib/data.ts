const isProd = process.env.NODE_ENV === "production";
export const basePath = isProd ? "/asif-ahamed-portfolio" : "";

export const personalInfo = {
  name: "Asif Ahamed",
  tagline: "Undergraduate researcher in bioinformatics and software engineer",
  email: "asifahamedstudent@gmail.com",
  phone: "+880 1770-396222",
  location: "Rajshahi, Bangladesh",
  portfolio: "https://asifahamed11.github.io/",
  siteUrl: "https://asifahamed11.github.io/asif-ahamed-portfolio",
  avatarUrl: `${basePath}/asif-sm.jpg`,
  cvUrl: `${basePath}/CV.pdf`,
  linkedin: "https://www.linkedin.com/in/asifahamed112/",
  github: "https://github.com/asifahamed11",
  scholar:
    "https://scholar.google.com/citations?user=ciEQlLEAAAAJ&hl=en",
  codeforces: "https://codeforces.com/profile/asif_112",
  beecrowd: "https://judge.beecrowd.com/en/profile/775408",
  leetcode: "https://leetcode.com/u/asifahamedstudent/",
};

export const education = {
  institution: "Varendra University, Rajshahi",
  degree: "B.Sc. in Computer Science and Engineering",
  cgpa: "3.94",
  maxCgpa: "4.00",
  status: "Graduated",
  graduationYear: "2026",
};

export interface Milestone {
  year: string;
  title: string;
  organization: string;
  description: string;
  badge: string;
  type: "award" | "publication" | "academic";
}

export const milestones: Milestone[] = [
  {
    year: "2026",
    title: "Honourable Mention Award",
    organization: "UCICS 2026 International Conference",
    description: "Received for research on classifying coding and non-coding somatic mutations in cancer genomics.",
    badge: "Award Winner",
    type: "award",
  },
  {
    year: "2026",
    title: "B.Sc. in Computer Science & Engineering",
    organization: "Varendra University",
    description: "Graduated with a 3.94 out of 4.00 cumulative GPA in Computer Science and Engineering.",
    badge: "Academic Honor",
    type: "academic",
  },
  {
    year: "2025",
    title: "IEEE QPAIN 2025 Conference Presentation",
    organization: "IEEE",
    description: "Presented research on neural network architectures for skin lesion diagnosis on the HAM10000 dataset.",
    badge: "Published",
    type: "publication",
  },
  {
    year: "2025",
    title: "Springer Nature & CRC Press Book Chapters",
    organization: "Springer and CRC Press",
    description: "Co-authored 7 book chapters on environmental modeling, remote sensing, and applied machine learning.",
    badge: "7 Chapters",
    type: "publication",
  },
];

export interface Publication {
  id: number;
  title: string;
  conference?: string;
  status: string;
  paperId?: string;
  authors?: string;
  isAwarded?: boolean;
  awardTitle?: string;
  tags: string[];
  type: "conference" | "book-chapter" | "abstract" | "poster" | "co-authored";
  topicDomain: "bioinformatics" | "vision" | "remote-sensing" | "ai-ml";
  venuePublisher?: "IEEE" | "Springer Nature" | "CRC Press" | "UCICS" | "Other";
  bibtex?: string;
}

export const publications: Publication[] = [
  {
    id: 1,
    title:
      "Hybrid Ensemble Learning for Coding vs. Non-coding Somatic Variant Classification",
    conference: "UCICS 2026",
    status: "Accepted and Awarded",
    paperId: "108",
    authors:
      "Most. Alisa Tabassum, Asif Ahamed, Md. Tanvir Hasan, Dr. Ahammad Hossain, Prof. A.H.M. Rahmatullah Imon",
    isAwarded: true,
    awardTitle: "Honourable Mention Award",
    tags: ["Ensemble Learning", "Bioinformatics", "Somatic Variants"],
    type: "conference",
    topicDomain: "bioinformatics",
    venuePublisher: "UCICS",
    bibtex: `@inproceedings{tabassum2026hybrid,
  title={Hybrid Ensemble Learning for Coding vs. Non-coding Somatic Variant Classification},
  author={Tabassum, Most. Alisa and Ahamed, Asif and Hasan, Md. Tanvir and Hossain, Ahammad and Imon, A.H.M. Rahmatullah},
  booktitle={Proceedings of the UCICS 2026},
  year={2026}
}`,
  },
  {
    id: 2,
    title:
      "A Novel Approach for Non-coding Somatic Driver Mutations Classification Using Machine Learning",
    conference: "UCICS 2026",
    status: "Accepted",
    paperId: "106",
    authors:
      "Most. Alisa Tabassum, Asif Ahamed, Md. Tanvir Hasan, Dr. Ahammad Hossain, Prof. A.H.M. Rahmatullah Imon",
    tags: ["Machine Learning", "Bioinformatics", "Driver Mutations"],
    type: "conference",
    topicDomain: "bioinformatics",
    venuePublisher: "UCICS",
    bibtex: `@inproceedings{tabassum2026novel,
  title={A Novel Approach for Non-coding Somatic Driver Mutations Classification Using Machine Learning},
  author={Tabassum, Most. Alisa and Ahamed, Asif and Hasan, Md. Tanvir and Hossain, Ahammad and Imon, A.H.M. Rahmatullah},
  booktitle={Proceedings of the UCICS 2026},
  year={2026}
}`,
  },
  {
    id: 3,
    title:
      "Optimizing Deep Learning Architectures for Accurate Skin Lesion Classification on the HAM10000 Dataset",
    conference: "IEEE QPAIN 2025",
    status: "Published",
    paperId: "123",
    authors:
      "Md. Shakhawat Hossain, Asif Ahamed, Md. Sajjad Ali, Tanusree Sharma, Dr. Ahammad Hossain",
    tags: ["Deep Learning", "HAM10000", "Medical Imaging", "CNN"],
    type: "conference",
    topicDomain: "vision",
    venuePublisher: "IEEE",
    bibtex: `@inproceedings{hossain2025optimizing,
  title={Optimizing Deep Learning Architectures for Accurate Skin Lesion Classification on the HAM10000 Dataset},
  author={Hossain, Md. Shakhawat and Ahamed, Asif and Ali, Md. Sajjad and Sharma, Tanusree and Hossain, Ahammad},
  booktitle={IEEE QPAIN 2025},
  year={2025},
  organization={IEEE}
}`,
  },
  {
    id: 4,
    title:
      "High-Resolution Flood Hazard Mapping in Sirajganj District: A Random Forest Machine Learning Approach with Sentinel-2 MSI and Environmental Covariates",
    conference: "UCICS 2025",
    status: "Published",
    paperId: "64",
    authors:
      "Md. Tanvir Hasan, Asif Ahamed, Most. Alisa Tabassum, Dr. Ahammad Hossain",
    tags: ["Random Forest", "Remote Sensing", "Sentinel-2", "Flood Mapping"],
    type: "conference",
    topicDomain: "remote-sensing",
    venuePublisher: "UCICS",
    bibtex: `@inproceedings{hasan2025highres,
  title={High-Resolution Flood Hazard Mapping in Sirajganj District: A Random Forest Machine Learning Approach with Sentinel-2 MSI and Environmental Covariates},
  author={Hasan, Md. Tanvir and Ahamed, Asif and Tabassum, Most. Alisa and Hossain, Ahammad},
  booktitle={Proceedings of the UCICS 2025},
  year={2025}
}`,
  },
  {
    id: 5,
    title:
      "Comparative Assessment of Multi-Scale Flash Flood Inundation Susceptibility in Sunamganj District Using Advanced Machine Learning Approaches",
    conference: "UCICS 2025",
    status: "Published",
    paperId: "65",
    authors:
      "Md. Tanvir Hasan, Asif Ahamed, Most. Alisa Tabassum, Dr. Ahammad Hossain",
    tags: ["Machine Learning", "Flash Flood", "Environmental Science"],
    type: "conference",
    topicDomain: "remote-sensing",
    venuePublisher: "UCICS",
  },
  {
    id: 6,
    title:
      "Unveiling Drivers of Dengue Epidemics in Dhaka: A Multi-Scale Spatiotemporal and Meteorological Modeling Perspective",
    conference: "UCICS 2025",
    status: "Published",
    paperId: "66",
    authors:
      "Md. Tanvir Hasan, Asif Ahamed, Most. Alisa Tabassum, Dr. Ahammad Hossain",
    tags: ["Spatiotemporal Modeling", "Epidemiology", "Dengue", "Meteorology"],
    type: "conference",
    topicDomain: "remote-sensing",
    venuePublisher: "UCICS",
  },
  {
    id: 7,
    title:
      "Enhancing Flood Prediction Through Hybrid Stacking Ensemble Learning and Geospatial Data Fusion: A Case Study in Rangpur Division, Bangladesh",
    conference: "UCICS 2025",
    status: "Published",
    paperId: "125",
    authors:
      "Asif Ahamed, Md. Tanvir Hasan, Most. Alisa Tabassum, Dr. Ahammad Hossain",
    tags: ["Stacking Ensemble", "Geospatial Fusion", "Flood Prediction"],
    type: "conference",
    topicDomain: "remote-sensing",
    venuePublisher: "UCICS",
  },
  {
    id: 8,
    title:
      "Comprehensive Multi-Decadal Assessment of Groundwater Level Fluctuations in Godagari Upazila: Insights from Spatial, Trend, and Statistical Modeling",
    conference: "ICWSS 2026",
    status: "Accepted (Abstract)",
    authors:
      "Md. Tanvir Hasan, Asif Ahamed, Most. Alisa Tabassum, Dr. Ahammad Hossain",
    tags: ["Groundwater Modeling", "Spatial Analysis", "Hydrology"],
    type: "abstract",
    topicDomain: "remote-sensing",
    venuePublisher: "Other",
  },
  {
    id: 9,
    title:
      "Impact of Global Precipitation Measurement (GPM) Products on Drought Monitoring and Agricultural Water Management",
    conference: "Springer Nature",
    status: "Published (Chapter 7)",
    authors: "Asif Ahamed et al.",
    tags: ["Drought Monitoring", "Agriculture", "GPM Products", "Hydrology"],
    type: "book-chapter",
    topicDomain: "remote-sensing",
    venuePublisher: "Springer Nature",
  },
  {
    id: 10,
    title:
      "Comparative Assessment of Extreme Weather Impacts on Agriculture in South Asia and Southeast Asia",
    conference: "Springer Nature",
    status: "Accepted",
    authors: "Asif Ahamed et al.",
    tags: ["Extreme Weather", "Agriculture", "Climate Impact"],
    type: "book-chapter",
    topicDomain: "remote-sensing",
    venuePublisher: "Springer Nature",
  },
  {
    id: 11,
    title:
      "Integration of GPM Satellite Data and Machine Learning for Extreme Flood and Drought Event Prediction in Asia",
    conference: "Springer Nature",
    status: "Accepted",
    authors: "Asif Ahamed et al.",
    tags: ["GPM Data", "Machine Learning", "Extreme Events", "Prediction"],
    type: "book-chapter",
    topicDomain: "ai-ml",
    venuePublisher: "Springer Nature",
  },
  {
    id: 12,
    title:
      "Long-term Trends in Atmospheric Aerosol Loading and Their Correlation with Climate Anomalies in Southern Asia",
    conference: "CRC Press",
    status: "Accepted",
    authors: "Asif Ahamed et al.",
    tags: ["Aerosols", "Climate Anomalies", "Atmospheric Science"],
    type: "book-chapter",
    topicDomain: "remote-sensing",
    venuePublisher: "CRC Press",
  },
  {
    id: 13,
    title:
      "Evaluating the Role of Advanced Satellite Remote Sensing and Machine Learning in Forest Fire Risk Assessment and Management",
    conference: "CRC Press",
    status: "Accepted",
    authors: "Asif Ahamed et al.",
    tags: ["Forest Fire", "Remote Sensing", "Risk Assessment"],
    type: "book-chapter",
    topicDomain: "ai-ml",
    venuePublisher: "CRC Press",
  },
  {
    id: 14,
    title:
      "Assessment of River Water Quality Indices and Machine Learning-Based Pollution Prediction in Major Asian River Basins",
    conference: "CRC Press",
    status: "Accepted",
    authors: "Asif Ahamed et al.",
    tags: ["Water Quality", "Pollution Prediction", "River Basins"],
    type: "book-chapter",
    topicDomain: "ai-ml",
    venuePublisher: "CRC Press",
  },
  {
    id: 15,
    title:
      "Multi-Sensor Satellite Remote Sensing and Deep Learning for Monitoring Coastal Erosion and Landform Dynamics in Southeast Asia",
    conference: "CRC Press",
    status: "Accepted",
    authors: "Asif Ahamed et al.",
    tags: ["Coastal Erosion", "Multi-Sensor", "Deep Learning"],
    type: "book-chapter",
    topicDomain: "vision",
    venuePublisher: "CRC Press",
  },
  {
    id: 16,
    title:
      "Machine Learning-Based Evaluation of Heavy Metal Contamination in Soil and Water Across Major Industrial Zones in Asia",
    conference: "CRC Press",
    status: "Accepted",
    authors: "Asif Ahamed et al.",
    tags: ["Heavy Metals", "Soil Contamination", "Industrial Zones"],
    type: "book-chapter",
    topicDomain: "ai-ml",
    venuePublisher: "CRC Press",
  },
];

export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live?: string;
  image?: string;
  stars?: number;
  language?: string;
  domain: "ai-ml" | "systems-tools" | "web-mobile";
  featured?: boolean;
  relatedPaperId?: number;
  relatedPaperTitle?: string;
}

export const projects: Project[] = [
  {
    title: "VariFuse",
    description: "A classifier for somatic mutation pathogenicity. Combines ESM-2 protein embeddings with a cross-attention network and gradient boosting, evaluated using gene-disjoint splits to prevent data leakage.",
    tech: ["Python", "PyTorch", "ESM-2", "LightGBM", "Bioinformatics"],
    github: "https://github.com/asifahamed11/VariFuse",
    language: "Python",
    domain: "ai-ml",
    featured: true,
    relatedPaperId: 1,
    relatedPaperTitle: "Hybrid Ensemble Learning for Coding vs. Non-coding Somatic Variant Classification (UCICS 2026)",
  },
  {
    title: "hardinge-glofas-high-flow-forecasting",
    description: "Predicts river flow exceedance at Hardinge Bridge using GloFAS satellite reanalysis data and recurrent neural networks.",
    tech: ["Python", "Deep Learning", "GloFAS", "Hydrology", "Time-Series"],
    github: "https://github.com/asifahamed11/hardinge-glofas-high-flow-forecasting",
    language: "Python",
    domain: "ai-ml",
    featured: true,
    relatedPaperId: 4,
    relatedPaperTitle: "Deep Learning Models for River Flow Forecasting at Hardinge Bridge",
  },
  {
    title: "group-aware-somatic-variant-classification",
    description: "A sequence model for classifying somatic mutations in coding and non-coding genomic regions.",
    tech: ["Python", "Deep Learning", "Genomics", "Ensemble Learning"],
    github: "https://github.com/asifahamed11/group-aware-somatic-variant-classification",
    language: "Python",
    domain: "ai-ml",
    featured: true,
    relatedPaperId: 1,
    relatedPaperTitle: "UCICS 2026 Award Winner Paper (#ID 108)",
  },
  {
    title: "skin-lesion-classifier",
    description: "A web app and model that classifies dermoscopic skin lesions across seven categories from the HAM10000 dataset, built with MobileNet and Flask.",
    tech: ["Python", "TensorFlow", "Keras", "MobileNet", "Flask"],
    github: "https://github.com/asifahamed11/skin-lesion-classifier",
    image: "/projects/skin-lesion-classifier.png",
    language: "Python",
    domain: "ai-ml",
    featured: true,
    relatedPaperId: 2,
    relatedPaperTitle: "Automated Skin Lesion Analysis & Melanoma Detection",
  },
  {
    title: "pop-cat-recycle-bin",
    description: "A PowerShell script that changes the Windows Recycle Bin icon to Pop Cat, opening its mouth when files are present.",
    tech: ["PowerShell", "Batch Script", "Registry", "Windows"],
    github: "https://github.com/asifahamed11/pop-cat-recycle-bin",
    image: "/projects/pop-cat-demo.gif",
    stars: 3,
    language: "PowerShell",
    domain: "systems-tools",
    featured: true,
  },
  {
    title: "MediLinx",
    description: "A web application for booking medical appointments and finding healthcare providers, built with PHP and MySQL.",
    tech: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    github: "https://github.com/asifahamed11/MediLinx",
    live: "http://medilinx.rf.gd/?i=1",
    image: "/projects/medilinx-logo.png",
    stars: 1,
    language: "PHP",
    domain: "web-mobile",
    featured: true,
  },
  {
    title: "asif-ahamed-portfolio",
    description: "Personal website listing research publications, open source projects, and course work, built with Next.js and Tailwind CSS.",
    tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/asifahamed11/asif-ahamed-portfolio",
    live: "https://asifahamed11.github.io/asif-ahamed-portfolio/",
    image: "/projects/asif-portfolio.png",
    language: "TypeScript",
    domain: "web-mobile",
    featured: true,
  },
  {
    title: "auto-wallpaper-changer",
    description: "A desktop script that rotates wallpapers on a schedule using the WallWidgy API.",
    tech: ["Python", "WallWidgy API", "Task Scheduling", "Windows API"],
    github: "https://github.com/asifahamed11/auto-wallpaper-changer",
    language: "Python",
    domain: "systems-tools",
  },
  {
    title: "nova-monitor",
    description: "A command line tool for tracking system resource usage and model training progress.",
    tech: ["Python", "System Monitoring", "CLI"],
    github: "https://github.com/asifahamed11/nova-monitor",
    language: "Python",
    domain: "ai-ml",
  },
  {
    title: "One-Click-GLUT",
    description: "A setup script that installs MinGW and FreeGLUT for Code::Blocks on Windows.",
    tech: ["C", "OpenGL", "FreeGLUT", "MinGW", "Batch Script"],
    github: "https://github.com/asifahamed11/One-Click-GLUT",
    language: "C",
    domain: "systems-tools",
  },
  {
    title: "DocRater",
    description: "A mobile app for searching and rating doctors, built with Flutter and Firebase.",
    tech: ["Flutter", "Dart", "Firebase Auth", "Firestore"],
    github: "https://github.com/asifahamed11/DocRater",
    language: "Dart",
    domain: "web-mobile",
  },
  {
    title: "Portfolio-Universe",
    description: "An earlier personal website experiment with CSS animations and responsive layouts.",
    tech: ["JavaScript", "HTML5", "CSS3"],
    github: "https://github.com/asifahamed11/Portfolio-Universe",
    live: "https://asifahamed11.github.io/Portfolio-Universe/",
    image: "/projects/portfolio-universe.png",
    language: "JavaScript",
    domain: "web-mobile",
  },
  {
    title: "MiniSocialMedia",
    description: "A basic social media web application with user profiles, posts, and comments, built with PHP and MySQL.",
    tech: ["PHP", "MySQL", "JavaScript", "CSS"],
    github: "https://github.com/asifahamed11/MiniSocialMedia",
    language: "PHP",
    domain: "web-mobile",
  },
  {
    title: "amazon-ecommerce-db-schema",
    description: "A relational database schema for multi-vendor online stores, including tables for orders, inventory, and reviews.",
    tech: ["SQL", "Relational Database", "Schema Design"],
    github: "https://github.com/asifahamed11/amazon-ecommerce-db-schema",
    image: "/projects/amazon-ecommerce-schema.jpg",
    stars: 1,
    language: "SQL",
    domain: "systems-tools",
  },
  {
    title: "Task-Scheduler",
    description: "A command line task manager with file storage and priority queues, written in C++.",
    tech: ["C++", "File Handling", "OOP", "CLI"],
    github: "https://github.com/asifahamed11/Task-Scheduler",
    language: "C++",
    domain: "systems-tools",
  },
  {
    title: "Java-Swing-Calculator",
    description: "A desktop calculator with standard arithmetic functions, built in Java Swing.",
    tech: ["Java", "Java Swing", "OOP", "GUI"],
    github: "https://github.com/asifahamed11/Java-Swing-Calculator",
    language: "Java",
    domain: "systems-tools",
  },
  {
    title: "VU_FYDP",
    description: "Undergraduate thesis repository and LaTeX documentation for the final year design project.",
    tech: ["LaTeX", "TeX", "Technical Writing"],
    github: "https://github.com/asifahamed11/VU_FYDP",
    image: "/projects/vu-fydp-logo.png",
    language: "TeX",
    domain: "systems-tools",
    relatedPaperTitle: "Undergraduate Thesis and Final Year Research",
  },
];

export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: "Code",
    skills: ["Python", "C", "C++", "Java", "JavaScript", "TypeScript", "PHP", "Dart", "SQL"],
  },
  {
    title: "Machine Learning & AI",
    icon: "Brain",
    skills: ["Deep Learning", "CNN", "Keras", "TensorFlow", "Scikit-Learn", "Ensemble Learning", "Computer Vision", "Bioinformatics"],
  },
  {
    title: "Web & Mobile Development",
    icon: "Globe",
    skills: ["React.js", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "Flask", "Flutter", "MySQL", "Firebase"],
  },
  {
    title: "Developer Tools & Platforms",
    icon: "Wrench",
    skills: ["Git", "GitHub", "n8n", "Linux", "VS Code", "Code::Blocks", "Postman", "Google Gemini API"],
  },
];
