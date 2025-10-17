import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/ui/navbar.jsx';
import LandingPage from './page/user/LandingPage.jsx';
import Listing from './page/user/Listing.jsx';
import Order from './page/user/order.jsx';
import About from './page/user/About.jsx';
import Contact from './page/user/Contact.jsx';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (car) => {
    setCartItems((prevItems) => {
      if (!prevItems.find(item => item.id === car.id)) {
        return [...prevItems, car];
      }
      return prevItems;
    });
  };

  const handleRemoveFromCart = (carId) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== carId));
  };

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/listing" element={<Listing onAddToCart={handleAddToCart} cartItems={cartItems} />} />
        <Route path="/order" element={<Order cartItems={cartItems} setCartItems={setCartItems} onRemoveFromCart={handleRemoveFromCart} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;