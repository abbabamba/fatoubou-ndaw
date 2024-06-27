import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';
import logoSvg from '../assets/images/logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.logoContainer}>
        <img src={logoSvg} alt="Logo de l'entreprise" className={styles.logo} />
        <h1 className={styles.logoText}>
          <span className={styles.logoSpan}>Fatou</span> Bou Ndaw
        </h1>
      </div>
      <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <a
              href="#products"
              className={`${styles.navLink} ${activeSection === 'products' ? styles.active : ''}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('products');
              }}
            >
              Produits
            </a>
          </li>
          <li className={styles.navItem}>
            <a
              href="#about"
              className={`${styles.navLink} ${activeSection === 'services' ? styles.active : ''}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}
            >
              À propos
            </a>
          </li>
          <li className={styles.navItem}>
            <a
              href="#footer"
              className={`${styles.navLink} ${activeSection === 'contact' ? styles.active : ''}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('footer');
              }}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div 
        className={`${styles.mobileMenuToggle} ${isMenuOpen ? styles.open : ''}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Header;
