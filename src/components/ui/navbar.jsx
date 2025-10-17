import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center px-6 md:px-12 lg:px-20 py-5 bg-white shadow-md sticky top-0 z-50">
      <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">CarDeal</h1>
      <div className="flex space-x-8 hidden md:flex">
        <Link to="/" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">Home</Link>
        <Link to="/listing" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">Car Listing</Link>
        <Link to="/order" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">Order</Link>
        <Link to="/about" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">About Us</Link>
        <Link to="/contact" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;