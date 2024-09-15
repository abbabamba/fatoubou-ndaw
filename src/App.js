import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { CartProvider } from './contexts/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Products from './components/Products';
import About from './components/About';
import Cart from './components/CartPage';

const AppContent = () => {
  const location = useLocation();
  const showHeaderAndFooter = location.pathname !== '/cart';

  return (
    <>
      <Helmet>
        <html lang="fr" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000000" />
      </Helmet>

      {showHeaderAndFooter && <Header />}
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <Products />
              <About />
            </>
          } />
          <Route path="/produits" element={<Products />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/panier" element={<Cart />} />
        </Routes>
      </main>
      {showHeaderAndFooter && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <CartProvider>
      <Router>
        <AppContent />
      </Router>
    </CartProvider>
  );
};

export default App;