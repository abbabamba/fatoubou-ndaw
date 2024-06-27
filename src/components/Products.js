import React, { useState, useEffect } from 'react';
import styles from './Products.module.css';
import OrderForm from './OrderForm';

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isCheckoutVisible, setIsCheckoutVisible] = useState(false);

  const products = [
    {
      id: 1,
      image: require('../assets/images/product3_1.jpeg'),
      name: 'Ñuul Mo Rafet',
      description: 'Célébrez la beauté naturelle de la peau noire. Un rappel puissant que votre couleur est magnifique, inspirant fierté et confiance.',
      price: 5000, // prix en centimes
    },
    {
      id: 2,
      image: require('../assets/images/product2.jpeg'),
      name: 'Sama Yaay Sama Xarit',
      description: "Un hommage touchant à la maternité et à l'amitié. Célébrez le lien unique entre une mère et son enfant, source inépuisable d'amour et de soutien.",
      price: 5000,
    },
    {
      id: 3,
      image: require('../assets/images/product1.jpeg'),
      name: 'Dama Rafet',
      description: "Affirmez votre beauté intérieure et extérieure. Un message puissant pour embrasser votre authenticité et rayonner de confiance en soi.",
      price: 5000,
    },
    {
      id: 4,
      image: require('../assets/images/product4.jpeg'),
      name: 'Dama Am Jom',
      description: "Incarnez le courage et la détermination. Un rappel inspirant que vous avez la force intérieure pour surmonter tous les défis.",
      price: 5000,
    },
    {
      id: 5,
      image: require('../assets/images/product5.jpeg'),
      name: 'Dama Muus Baax Sawar',
      description: "Encouragez l'excellence et l'ambition. Un message motivant pour développer vos talents et devenir la meilleure version de vous-même.",
      price: 5000,
    },
  ];

  useEffect(() => {
    if (selectedProduct) {
      setIsCheckoutVisible(true);
    }
  }, [selectedProduct]);

  const closeCheckout = () => {
    setIsCheckoutVisible(false);
    setSelectedProduct(null);
  };

  return (
    <section id="products" className={styles.products}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Nos Produits</h2>
        <div className={styles.productGrid}>
          {products.map((product) => (
            <div key={product.id} className={styles.product}>
              <div className={styles.productImageContainer}>
                <img src={product.image} alt={product.name} className={styles.productImage} />
                <div className={styles.productOverlay}>
                  <button className={styles.btn} onClick={() => setSelectedProduct(product)}>
                    Commander
                  </button>
                </div>
              </div>
              <h3 className={styles.productName}>{product.name}</h3>
              <p className={styles.productDescription}>{product.description}</p>
              <p className={styles.productPrice}>{(product.price )} frc</p>
            </div>
          ))}
        </div>
      </div>
      {isCheckoutVisible && (
        <div className={styles.checkoutOverlay}>
          <div className={styles.checkoutContainer}>
            <button className={styles.closeBtn} onClick={closeCheckout}>&times;</button>
            <OrderForm product={selectedProduct} onClose={closeCheckout} />
          </div>
        </div>
      )}
    </section>
  );
};

export default Products;
