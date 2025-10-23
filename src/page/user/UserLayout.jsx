import React, { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import Navbar from '../../components/ui/navbar.jsx';
import Modal from '../../Modal.jsx';
import Order from './order.jsx';

const UserLayout = ({ cartItems, onRemoveFromCart, setCartItems }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <Navbar onCartClick={() => setIsCartOpen(true)} />

      <Outlet context={{ openCart: () => setIsCartOpen(true) }} />

      <Modal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)}>
        <Order
          cartItems={cartItems}
          setCartItems={setCartItems}
          onRemoveFromCart={onRemoveFromCart}
          onClose={() => setIsCartOpen(false)}
        />
      </Modal>
      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-t border-gray-200/80 shadow-lg z-50">
        <ul className="flex justify-around items-center h-16">
      <li><NavLink to="/" className={({ isActive }) => `flex flex-col items-center justify-center transition-colors duration-200 w-full h-full rounded-lg ${isActive ? 'text-indigo-600 bg-black/5' : 'text-gray-600 hover:text-indigo-600'}`}>
            {/* Home Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span className="text-xs font-medium">Home</span>
      </NavLink></li>
      <li><NavLink to="/listing" className={({ isActive }) => `flex flex-col items-center justify-center transition-colors duration-200 w-full h-full rounded-lg ${isActive ? 'text-indigo-600 bg-black/5' : 'text-gray-600 hover:text-indigo-600'}`}>
            {/* Cars/Grid Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            <span className="text-xs font-medium">Cars</span>
      </NavLink></li>
      <li><NavLink to="/about" className={({ isActive }) => `flex flex-col items-center justify-center transition-colors duration-200 w-full h-full rounded-lg ${isActive ? 'text-indigo-600 bg-black/5' : 'text-gray-600 hover:text-indigo-600'}`}>
            {/* About Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-xs font-medium">About</span>
      </NavLink></li>
      <li><NavLink to="/contact" className={({ isActive }) => `flex flex-col items-center justify-center transition-colors duration-200 w-full h-full rounded-lg ${isActive ? 'text-indigo-600 bg-black/5' : 'text-gray-600 hover:text-indigo-600'}`}>
            {/* Contact Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-xs font-medium">Contact</span>
      </NavLink></li>
        </ul>
      </nav>
    </>
  );
};

export default UserLayout;