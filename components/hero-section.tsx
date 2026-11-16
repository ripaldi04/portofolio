"use client";

import Image from "next/image";
import { ArrowDown, ArrowUpRight, Code2 } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="hero-section" id="home">
      <div className="container hero-grid">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="hero-copy"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="availability">
            <span aria-hidden="true" className="availability-dot" />
            Available for selected projects
          </div>
          <p className="hero-greeting">Hello, I&apos;m</p>
          <h1 className="hero-title">
            Muhammad
            <br />
            <span className="accent-text">Ripaldi</span>
          </h1>
          <p className="hero-role">Fullstack Web Developer</p>
          <p className="hero-description">
            I build polished digital experiences and reliable web applications,
            from the first interface to the production-ready backend.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="mailto:hello@muhammadripaldi.dev">
              Hire Me <ArrowUpRight aria-hidden="true" size={16} />
            </a>
            {/* GANTI LINK CV: letakkan file CV Anda di public/ dengan nama ini. */}
            <a className="button button-secondary" download href="/Muhammad-Ripaldi-CV.pdf">
              <ArrowDown aria-hidden="true" size={15} />
              Lihat CV
            </a>
          </div>
          <div aria-label="Statistik singkat" className="hero-stats">
            <div>
              <span className="stat-value">1+</span>
              <span className="stat-label">Years of Experience</span>
            </div>
            <div>
              <span className="stat-value">10+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="hero-visual"
          initial={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero-image-ring" />
          <div className="hero-photo-frame">
            {/* // GANTI GAMBAR INI: ganti URL Unsplash dengan foto profesional Anda. */}
            <Image
              alt="Foto profesional placeholder untuk Muhammad Ripaldi"
              className="hero-photo"
              fill
              priority
              sizes="(max-width: 580px) 85vw, (max-width: 820px) 38vw, 445px"
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
            />
          </div>
          <div className="hero-floating-card">
            <span className="floating-icon">
              <Code2 aria-hidden="true" size={19} />
            </span>
            <span>
              <span className="floating-card-title">End-to-end builder</span>
              <span className="floating-card-subtitle">From idea to deployment</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
