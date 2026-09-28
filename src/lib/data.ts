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
  avatarUrl: `${basePath}/asif-sm.jpg?v=2`,
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
  expectedGraduation: "2026",
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
  book?: string;
  year: number;
  doi?: string;
  supervision?: string;
  status: string;
  paperId?: string;
  authors?: string;
  isAwarded?: boolean;
  awardTitle?: string;
  tags: string[];
  type: "thesis" | "journal" | "conference" | "book-chapter" | "abstract" | "poster" | "co-authored";
  topicDomain: "bioinformatics" | "vision" | "remote-sensing" | "ai-ml";
  venuePublisher?: "Thesis" | "VIJIR" | "IEEE" | "Springer Nature" | "UCICS" | "ICWSS" | "Other";
  bibtex?: string;
}

export const publications: Publication[] = [
  { id: 1, title: "High Confidence Somatic Variant Pathogenicity Prediction Based on Genomic Data Using a Multimodal Machine Learning Framework", status: "Thesis", year: 2026, supervision: "Dr. Ahammad Hossain", authors: "Asif Ahamed (223311112), Md. Tanvir Hasan (223311099), Most. Alisa Tabassum (223311101)", tags: ["Thesis", "Bioinformatics", "Somatic Variants", "Multimodal ML"], type: "thesis", topicDomain: "bioinformatics", venuePublisher: "Thesis" },
  { id: 2, title: "Hybrid Ensemble Learning for Coding vs. Non-coding Somatic Variant Classification - Extended Version", conference: "Varendra International Journal for Interdisciplinary Research (VIJIR), Special Issue", status: "Invited Extended Version", year: 2026, authors: "Most. Alisa Tabassum, Asif Ahamed, Md. Tanvir Hasan, Md. Sajeeb Mondol, Ahammad Hossain, A.H.M. Rahmatullah Imon", tags: ["Journal Article", "Ensemble Learning", "Bioinformatics", "Somatic Variants"], type: "journal", topicDomain: "bioinformatics", venuePublisher: "VIJIR" },
  { id: 3, title: "Improved Classification of Retinal Disease: An Ensemble Deep Learning Approach for Diabetic Retinopathy, Glaucoma, and Cataracts", conference: "2025 International Conference on Quantum Photonics, Artificial Intelligence, and Networking (QPAIN)", status: "Published", year: 2025, doi: "10.1109/QPAIN66474.2025.11172194", authors: "Asif Ahamed, Md. Taufiq Khan, Md. Shahid Ahammed Shakil, Md. Musfiqur Rahman Mridha, Md. Fatin Nibbrash Nakib, Md. Humaun Huda, Refat-E-Jannat", tags: ["IEEE", "Retinal Disease", "Deep Learning", "Medical Imaging"], type: "conference", topicDomain: "vision", venuePublisher: "IEEE" },
  { id: 4, title: "Ensemble Learning in Rice Leaf Diseases Classification", conference: "QPAIN 2025", status: "Published", year: 2025, doi: "10.1109/QPAIN66474.2025.11172222", authors: "Md. Mizanur Rahman, Md. Taufiq Khan, Md. Musfiqur Rahman Mridha, Md. Arafat Ibna Mizan, Md. Fatin Nibbrash Nakib, Asif Ahamed, Md. Humaun Huda", tags: ["IEEE", "Rice Leaf Diseases", "Ensemble Learning", "Agriculture"], type: "conference", topicDomain: "vision", venuePublisher: "IEEE" },
  { id: 5, title: "Multiple Face-Emotion Recognition Using Attention Mechanisms in Deep Learning", conference: "QPAIN 2025", status: "Published", year: 2025, doi: "10.1109/QPAIN66474.2025.11171884", authors: "Refat-E-Jannat, Md. Arafat Ibna Mizan, Md. Taufiq Khan, Iffath Tanjim Moon, Md. Musfiqur Rahman Mridha, Md. Fatin Nibbrash Nakib, Asif Ahamed", tags: ["IEEE", "Face Emotion", "Attention Mechanisms", "Deep Learning"], type: "conference", topicDomain: "vision", venuePublisher: "IEEE" },
  { id: 6, title: "Bone Fracture Classification in X-ray Images: A Deep Learning Approach Leveraging Transfer Learning", conference: "Undergraduate Conference on Intelligent Computing and Systems (UCICS)", status: "Conference Paper", year: 2025, authors: "Md. Sabbir Ahammed, Asif Ahamed, Md. Humaun Huda, Md. Musfiqur Rahman Mridha, Md. Jamil Chaudhary, Md. Fatin Nibbrash Nakib", tags: ["UCICS", "Bone Fracture", "X-ray", "Transfer Learning"], type: "conference", topicDomain: "vision", venuePublisher: "UCICS" },
  { id: 7, title: "Brain Tumor Classification with MRI Images using Deep Learning Technique", conference: "Undergraduate Conference on Intelligent Computing and Systems (UCICS)", status: "Conference Paper", year: 2025, authors: "Mst. Nurtaz Jahan, Md. Rabby Ahmed, Asif Ahamed, Anamika Saha, Shourav Paul, Sakib Imtiaz", tags: ["UCICS", "Brain Tumor", "MRI", "Deep Learning"], type: "conference", topicDomain: "vision", venuePublisher: "UCICS" },
  { id: 8, title: "Exploring Multi-Model Machine Learning Approaches for Pathogenicity Classification of Somatic Gene Mutations", conference: "UCICS 2026", status: "Accepted", year: 2026, authors: "Asif Ahamed, Md. Tanvir Hasan, Most. Alisa Tabassum, Ahammad Hossain, Md. Mizanur Rahman, A.H.M. Rahmatullah Imon", tags: ["UCICS", "Bioinformatics", "Somatic Mutations", "Machine Learning"], type: "conference", topicDomain: "bioinformatics", venuePublisher: "UCICS" },
  { id: 9, title: "Hybrid Ensemble Machine Learning Modeling for Tumor Prediction Using COSMIC Differential Methylation Data", conference: "UCICS 2026", status: "Accepted", year: 2026, authors: "Md. Tanvir Hasan, Asif Ahamed, Most. Alisa Tabassum, Md. Nahara Tasnim Rubay, Ahammad Hossain, A.H.M. Rahmatullah Imon", tags: ["UCICS", "Tumor Prediction", "COSMIC", "Methylation"], type: "conference", topicDomain: "bioinformatics", venuePublisher: "UCICS" },
  { id: 10, title: "Hybrid Ensemble Learning for Coding vs. Non-coding Somatic Variant Classification", conference: "UCICS 2026", status: "Accepted; Achievers' Honorable Mention Award; Selected for VIJIR Extended Version", year: 2026, authors: "Most. Alisa Tabassum, Asif Ahamed, Md. Tanvir Hasan, Md. Sajeeb Mondol, Ahammad Hossain, A.H.M. Rahmatullah Imon", isAwarded: true, awardTitle: "Achievers' Honorable Mention Award", tags: ["UCICS", "Awarded", "Ensemble Learning", "Somatic Variants"], type: "conference", topicDomain: "bioinformatics", venuePublisher: "UCICS" },
  { id: 11, title: "Dual-branch Swin-Transformer for Multi-Modal Wetland Change Detection in the Bengal Delta", conference: "International Conference on Wetland, Society and Sustainability (ICWSS 2026)", status: "Accepted", year: 2026, authors: "Asif Ahamed, Md. Tanvir Hasan, Most. Alisa Tabassum, Ahammad Hossain, Md. Kamruzzaman, Jayanta Das, A.H.M. Rahmatullah Imon", tags: ["ICWSS", "Swin Transformer", "Wetlands", "Change Detection"], type: "conference", topicDomain: "remote-sensing", venuePublisher: "ICWSS" },
  { id: 12, title: "Integrated Machine Learning Framework for Predicting Water Quality and Water Level in Wetlands: A Data-Driven Management Approach", conference: "ICWSS 2026", status: "Accepted", year: 2026, authors: "Most. Alisa Tabassum, Asif Ahamed, Md. Tanvir Hasan, Ahammad Hossain, Md. Kamruzzaman, Jayanta Das, A.H.M. Rahmatullah Imon", tags: ["ICWSS", "Water Quality", "Water Level", "Wetlands"], type: "conference", topicDomain: "remote-sensing", venuePublisher: "ICWSS" },
  { id: 13, title: "Attention-Based Deep-Learning Forecasts for Monsoon-Driven Floods: A Temporal Fusion Transformer Application to the Jamuna River in Bangladesh", book: "Rivers of Humid Tropics in the Anthropocene", status: "Accepted", year: 2026, authors: "Asif Ahamed, Ahammad Hossain, Md. Tanvir Hasan, Most. Alisa Tabassum, Md. Kamruzzaman, Jayanta Das, A.H.M. Rahmatullah Imon", tags: ["Springer Nature", "Flood Forecasting", "Temporal Fusion Transformer", "Jamuna River"], type: "book-chapter", topicDomain: "remote-sensing", venuePublisher: "Springer Nature" },
  { id: 14, title: "Sentinel-1 Driven Explainable Hybrid Framework for Flood Susceptibility and Risk Probability Mapping in the Padma River Basin", book: "Rivers of Humid Tropics in the Anthropocene", status: "Accepted", year: 2026, authors: "Most. Alisa Tabassum, Ahammad Hossain, Asif Ahamed, Md. Tanvir Hasan, Md. Kamruzzaman, Jayanta Das, A.H.M. Rahmatullah Imon", tags: ["Springer Nature", "Sentinel-1", "Flood Susceptibility", "Padma River"], type: "book-chapter", topicDomain: "remote-sensing", venuePublisher: "Springer Nature" },
  { id: 15, title: "Hybrid Ensemble Deep Learning for Spatio-Temporal Assessment of Riverbank Erosion in the Padma River Using Sentinel-2 Data", book: "Rivers of Humid Tropics in the Anthropocene", status: "Accepted", year: 2026, authors: "Md. Tanvir Hasan, Ahammad Hossain, Asif Ahamed, Most. Alisa Tabassum, Md. Kamruzzaman, A.H.M. Rahmatullah Imon", tags: ["Springer Nature", "Sentinel-2", "Riverbank Erosion", "Padma River"], type: "book-chapter", topicDomain: "remote-sensing", venuePublisher: "Springer Nature" },
  { id: 16, title: "Beyond Static Mapping: A Spatio-Temporal Deep Learning Framework for Forecasting Riverbank Erosion in the Bengal Delta", book: "Rivers of Humid Tropics in the Anthropocene", status: "Accepted", year: 2026, authors: "Asif Ahamed, Ahammad Hossain, Md. Tanvir Hasan, Most. Alisa Tabassum, Md. Kamruzzaman, Jayanta Das, A.H.M. Rahmatullah Imon", tags: ["Springer Nature", "Spatio-Temporal", "Riverbank Erosion", "Bengal Delta"], type: "book-chapter", topicDomain: "remote-sensing", venuePublisher: "Springer Nature" },
  { id: 17, title: "Hybrid Ensemble Deep Learning for Urban Ecological Analysis Using Sentinel-2 RGB Land Cover Imagery Dataset", book: "Ecological Urbanism", status: "Accepted", year: 2026, authors: "Md. Tanvir Hasan, Ahammad Hossain, Asif Ahamed, Most. Alisa Tabassum, Md. Kamruzzaman, Jayanta Das, A.H.M. Rahmatullah Imon", tags: ["Springer Nature", "Urban Ecology", "Sentinel-2", "Land Cover"], type: "book-chapter", topicDomain: "remote-sensing", venuePublisher: "Springer Nature" },
  { id: 18, title: "Dynamic Soil Erosion Forecasting through Spatiotemporal Fusion and Hybrid Deep Learning", book: "Landscape Erosion and Sustainability", status: "Accepted", year: 2026, authors: "Most. Alisa Tabassum, Md. Tanvir Hasan, Asif Ahamed, Ahammad Hossain, Md. Kamruzzaman, Jayanta Das, A.H.M. Rahmatullah Imon", tags: ["Springer Nature", "Soil Erosion", "Spatiotemporal Fusion", "Deep Learning"], type: "book-chapter", topicDomain: "remote-sensing", venuePublisher: "Springer Nature" },
  { id: 19, title: "Hybrid Ensemble Machine Learning-Based Land Cover Classification from Sentinel-2 RGB Data for Soil Erosion Susceptibility Interpretation", book: "Landscape Erosion and Sustainability", status: "Accepted", year: 2026, authors: "Md. Tanvir Hasan, Ahammad Hossain, Asif Ahamed, Most. Alisa Tabassum, Md. Kamruzzaman, A.H.M. Rahmatullah Imon, Jayanta Das", tags: ["Springer Nature", "Land Cover", "Sentinel-2", "Soil Erosion"], type: "book-chapter", topicDomain: "remote-sensing", venuePublisher: "Springer Nature" },
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
    title: "Languages",
    icon: "Code",
    skills: ["Python", "TypeScript", "C++", "C", "SQL"],
  },
  {
    title: "Machine Learning & AI",
    icon: "Brain",
    skills: ["PyTorch", "TensorFlow", "Scikit-Learn", "Bioinformatics", "Vision"],
  },
  {
    title: "Web & Systems",
    icon: "Globe",
    skills: ["Next.js", "React", "Tailwind CSS", "Flask", "Flutter"],
  },
  {
    title: "Developer Tools",
    icon: "Wrench",
    skills: ["Git", "GitHub", "Linux", "VS Code", "Postman"],
  },
];
