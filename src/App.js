import React from 'react';

import Header from './components/Header';
import Home from './components/Home';
import OrderForm from './components/OrderForm';
import Products from './components/Products';
import About from './components/About';

import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Home />
        
        <Products />
        <About />
        <OrderForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
