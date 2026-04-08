export default function Biography({ experiences, education }) {
  const formatDate = (datestring) => {
    const date = new Date(datestring);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric',
    });
  };

  return (
    <section id="experience" className="biography-section fade-in-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-5 mb-md-0">
            <p className="section-label">Career</p>
            <h2 className="section-heading">Experience</h2>
            <div className="timeline mt-4">
              {experiences.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <p className="timeline-date">
                    {formatDate(exp.from_date)} &mdash; {formatDate(exp.to_date)}
                  </p>
                  <h5 className="timeline-title">{exp.description}</h5>
                  <p className="timeline-location">{exp.location}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="col-md-6">
            <p className="section-label">Learning</p>
            <h2 className="section-heading">Education</h2>
            <div className="timeline mt-4">
              {education.map((edu, index) => (
                <div key={index} className="timeline-item">
                  <p className="timeline-date">
                    {formatDate(edu.from_date)} &mdash; {formatDate(edu.to_date)}
                  </p>
                  <h5 className="timeline-title">
                    {edu.school}{edu.description ? ` — ${edu.description}` : ''}
                  </h5>
                  <p className="timeline-location">{edu.location}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
