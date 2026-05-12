"use client";

import { useEffect, useState } from "react";

const ICON_PROPS = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

function NavIcon({ name }) {
  switch (name) {
    case "home":
      return (
        <svg {...ICON_PROPS}>
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      );
    case "about":
      return (
        <svg {...ICON_PROPS}>
          <circle cx="12" cy="8" r="4" />
          <path d="M6 21v-1a6 6 0 0 1 12 0v1" />
        </svg>
      );
    case "skills":
      return (
        <svg {...ICON_PROPS}>
          <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
          <line x1="12" y1="22" x2="12" y2="15.5" />
          <polyline points="22 8.5 12 15.5 2 8.5" />
        </svg>
      );
    case "work":
      return (
        <svg {...ICON_PROPS}>
          <rect x="3" y="3" width="7" height="9" rx="1" />
          <rect x="14" y="3" width="7" height="5" rx="1" />
          <rect x="14" y="12" width="7" height="9" rx="1" />
          <rect x="3" y="16" width="7" height="5" rx="1" />
        </svg>
      );
    case "experience":
      return (
        <svg {...ICON_PROPS}>
          <rect x="2" y="7" width="20" height="14" rx="2" />
          <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        </svg>
      );
    case "blog":
      return (
        <svg {...ICON_PROPS}>
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      );
    default:
      return null;
  }
}

const LINKS = [
  { href: "#home2-top", icon: "home", title: "Home" },
  { href: "#about", icon: "about", title: "About" },
  { href: "#skills", icon: "skills", title: "Skills" },
  { href: "#work", icon: "work", title: "Work" },
  { href: "#experience", icon: "experience", title: "Experience" },
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
            <a key={l.href} href={l.href} title={l.title} aria-label={l.title}>
              <NavIcon name={l.icon} />
            </a>
          ))}
          <a href="/blog" title="Blog" aria-label="Blog">
            <NavIcon name="blog" />
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
