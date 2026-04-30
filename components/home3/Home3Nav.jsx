"use client";

import { useEffect, useState } from "react";

const NAV = [
  { href: "#home3-top", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#services", label: "What I Do" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

export default function Home3Nav({ domain }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`home3-header ${scrolled ? "home3-header--scrolled" : ""}`}
    >
      <div className="home3-container home3-header-inner">
        <a href="/home3" className="home3-logo">
          {domain ? domain.split(".")[0] : "Profile"}
        </a>
        <button
          type="button"
          className="home3-nav-toggle"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={`home3-nav ${open ? "home3-nav--open" : ""}`}>
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="home3-nav-link"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
