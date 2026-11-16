"use client";

import {
  Boxes,
  CodeXml,
  Database,
  Gauge,
  GitBranch,
  Search,
  Server,
  type LucideIcon,
} from "lucide-react";
import {
  SiDocker,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiMysql,
  SiNextdotjs,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiTailwindcss,
  SiWordpress,
} from "react-icons/si";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";

type TechItem = {
  label: string;
  icon: ReactNode;
};

type TechGroup = {
  title: string;
  icon: LucideIcon;
  items: TechItem[];
};

const groups: TechGroup[] = [
  {
    title: "Languages & Markup",
    icon: CodeXml,
    items: [
      {
        label: "HTML",
        icon: <SiHtml5 aria-hidden="true" className="tech-icon" />,
      },
      {
        label: "JavaScript",
        icon: <SiJavascript aria-hidden="true" className="tech-icon" />,
      },
      {
        label: "PHP",
        icon: <SiPhp aria-hidden="true" className="tech-icon" />,
      },
      {
        label: "Python",
        icon: <SiPython aria-hidden="true" className="tech-icon" />,
      },
    ],
  },
  {
    title: "Frameworks & Styling",
    icon: Boxes,
    items: [
      {
        label: "Next.js",
        icon: <SiNextdotjs aria-hidden="true" className="tech-icon" />,
      },
      {
        label: "Laravel",
        icon: <SiLaravel aria-hidden="true" className="tech-icon" />,
      },
      {
        label: "Tailwind CSS",
        icon: <SiTailwindcss aria-hidden="true" className="tech-icon" />,
      },
      {
        label: "WordPress",
        icon: <SiWordpress aria-hidden="true" className="tech-icon" />,
      },
    ],
  },
  {
    title: "Database & Architecture",
    icon: Database,
    items: [
      {
        label: "MySQL",
        icon: <SiMysql aria-hidden="true" className="tech-icon" />,
      },
      {
        label: "PostgreSQL",
        icon: <SiPostgresql aria-hidden="true" className="tech-icon" />,
      },
      {
        label: "Database Architecture",
        icon: <Server aria-hidden="true" className="tech-plain-icon" />,
      },
    ],
  },
  {
    title: "DevOps, Tools & Deployment",
    icon: GitBranch,
    items: [
      {
        label: "Docker",
        icon: <SiDocker aria-hidden="true" className="tech-icon" />,
      },
      {
        label: "Git",
        icon: <SiGit aria-hidden="true" className="tech-icon" />,
      },
      {
        label: "GitHub",
        icon: <SiGithub aria-hidden="true" className="tech-icon" />,
      },
      {
        label: "CI/CD",
        icon: <GitBranch aria-hidden="true" className="tech-plain-icon" />,
      },
      {
        label: "Deployment",
        icon: <Server aria-hidden="true" className="tech-plain-icon" />,
      },
    ],
  },
  {
    title: "Optimization & Search",
    icon: Search,
    items: [
      {
        label: "Technical SEO",
        icon: <Search aria-hidden="true" className="tech-plain-icon" />,
      },
      {
        label: "Web Performance Optimization",
        icon: <Gauge aria-hidden="true" className="tech-plain-icon" />,
      },
    ],
  },
];

// Gabungkan semua item dari semua grup jadi satu daftar
const allItems: TechItem[] = groups.flatMap((group) => group.items);

// Bagi jadi 2 baris
const half = Math.ceil(allItems.length / 2);
const rows = [allItems.slice(0, half), allItems.slice(half)];

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: TechItem[];
  reverse?: boolean;
}) {
  // Digandakan supaya loop-nya mulus tanpa putus
  const loop = [...items, ...items];

  return (
    <div className="marquee">
      <div className={`marquee-track${reverse ? " marquee-reverse" : ""}`}>
        {loop.map(({ label, icon }, i) => (
          <motion.div
            aria-hidden={i >= items.length}
            className="tech-card"
            key={`${label}-${i}`}
            whileHover={{ scale: 1.08, y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 22 }}
          >
            {icon}
            <span>{label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function TechStackSection() {
  return (
    <section className="section tech-section" id="tech-stack">
      <div className="container">
        <div className="tech-heading">
          <Reveal>
            <p className="eyebrow">My toolkit</p>
            <h2 className="section-title">
              The tools behind
              <br />
              <span className="accent-text">the work.</span>
            </h2>
            <p className="section-copy">
              A practical stack for creating, shipping, and improving web
              products.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="marquee-wrapper">
        <MarqueeRow items={rows[0]} />
        <MarqueeRow items={rows[1]} reverse />
      </div>
    </section>
  );
}
