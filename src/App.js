import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
      {showHeaderAndFooter && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <CartProvider>
      <Router basename="/fatoubou-ndaw">
        <AppContent />
      </Router>
    </CartProvider>
  );
};

export default App;
