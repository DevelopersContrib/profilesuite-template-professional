export default function Home2About({ profile }) {
  return (
    <section id="about" className="home2-section home2-about-bg fade-in-section">
      <div className="home2-section-inner">
        <span className="home2-sec-num" aria-hidden>
          01
        </span>
        <p className="home2-sec-label">About</p>
        <h2 className="home2-sec-heading">{profile.name}</h2>
        <p className="home2-about-text">{profile.introduction}</p>
      </div>
    </section>
  );
}
