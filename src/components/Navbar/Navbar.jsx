import React, { useState, useEffect } from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e) => {
    e.preventDefault();
    const targetId = e.target.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContent}>
        <div className={styles.logo}>
          <a href="#home">Home</a>
        </div>
        
        <div className={styles.menuToggle} onClick={toggleMenu}>
          <img 
            src={getImageUrl("nav/menuIcon.png")} 
            alt="Menu" 
            className={styles.menuIcon}
          />
        </div>

        <ul className={`${styles.navLinks} ${menuOpen ? styles.menuOpen : ''}`}>
          <li>
            <a href="#education" onClick={handleNavClick}>Education</a>
          </li>
          <li>
            <a href="#publications" onClick={handleNavClick}>Publications</a>
          </li>
          <li>
            <a href="#projects" onClick={handleNavClick}>Projects</a>
          </li>
          <li>
            <a href="#experience" onClick={handleNavClick}>Experience</a>
          </li>
          <li>
            <a href="#skills" onClick={handleNavClick}>Technical Skills</a>
          </li>
          <li>
            <a href="#contact" onClick={handleNavClick}>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
