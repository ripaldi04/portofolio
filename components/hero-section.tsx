"use client";

import Image from "next/image";
import { ArrowDown, ArrowUpRight, Code2 } from "lucide-react";
import {
  animate,
  motion,
  MotionConfig,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import { useEffect, useRef, type MouseEvent } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease },
  },
};

const lineReveal: Variants = {
  hidden: { y: "110%" },
  show: { y: "0%", transition: { duration: 0.9, ease } },
};

function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const node = ref.current;
    const controls = animate(0, to, {
      duration: 1.6,
      delay: 0.9,
      ease,
      onUpdate: (v) => {
        node.textContent = `${Math.round(v)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, to, suffix]);

  return (
    <span className="stat-value" ref={ref}>
      0{suffix}
    </span>
  );
}

export function HeroSection() {
  // Parallax mengikuti mouse
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 120, damping: 20 });
  const sy = useSpring(my, { stiffness: 120, damping: 20 });

  const photoX = useTransform(sx, [-0.5, 0.5], [-10, 10]);
  const photoY = useTransform(sy, [-0.5, 0.5], [-10, 10]);
  const cardX = useTransform(sx, [-0.5, 0.5], [16, -16]);
  const cardY = useTransform(sy, [-0.5, 0.5], [12, -12]);

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  }

  function handleLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <MotionConfig reducedMotion="user">
      <section className="hero-section" id="home">
        <div className="container hero-grid">
          <motion.div
            animate="show"
            className="hero-copy"
            initial="hidden"
            variants={container}
          >
            <motion.div className="availability" variants={item}>
              <span aria-hidden="true" className="availability-dot" />
              Available for selected projects
            </motion.div>

            <motion.p className="hero-greeting" variants={item}>
              Hello, I&apos;m
            </motion.p>

            <h1 className="hero-title">
              <span className="line-mask">
                <motion.span className="line-inner" variants={lineReveal}>
                  Muhammad
                </motion.span>
              </span>
              <span className="line-mask">
                <motion.span
                  className="line-inner accent-text"
                  variants={lineReveal}
                >
                  Ripaldi
                </motion.span>
              </span>
            </h1>

            <motion.p className="hero-role" variants={item}>
              Fullstack Web Developer
            </motion.p>

            <motion.p className="hero-description" variants={item}>
              I build polished digital experiences and reliable web
              applications, from the first interface to the production-ready
              backend.
            </motion.p>

            <motion.div className="hero-actions" variants={item}>
              <motion.a
                className="button button-primary"
                href="mailto:hello@muhammadripaldi.dev"
                whileTap={{ scale: 0.96 }}
              >
                Hire Me <ArrowUpRight aria-hidden="true" size={16} />
              </motion.a>
              {/* GANTI LINK CV: letakkan file CV Anda di public/ dengan nama ini. */}
              <motion.a
                className="button button-secondary"
                download
                href="/Muhammad-Ripaldi-CV.pdf"
                whileTap={{ scale: 0.96 }}
              >
                <ArrowDown aria-hidden="true" size={15} />
                Lihat CV
              </motion.a>
            </motion.div>

            <motion.div
              aria-label="Statistik singkat"
              className="hero-stats"
              variants={item}
            >
              <div>
                <CountUp suffix="+" to={1} />
                <span className="stat-label">Years of Experience</span>
              </div>
              <div>
                <CountUp suffix="+" to={10} />
                <span className="stat-label">Projects Completed</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="hero-visual"
            initial={{ opacity: 0, y: 30 }}
            onMouseLeave={handleLeave}
            onMouseMove={handleMove}
            transition={{ duration: 0.9, delay: 0.15, ease }}
          >
            <motion.div
              animate={{ opacity: 1, scale: 1 }}
              className="hero-image-ring"
              initial={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 1.1, delay: 0.5, ease }}
            />

            <motion.div
              animate={{ opacity: 1, scale: 1 }}
              className="hero-photo-frame"
              initial={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 1, delay: 0.25, ease }}
            >
              <motion.div
                animate={{ scale: 1.08 }}
                initial={{ scale: 1.3 }}
                style={{ x: photoX, y: photoY, position: "absolute", inset: 0 }}
                transition={{ duration: 1.6, delay: 0.25, ease }}
              >
                <Image
                  alt="Foto Muhammad Ripaldi"
                  className="hero-photo"
                  fill
                  priority
                  sizes="(max-width: 580px) 85vw, (max-width: 820px) 38vw, 445px"
                  src="/ripaldi.webp"
                />
              </motion.div>
            </motion.div>

            <motion.div
              animate={{ opacity: 1, scale: 1 }}
              className="hero-floating-card"
              initial={{ opacity: 0, scale: 0.8 }}
              style={{ x: cardX, y: cardY }}
              transition={{ duration: 0.7, delay: 1, ease }}
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                className="floating-inner"
                transition={{
                  duration: 4,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              >
                <span className="floating-icon">
                  <Code2 aria-hidden="true" size={19} />
                </span>
                <span>
                  <span className="floating-card-title">
                    End-to-end builder
                  </span>
                  <span className="floating-card-subtitle">
                    From idea to deployment
                  </span>
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}