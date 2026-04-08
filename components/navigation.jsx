"use client";

import { useState, useEffect } from 'react';

export default function Navigation({ domain }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <nav className={`nav-glass ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="container d-flex align-items-center justify-content-between">
        <a href="/" className="nav-brand">{domain || 'Portfolio'}</a>
        <button
          className="nav-toggle d-md-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {menuOpen && (
            <div className="nav-close-overlay" onClick={() => setMenuOpen(false)} />
          )}
          <a href="/" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
          <a href="/blog" onClick={() => setMenuOpen(false)}>Blog</a>
        </div>
      </div>
    </nav>
  );
}
