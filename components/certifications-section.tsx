"use client";

import { Award, BadgeCheck, GraduationCap } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/reveal";

const certifications = [
  {
    title: "Alibaba Certified Developer",
    organization: "Alibaba Cloud",
    icon: BadgeCheck,
  },
  {
    title: "Fullstack Web Development",
    organization: "PT Global Investment Institusi · MSIB Batch 7",
    icon: GraduationCap,
  },
  {
    title: "UI/UX Design",
    organization:
      "PT Global Investment Institusi · Studi Independen Bersertifikat – Kampus Merdeka",
    icon: Award,
  },
];

export function CertificationsSection() {
  return (
    <>
      <section className="section" id="certifications">
        <div className="container">
          <Reveal className="section-heading">
            <p className="eyebrow">Learning &amp; growth</p>
            <h2 className="section-title">
              Certifications &
              <br />
              <span className="accent-text">recognition.</span>
            </h2>
          </Reveal>
          <StaggerGroup className="certification-grid">
            {certifications.map(({ title, organization, icon: Icon }) => (
              <StaggerItem className="certification-card" key={title}>
                <span className="certification-icon">
                  <Icon aria-hidden="true" size={21} strokeWidth={1.8} />
                </span>
                <span>
                  <h3 className="certification-title">{title}</h3>
                  <p className="certification-org">{organization}</p>
                </span>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="contact-strip">
        <div className="container contact-strip-inner">
          <div>
            <p className="eyebrow">Have a project in mind?</p>
            <h2 className="section-title">Let&apos;s make it happen.</h2>
            <p className="section-copy">
              Let&apos;s talk about what you&apos;re building and how I can help.
            </p>
          </div>
          <a className="button button-primary" href="mailto:hello@muhammadripaldi.dev">
            Hire Me <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </>
  );
}
