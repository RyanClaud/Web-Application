import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Navbar = ({ onCartClick, cartItemsCount = 0, onMenuClick, navLinks }) => {
  const location = useLocation();

  const renderNavLink = (link, isMobile = false) => (
    <NavLink
      key={link.to}
      to={link.to}
      className={({ isActive }) =>
        `relative font-medium transition-colors duration-200 ${isActive ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-600'}`
      }
    >
      {link.label}
      {location.pathname === link.to && (
        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-indigo-600 rounded-full"></span>
      )}
    </NavLink>
  );

  return (
    <nav className="w-full flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-12 py-4 bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
       RC CarDeal
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-5">
        {navLinks.map((link) => renderNavLink(link))}
        <button onClick={onCartClick} className="relative font-medium transition-colors duration-200 text-gray-600 hover:text-indigo-600">
          Cart
          {cartItemsCount > 0 && <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">{cartItemsCount}</span>}
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-600 hover:text-indigo-600 focus:outline-none"
        onClick={(e) => onMenuClick(e)}
        aria-label="Toggle menu"
      >
        <span className="sr-only">Open main menu</span>
        {/* Hamburger Icon */}
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>      
      </button>
    </nav>
  );
};

export default Navbar;