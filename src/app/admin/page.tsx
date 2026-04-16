"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Lock,
  Save,
  RotateCcw,
  Download,
  Upload,
  User,
  GraduationCap,
  BookOpen,
  FolderGit2,
  Cpu,
  ArrowLeft,
  Check,
  AlertTriangle,
  Plus,
  Trash2,
  Eye,
} from "lucide-react";
import { useContent } from "@/lib/content-provider";
import type { Publication, Project, SkillCategory } from "@/lib/data";

const ADMIN_PASSWORD = "asif2026";

const tabs = [
  { id: "personal", label: "Personal Info", icon: User },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "publications", label: "Publications", icon: BookOpen },
  { id: "projects", label: "Projects", icon: FolderGit2 },
  { id: "skills", label: "Skills", icon: Cpu },
];

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [activeTab, setActiveTab] = useState("personal");
  const [saveMessage, setSaveMessage] = useState("");

  const {
    personalInfo,
    education,
    publications,
    projects,
    skillCategories,
    updateContent,
    resetContent,
    exportContent,
    importContent,
  } = useContent();

  // Local edit state
  const [editPersonal, setEditPersonal] = useState(personalInfo);
  const [editEducation, setEditEducation] = useState(education);
  const [editPublications, setEditPublications] = useState<Publication[]>(publications);
  const [editProjects, setEditProjects] = useState<Project[]>(projects);
  const [editSkills, setEditSkills] = useState<SkillCategory[]>(skillCategories);

  // Sync when content changes
  useEffect(() => {
    setEditPersonal(personalInfo);
    setEditEducation(education);
    setEditPublications(publications);
    setEditProjects(projects);
    setEditSkills(skillCategories);
  }, [personalInfo, education, publications, projects, skillCategories]);

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }
  };

  const handleSave = () => {
    updateContent({
      personalInfo: editPersonal,
      education: editEducation,
      publications: editPublications,
      projects: editProjects,
      skillCategories: editSkills,
    });
    setSaveMessage("Changes saved successfully!");
    setTimeout(() => setSaveMessage(""), 3000);
  };

  const handleReset = () => {
    if (confirm("Reset all content to defaults? This cannot be undone.")) {
      resetContent();
      setSaveMessage("Content reset to defaults!");
      setTimeout(() => setSaveMessage(""), 3000);
    }
  };

  const handleExport = () => {
    const json = exportContent();
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "portfolio-content.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImport = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".json";
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (event) => {
        const text = event.target?.result as string;
        if (importContent(text)) {
          setSaveMessage("Content imported successfully!");
        } else {
          setSaveMessage("Failed to import. Invalid JSON format.");
        }
        setTimeout(() => setSaveMessage(""), 3000);
      };
      reader.readAsText(file);
    };
    input.click();
  };

  // Login Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="noise" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass rounded-2xl p-8 w-full max-w-md relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-DEFAULT/5 to-violet-DEFAULT/5 pointer-events-none" />
          <div className="relative">
            <div className="flex items-center justify-center mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-DEFAULT/10 to-violet-DEFAULT/10 border border-cyan-DEFAULT/15">
                <Lock className="w-6 h-6 text-cyan-light" />
              </div>
            </div>
            <h1 className="text-2xl font-bold text-foreground text-center mb-2">
              Admin Panel
            </h1>
            <p className="text-sm text-muted-light text-center mb-6">
              Enter password to manage portfolio content
            </p>
            <div className="space-y-4">
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setPasswordError(false);
                }}
                onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                placeholder="Enter password"
                className={`admin-input ${
                  passwordError ? "border-rose-DEFAULT/50" : ""
                }`}
              />
              {passwordError && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-rose-light text-xs flex items-center gap-1.5"
                >
                  <AlertTriangle className="w-3 h-3" />
                  Incorrect password
                </motion.p>
              )}
              <button
                onClick={handleLogin}
                className="admin-btn admin-btn-primary w-full py-3"
              >
                Access Admin Panel
              </button>
            </div>
            <a
              href="/asif-ahamed-portfolio/"
              className="flex items-center justify-center gap-2 text-sm text-muted-light hover:text-foreground transition-colors mt-4"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to Portfolio
            </a>
          </div>
        </motion.div>
      </div>
    );
  }

  // Admin Dashboard
  return (
    <div className="min-h-screen bg-background">
      <div className="noise" />

      {/* Top Bar */}
      <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a
                href="/asif-ahamed-portfolio/"
                className="p-2 rounded-lg hover:bg-white/5 text-muted-light hover:text-foreground transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
              </a>
              <h1 className="text-lg font-bold text-aurora">Admin Panel</h1>
            </div>
            <div className="flex items-center gap-2">
              <AnimatePresence>
                {saveMessage && (
                  <motion.span
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className="text-sm text-emerald-light flex items-center gap-1.5"
                  >
                    <Check className="w-3.5 h-3.5" />
                    {saveMessage}
                  </motion.span>
                )}
              </AnimatePresence>
              <button onClick={handleImport} className="admin-btn admin-btn-ghost text-xs flex items-center gap-1.5" title="Import JSON">
                <Upload className="w-3.5 h-3.5" />
                Import
              </button>
              <button onClick={handleExport} className="admin-btn admin-btn-ghost text-xs flex items-center gap-1.5" title="Export JSON">
                <Download className="w-3.5 h-3.5" />
                Export
              </button>
              <button onClick={handleReset} className="admin-btn admin-btn-danger text-xs flex items-center gap-1.5">
                <RotateCcw className="w-3.5 h-3.5" />
                Reset
              </button>
              <button onClick={handleSave} className="admin-btn admin-btn-primary text-xs flex items-center gap-1.5">
                <Save className="w-3.5 h-3.5" />
                Save All
              </button>
              <a
                href="/asif-ahamed-portfolio/"
                target="_blank"
                className="admin-btn admin-btn-ghost text-xs flex items-center gap-1.5"
              >
                <Eye className="w-3.5 h-3.5" />
                Preview
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex gap-6">
          {/* Sidebar Tabs */}
          <div className="w-56 shrink-0 hidden md:block">
            <nav className="space-y-1 sticky top-20">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition-all duration-200 ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-cyan-DEFAULT/10 to-violet-DEFAULT/10 text-cyan-light border border-cyan-DEFAULT/15"
                      : "text-muted-light hover:text-foreground hover:bg-white/5"
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Mobile Tabs */}
          <div className="flex gap-2 overflow-x-auto md:hidden mb-6 pb-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? "bg-cyan-DEFAULT/10 text-cyan-light border border-cyan-DEFAULT/15"
                    : "text-muted-light hover:bg-white/5"
                }`}
              >
                <tab.icon className="w-3.5 h-3.5" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="flex-1 min-w-0">
            <AnimatePresence mode="wait">
              {activeTab === "personal" && (
                <motion.div
                  key="personal"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6"
                >
                  <h2 className="text-xl font-bold text-foreground">Personal Information</h2>
                  <div className="glass rounded-2xl p-6 space-y-4">
                    {Object.entries(editPersonal).map(([key, value]) => (
                      <div key={key}>
                        <label className="block text-xs text-muted uppercase tracking-wider mb-1.5">
                          {key.replace(/([A-Z])/g, " $1").trim()}
                        </label>
                        <input
                          type="text"
                          value={value}
                          onChange={(e) =>
                            setEditPersonal({ ...editPersonal, [key]: e.target.value })
                          }
                          className="admin-input"
                        />
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === "education" && (
                <motion.div
                  key="education"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6"
                >
                  <h2 className="text-xl font-bold text-foreground">Education</h2>
                  <div className="glass rounded-2xl p-6 space-y-4">
                    {Object.entries(editEducation).map(([key, value]) => (
                      <div key={key}>
                        <label className="block text-xs text-muted uppercase tracking-wider mb-1.5">
                          {key.replace(/([A-Z])/g, " $1").trim()}
                        </label>
                        <input
                          type="text"
                          value={value}
                          onChange={(e) =>
                            setEditEducation({ ...editEducation, [key]: e.target.value })
                          }
                          className="admin-input"
                        />
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === "publications" && (
                <motion.div
                  key="publications"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6"
                >
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold text-foreground">Publications</h2>
                    <button
                      onClick={() => {
                        const newPub: Publication = {
                          id: Date.now(),
                          title: "New Publication",
                          conference: "",
                          status: "Accepted",
                          tags: [],
                          type: "conference",
                        };
                        setEditPublications([...editPublications, newPub]);
                      }}
                      className="admin-btn admin-btn-primary text-xs flex items-center gap-1.5"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      Add Publication
                    </button>
                  </div>

                  {editPublications.map((pub, index) => (
                    <div key={pub.id} className="glass rounded-2xl p-6 space-y-4 relative">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-muted-light">
                          Publication #{index + 1}
                        </span>
                        <button
                          onClick={() =>
                            setEditPublications(editPublications.filter((_, i) => i !== index))
                          }
                          className="p-1.5 rounded-lg hover:bg-rose-DEFAULT/10 text-muted hover:text-rose-light transition-all"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div>
                        <label className="block text-xs text-muted uppercase tracking-wider mb-1.5">Title</label>
                        <input
                          type="text"
                          value={pub.title}
                          onChange={(e) => {
                            const updated = [...editPublications];
                            updated[index] = { ...pub, title: e.target.value };
                            setEditPublications(updated);
                          }}
                          className="admin-input"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs text-muted uppercase tracking-wider mb-1.5">Conference</label>
                          <input
                            type="text"
                            value={pub.conference || ""}
                            onChange={(e) => {
                              const updated = [...editPublications];
                              updated[index] = { ...pub, conference: e.target.value };
                              setEditPublications(updated);
                            }}
                            className="admin-input"
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-muted uppercase tracking-wider mb-1.5">Status</label>
                          <select
                            value={pub.status}
                            onChange={(e) => {
                              const updated = [...editPublications];
                              updated[index] = { ...pub, status: e.target.value };
                              setEditPublications(updated);
                            }}
                            className="admin-input"
                          >
                            <option value="Accepted">Accepted</option>
                            <option value="Published">Published</option>
                            <option value="Accepted & Awarded">Accepted & Awarded</option>
                            <option value="Presented">Presented</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs text-muted uppercase tracking-wider mb-1.5">Type</label>
                          <select
                            value={pub.type}
                            onChange={(e) => {
                              const updated = [...editPublications];
                              updated[index] = {
                                ...pub,
                                type: e.target.value as Publication["type"],
                              };
                              setEditPublications(updated);
                            }}
                            className="admin-input"
                          >
                            <option value="conference">Conference</option>
                            <option value="poster">Poster</option>
                            <option value="co-authored">Co-authored</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs text-muted uppercase tracking-wider mb-1.5">Paper ID</label>
                          <input
                            type="text"
                            value={pub.paperId || ""}
                            onChange={(e) => {
                              const updated = [...editPublications];
                              updated[index] = { ...pub, paperId: e.target.value };
                              setEditPublications(updated);
                            }}
                            className="admin-input"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs text-muted uppercase tracking-wider mb-1.5">Authors</label>
                        <input
                          type="text"
                          value={pub.authors || ""}
                          onChange={(e) => {
                            const updated = [...editPublications];
                            updated[index] = { ...pub, authors: e.target.value };
                            setEditPublications(updated);
                          }}
                          className="admin-input"
                        />
                      </div>

                      <div>
                        <label className="block text-xs text-muted uppercase tracking-wider mb-1.5">
                          Tags (comma separated)
                        </label>
                        <input
                          type="text"
                          value={pub.tags.join(", ")}
                          onChange={(e) => {
                            const updated = [...editPublications];
                            updated[index] = {
                              ...pub,
                              tags: e.target.value.split(",").map((t) => t.trim()).filter(Boolean),
                            };
                            setEditPublications(updated);
                          }}
                          className="admin-input"
                        />
                      </div>

                      <div className="flex items-center gap-4">
                        <label className="flex items-center gap-2 text-sm text-muted-light cursor-pointer">
                          <input
                            type="checkbox"
                            checked={pub.isAwarded || false}
                            onChange={(e) => {
                              const updated = [...editPublications];
                              updated[index] = { ...pub, isAwarded: e.target.checked };
                              setEditPublications(updated);
                            }}
                            className="rounded"
                          />
                          Awarded
                        </label>
                        {pub.isAwarded && (
                          <input
                            type="text"
                            value={pub.awardTitle || ""}
                            onChange={(e) => {
                              const updated = [...editPublications];
                              updated[index] = { ...pub, awardTitle: e.target.value };
                              setEditPublications(updated);
                            }}
                            placeholder="Award title"
                            className="admin-input flex-1"
                          />
                        )}
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}

              {activeTab === "projects" && (
                <motion.div
                  key="projects"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6"
                >
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold text-foreground">Projects</h2>
                    <button
                      onClick={() => {
                        const newProject: Project = {
                          title: "New Project",
                          description: "",
                          tech: [],
                        };
                        setEditProjects([...editProjects, newProject]);
                      }}
                      className="admin-btn admin-btn-primary text-xs flex items-center gap-1.5"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      Add Project
                    </button>
                  </div>

                  {editProjects.map((project, index) => (
                    <div key={index} className="glass rounded-2xl p-6 space-y-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-muted-light">
                          Project #{index + 1}
                        </span>
                        <button
                          onClick={() =>
                            setEditProjects(editProjects.filter((_, i) => i !== index))
                          }
                          className="p-1.5 rounded-lg hover:bg-rose-DEFAULT/10 text-muted hover:text-rose-light transition-all"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div>
                        <label className="block text-xs text-muted uppercase tracking-wider mb-1.5">Title</label>
                        <input
                          type="text"
                          value={project.title}
                          onChange={(e) => {
                            const updated = [...editProjects];
                            updated[index] = { ...project, title: e.target.value };
                            setEditProjects(updated);
                          }}
                          className="admin-input"
                        />
                      </div>

                      <div>
                        <label className="block text-xs text-muted uppercase tracking-wider mb-1.5">Description</label>
                        <textarea
                          value={project.description}
                          onChange={(e) => {
                            const updated = [...editProjects];
                            updated[index] = { ...project, description: e.target.value };
                            setEditProjects(updated);
                          }}
                          className="admin-textarea"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs text-muted uppercase tracking-wider mb-1.5">GitHub URL</label>
                          <input
                            type="text"
                            value={project.github || ""}
                            onChange={(e) => {
                              const updated = [...editProjects];
                              updated[index] = { ...project, github: e.target.value };
                              setEditProjects(updated);
                            }}
                            className="admin-input"
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-muted uppercase tracking-wider mb-1.5">Live URL</label>
                          <input
                            type="text"
                            value={project.live || ""}
                            onChange={(e) => {
                              const updated = [...editProjects];
                              updated[index] = { ...project, live: e.target.value };
                              setEditProjects(updated);
                            }}
                            className="admin-input"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs text-muted uppercase tracking-wider mb-1.5">
                          Tech Stack (comma separated)
                        </label>
                        <input
                          type="text"
                          value={project.tech.join(", ")}
                          onChange={(e) => {
                            const updated = [...editProjects];
                            updated[index] = {
                              ...project,
                              tech: e.target.value.split(",").map((t) => t.trim()).filter(Boolean),
                            };
                            setEditProjects(updated);
                          }}
                          className="admin-input"
                        />
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}

              {activeTab === "skills" && (
                <motion.div
                  key="skills"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6"
                >
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold text-foreground">Skill Categories</h2>
                    <button
                      onClick={() => {
                        const newCategory: SkillCategory = {
                          title: "New Category",
                          icon: "Code",
                          skills: [],
                        };
                        setEditSkills([...editSkills, newCategory]);
                      }}
                      className="admin-btn admin-btn-primary text-xs flex items-center gap-1.5"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      Add Category
                    </button>
                  </div>

                  {editSkills.map((category, index) => (
                    <div key={index} className="glass rounded-2xl p-6 space-y-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-muted-light">
                          Category #{index + 1}
                        </span>
                        <button
                          onClick={() =>
                            setEditSkills(editSkills.filter((_, i) => i !== index))
                          }
                          className="p-1.5 rounded-lg hover:bg-rose-DEFAULT/10 text-muted hover:text-rose-light transition-all"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs text-muted uppercase tracking-wider mb-1.5">Title</label>
                          <input
                            type="text"
                            value={category.title}
                            onChange={(e) => {
                              const updated = [...editSkills];
                              updated[index] = { ...category, title: e.target.value };
                              setEditSkills(updated);
                            }}
                            className="admin-input"
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-muted uppercase tracking-wider mb-1.5">Icon</label>
                          <select
                            value={category.icon}
                            onChange={(e) => {
                              const updated = [...editSkills];
                              updated[index] = { ...category, icon: e.target.value };
                              setEditSkills(updated);
                            }}
                            className="admin-input"
                          >
                            <option value="Code">Code</option>
                            <option value="Brain">Brain</option>
                            <option value="Globe">Globe</option>
                            <option value="Wrench">Wrench</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs text-muted uppercase tracking-wider mb-1.5">
                          Skills (comma separated)
                        </label>
                        <input
                          type="text"
                          value={category.skills.join(", ")}
                          onChange={(e) => {
                            const updated = [...editSkills];
                            updated[index] = {
                              ...category,
                              skills: e.target.value.split(",").map((s) => s.trim()).filter(Boolean),
                            };
                            setEditSkills(updated);
                          }}
                          className="admin-input"
                        />
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
