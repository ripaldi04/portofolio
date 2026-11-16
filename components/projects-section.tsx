"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  Check,
  Code2,
  Database,
  Mail,
  ShieldCheck,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Reveal } from "@/components/reveal";

type ProjectCategory = "Fullstack Projects" | "WordPress Development";

type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  image: string;
  imageAlt: string;
  summary: string;
  quantity: string;
  description: string;
  highlights: string[];
  stack: string[];
};

const projects: Project[] = [
  {
    id: "education-one",
    title: "Educational Platform",
    category: "Fullstack Projects",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop",
    imageAlt: "Workspace for a digital learning platform",
    summary: "Learning management experience for students and educators.",
    quantity: "Project 01 of 2",
    description:
      "A learning platform concept connecting students, learning materials, and instructors through a clear, responsive experience. The work brings course discovery and learning workflows together in one place.",
    highlights: [
      "Responsive course and lesson experience",
      "Structured user access and learning flows",
      "Backend-ready data and content architecture",
      "Performance-minded, accessible interface",
    ],
    stack: ["Next.js", "Laravel", "MySQL", "Tailwind CSS"],
  },
  {
    id: "education-two",
    title: "Educational Platform",
    category: "Fullstack Projects",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop",
    imageAlt: "Online collaboration for a digital classroom",
    summary: "A second education project focused on a simpler learning journey.",
    quantity: "Project 02 of 2",
    description:
      "A second education project focused on helping learners find the right material, follow their progress, and return to their coursework with less friction.",
    highlights: [
      "Learner-first information hierarchy",
      "Progress and content management flows",
      "Reusable components for course content",
      "Designed for mobile and desktop screens",
    ],
    stack: ["PHP", "JavaScript", "MySQL", "Responsive UI"],
  },
  {
    id: "booking",
    title: "Online Booking System",
    category: "Fullstack Projects",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
    imageAlt: "Analytics dashboard for an online booking system",
    summary: "A streamlined booking flow from service selection to confirmation.",
    quantity: "Fullstack",
    description:
      "A booking system concept that guides customers through service selection and reservation, while giving a business a clear view of upcoming appointments.",
    highlights: [
      "Simple service and schedule selection",
      "Validated reservation and confirmation flow",
      "Admin-friendly booking overview",
      "Ready to connect to email notifications",
    ],
    stack: ["Laravel", "PHP", "MySQL", "JavaScript"],
  },
  {
    id: "travel",
    title: "Travel Management System",
    category: "Fullstack Projects",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=600&auto=format&fit=crop",
    imageAlt: "Travel planning map and itinerary",
    summary: "One place to organize trip details and travel operations.",
    quantity: "Fullstack",
    description:
      "A travel management system concept for organizing trip details and reducing manual coordination with one structured view of travel information.",
    highlights: [
      "Centralized travel and itinerary records",
      "Clear workflows for managing trip details",
      "Structured data relationships",
      "Responsive operational dashboard",
    ],
    stack: ["Laravel", "MySQL", "Tailwind CSS", "JavaScript"],
  },
  {
    id: "company-profile",
    title: "Company Profile",
    category: "WordPress Development",
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=600&auto=format&fit=crop",
    imageAlt: "A clean company website shown on a laptop",
    summary: "Five business websites built for clear, confident brand storytelling.",
    quantity: "5 websites",
    description:
      "A collection of five company profile websites designed to help businesses present their services, build trust, and make it easy for visitors to get in touch.",
    highlights: [
      "Five tailored company profile experiences",
      "Responsive layouts and clear calls to action",
      "WordPress setup with manageable content",
      "SEO-friendly page structure",
    ],
    stack: ["WordPress", "PHP", "SEO", "Responsive Design"],
  },
];

const filters = [
  "All",
  "Fullstack Projects",
  "WordPress Development",
] as const;

type Filter = (typeof filters)[number];

