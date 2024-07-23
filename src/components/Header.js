import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import styles from './Header.module.css';
import logoSvg from '../assets/images/logo.png';

const Header = () => {
  const { cart } = useContext(CartContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const hash = location.hash.substring(1);
    if (hash) {
      scrollToSection(hash);
    }
  }, [location]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  const handleNavigation = (e, sectionId) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate(`/#${sectionId}`);
    } else {
      scrollToSection(sectionId);
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
              href="#home"
              className={`${styles.navLink} ${activeSection === 'home' ? styles.active : ''}`}
              onClick={(e) => handleNavigation(e, 'home')}
            >
              Accueil
            </a>
          </li>
          <li className={styles.navItem}>
            <a
              href="#products"
              className={`${styles.navLink} ${activeSection === 'products' ? styles.active : ''}`}
              onClick={(e) => handleNavigation(e, 'products')}
            >
              Produits
            </a>
          </li>
          <li className={styles.navItem}>
            <a
              href="#about"
              className={`${styles.navLink} ${activeSection === 'about' ? styles.active : ''}`}
              onClick={(e) => handleNavigation(e, 'about')}
            >
              À propos
            </a>
          </li>
          <li className={styles.navItem}>
            <Link to="/cart" className={styles.navLink}>
              Panier ({cart.length})
            </Link>
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
