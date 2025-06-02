import React from 'react';
// We'll import react-scroll later for the "Work With Me" button if needed
import { Link as ScrollLink } from 'react-scroll';

// Assuming your banner.png is in the public folder for the background
// However, the background is applied via CSS, so make sure the path in your CSS is correct
// relative to where the CSS file is, or use an absolute path from public.
// For Vite, if banner.png is in public, CSS url('/banner.png') should work.

function Hero() {
  const scrollOffset = -80; // Consistent offset

  return (
    <div className="hero-section">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">Sanket S.</h1>
          <h2 className="hero-title">Crafting Engaging Playable Ads & Game Experiences</h2>
          <p className="hero-subtitle">
            I'm a passionate game developer specializing in HTML5 games and playable ads that
            captivate audiences and deliver results.
          </p>
          <ScrollLink
            to="contact" // This should match the id of your Footer/Contact section
            spy={true}
            smooth={true}
            offset={scrollOffset}
            duration={500}
            className="cta-button"
            href="#contact"
          >
            Work With Me
          </ScrollLink>
        </div>
      </div>
    </div>
  );
}

export default Hero;