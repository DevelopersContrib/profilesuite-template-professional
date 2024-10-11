export default function Biography({domain}) {
    const experiences = [
      {
        year: "2023",
        eventName: "Senior Developer at TechCorp",
        place: "San Francisco, CA",
      },
      {
        year: "2021",
        eventName: "Software Engineer at InnovateX",
        place: "Austin, TX",
      },
      {
        year: "2019",
        eventName: "Intern at Web Solutions Ltd.",
        place: "New York, NY",
      },
    ];
  
    const education = [
      {
        year: "2018",
        school: "University of California, Berkeley",
        place: "Berkeley, CA",
      },
      {
        year: "2014",
        school: "San Diego High School",
        place: "San Diego, CA",
      },
    ];
  
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
                    <p className="experience-year">{experience.year}</p>
                    <h5 className="experience-title">{experience.eventName}</h5>
                    <p className="experience-place">{experience.place}</p>
                  </div>
                ))}
              </div>
  
              {/* Education Column */}
              <div className="col-md-6">
                <h2 className="section-title mb-4">Education</h2>
                {education.map((edu, index) => (
                  <div key={index} className="education-item">
                    <p className="education-year">{edu.year}</p>
                    <h5 className="education-school">{edu.school}</h5>
                    <p className="education-place">{edu.place}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
  