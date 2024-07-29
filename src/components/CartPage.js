import React, { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import OrderForm from './OrderForm';
import Header from './Header';
import styles from './CartPage.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Trash2, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useContext(CartContext);
  const [showOrderForm, setShowOrderForm] = useState(false);

  const handleOrder = () => setShowOrderForm(true);
  const handleCloseOrderForm = () => setShowOrderForm(false);

  const handleOrderSuccess = () => {
    setShowOrderForm(false);
    clearCart();
    Swal.fire({
      title: 'Commande envoyée !',
      text: 'Nous vous contacterons bientôt pour confirmer votre commande.',
      icon: 'success',
      confirmButtonText: 'Fermer',
      confirmButtonColor: '#F39F86',
    });
  };

  return (
    <div className={styles.cartPageWrapper}>
      <Header />

      <main className={styles.cartMain}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className={styles.cartContainer}
        >
          <h2 className={styles.cartTitle}>
            <ShoppingCart className={styles.cartIcon} /> Votre Panier
          </h2>
          <AnimatePresence>
            {cart.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className={styles.emptyCart}
              >
                <p>Votre panier est vide.</p>
                <Link to="/#products" className={styles.continueShoppingBtn}>
                  Découvrez nos produits
                </Link>
              </motion.div>
            ) : (
              <div className={styles.cartContent}>
                <div className={styles.cartItems}>
                  {cart.map(item => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className={styles.cartItem}
                    >
                      <img src={item.image} alt={item.name} className={styles.itemImage} />
                      <div className={styles.itemInfo}>
                        <h3 className={styles.itemName}>{item.name}</h3>
                        <p className={styles.itemPrice}>{item.price} FCFA</p>
                        <div className={styles.itemActions}>
                          <button
                            onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                            className={styles.quantityButton}
                          >
                            <Minus size={16} />
                          </button>
                          <span className={styles.itemQuantity}>{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className={styles.quantityButton}
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} className={styles.removeButton}>
                        <Trash2 size={20} />
                      </button>
                    </motion.div>
                  ))}
                </div>
                <div className={styles.cartSummary}>
                  <div className={styles.totalPrice}>
                    Total: <span>{getCartTotal()} FCFA</span>
                  </div>
                  <button onClick={handleOrder} className={styles.orderButton}>
                    Passer la commande
                  </button>
                </div>
              </div>
            )}
          </AnimatePresence>
        </motion.div>
      </main>
      
      <AnimatePresence>
        {showOrderForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.orderFormOverlay}
          >
            <OrderForm onClose={handleCloseOrderForm} onOrderSuccess={handleOrderSuccess} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Cart;
