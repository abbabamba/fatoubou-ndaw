import React from 'react';
import styles from './About.module.css';

import aboutImage from '../assets/images/about.jpeg';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.heading}>À propos de Fatou Bou Ndaw</h2>
        <div className={styles.content}>
          <img
            src={aboutImage}
            alt="Équipe de Fatou Bou Ndaw"
            className={styles.image}
          />
          <section id='services'>
          <div className={styles.text}>
            <p className={styles.description}>
              Fondée pour l'émancipation et la confiance en soi des enfants du Sénégal.
              Création de vêtements et t-shirts avec des messages en wolof inspirants.
              Messages comme "Dagua raféte" (tu es belle), "Dér bou nioul mo rafete" (la peau noire est magnifique), "Boul meussa khéssal" (ne te dépigmente jamais).
              Célébration de la fierté culturelle et de la confiance en soi.
            </p>
            <a href="#contact" className={`${styles.btn} ${styles.btnPrimary}`}>
              Contactez-nous
            </a>
          </div>
          </section> 
        </div>
      </div>
    </section>
  );
};

export default About;
