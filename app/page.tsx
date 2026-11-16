import { AboutAndSkills } from "@/components/about-and-skills";
import { CertificationsSection } from "@/components/certifications-section";
import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/components/projects-section";
import { SiteHeader } from "@/components/site-header";
import { TechStackSection } from "@/components/tech-stack-section";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutAndSkills />
        <TechStackSection />
        <ProjectsSection />
        <CertificationsSection />
      </main>
      <footer className="site-footer">
        <div className="container footer-inner">
          <a className="brand footer-brand" href="#home" aria-label="Kembali ke atas">
            <span className="brand-mark">MR</span>
            <span>Muhammad Ripaldi</span>
          </a>
          <p>Designed &amp; built with care. © 2026.</p>
          <a className="footer-link" href="mailto:hello@muhammadripaldi.dev">
            Let&apos;s work together <span aria-hidden="true">↗</span>
          </a>
        </div>
      </footer>
    </>
  );
}
