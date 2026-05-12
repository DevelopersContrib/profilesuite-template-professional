"use client";

import { useEffect, useRef, useState } from "react";

const RING_R = 17;
const RING_C = 2 * Math.PI * RING_R;

function SkillRing({ pct, active, index }) {
  const clamped = Math.min(Math.max(pct, 0), 100);
  const offset = active ? RING_C * (1 - clamped / 100) : RING_C;
  const gradId = `home2-ring-grad-${index}`;

  return (
    <div className="home2-skill-ring-wrap">
      <svg
        className="home2-skill-ring-svg"
        viewBox="0 0 44 44"
        width="52"
        height="52"
        aria-hidden
      >
        <defs>
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ea580c" />
            <stop offset="100%" stopColor="#fbbf24" />
          </linearGradient>
        </defs>
        <circle
          cx="22"
          cy="22"
          r={RING_R}
          fill="none"
          stroke="rgba(255,255,255,0.07)"
          strokeWidth="2.75"
        />
        <circle
          cx="22"
          cy="22"
          r={RING_R}
          fill="none"
          stroke={`url(#${gradId})`}
          strokeWidth="2.75"
          strokeLinecap="round"
          strokeDasharray={RING_C}
          strokeDashoffset={offset}
          transform="rotate(-90 22 22)"
          style={{ transition: "stroke-dashoffset 1.15s cubic-bezier(0.33, 1, 0.68, 1)" }}
        />
      </svg>
      <span className="home2-skill-ring-label">{active ? `${clamped}%` : "—"}</span>
    </div>
  );
}

export default function Home2Skills({ skills }) {
  const sectionRef = useRef(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAnimated(true);
      },
      { threshold: 0.12 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="home2-section home2-skills-bg fade-in-section"
    >
      <div className="home2-section-inner">
        <header className="home2-skills-head">
          <p className="home2-sec-label">Expertise</p>
          <h2 className="home2-sec-heading home2-skills-heading">Skills</h2>
        </header>

        <ul className="home2-skills-grid">
          {skills.map((skill, index) => {
            const name =
              skill.name || skill.skill_name || skill.title || "Skill";
            const level = skill.level || skill.proficiency || skill.percentage;
            const numericLevel =
              typeof level === "number" ? level : parseInt(level, 10);
            const hasLevel = !isNaN(numericLevel) && numericLevel > 0;
            const idx = String(index + 1).padStart(2, "0");

            return (
              <li
                key={skill.id || index}
                className="home2-skill-card"
                aria-label={
                  hasLevel
                    ? `${name}, ${numericLevel} percent`
                    : `${name}`
                }
              >
                <div className="home2-skill-card-top">
                  <span className="home2-skill-idx" aria-hidden>
                    {idx}
                  </span>
                  {hasLevel && (
                    <div className="home2-skill-visual">
                      <SkillRing
                        pct={numericLevel}
                        active={animated}
                        index={index}
                      />
                    </div>
                  )}
                </div>
                <p className="home2-skill-title">{name}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
