"use client";

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Hero({ profile, gallery }) {
  const textRef = useRef(null);
  const mockSlogan = profile?.slogan;
  const profileImageUrl = profile?.profile_image
    ? profile.profile_image.includes('profile')
      ? `${process.env.NEXT_PUBLIC_S3_URL}/${profile.profile_image}`
      : `${process.env.NEXT_PUBLIC_S3_URL}/profile/${profile.profile_image}`
    : null;

  useEffect(() => {
    if (!mockSlogan) return;

    let index = 0;
    const textElement = textRef.current;
    textElement.innerHTML = '';

    const type = () => {
      if (index < mockSlogan.length) {
        textElement.innerHTML += mockSlogan.charAt(index);
        index++;
        setTimeout(type, 80);
      }
    };

    type();

    return () => {
      index = mockSlogan.length;
    };
  }, [mockSlogan]);

  const bgImage = gallery.length > 0
    ? `${process.env.NEXT_PUBLIC_S3_URL}/${gallery[0].filename}`
    : profileImageUrl;

  return (
    <section
      className="hero-modern"
      style={{
        backgroundImage: bgImage ? `url('${bgImage}')` : 'none',
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-gradient-orb hero-orb-1"></div>
      <div className="hero-gradient-orb hero-orb-2"></div>

      <div className="container hero-content">
        <div className="row align-items-center">
          <div className={profile?.profile_image ? 'col-lg-7' : 'col-lg-10'}>
            <p className="hero-label hero-animate">Welcome</p>
            <h1 className="hero-title typer hero-animate-delay-1" aria-live="polite">
              <span ref={textRef}></span>
            </h1>
            {profile?.name && (
              <p className="hero-name hero-animate-delay-2">{profile.name}</p>
            )}
            <div className="hero-cta hero-animate-delay-3">
              <a href="#about" className="btn-modern">Learn More</a>
              {profile?.email && (
                <a href={`mailto:${profile.email}`} className="btn-modern-outline">
                  Get in Touch
                </a>
              )}
            </div>
          </div>

          {profile?.profile_image && (
            <div className="col-lg-5 text-center d-none d-md-block hero-animate-delay-4">
              <div className="hero-image-container">
                <div className="hero-image-glow"></div>
                <div className="hero-image-outer-ring"></div>
                <div className="hero-image-border">
                  <Image
                    src={profileImageUrl}
                    alt={profile.name || 'Profile'}
                    width={360}
                    height={360}
                    className="hero-profile-img"
                    priority
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="scroll-indicator hero-animate-delay-4">
        <span></span>
      </div>
    </section>
  );
}
