import React from 'react';
// We'll import react-scroll later for smooth scrolling
import { Link as ScrollLink, animateScroll } from 'react-scroll';

// Assuming your logo.png is in the public folder
const logoPath = '/logo.png';

function Header() {

    const scrollOffset = -110;

    const scrollToTopHandler = () => {
    animateScroll.scrollToTop({
      duration: 500, // Duration of the scroll animation in milliseconds
      smooth: 'easeInOutQuad', // Type of easing
    });
  };
  return (
<header className="site-header">
      <div className="header-content container">
        <div className="logo-container" onClick={scrollToTopHandler} style={{ cursor: 'pointer' }}> {/* Make logo container clickable */}
          <div className="logo">
            <img src={logoPath} alt="GameDevPro Logo" />
          </div>
        </div>
        <nav className="nav-menu">
          <ScrollLink
            activeClass="active-nav-link" // Optional: class for active link styling
            to="about"
            spy={true}
            smooth={true}
            offset={scrollOffset}
            duration={500}
            className="nav-link"
            href="#about" // Keep href for accessibility and SEO, react-scroll handles the click
          >
            About
          </ScrollLink>
          <ScrollLink
            activeClass="active-nav-link"
            to="portfolio"
            spy={true}
            smooth={true}
            offset={scrollOffset}
            duration={500}
            className="nav-link"
            href="#portfolio"
          >
            Portfolio
          </ScrollLink>
          <ScrollLink
            activeClass="active-nav-link"
            to="contact" // This should match the id of your Footer/Contact section
            spy={true}
            smooth={true}
            offset={scrollOffset}
            duration={500}
            className="nav-link"
            href="#contact"
          >
            Contact
          </ScrollLink>
          {/* <ScrollLink to="blog" spy={true} smooth={true} offset={scrollOffset} duration={500} className="nav-link">Blog</ScrollLink> */}
        </nav>
      </div>
    </header>
  );
}

export default Header;