"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Home2Hero({ profile, gallery }) {
  const textRef = useRef(null);
  const mockSlogan = profile?.slogan;

  const profileImageUrl = profile?.profile_image
    ? profile.profile_image.includes("profile")
      ? `${process.env.NEXT_PUBLIC_S3_URL}/${profile.profile_image}`
      : `${process.env.NEXT_PUBLIC_S3_URL}/profile/${profile.profile_image}`
    : null;

  useEffect(() => {
    if (!mockSlogan) return;
    let index = 0;
    const textElement = textRef.current;
    if (!textElement) return;
    textElement.innerHTML = "";

    const type = () => {
      if (index < mockSlogan.length) {
        textElement.innerHTML += mockSlogan.charAt(index);
        index++;
        setTimeout(type, 75);
      }
    };
    type();

    return () => {
      index = mockSlogan.length;
    };
  }, [mockSlogan]);

  const bgImage =
    gallery.length > 0
      ? `${process.env.NEXT_PUBLIC_S3_URL}/${gallery[0].filename}`
      : profileImageUrl;

  return (
    <section
      id="home2-top"
      className="home2-hero fade-in-section"
      style={{
        backgroundImage: bgImage ? `url('${bgImage}')` : "none",
      }}
    >
      <div className="home2-hero-grid" aria-hidden />
      <div className="home2-hero-inner">
        <div className="home2-hero-row">
          <div>
            <p className="home2-hero-label">Available for work</p>
            {profile?.name && (
              <h1 className="home2-hero-title">{profile.name}</h1>
            )}
            <p className="home2-hero-slogan typer-h2" aria-live="polite">
              <span ref={textRef} />
            </p>
            <div className="home2-cta">
              <a href="#about" className="home2-btn-solid">
                Explore
              </a>
              {profile?.email && (
                <a
                  href={`mailto:${profile.email}`}
                  className="home2-btn-ghost"
                >
                  Contact
                </a>
              )}
            </div>
          </div>
          {profile?.profile_image && profileImageUrl && (
            <div className="home2-hero-photo">
              <div className="home2-hero-photo-ring" aria-hidden />
              <Image
                src={profileImageUrl}
                alt={profile.name || "Profile"}
                width={400}
                height={520}
                className="home2-hero-profile-img"
                priority
                style={{ width: "100%", height: "auto", maxHeight: 520 }}
              />
            </div>
          )}
        </div>
      </div>
      <div className="home2-scroll-hint">
        <span />
        scroll
      </div>
    </section>
  );
}
