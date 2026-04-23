export const personalInfo = {
  name: "Asif Ahamed",
  tagline: "Bridging Software Engineering & AI Research",
  email: "asifahamedstudent@gmail.com",
  phone: "+880 1770-396222",
  location: "Rajshahi, Bangladesh",
  portfolio: "https://asifahamed11.github.io/",
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
  cgpa: "3.93",
  maxCgpa: "4.00",
  semester: "8th Semester",
  expectedGraduation: "2026",
};

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
}

// ─── Conference Papers ────────────────────────────────────────────────

export const publications: Publication[] = [
  {
    id: 1,
    title:
      "Hybrid Ensemble Learning for Coding vs. Non-coding Somatic Variant Classification",
    conference: "UCICS 2026",
    status: "Accepted & Awarded",
    paperId: "108",
    authors:
      "Most. Alisa Tabassum, Asif Ahamed, Md. Tanvir Hasan, Dr. Ahammad Hossain, Prof. A.H.M. Rahmatullah Imon",
    isAwarded: true,
    awardTitle: "Honourable Mention Award",
    tags: ["Ensemble Learning", "Bioinformatics", "Somatic Variants"],
    type: "conference",
  },
  {
    id: 2,
    title:
      "Exploring Multi-Model Machine Learning Approaches for Pathogenicity Classification of Somatic Gene Mutations",
    conference: "UCICS 2026",
    status: "Accepted",
    paperId: "17",
    authors:
      "Asif Ahamed, Md. Tanvir Hasan, Most. Alisa Tabassum, Dr. Ahammad Hossain",
    tags: ["Machine Learning", "Bioinformatics", "Gene Mutations"],
    type: "conference",
  },
  {
    id: 3,
    title:
      "Hybrid Ensemble Machine Learning Modeling for Tumor Prediction Using COSMIC Differential Methylation Data",
    conference: "UCICS 2026",
    status: "Accepted",
    paperId: "87",
    authors:
      "Md. Tanvir Hasan, Asif Ahamed, Most. Alisa Tabassum, Dr. Ahammad Hossain",
    tags: ["Ensemble Learning", "Tumor Prediction", "Methylation"],
    type: "conference",
  },
  {
    id: 4,
    title: "Ensemble Learning in Rice Leaf Diseases Classification",
    conference:
      "2025 International Conference on Quantum Photonics, AI & SPC (IEEE QPAIN 2025)",
    status: "Published",
    authors:
      "Md. Mizanur Rahman, Md. Taufiq Khan, Md. Musfiqur Rahman Mridha, Md. Arafat Ibna Mizan, Md. Fatin Nibbrash Nakib, Asif Ahamed, MD. Humaun Huda",
    tags: ["Ensemble Learning", "Deep Learning", "Agriculture"],
    type: "conference",
  },
  {
    id: 5,
    title:
      "Improved Classification of Retinal Disease: An Ensemble Deep Learning Approach for Diabetic Retinopathy, Glaucoma, and Cataracts",
    conference:
      "2025 International Conference on Quantum Photonics, AI & SPC (IEEE QPAIN 2025)",
    status: "Published",
    authors:
      "Asif Ahamed, Md. Taufiq Khan, Md. Shahid Ahammed Shakil, Md. Musfiqur Rahman Mridha, Md. Fatin Nibbrash Nakib, MD. Humaun Huda, Refat-E-Jannat",
    tags: ["Deep Learning", "Medical Imaging", "Retinal Disease"],
    type: "conference",
  },
  {
    id: 6,
    title:
      "Multiple Face-Emotion Recognition Using Attention Mechanisms in Deep Learning",
    conference:
      "2025 International Conference on Quantum Photonics, AI & SPC (IEEE QPAIN 2025)",
    status: "Published",
    authors:
      "Refat-E-Jannat, Md. Arafat Ibna Mizan, Md. Taufiq Khan, Iffath Tanjim Moon, Md. Musfiqur Rahman Mridha, Md. Fatin Nibbrash Nakib, Asif Ahamed",
    tags: ["Deep Learning", "Attention Mechanism", "Emotion Recognition"],
    type: "conference",
  },
  {
    id: 7,
    title:
      "Bone Fracture Classification in X-ray Images: A Deep Learning Approach Leveraging Transfer Learning",
    conference: "UCICS 2025",
    status: "Accepted",
    paperId: "153",
    authors:
      "Asif Ahamed, MD. Humaun Huda, Md. Musfiqur Rahman Mridha, Md. Fatin Nibbrash Nakib",
    tags: ["Deep Learning", "Transfer Learning", "Medical Imaging"],
    type: "conference",
  },
  {
    id: 8,
    title:
      "Brain Tumor Classification with MRI Images using Deep Learning Technique",
    conference: "UCICS 2025",
    status: "Accepted",
    paperId: "159",
    authors: "Mst. Nurtaz Jahan, Asif Ahamed, Anamika Saha",
    tags: ["Deep Learning", "MRI", "Brain Tumor"],
    type: "conference",
  },

  // ─── ICWSS Full Papers ─────────────────────────────────────────────────────────

  {
    id: 9,
    title:
      "Dual-branch Swin-Transformer for Multi-Modal Wetland Change Detection in the Bengal Delta",
    conference: "ICWSS 2026",
    status: "Accepted & Presented",
    authors:
      "Asif Ahamed, Md. Tanvir Hasan, Most. Alisa Tabassum, Dr. Ahammad Hossain, Md. Kamruzzaman, Dr. Jayanta Das, Prof. A.H.M. Rahmatullah Imon",
    tags: ["Change Detection", "Swin-Transformer", "Wetland"],
    type: "conference",
  },

  {
    id: 17,
    title:
      "Integrated Machine Learning Framework for Predicting Water Quality and Water Level in Wetlands: A Data-Driven Management Approach",
    conference: "ICWSS 2026",
    status: "Accepted & Presented",
    authors:
      "Most. Alisa Tabassum, Asif Ahamed, Md. Tanvir Hasan, Dr. Ahammad Hossain, Md. Kamruzzaman, Dr. Jayanta Das, Prof. A.H.M. Rahmatullah Imon",
    tags: ["Machine Learning", "Water Quality", "Wetland"],
    type: "conference",
  },

  // ─── Springer Nature — Rivers of Humid Tropics in the Anthropocene ──

  {
    id: 10,
    title:
      "Beyond Static Mapping: A Spatio-Temporal Deep Learning Framework for Forecasting Riverbank Erosion in the Bengal Delta",
    conference:
      "Springer Nature · Rivers of Humid Tropics in the Anthropocene",
    status: "Submitted",
    authors:
      "Asif Ahamed, Dr. Ahammad Hossain, Md. Tanvir Hasan, Most. Alisa Tabassum, Md. Kamruzzaman, Dr. Jayanta Das, Prof. A.H.M. Rahmatullah Imon",
    tags: ["Deep Learning", "Riverbank Erosion", "Remote Sensing"],
    type: "book-chapter",
  },
  {
    id: 11,
    title:
      "Attention-Based Deep-Learning Forecasts for Monsoon-Driven Floods: A Temporal Fusion Transformer Application to the Jamuna River",
    conference:
      "Springer Nature · Rivers of Humid Tropics in the Anthropocene",
    status: "Submitted",
    authors:
      "Asif Ahamed, Dr. Ahammad Hossain, Md. Kamruzzaman, Most. Alisa Tabassum, Prof. A.H.M. Rahmatullah Imon, Md. Tanvir Hasan, Dr. Jayanta Das",
    tags: ["Deep Learning", "Flood Forecasting", "Temporal Fusion Transformer"],
    type: "book-chapter",
  },
  {
    id: 12,
    title:
      "Hybrid Ensemble Deep Learning for Spatio-Temporal Assessment of Riverbank Erosion in the Padma River using Sentinel-2 Data",
    conference:
      "Springer Nature · Rivers of Humid Tropics in the Anthropocene",
    status: "Submitted",
    authors:
      "Md. Tanvir Hasan, Dr. Ahammad Hossain, Md. Kamruzzaman, Dr. Jayanta Das, Most. Alisa Tabassum, Asif Ahamed, Prof. A.H.M. Rahmatullah Imon",
    tags: ["Deep Learning", "Riverbank Erosion", "Sentinel-2"],
    type: "book-chapter",
  },
  {
    id: 13,
    title:
      "Sentinel-1 Driven Explainable Hybrid Framework for Flood Susceptibility and Risk Probability Mapping in the Padma River Basin",
    conference:
      "Springer Nature · Rivers of Humid Tropics in the Anthropocene",
    status: "Submitted",
    authors:
      "Most. Alisa Tabassum, Dr. Ahammad Hossain, Asif Ahamed, Md. Tanvir Hasan, Md. Kamruzzaman, Prof. A.H.M. Rahmatullah Imon, Dr. Jayanta Das",
    tags: ["Flood Mapping", "Explainable AI", "Sentinel-1"],
    type: "book-chapter",
  },

  // ─── CRC Press — Monitoring and Sustainable Management of Disaster Risk

  {
    id: 14,
    title:
      "Deep Learning for Resilient Flood Management: A Comparative Study of LSTM and GRU Architectures in the Ganges-Brahmaputra-Meghna Basin",
    conference:
      "CRC Press · Monitoring and Sustainable Management of Disaster Risk (Ch. 122)",
    status: "Provisionally Accepted",
    authors: "Asif Ahamed, Dr. Ahammad Hossain, Md. Kamruzzaman",
    tags: ["LSTM", "GRU", "Flood Management"],
    type: "book-chapter",
  },

  // ─── Springer Nature — Ecological Urbanism ──────────────────────────

  {
    id: 15,
    title:
      "HeatGAN: Downscaling Satellite Thermal Imagery for Urban Microclimate Analysis and Ecological Planning",
    conference: "Springer Nature · Ecological Urbanism",
    status: "Accepted",
    authors:
      "Asif Ahamed, Dr. Ahammad Hossain, Md. Tanvir Hasan, Most. Alisa Tabassum, Md. Kamruzzaman, Dr. Jayanta Das, Prof. A.H.M. Rahmatullah Imon",
    tags: ["GANs", "Urban Climate", "Thermal Imaging"],
    type: "book-chapter",
  },
  {
    id: 16,
    title:
      "Hybrid Ensemble Deep Learning for Urban Ecological Analysis Using Sentinel-2 Land Cover Classification Data",
    conference: "Springer Nature · Ecological Urbanism",
    status: "Accepted",
    authors:
      "Md. Tanvir Hasan, Dr. Ahammad Hossain, Asif Ahamed, Most. Alisa Tabassum, Md. Kamruzzaman, Dr. Jayanta Das, Prof. A.H.M. Rahmatullah Imon",
    tags: ["Deep Learning", "Land Cover", "Sentinel-2"],
    type: "book-chapter",
  },
];

export interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
}

export const projects: Project[] = [
  {
    title: "skin-lesion-classifier",
    description: "AI-powered skin lesion classifier using MobileNet + Flask. Detects 7 HAM10000 categories (including melanoma) with gatekeeper filtering for non-skin images.",
    tech: ["Python", "Flask", "Keras", "TensorFlow", "HTML"],
    github: "https://github.com/asifahamed11/skin-lesion-classifier"
  },
  {
    title: "pop-cat-recycle-bin",
    description: "Transform your Windows Recycle Bin into Pop Cat! Empty bin = hungry cat with open mouth, full bin = satisfied cat with closed mouth.",
    tech: ["Batchfile", "Registry", "Windows"],
    github: "https://github.com/asifahamed11/pop-cat-recycle-bin"
  },
  {
    title: "asif-ahamed-portfolio",
    description: "A personal portfolio website showcasing my skills, projects, educational background, and contact information.",
    tech: ["TypeScript", "Next.js", "React", "Tailwind CSS"],
    github: "https://github.com/asifahamed11/asif-ahamed-portfolio",
    live: "https://asifahamed11.github.io/"
  },
  {
    title: "nova-monitor",
    description: "Real-time deep learning model training monitor that sends AI-summarized logs to Telegram to avoid spam.",
    tech: ["Python", "n8n", "Google Gemini API", "Telegram API"],
    github: "https://github.com/asifahamed11/nova-monitor"
  },
  {
    title: "One-Click-GLUT",
    description: "Automated installer for Code::Blocks with MinGW and FreeGLUT configuration, simplifying OpenGL development setup.",
    tech: ["C", "Batch Script"],
    github: "https://github.com/asifahamed11/One-Click-GLUT"
  },
  {
    title: "MediLinx",
    description: "A comprehensive healthcare management platform connecting patients and doctors with AI-based health recommendations.",
    tech: ["PHP", "MySQL", "AI Integration"],
    github: "https://github.com/asifahamed11/MediLinx",
    live: "http://medilinx.rf.gd/?i=1"
  },
  {
    title: "auto-wallpaper-changer",
    description: "Automatically changes your desktop wallpaper at set intervals using the WallWidgy API.",
    tech: ["Windows", "Task Scheduling", "Automation"],
    github: "https://github.com/asifahamed11/auto-wallpaper-changer"
  },
  {
    title: "MiniSocialMedia",
    description: "A simple yet functional social media application built for the E-Commerce and Web Programming Lab, offering user authentication, profile management, post creation, likes, and comments.",
    tech: ["PHP"],
    github: "https://github.com/asifahamed11/MiniSocialMedia"
  },
  {
    title: "amazon-ecommerce-db-schema",
    description: "Database schema for Amazon-like e-commerce platform.",
    tech: ["SQL", "Database Design"],
    github: "https://github.com/asifahamed11/amazon-ecommerce-db-schema"
  },
  {
    title: "DocRater",
    description: "Cross-platform mobile application for finding and rating doctors with real user reviews.",
    tech: ["Dart", "Flutter", "Firebase"],
    github: "https://github.com/asifahamed11/DocRater"
  },
  {
    title: "Task-Scheduler",
    description: "Task Scheduler is a console-based application designed to simplify your daily life by providing an intuitive interface to manage your tasks.",
    tech: ["C++"],
    github: "https://github.com/asifahamed11/Task-Scheduler"
  },
  {
    title: "Java-Swing-Calculator",
    description: "A simple calculator application built using Java Swing. Provides basic arithmetic operations such as addition, subtraction, multiplication, and division.",
    tech: ["Java", "Java Swing"],
    github: "https://github.com/asifahamed11/Java-Swing-Calculator"
  }
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
    skills: [
      "Python",
      "C",
      "C++",
      "Java",
      "JavaScript",
      "PHP",
      "Dart",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "AI / ML",
    icon: "Brain",
    skills: [
      "Deep Learning",
      "Machine Learning",
      "TensorFlow",
      "PyTorch",
      "Bioinformatics",
    ],
  },
  {
    title: "Web / Database",
    icon: "Globe",
    skills: ["React", "MySQL", "Firebase", "Node.js"],
  },
  {
    title: "Tools",
    icon: "Wrench",
    skills: ["Git", "GitHub", "LaTeX", "VS Code", "Android Studio"],
  },
];
