"use client";

import {
  AppWindow,
  Blocks,
  Braces,
  Database,
  Globe2,
  SearchCheck,
  ServerCog,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/reveal";

const skills: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Frontend Development",
    description: "Responsive UI, reusable components, and thoughtful user experiences.",
    icon: AppWindow,
  },
  {
    title: "Backend Development",
    description:
      "Application logic, authentication, validation, and payment, email/SMTP, and WhatsApp integrations.",
    icon: ServerCog,
  },
  {
    title: "Fullstack Development",
    description: "End-to-end integration that keeps the whole product fast and cohesive.",
    icon: Workflow,
  },
  {
    title: "Database Design",
    description: "Schema design, table relationships, and well-optimized queries.",
    icon: Database,
  },
  {
    title: "Deployment & DevOps",
    description: "Environment configuration, server deployment, and stable releases.",
    icon: Blocks,
  },
  {
    title: "SEO Optimization",
    description: "Technical SEO, page performance, metadata, and SEO-friendly URLs.",
    icon: SearchCheck,
  },
  {
    title: "WordPress Development",
    description: "Theme and plugin setup, landing pages, UI updates, and business integrations.",
    icon: Globe2,
  },
  {
    title: "Application Architecture",
    description: "Clean, maintainable code built around real user and business needs.",
    icon: Braces,
  },
];

export function AboutAndSkills() {
  return (
    <>
      <section className="section" id="about">
        <div className="container about-grid">
          <Reveal>
            <p className="eyebrow">A little about me</p>
            <h2 className="section-title">
              I bring ideas
              <br />
              <span className="accent-text">to life.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="about-copy">
              I am an IT Developer experienced in building web applications from
              the ground up, ensuring they are production-ready. I bridge the gap
              between user-centric interface design and robust, secure, and
              maintainable backend systems. My development process focuses on
              clean code, performance, and aligning technical solutions with
              business and user needs. From crafting responsive UIs and
              application logic to architecting databases and integrating
              third-party services, I ensure every project is built to be
              stable, scalable, and ready for deployment.
            </p>
            {/* GANTI LINK CV: letakkan file CV Anda di public/ dengan nama ini. */}
            <a className="button button-secondary" download href="/Muhammad-Ripaldi-CV.pdf" style={{ marginTop: 24 }}>
              Download CV <span aria-hidden="true">↗</span>
            </a>
          </Reveal>
        </div>
      </section>

      <section className="section" id="skills" style={{ paddingTop: 18 }}>
        <div className="container">
          <Reveal className="section-heading">
            <p className="eyebrow">What I do</p>
            <h2 className="section-title">
              End-to-end development,
              <br />
              <span className="accent-text">built with care.</span>
            </h2>
            <p className="section-copy">
              A versatile toolkit for shaping thoughtful interfaces and dependable
              products that are ready to grow.
            </p>
          </Reveal>
          <StaggerGroup className="skill-grid">
            {skills.map(({ title, description, icon: Icon }) => (
              <StaggerItem className="skill-card" key={title}>
                <span className="skill-icon">
                  <Icon aria-hidden="true" size={20} strokeWidth={1.8} />
                </span>
                <h3 className="skill-title">{title}</h3>
                <p className="skill-description">{description}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>
    </>
  );
}
