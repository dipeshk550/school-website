import React, { useState, useEffect } from "react";
import "./Hero.css";

import img1 from "../assets/hero_banner.jpg";
import img2 from "../assets/hero.jpg";
import img3 from "../assets/hero_banner.jpg";

const Hero = () => {
  const images = [img1, img2, img3];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="hero" id="home">
      <div
        className="hero-slider"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      >
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Welcome to Kidland School</h1>
            <p>Building knowledge, shaping character, inspiring success.</p>
            <button>Apply Now</button>
          </div>
        </div>

        {/* Dots navigation */}
        <div className="hero-dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
