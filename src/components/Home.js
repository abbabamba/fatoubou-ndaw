import React from 'react';
import styles from './Home.module.css';

const Home = () => {
  return (
    <section id="home" className={styles.home}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Émancipation et confiance en soi - c'est ce que nous voulons inculquer à la prochaine génération. </h2>
        <a href="#about" className={`${styles.btn} ${styles.btnPrimary}`}>Découvrez notre histoire</a>
        <a href="#products" className={`${styles.btn} ${styles.btnPrimary}`}>
          Voir les produits
        </a>
      </div>
    </section>
  );
};

export default Home;