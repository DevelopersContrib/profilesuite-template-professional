export default function Home3Resume({ experiences, education }) {
  const formatDate = (datestring) => {
    const date = new Date(datestring);
    return date.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  };

  const range = (from, to) =>
    `${formatDate(from)} — ${formatDate(to)}`;

  const hasExp = experiences.length > 0;
  const hasEdu = education.length > 0;

  return (
    <section id="experience" className="home3-section fade-in-section">
      <div className="home3-container">
        <h2 className="home3-section-title">Experience</h2>
        <div
          className={`home3-resume-grid ${!hasExp || !hasEdu ? "home3-resume-grid--single" : ""}`}
        >
          {hasExp && (
            <div className="home3-resume-col">
              <h3 className="home3-resume-heading">Career</h3>
              <ul className="home3-resume-list">
                {experiences.map((exp, index) => (
                  <li key={index} className="home3-resume-item">
                    <p className="home3-resume-dates">
                      {range(exp.from_date, exp.to_date)}
                    </p>
                    <h4 className="home3-resume-role">{exp.description}</h4>
                    <p className="home3-resume-meta">{exp.location}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {hasEdu && (
            <div className="home3-resume-col">
              <h3 className="home3-resume-heading">Education</h3>
              <ul className="home3-resume-list">
                {education.map((edu, index) => (
                  <li key={index} className="home3-resume-item">
                    <p className="home3-resume-dates">
                      {range(edu.from_date, edu.to_date)}
                    </p>
                    <h4 className="home3-resume-role">
                      {edu.school}
                      {edu.description ? ` — ${edu.description}` : ""}
                    </h4>
                    <p className="home3-resume-meta">{edu.location}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
