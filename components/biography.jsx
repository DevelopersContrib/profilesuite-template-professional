export default function Biography({experiences, education}) {

  const convertDate = (datestring) => {
    const date = new Date(datestring);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${month}/${day}/${year}`;
  }
    
    return (
      <>
        <section className="aboutme-bg py-5">
          <div className="container">
            <div className="row">
              {/* Experiences Column */}
              <div className="col-md-6 mb-4">
                <h2 className="section-title mb-4">Experiences</h2>
                {experiences.map((experience, index) => (
                  <div key={index} className="experience-item">
                    <p className="experience-year">{convertDate(experience.from_date)} to {convertDate(experience.to_date)}</p>
                    <h5 className="experience-title">{experience.description}</h5>
                    <p className="experience-place">{experience.location}</p>
                  </div>
                ))}
              </div>
  
              {/* Education Column */}
              <div className="col-md-6">
                <h2 className="section-title mb-4">Education</h2>
                {education.map((edu, index) => (
                  <div key={index} className="education-item">
                    <p className="education-year">{convertDate(edu.from_date)} to {convertDate(edu.to_date)}</p>
                    <h5 className="education-school">{edu.school} - {edu.description}</h5>
                    <p className="education-place">{edu.location}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
  