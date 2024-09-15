import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { CartContext } from '../contexts/CartContext';
import styles from './Products.module.css';
import Swal from 'sweetalert2';

const Products = () => {
  const { addToCart } = useContext(CartContext);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      image: require('../assets/images/gnuul.png'),
      name: 'Ñuul Mo Rafet',
      description: 'Célébrez la beauté naturelle de la peau noire. Un rappel puissant que votre couleur est magnifique, inspirant fierté et confiance.',
      price: 10000,
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
      image: require('../assets/images/rafeet.png'),
      name: 'Dama Taaru',
      description: "Affirmez votre beauté intérieure et extérieure. Un message puissant pour embrasser votre authenticité et rayonner de confiance en soi.",
      price: 10000,
    },
    {
      id: 4,
      image: require('../assets/images/joom.png'),
      name: 'Dama Am Jom',
      description: "Incarnez le courage et la détermination. Un rappel inspirant que vous avez la force intérieure pour surmonter tous les défis.",
      price: 10000,
    },
    {
      id: 5,
      image: require('../assets/images/muus.png'),
      name: 'Dama Muus Baax Sawar',
      description: "Encouragez l'excellence et l'ambition. Un message motivant pour développer vos talents et devenir la meilleure version de vous-même.",
      price: 10000,
    },
    {
      id: 6,
      image: require('../assets/images/product6.jpeg'),
      name: 'Dinaa Jang',
      description: "Embrassez l'importance de l'éducation et de la croissance personnelle. Un rappel inspirant de votre engagement à apprendre et à évoluer continuellement.",
      price: 10000,
    },
    {
      id: 7,
      image: require('../assets/images/product7.jpeg'),
      name: 'Saama Yaay Saama Rooyokaay',
      description: "Honorez le lien précieux entre une mère et son enfant. Célébrez l'amour inconditionnel et le soutien inébranlable qu'une mère apporte tout au long de la vie.",
      price: 10000,
    }
  ];

  const handleAddToCart = (product) => {
    addToCart(product);
    Swal.fire({
      title: 'Produit ajouté !',
      text: `${product.name} a été ajouté à votre panier.`,
      icon: 'success',
      showCancelButton: true,
      confirmButtonText: 'Voir le panier',
      cancelButtonText: 'Continuer les achats',
      customClass: {
        container: styles.swalContainer,
        popup: styles.swalPopup,
        title: styles.swalTitle,
        content: styles.swalContent,
        confirmButton: styles.swalConfirmButton,
        cancelButton: styles.swalCancelButton
      }
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/panier'); // Redirection vers la page du panier
      }
    });
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <>
      <Helmet>
        <title>Produits Fatou Bou Ndaw - Vêtements inspirants pour enfants</title>
        <meta name="description" content="Découvrez notre collection de vêtements inspirants pour enfants, avec des messages positifs en wolof. Des t-shirts qui célèbrent la beauté, la confiance et l'ambition." />
        <link rel="canonical" href="https://www.fatou-bou-ndaw.com/produits" />
        <meta property="og:title" content="Produits Fatou Bou Ndaw - Vêtements inspirants pour enfants" />
        <meta property="og:description" content="Collection de vêtements avec des messages positifs en wolof pour renforcer l'estime de soi des enfants sénégalais." />
        <meta property="og:image" content="https://www.fatou-bou-ndaw.com/images/products-preview.jpg" />
        <meta property="og:type" content="product" />
        <meta property="og:url" content="https://www.fatou-bou-ndaw.com/produits" />
      </Helmet>

      <section id="products" className={styles.products}>
        <div className={styles.container}>
          <h1 className={styles.heading}>Nos Produits</h1>
          <div className={styles.productGrid} role="list">
            {products.map((product) => (
              <article key={product.id} className={styles.product} onClick={() => handleProductClick(product)} role="listitem">
                <div className={styles.productImageContainer}>
                  <img src={product.image} alt={`T-shirt ${product.name}`} className={styles.productImage} loading="lazy" />
                  <div className={styles.productOverlay}>
                    <button
                      className={styles.btn}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddToCart(product);
                      }}
                      aria-label={`Ajouter ${product.name} au panier`}
                    >
                      <i className="fas fa-shopping-cart" aria-hidden="true"></i> Ajouter au panier
                    </button>
                  </div>
                </div>
                <h2 className={styles.productName}>{product.name}</h2>
                <p className={styles.productDescription}>{product.description}</p>
                <p className={styles.productPrice}>{product.price} FCFA</p>
              </article>
            ))}
          </div>
        </div>
        {selectedProduct && (
          <dialog open className={styles.productDetail}>
            <button className={styles.closeBtn} onClick={() => setSelectedProduct(null)} aria-label="Fermer les détails du produit">✖</button>
            <h2>{selectedProduct.name}</h2>
            <img src={selectedProduct.image} alt={`T-shirt ${selectedProduct.name}`} />
            <p>{selectedProduct.description}</p>
            <p>Prix: {selectedProduct.price} FCFA</p>
            <button
              className={styles.btn}
              onClick={() => handleAddToCart(selectedProduct)}
              aria-label={`Ajouter ${selectedProduct.name} au panier`}
            >
              <i className="fas fa-shopping-cart" aria-hidden="true"></i> Ajouter au panier
            </button>
          </dialog>
        )}
      </section>
    </>
  );
};

export default Products;
