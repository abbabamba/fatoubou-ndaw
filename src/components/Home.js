// Home.js
import React, { useState, useEffect } from 'react';
import styles from './Home.module.css';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className={styles.home}>
      <div className={`${styles.container} ${isVisible ? styles.visible : ''}`}>
        <h2 className={styles.heading}>
          <span className={styles.highlight}>Inspirons</span> et{' '}
          <span className={styles.highlight}>Élevons</span> la prochaine génération du Sénégal
        </h2>
        <p className={styles.subheading}>
          Des vêtements qui parlent à l'âme de nos enfants, dans une langue qu'ils comprennent
        </p>
        <div className={styles.btnContainer}>
          <a href="#about" className={`${styles.btn} ${styles.btnPrimary}`}>
            Découvrez notre histoire
          </a>
          <a href="#products" className={`${styles.btn} ${styles.btnSecondary}`}>
            Explorez nos créations
          </a>
        </div>
      </div>
      <div className={styles.scrollIndicator}>
        <span className={styles.mouse}>
          <span className={styles.mouseWheel}></span>
        </span>
      </div>
    </section>
  );
};

export default Home;
