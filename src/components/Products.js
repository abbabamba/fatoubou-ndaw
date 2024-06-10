import React from 'react';
import styles from './Products.module.css';

import product1Image from '../assets/images/product1.png';
import product2Image from '../assets/images/product2.png';
import product3Image from '../assets/images/product3.jpeg';

const Products = () => {
  return (
    <section id="products" className={styles.products}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Nos Produits</h2>
        <div className={styles.productGrid}>
          <div className={styles.product}>
            <img
              src={product1Image}
              alt="Produit 1"
              className={styles.productImage}
            />
            <p className={styles.productDescription}>Nous vous présentons un t-shirt qui célèbre fièrement la beauté de la peau noire. Notre design 'Dér Bou Nioul Mo Rafeté' (La peau noire est magnifique) est une ode à l'acceptation de soi et à la fierté culturelle</p>
          </div>
          <div className={styles.product}>
            <img
              src={product2Image}
              alt="Produit 2"
              className={styles.productImage}
            />
            <p className={styles.productDescription}>Nous vous proposons un t-shirt avec un message puissant d'acceptation de soi et d'authenticité. Notre design 'Boul Meussa Khéssal' (Ne te dépigmente jamais) encourage les enfants à embrasser leur peau naturelle et à s'aimer tels qu'ils sont</p>
          </div>
          <div className={styles.product}>
            <img
              src={product3Image}
              alt="Produit 3"
              className={styles.productImage}
            />
            <p className={styles.productDescription}>Nous vous proposons un t-shirt qui est une véritable célébration de la beauté et de la confiance en soi. Notre design 'Dagua Rafeté' (Tu es belle) transmet un message puissant d'acceptation et d'amour de soi.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
