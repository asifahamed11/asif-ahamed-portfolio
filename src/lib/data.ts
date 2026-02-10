// Base path for GitHub Pages deployment
export const BASE_PATH = "/asif-ahamed-portfolio";

export const personalInfo = {
  name: "Asif Ahamed",
  tagline: "Bridging Software Engineering & AI Research",
  email: "asifahamedstudent@gmail.com",
  phone: "+880 1770-396222",
  location: "Rajshahi, Bangladesh",
  portfolio: "https://asifahamed11.github.io/",
  linkedin: "https://www.linkedin.com/in/asifahamed112/",
  github: "https://github.com/asifahamed11",
  scholar: "https://scholar.google.com/citations?user=ciEQlLEAAAAJ&hl=en",
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
  type: "conference" | "poster" | "co-authored";
}

export const publications: Publication[] = [
  {
    id: 1,
    title:
      "Hybrid Ensemble Learning for Coding vs. Non-coding Somatic Variant Classification",
    conference: "UCICS 2026",
    status: "Accepted & Awarded",
    paperId: "108",
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
    tags: ["Ensemble Learning", "Tumor Prediction", "Methylation"],
    type: "conference",
  },
  {
    id: 4,
    title: "Ensemble Learning in Rice Leaf Diseases Classification",
    conference: "2025 International Conference on Quantum Photonics, AI & SPC",
    status: "Published",
    authors: "MM Rahman, T Khan, MMR Mridha, MAI Mizan, MFN Nakib, A Ahamed",
    tags: ["Ensemble Learning", "Deep Learning", "Agriculture"],
    type: "conference",
  },
  {
    id: 5,
    title:
      "Improved Classification of Retinal Disease: An Ensemble Deep Learning Approach for Diabetic Retinopathy, Glaucoma, and Cataracts",
    conference: "2025 International Conference on Quantum Photonics, AI & SPC",
    status: "Published",
    authors: "A Ahamed, T Khan, MSA Shakil, MMR Mridha, MFN Nakib, MDH Huda",
    tags: ["Deep Learning", "Medical Imaging", "Retinal Disease"],
    type: "conference",
  },
  {
    id: 6,
    title:
      "Multiple Face-Emotion Recognition Using Attention Mechanisms in Deep Learning",
    conference: "2025 International Conference on Quantum Photonics, AI & SPC",
    status: "Published",
    authors: "MAI Mizan, MT Khan, IT Moon, MMR Mridha, MFN Nakib, A Ahamed",
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
    tags: ["Deep Learning", "MRI", "Brain Tumor"],
    type: "conference",
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
    title: "Nova Monitor",
    description:
      "Real-time deep learning model training monitor that sends AI-summarized logs to Telegram to avoid spam.",
    tech: ["Python", "n8n", "Google Gemini API", "Telegram API"],
    github: "https://github.com/asifahamed11/Nova-Monitor",
  },
  {
    title: "MediLinx",
    description:
      "A comprehensive healthcare management platform connecting patients and doctors with AI-based health recommendations.",
    tech: ["PHP", "MySQL", "AI Integration"],
    github: "https://github.com/asifahamed11/MediLinx",
  },
  {
    title: "DocRater",
    description:
      "Cross-platform mobile application for finding and rating doctors with real user reviews.",
    tech: ["Flutter", "Firebase"],
    github: "https://github.com/asifahamed11/DocRater",
  },
  {
    title: "One-Click-GLUT",
    description:
      "Automated installer for Code::Blocks with MinGW and FreeGLUT configuration, simplifying OpenGL development setup.",
    tech: ["C", "Batch Script"],
    github: "https://github.com/asifahamed11/One-Click-GLUT",
  },
  {
    title: "MiniSocialMedia",
    description:
      "A social media application featuring authentication, posts, likes, and comments functionality.",
    tech: ["PHP"],
    github: "https://github.com/asifahamed11/MiniSocialMedia",
  },
  {
    title: "Pop-cat-recycle-bin",
    description:
      "A fun utility that transforms the Windows Recycle Bin into the Pop Cat meme using registry modifications.",
    tech: ["Batchfile", "Registry"],
    github: "https://github.com/asifahamed11/Pop-cat-recycle-bin",
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
