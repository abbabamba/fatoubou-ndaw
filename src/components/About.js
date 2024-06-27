import React, { useState, useEffect } from 'react';
import styles from './About.module.css';
import aboutImage from '../assets/images/about.jpeg';

const About = () => {
  const [activeMessage, setActiveMessage] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const messages = [
    { wolof: "Dagua raféte", french: "Tu es belle" },
    { wolof: "Dér bou nioul mo rafete", french: "La peau noire est magnifique" },
    { wolof: "Boul meussa khéssal", french: "Ne te dépigmente jamais" },
    { wolof: "Amal foula", french: "Reste authentique" },
    { wolof: "Gueumal sa bop", french: "Crois en toi" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('about');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight && position.bottom >= 0) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="about" className={`${styles.about} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.container}>
        <h2 className={styles.heading}>L'histoire de Fatou Bou Ndaw</h2>
        <div className={styles.content}>
          <div className={styles.imageContainer}>
            <img
              src={aboutImage}
              alt="Fondatrice de Fatou Bou Ndaw"
              className={styles.image}
            />
            <div className={styles.imageCaption}>Mame Diara Bousso BA, Fondatrice de Fatou Bou Ndaw</div>
          </div>
          <div className={styles.textContent}>
            <p className={styles.story}>
              Née d'une observation poignante - des enfants portant des messages inspirants qu'ils ne comprenaient pas - Fatou Bou Ndaw est devenue une mission pour renforcer l'estime de soi des enfants sénégalais à travers des vêtements porteurs de messages positifs en wolof.
            </p>
            <h3 className={styles.subheading}>Nos Messages Inspirants</h3>
            <div className={styles.messageGrid}>
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`${styles.messageCard} ${activeMessage === index ? styles.active : ''}`}
                  onMouseEnter={() => setActiveMessage(index)}
                  onMouseLeave={() => setActiveMessage(null)}
                >
                  <span className={styles.wolof}>{message.wolof}</span>
                  <span className={styles.french}>{message.french}</span>
                </div>
              ))}
            </div>
            <a href="#footer" className={styles.btn}>Rejoignez notre mission</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;