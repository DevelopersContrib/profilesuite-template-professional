"use client";

import { useEffect, useRef, useState } from 'react';

export default function Skills({ skills }) {
  const sectionRef = useRef(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="skills-section fade-in-section" ref={sectionRef}>
      <div className="container">
        <p className="section-label">What I Know</p>
        <h2 className="section-heading">Skills</h2>
        <div className="skills-grid mt-4">
          {skills.map((skill, index) => {
            const name = skill.name || skill.skill_name || skill.title || 'Skill';
            const level = skill.level || skill.proficiency || skill.percentage;
            const numericLevel = typeof level === 'number' ? level : parseInt(level, 10);
            const hasLevel = !isNaN(numericLevel) && numericLevel > 0;

            return (
              <div key={skill.id || index} className="skill-card">
                <div className="d-flex justify-content-between align-items-center">
                  <span className="skill-name">{name}</span>
                  {hasLevel && <span className="skill-level">{numericLevel}%</span>}
                </div>
                {hasLevel && (
                  <div className="skill-bar-track">
                    <div
                      className="skill-bar-fill"
                      style={{ width: animated ? `${Math.min(numericLevel, 100)}%` : '0%' }}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
