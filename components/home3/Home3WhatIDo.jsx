function skillName(skill) {
  return skill.name || skill.skill_name || skill.title || "Skill";
}

function skillBlurb(skill) {
  return skill.description || skill.details || null;
}

export default function Home3WhatIDo({ skills }) {
  return (
    <section id="services" className="home3-section home3-section--alt fade-in-section">
      <div className="home3-container">
        <h2 className="home3-section-title">What I Do</h2>
        <div className="home3-wedo-grid">
          {skills.map((skill, index) => {
            const blurb = skillBlurb(skill);
            return (
              <article key={skill.id || index} className="home3-wedo-card">
                <div className="home3-wedo-icon" aria-hidden>
                  {(index % 4) + 1}
                </div>
                <h3 className="home3-wedo-heading">{skillName(skill)}</h3>
                {blurb && <p className="home3-wedo-text">{blurb}</p>}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
