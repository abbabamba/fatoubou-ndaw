import React, { useState } from 'react';
import styles from './OrderForm.module.css';
import Swal from 'sweetalert2';

const OrderForm = ({ product, onClose }) => {
  const [nom, setNom] = useState('');
  const [adresse, setAdresse] = useState('');
  const [telephone, setTelephone] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const to = "abakarae313@gmail.com";
    const subject = "Nouvelle commande";
    const emailMessage = `Nom : ${nom}\nAdresse : ${adresse}\nTéléphone : ${telephone}\n\nCommande : ${product.name}\n\nMessage : ${message}`;

    try {
      const response = await fetch('https://codingmailer.onrender.com/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: to,
          subject: subject,
          message: emailMessage,
        }),
      });

      if (response.ok) {
        Swal.fire({
          title: 'Succès',
          text: 'Commande envoyée avec succès.',
          icon: 'success',
          confirmButtonText: 'OK',
        });
        setNom('');
        setAdresse('');
        setTelephone('');
        setMessage('');
        setError('');
        onClose();
      } else {
        const data = await response.json();
        setError(data.message || 'Erreur lors de l\'envoi de la commande.');
      }
    } catch (error) {
      console.log('Erreur lors de la requête :', error);
      setError('Erreur lors de la requête : ' + error);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Passer une commande</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="nom" className={styles.label}>Nom :</label>
          <input
            type="text"
            id="nom"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            placeholder="Votre nom"
            required
            className={styles.inputField}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="adresse" className={styles.label}>Adresse :</label>
          <input
            type="text"
            id="adresse"
            value={adresse}
            onChange={(e) => setAdresse(e.target.value)}
            placeholder="Votre adresse"
            required
            className={styles.inputField}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="telephone" className={styles.label}>Téléphone :</label>
          <input
            type="tel"
            id="telephone"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
            placeholder="Votre numéro de téléphone"
            required
            className={styles.inputField}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message" className={styles.label}>Message :</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="5"
            placeholder="Votre message"
            required
            className={styles.textareaField}
          ></textarea>
        </div>
        <button type="submit" className={styles.submitButton}>Envoyer</button>
        {error && <div className={styles.errorMessage}>Erreur : {error}</div>}
      </form>
    </div>
  );
};

export default OrderForm;
