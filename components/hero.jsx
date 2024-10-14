"use client";

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Hero({ domain, phrase = "Rise Above, Conquer Beyond!" }) {
  const textRef = useRef(null);

  useEffect(() => {
    if (!phrase) return;

    let index = 0;
    const textElement = textRef.current;
    textElement.innerHTML = ''; // Clear the text before typing starts

    const type = () => {
      if (index < phrase.length) {
        textElement.innerHTML += phrase.charAt(index);
        index++;
        setTimeout(type, 100);
      }
    };

    type(); // Start the typing effect

    return () => {
      index = phrase.length; // Cleanup to prevent overlap if the component re-renders
    };
  }, [phrase]);

  return (
    <section className="hero-section">
      <div className="overlay"></div>
      <div className="container container-padding">
        <div className="row align-items-center gy-6 gy-xl-0">
          <div className="col-md-7">
            <h1 className="display-2 typer">
              <span ref={textRef}></span>
            </h1>
          </div>
          <div className="col-md-5 text-center d-none1">
            <div className="shape-wrapper">
              <div className="background-shape"></div>
              <Image 
                src="https://images.pexels.com/photos/13048407/pexels-photo-13048407.jpeg" 
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
