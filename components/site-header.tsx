"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About me", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Case Study", href: "#case-study" },
  { label: "Certifications", href: "#certifications" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <nav className="container nav-shell" aria-label="Navigasi utama">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark">MR</span>
          <span>Muhammad Ripaldi</span>
        </a>

        <button
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
          className="menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          type="button"
        >
          {menuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>

        <ul className={`nav-links${menuOpen ? " is-open" : ""}`}>
          {navigation.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a className="button button-primary nav-cta" href="mailto:hello@muhammadripaldi.dev">
          Hire Me <ArrowUpRight aria-hidden="true" size={15} />
        </a>
      </nav>
    </header>
  );
}
