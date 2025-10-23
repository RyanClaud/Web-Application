import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Navbar = ({ onCartClick, cartItemsCount = 0 }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/listing', label: 'Cars' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  const renderNavLink = (link, isMobile = false) => (
    <NavLink
      key={link.to}
      to={link.to}
      className={({ isActive }) =>
        isMobile
          ? `font-medium py-2 px-3 rounded-lg transition-colors ${isActive ? 'bg-indigo-50 text-indigo-700' : 'text-gray-700 hover:bg-gray-100'}`
          : `relative font-medium transition-colors duration-200 ${isActive ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-600'}`
      }
      onClick={() => isMobile && setIsMenuOpen(false)}
    >
      {link.label}
      {!isMobile && location.pathname === link.to && (
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
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile Menu Drawer */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 z-50"
        >
          <div className="flex flex-col space-y-4 px-4 sm:px-6">
            {navLinks.map((link) => renderNavLink(link, true))}
            <button onClick={() => { onCartClick(); setIsMenuOpen(false); }} className="relative font-medium py-2 px-3 rounded-lg transition-colors text-gray-700 hover:bg-gray-100 text-left">
              Cart
              {cartItemsCount > 0 && <span className="absolute top-1 right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">{cartItemsCount}</span>}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;