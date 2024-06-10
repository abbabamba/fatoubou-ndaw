import React from 'react';
import styles from './Footer.module.css';
import { FaWhatsapp, FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <ul className={styles.socialLinks}>
          <li>
            <a href="https://wa.me/+221767701221" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className={styles.socialIcon} />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/fatouboundawsenegal2024?igsh=Mm5tZnlxZXpyNXVo&utm_source=qr" target="_blank" rel="noopener noreferrer">
              <FaInstagram className={styles.socialIcon} />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/share/1GH4eoSjKCymgmok/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
              <FaFacebook className={styles.socialIcon} />
            </a>
          </li>
          <li>
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
              <FaTiktok className={styles.socialIcon} />
            </a>
          </li>
        </ul>
        <div className={styles.copyright}>
          <h4>
            Ensemble, construisons un avenir plus fort et plus positif pour nos enfants<span className={styles.heart}>❤</span>.
          </h4>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