export function ProjectsSection() {
  const [filter, setFilter] = useState<Filter>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (!selectedProject) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setSelectedProject(null);
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject]);

  const visibleProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <>
      <section className="section project-section" id="portfolio">
        <div className="container">
          <div className="project-header">
            <Reveal className="section-heading" >
              <p className="eyebrow">Selected work</p>
              <h2 className="section-title">
                A few things I&apos;ve
                <br />
                <span className="accent-text">helped build.</span>
              </h2>
              <p className="section-copy">
                A selection of fullstack products and WordPress experiences.
                Select a project for its case study.
              </p>
            </Reveal>
            <div aria-label="Filter project berdasarkan kategori" className="project-filters">
              {filters.map((item) => (
                <button
                  aria-pressed={filter === item}
                  className={`filter-button${filter === item ? " is-active" : ""}`}
                  key={item}
                  onClick={() => setFilter(item)}
                  type="button"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <motion.div className="project-grid" layout>
            <AnimatePresence mode="popLayout">
              {visibleProjects.map((project) => (
                <motion.button
                  aria-label={`Buka case study: ${project.title}, ${project.quantity}`}
                  className="project-card"
                  initial={{ opacity: 0, y: 18, scale: 0.98 }}
                  key={project.id}
                  layout
                  onClick={() => setSelectedProject(project)}
                  type="button"
                  whileHover={{ y: -4 }}
                  exit={{ opacity: 0, y: -8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                >
                  <div className="project-image-wrap">
                    {/* // GANTI GAMBAR INI: ganti dengan screenshot proyek asli. */}
                    <Image
                      alt={project.imageAlt}
                      className="project-image"
                      fill
                      sizes="(max-width: 580px) 90vw, (max-width: 820px) 44vw, 360px"
                      src={project.image}
                    />
                    <span className="project-count">{project.quantity}</span>
                  </div>
                  <div className="project-content">
                    <span className="project-category">{project.category}</span>
                    <span className="project-title-row">
                      <span className="project-title">{project.title}</span>
                      <ArrowUpRight aria-hidden="true" className="project-arrow" size={17} />
                    </span>
                    <span className="project-summary">{project.summary}</span>
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>

          <Reveal>
            <div className="case-study-banner" id="case-study">
              <div>
                <p className="eyebrow">Behind the build</p>
                <h3 className="section-title">More than a pretty interface.</h3>
                <p className="section-copy">
                  Explore the goals, decisions, and implementation details behind
                  each project by opening a case study.
                </p>
              </div>
              <a className="button button-secondary" href="#portfolio">
                Explore projects <ArrowUpRight aria-hidden="true" size={15} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            animate={{ opacity: 1 }}
            className="modal-backdrop"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.section
              aria-labelledby="case-study-title"
              aria-modal="true"
              className="case-modal"
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              onClick={(event) => event.stopPropagation()}
              role="dialog"
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <button
                aria-label="Tutup case study"
                className="modal-close"
                onClick={() => setSelectedProject(null)}
                type="button"
              >
                <X aria-hidden="true" size={18} />
              </button>
              <div className="modal-image-wrap">
                {/* // GANTI GAMBAR INI: ganti dengan screenshot proyek asli. */}
                <Image
                  alt={selectedProject.imageAlt}
                  className="modal-image"
                  fill
                  sizes="(max-width: 620px) 90vw, 560px"
                  src={selectedProject.image}
                />
              </div>
              <p className="eyebrow">{selectedProject.category}</p>
              <h2 className="section-title" id="case-study-title">
                {selectedProject.title}
              </h2>
              <p className="modal-description">{selectedProject.description}</p>
              <ul className="modal-highlights">
                {selectedProject.highlights.map((highlight, index) => {
                  const HighlightIcon = [
                    Check,
                    ShieldCheck,
                    Database,
                    Code2,
                    Mail,
                  ][index % 5];

                  return (
                    <li key={highlight}>
                      <HighlightIcon aria-hidden="true" size={15} />
                      {highlight}
                    </li>
                  );
                })}
              </ul>
              <div aria-label="Teknologi proyek" className="modal-tech">
                {selectedProject.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </motion.section>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
