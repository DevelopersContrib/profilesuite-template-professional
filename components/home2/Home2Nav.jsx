"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#home2-top", label: "Hm", title: "Home" },
  { href: "#about", label: "Ab", title: "About" },
  { href: "#skills", label: "Sk", title: "Skills" },
  { href: "#work", label: "Wr", title: "Work" },
  { href: "#experience", label: "Ex", title: "Experience" },
];

export default function Home2Nav({ domain }) {
  const [drawer, setDrawer] = useState(false);

  useEffect(() => {
    if (drawer) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawer]);

  return (
    <>
      <nav className="home2-mobile-bar" aria-label="Primary">
        <a href="/home2" className="home2-mobile-brand">
          {domain || "Portfolio"}
        </a>
        <button
          type="button"
          className="home2-burger"
          aria-label="Open menu"
          onClick={() => setDrawer(true)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <aside className="home2-sidebar" aria-label="Section navigation">
        <div className="home2-sidebar-nav">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} title={l.title}>
              {l.label}
            </a>
          ))}
          <a href="/blog" title="Blog">
            Bl
          </a>
        </div>
      </aside>

      <div
        className={`home2-drawer ${drawer ? "open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
      >
        <div
          className="home2-drawer-backdrop"
          onClick={() => setDrawer(false)}
        />
        <div className="home2-drawer-panel">
          <a href="/home2" onClick={() => setDrawer(false)}>
            Home
          </a>
          <a href="#about" onClick={() => setDrawer(false)}>
            About
          </a>
          <a href="#skills" onClick={() => setDrawer(false)}>
            Skills
          </a>
          <a href="#work" onClick={() => setDrawer(false)}>
            Work
          </a>
          <a href="#experience" onClick={() => setDrawer(false)}>
            Experience
          </a>
          <a href="/blog" onClick={() => setDrawer(false)}>
            Blog
          </a>
        </div>
      </div>
    </>
  );
}
