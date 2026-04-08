export default function Aboutme({ profile }) {
  return (
    <section id="about" className="about-section fade-in-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <p className="section-label">About Me</p>
            <h2 className="section-heading">{profile.name}</h2>
            <p className="about-text">{profile.introduction}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
