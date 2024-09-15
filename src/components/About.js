import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import styles from './About.module.css';
import aboutImage from '../assets/images/diarra.png';

const MySwal = withReactContent(Swal);

const About = () => {
  const [activeMessage, setActiveMessage] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    prenom: '',
    nom: '',
    telephone: '',
    message: ''
  });

  const messages = [
    { wolof: "Dagua raféte", french: "Tu es belle" },
    { wolof: "Dér bou nioul mo rafete", french: "La peau noire est magnifique" },
    { wolof: "Boul meussa khéssal", french: "Ne te dépigmente jamais" },
    { wolof: "Amal foula", french: "Reste authentique" },
    { wolof: "Gueumal sa bop", french: "Crois en toi" }
  ];

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const { prenom, nom, telephone, message } = formData;
    const to = "fatouboundaw2024@gmail.com";
    const subject = "Nouvelle inscription à la mission - Fatou Bou Ndaw";
    const emailMessage = `
  Nouvelle inscription à la mission - Fatou Bou Ndaw

  Prénom: ${prenom}
  Nom: ${nom}
  Téléphone: ${telephone}

  Message: ${message ? message : 'Aucun message'}
    `;

    MySwal.fire({
      title: 'Inscription réussie !',
      text: 'Merci de nous rejoindre.',
      icon: 'success',
      confirmButtonText: 'OK'
    });

    setShowForm(false);
    setFormData({ prenom: '', nom: '', telephone: '', message: '' });

    try {
      const response = await fetch('https://codingmailer.onrender.com/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ to, subject, message: emailMessage }),
      });

      if (!response.ok) {
        MySwal.fire({
          title: 'Erreur',
          text: "Erreur lors de l'envoi du formulaire.",
          icon: 'error',
          confirmButtonText: 'Réessayer'
        });
      }
    } catch (error) {
      console.error('Erreur lors de la requête :', error);
      MySwal.fire({
        title: 'Erreur',
        text: "Une erreur est survenue. Veuillez réessayer.",
        icon: 'error',
        confirmButtonText: 'Réessayer'
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>À propos de Fatou Bou Ndaw - Notre histoire et notre mission</title>
        <meta name="description" content="Découvrez l'histoire inspirante de Fatou Bou Ndaw, une marque de vêtements qui renforce l'estime de soi des enfants sénégalais avec des messages positifs en wolof." />
        <link rel="canonical" href="https://www.fatou-bou-ndaw.com/a-propos" />
        <meta property="og:title" content="L'histoire de Fatou Bou Ndaw - Vêtements inspirants pour enfants" />
        <meta property="og:description" content="Née d'une observation poignante, Fatou Bou Ndaw est devenue une mission pour renforcer l'estime de soi des enfants sénégalais à travers des vêtements porteurs de messages positifs en wolof." />
        <meta property="og:image" content="https://www.fatou-bou-ndaw.com/images/about-fatou-bou-ndaw.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.fatou-bou-ndaw.com/a-propos" />
      </Helmet>

      <section id="about" className={`${styles.about} ${styles.visible}`}>
        <div className={styles.container}>
          <h1 className={styles.heading}>L'histoire de Fatou Bou Ndaw</h1>
          <div className={styles.content}>
            <div className={styles.imageContainer}>
              <img
                src={aboutImage}
                alt="Mame Diarra Bousso Ba, Fondatrice de Fatou Bou Ndaw"
                className={styles.image}
                loading="lazy"
              />
              <div className={styles.imageCaption}>Mame Diarra Bousso Ba, <br /> Fondatrice de Fatou Bou Ndaw</div>
            </div>
            <div className={styles.textContent}>
              <p className={styles.story}>
                Née d'une observation poignante - des enfants portant des messages inspirants qu'ils ne comprenaient pas - Fatou Bou Ndaw est devenue une mission pour renforcer l'estime de soi des enfants sénégalais à travers des vêtements porteurs de messages positifs en wolof.
              </p>
              <h2 className={styles.subheading}>Nos Messages Inspirants</h2>
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
              <p className={styles.moreMessages}>
                Et bien plus encore ! Ces messages ne sont que des exemples parmi notre vaste collection d'affirmations positives en wolof.
              </p>
              <button onClick={() => setShowForm(true)} className={styles.btn}>Rejoignez notre mission</button>
            </div>
          </div>

          {showForm && (
            <div className={styles.formContainer}>
              <form onSubmit={handleFormSubmit} className={styles.form}>
                <h3>Inscrivez-vous à notre mission</h3>
                <input
                  type="text"
                  name="prenom"
                  value={formData.prenom}
                  onChange={handleFormChange}
                  placeholder="Prénom"
                  required
                  className={styles.inputField}
                />
                <input
                  type="text"
                  name="nom"
                  value={formData.nom}
                  onChange={handleFormChange}
                  placeholder="Nom"
                  required
                  className={styles.inputField}
                />
                <input
                  type="tel"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleFormChange}
                  placeholder="Téléphone"
                  required
                  className={styles.inputField}
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  placeholder="Message (optionnel)"
                  className={styles.inputField}
                  rows="4"
                />
                <div className={styles.buttonGroup}>
                  <button type="submit" className={styles.submitButton}>Envoyer</button>
                  <button type="button" onClick={() => setShowForm(false)} className={styles.closeButton}>Annuler</button>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default About;
