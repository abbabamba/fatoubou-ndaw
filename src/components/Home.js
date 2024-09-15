import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import styles from './Home.module.css';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <Helmet>
        <title>Fatou Bou Ndaw - Vêtements inspirants pour enfants sénégalais</title>
        <meta name="description" content="Découvrez des vêtements qui parlent à l'âme de nos enfants, inspirant et élevant la prochaine génération du Sénégal." />
        <meta name="keywords" content="vêtements enfants, Sénégal, inspiration, mode éthique, culture sénégalaise" />
        <link rel="canonical" href="https://www.fatou-bou-ndaw.com/" />
        <meta property="og:title" content="Fatou Bou Ndaw - Vêtements inspirants pour enfants" />
        <meta property="og:description" content="Des vêtements qui parlent à l'âme de nos enfants, dans une langue qu'ils comprennent. Inspirons et élevons la prochaine génération du Sénégal." />
        <meta property="og:image" content="https://www.fatou-bou-ndaw.com/og-image.jpg" />
        <meta property="og:url" content="https://www.fatou-bou-ndaw.com/" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <section id="home" className={styles.home}>
        <div className={`${styles.container} ${isVisible ? styles.visible : ''}`}>
          <h1 className={styles.heading}>
            <span className={styles.highlight}>Inspirons</span> et{' '}
            <span className={styles.highlight}>Élevons</span> la prochaine génération du Sénégal
          </h1>
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
    </>
  );
};

export default Home;