import React, { useState, useEffect } from 'react';
import styles from './Footer.module.css';
import { FaWhatsapp, FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIcon, setActiveIcon] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.getElementById('footer');
      if (footer) {
        const position = footer.getBoundingClientRect();
        if (position.top < window.innerHeight) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const socialLinks = [
    { icon: FaWhatsapp, url: "https://wa.me/+221767701221", name: "WhatsApp" },
    { icon: FaInstagram, url: "https://www.instagram.com/fatouboundawsenegal2024?igsh=Mm5tZnlxZXpyNXVo&utm_source=qr", name: "Instagram" },
    { icon: FaFacebook, url: "https://www.facebook.com/share/1GH4eoSjKCymgmok/?mibextid=LQQJ4d", name: "Facebook" },
    { icon: FaTiktok, url: "https://www.tiktok.com", name: "TikTok" },
  ];

  return (
    <footer id="footer" className={`${styles.footer} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.container}>
        <ul className={styles.socialLinks}>
          {socialLinks.map((social, index) => (
            <li key={index} className={styles.socialItem}>
              <a 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                onMouseEnter={() => setActiveIcon(index)}
                onMouseLeave={() => setActiveIcon(null)}
              >
                <social.icon className={`${styles.socialIcon} ${activeIcon === index ? styles.active : ''}`} />
                <span className={styles.socialName}>{social.name}</span>
              </a>
            </li>
          ))}
        </ul>
        <div className={styles.copyright}>
          <h4>
            Ensemble, construisons un avenir plus fort et plus positif pour nos enfants
            <span className={styles.heart}>❤</span>.
          </h4>
        </div>
        <div className={styles.wavesContainer}>
          <div className={`${styles.wave} ${styles.wave1}`}></div>
          <div className={`${styles.wave} ${styles.wave2}`}></div>
          <div className={`${styles.wave} ${styles.wave3}`}></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;