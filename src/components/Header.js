import React from 'react';
import styles from './Header.module.css';
import logoSvg from '../assets/images/logo.png';

const Header = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={logoSvg} alt="Logo de l'entreprise" className={styles.logo} />
        <h1 className={styles.logoText}>
          <span className={styles.logoSpan}>Fatou</span> Bou Ndaw
        </h1>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <a
              href="#products"
              className={styles.navLink}
              onClick={() => scrollToSection('products')}
            >
              Nos Produits
            </a>
          </li>
          <li className={styles.navItem}>
            <a
              href="#services"
              className={styles.navLink}
              onClick={() => scrollToSection('services')}
            >
              Services
            </a>
          </li>
          <li className={styles.navItem}>
            <a
              href="#contact"
              className={styles.navLink}
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </a>
          </li>
         
        </ul>
      </nav>
    </header>
  );
};

export default Header;