export default function Home2Biography({ experiences, education }) {
  const formatDate = (datestring) => {
    const date = new Date(datestring);
    return date.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  };

  const dateRange = (from, to) =>
    `${formatDate(from)} — ${formatDate(to)}`;

  return (
    <section
      id="experience"
      className="home2-section home2-bio-bg fade-in-section"
    >
      <div className="home2-section-inner">
        <div className="home2-bio-cols">
          <div className="home2-bio-stack">
            <header className="home2-bio-col-head">
              <p className="home2-sec-label">Career</p>
              <h2 className="home2-sec-heading home2-bio-col-title">Experience</h2>
            </header>
            <div className="home2-cv-list">
              {experiences.map((exp, index) => (
                <article
                  key={index}
                  className="home2-cv-card home2-cv-card--exp"
                >
                  <div className="home2-cv-card-top">
                    <h3 className="home2-cv-heading">{exp.description}</h3>
                    <p className="home2-cv-dates">
                      {dateRange(exp.from_date, exp.to_date)}
                    </p>
                  </div>
                  <p className="home2-cv-place">{exp.location}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="home2-bio-stack">
            <header className="home2-bio-col-head">
              <p className="home2-sec-label">Learning</p>
              <h2 className="home2-sec-heading home2-bio-col-title">Education</h2>
            </header>
            <div className="home2-cv-list">
              {education.map((edu, index) => (
                <article
                  key={index}
                  className="home2-cv-card home2-cv-card--edu"
                >
                  <div className="home2-cv-card-top">
                    <h3 className="home2-cv-heading">
                      {edu.school}
                      {edu.description ? (
                        <span className="home2-cv-sub">
                          {" "}
                          · {edu.description}
                        </span>
                      ) : null}
                    </h3>
                    <p className="home2-cv-dates">
                      {dateRange(edu.from_date, edu.to_date)}
                    </p>
                  </div>
                  <p className="home2-cv-place">{edu.location}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
