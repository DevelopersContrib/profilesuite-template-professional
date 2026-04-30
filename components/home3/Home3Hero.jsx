import Image from "next/image";

function profileImageUrl(profile) {
  if (!profile?.profile_image) return null;
  return profile.profile_image.includes("profile")
    ? `${process.env.NEXT_PUBLIC_S3_URL}/${profile.profile_image}`
    : `${process.env.NEXT_PUBLIC_S3_URL}/profile/${profile.profile_image}`;
}

function sloganBadges(slogan) {
  if (!slogan || typeof slogan !== "string") return [];
  return slogan
    .split(/[|,]/)
    .map((s) => s.trim())
    .filter(Boolean)
    .slice(0, 4);
}

export default function Home3Hero({ profile, gallery, cvUrl }) {
  const badges = sloganBadges(profile?.slogan);
  const img = profileImageUrl(profile);
  const heroBg =
    gallery?.length > 0
      ? `${process.env.NEXT_PUBLIC_S3_URL}/${gallery[0].filename}`
      : img;

  return (
    <section id="home3-top" className="home3-hero fade-in-section">
      {heroBg && (
        <div
          className="home3-hero-bg"
          style={{ backgroundImage: `url('${heroBg}')` }}
          aria-hidden
        />
      )}
      <div className="home3-hero-overlay" aria-hidden />
      <div className="home3-container home3-hero-inner">
        <div
          className={`home3-hero-grid${img ? "" : " home3-hero-grid--no-photo"}`}
        >
          <div className="home3-hero-copy">
            {badges.length > 0 && (
              <div className="home3-hero-badges">
                {badges.map((b) => (
                  <span key={b} className="home3-hero-badge">
                    {b}
                  </span>
                ))}
              </div>
            )}
            <h1 className="home3-hero-title">{profile?.name}</h1>
            {profile?.introduction && (
              <p className="home3-hero-text">{profile.introduction}</p>
            )}
            <div className="home3-hero-actions">
              {cvUrl && (
                <a
                  href={cvUrl}
                  className="home3-btn home3-btn--gold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download CV
                </a>
              )}
              {profile?.email && (
                <a
                  href={`mailto:${profile.email}`}
                  className="home3-btn home3-btn--outline"
                >
                  Contact
                </a>
              )}
              {!profile?.email && !cvUrl && (
                <a href="#contact" className="home3-btn home3-btn--outline">
                  Contact
                </a>
              )}
            </div>
          </div>
          {img && (
            <div className="home3-hero-photo-wrap">
              <div className="home3-hero-photo-ring" aria-hidden />
              <Image
                src={img}
                alt={profile?.name || ""}
                width={420}
                height={420}
                className="home3-hero-photo"
                priority
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
