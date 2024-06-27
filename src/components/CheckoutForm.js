import React, { useState } from 'react';
import styles from './CheckoutForm.module.css';

const CheckoutForm = ({ product, onClose }) => {
  const [paymentProcessing, setPaymentProcessing] = useState(false);
  const [paymentSucceeded, setPaymentSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleOrangeMoneyPayment = async (e) => {
    e.preventDefault();
    setPaymentProcessing(true);
    setError(null);

    if (!phoneNumber || phoneNumber.length !== 10) {
      setError("Veuillez entrer un numéro de téléphone valide (10 chiffres)");
      setPaymentProcessing(false);
      return;
    }

    try {
      const response = await fetch('/create-orange-money-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          amount: product.price, 
          currency: 'XOF', 
          phoneNumber: phoneNumber 
        }),
      });

      if (!response.ok) {
        throw new Error('Erreur réseau');
      }

      const result = await response.json();
      if (result.error) {
        setError(result.error);
      } else {
        setPaymentSucceeded(true);
        setTimeout(() => {
          window.location.href = result.payment_url;
        }, 2000);
      }
    } catch (error) {
      setError("Une erreur s'est produite lors du traitement du paiement. Veuillez réessayer.");
    } finally {
      setPaymentProcessing(false);
    }
  };

  return (
    <div className={styles.checkoutForm}>
      <h2 className={styles.title}>Finaliser votre commande</h2>
      <div className={styles.productInfo}>
        <img src={product.image} alt={product.name} className={styles.productImage} />
        <div className={styles.productDetails}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p className={styles.price}>{(product.price / 100).toFixed(2)} €</p>
        </div>
      </div>
      <form onSubmit={handleOrangeMoneyPayment} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="phoneNumber">Numéro de téléphone Orange Money</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Entrez votre numéro"
            required
          />
        </div>
        <button 
          type="submit" 
          className={styles.submitButton} 
          disabled={paymentProcessing}
        >
          {paymentProcessing ? 'Traitement en cours...' : 'Payer avec Orange Money'}
        </button>
      </form>
      {error && <div className={styles.error}>{error}</div>}
      {paymentSucceeded && (
        <div className={styles.success}>
          Paiement réussi ! Vous allez être redirigé vers la page de paiement Orange Money...
        </div>
      )}
      <button onClick={onClose} className={styles.closeButton}>Annuler</button>
    </div>
  );
};

export default CheckoutForm;