import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PrimaryButton from '../../components/ui/primarybutton.jsx';

const Order = ({ cartItems, setCartItems, onRemoveFromCart }) => {
  const [formData, setFormData] = useState({ name: '', email: '', address: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [orderPlaced, setOrderPlaced] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid.';
    }
    if (!formData.address.trim()) newErrors.address = 'Address is required.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setIsSubmitting(true);
    console.log('Order placed:', { ...formData, items: cartItems, total });

    setTimeout(() => {
      setIsSubmitting(false);
      setOrderPlaced(true);
      setCartItems([]);
    }, 2000);
  };

  if (orderPlaced) {
    return (
      <div className="w-full py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-green-600 mb-4">Order Confirmed!</h1>
          <p className="text-lg text-gray-700 mb-8">
            Thank you for your purchase. A confirmation email has been sent to your inbox.
          </p>
          <PrimaryButton label="Continue Shopping" onClick={() => navigate('/listing')} intent="primary" size="lg" />
        </div>
      </div>
    );
  }

  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="w-full py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Your Cart Is Empty</h1>
          <p className="text-lg text-gray-700 mb-8">
            You haven’t added any vehicles to your order yet.
          </p>
          <PrimaryButton label="Browse Inventory" onClick={() => navigate('/listing')} intent="primary" size="lg" />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 
             transition-colors duration-300 hover:text-indigo-600"
        >
          Checkout
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">


          {/* Form */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Delivery Details</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 ${errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 ${errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Delivery Address</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 ${errors.address ? 'border-red-500' : 'border-gray-300'
                    }`}
                  rows="4"
                />
                {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
              </div>
              <PrimaryButton
                label={isSubmitting ? 'Placing Order...' : 'Place Secure Order'}
                type="submit"
                intent="accent"
                size="lg"
                disabled={isSubmitting}
                className="w-full"
              />
            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>
            <div className="space-y-4 mb-6">
              {cartItems.map(item => (
                <div key={item.id} className="flex justify-between items-start pb-4 border-b border-gray-200">
                  <div>
                    <p className="font-medium text-gray-900">{item.make} {item.model}</p>
                    <p className="text-sm text-gray-500">Year: {item.year}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-gray-900">${item.price.toLocaleString()}</span>
                    <button
                      onClick={() => onRemoveFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 font-medium text-sm"
                      aria-label={`Remove ${item.make} ${item.model}`}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center pt-4 border-t border-gray-300">
              <span className="text-xl font-bold text-gray-900">Total</span>
              <span className="text-2xl font-bold text-indigo-600">${total.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;