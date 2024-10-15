"use client";

import { useEffect, useRef } from 'react';
import Image from 'next/image';



export default function Hero({ profile, gallery }) {
  const textRef = useRef(null);
  const mockSlogan = profile.slogan;
  useEffect(() => {
    if (!mockSlogan) return;

    let index = 0;
    const textElement = textRef.current;
    textElement.innerHTML = '';

    const type = () => {
      if (index < mockSlogan.length) {
        textElement.innerHTML += mockSlogan.charAt(index);
        index++;
        setTimeout(type, 100);
      }
    };

    type();

    return () => {
      index = mockSlogan.length;
    };
  }, []);

  return (
    <section className="hero-section">
      <div className="overlay"></div>
      <div className="container container-padding">
        <div className="row align-items-center gy-6 gy-xl-0">
          <div className="col-md-7">
            <h1 className="display-2 typer" aria-live="polite">
              <span ref={textRef}></span>
            </h1>
          </div>
          <div className="col-md-5 text-center d-none1">
            <div className="shape-wrapper">
              <div className="background-shape"></div>
              <Image 
                src={`https://www.profilesuite.com/uploads/profile/`+profile.profile_image}
                alt="Descriptive Alt Text" 
                width={500} 
                height={500} 
                className="responsive-image"
                priority 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
