import React, { useState, useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import styles from './OrderForm.module.css';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const OrderForm = ({ onClose, onOrderSuccess }) => {
  const { cart, getCartTotal } = useContext(CartContext);
  const [formData, setFormData] = useState({
    nom: '',
    adresse: '',
    telephone: '',
    message: '',
    paymentMethod: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { nom, adresse, telephone, message, paymentMethod } = formData;
    const to = "babacarbamba11@gmail.com";
    const subject = "Nouvelle commande - Fatou Bou Ndaw";
    
    // Fonction pour formater le prix
    const formatPrice = (price) => {
      return new Intl.NumberFormat('fr-SN', { style: 'currency', currency: 'XOF' }).format(price);
    };

    // Générer un numéro de commande unique
    const orderNumber = `FBN-${Date.now().toString().slice(-6)}`;

    const emailMessage = `
NOUVELLE COMMANDE - FATOU BOU NDAW

Numéro de commande: ${orderNumber}

DÉTAILS DU CLIENT
-----------------
Nom: ${nom}
Adresse: ${adresse}
Téléphone: ${telephone}
Mode de paiement: ${paymentMethod}

DÉTAILS DE LA COMMANDE
----------------------
${cart.map(item => `${item.name}
  Quantité: ${item.quantity}
  Prix unitaire: ${formatPrice(item.price)}
  Total: ${formatPrice(item.price * item.quantity)}
`).join('\n')}

TOTAL DE LA COMMANDE: ${formatPrice(getCartTotal())}

${message ? `MESSAGE DU CLIENT:\n${message}\n` : ''}

Merci pour votre commande chez Fatou Bou Ndaw. Nous la traiterons dans les plus brefs délais.
    `;

    Swal.fire({
      title: 'Commande reçue !',
      text: 'Nous traitons votre commande. Vous recevrez bientôt une confirmation par email.',
      icon: 'success',
      confirmButtonText: 'Fermer',
      confirmButtonColor: '#F39F86',
    });

    setFormData({ nom: '', adresse: '', telephone: '', message: '', paymentMethod: '' });
    setError('');
    onClose();
    onOrderSuccess();

    try {
      const response = await fetch('https://codingmailer.onrender.com/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ to, subject, message: emailMessage }),
      });

      if (!response.ok) {
        console.error('Erreur lors de l\'envoi de la commande');
      }
    } catch (error) {
      console.error('Erreur lors de la requête :', error);
    }
  };

  return (
    <motion.div 
      className={styles.formContainer}
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 50, opacity: 0 }}
    >
      <button onClick={onClose} className={styles.closeButton}>
        <X size={24} />
      </button>
      <h3 className={styles.title}>Finaliser votre commande</h3>
      <div className={styles.formContent}>
        <div className={styles.cartSummary}>
          <h4>Résumé du panier</h4>
          {cart.map(item => (
            <div key={item.id} className={styles.cartItem}>
              <span>{item.name}</span>
              <span>x {item.quantity}</span>
              <span>{item.price * item.quantity} frc</span>
            </div>
          ))}
          <div className={styles.cartTotal}>
            <strong>Total : {getCartTotal()} frc</strong>
          </div>
        </div>
        <form onSubmit={handleSubmit} className={styles.orderForm}>
          <div className={styles.formGroup}>
            <input
              type="text"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              placeholder="Votre nom"
              required
              className={styles.inputField}
            />
          </div>
          <div className={styles.formGroup}>
            <input
              type="text"
              name="adresse"
              value={formData.adresse}
              onChange={handleChange}
              placeholder="Votre adresse"
              required
              className={styles.inputField}
            />
          </div>
          <div className={styles.formGroup}>
            <input
              type="tel"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
              placeholder="Votre numéro de téléphone"
              required
              className={styles.inputField}
            />
          </div>
          <div className={styles.formGroup}>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="3"
              placeholder="Votre message (optionnel)"
              className={styles.inputField}
            />
          </div>
          <div className={styles.formGroup}>
            <select
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              required
              className={`${styles.inputField} ${styles.selectField}`}>
              <option value="" disabled>Choisissez un mode de paiement</option>
              <option value="Wave">Wave</option>
              <option value="Orange Money">Orange Money</option>
              <option value="Liquide">Liquide</option>
              <option value="Carte bancaire">Carte bancaire</option>
            </select>
          </div>
          {error && <div className={styles.error}>{error}</div>}
          <div className={styles.formGroup}>
            <button type="submit" className={styles.submitButton}>
              Envoyer la commande
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default OrderForm;
