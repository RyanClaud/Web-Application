import React, { useState } from 'react';
import PrimaryButton from '../../components/ui/primarybutton.jsx';

const Order = ({ cartItems, setCartItems, onRemoveFromCart, onClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '', address: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: null });
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

    setTimeout(() => {
      setIsSubmitting(false);
      setOrderPlaced(true);
      setCartItems([]);
    }, 2000);
  };

  // Order placed confirmation screen
  if (orderPlaced) {
    return (
      <div className="w-full py-16 animate-fade-in">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md animate-scale-in">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-green-600 mb-4 animate-fade-in">Order Confirmed!</h1>
          <p className="text-lg text-gray-700 mb-8 animate-fade-in">
            Thank you for your purchase. A confirmation email has been sent to your inbox.
          </p>
          <PrimaryButton
            label="Continue Shopping"
            onClick={onClose}
            intent="primary"
            size="lg"
            className="
              hover:scale-105 
              transition-all 
              duration-300 
              rounded-full 
              border-2 
              border-blue-500 
              bg-blue-500 
              text-white 
              hover:bg-white 
              hover:text-blue-600 
              hover:shadow-xl 
              shadow-md 
              px-8 
              py-3 
              font-semibold
            "
          />
        </div>
      </div>
    );
  }

  // Empty cart state
  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="w-full min-h-[70vh] flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 py-16 animate-fade-in">
        <div className="max-w-2xl mx-auto px-6 sm:px-8 text-center bg-white rounded-3xl shadow-2xl p-10 transition-all duration-500 hover:shadow-indigo-300/40 hover:scale-[1.02]">

          {/* Animated Empty Icon */}
          <div className="relative w-24 h-24 mx-auto mb-8">
            <div className="absolute inset-0 rounded-full bg-indigo-100 animate-ping-slow"></div>
            <div className="relative w-24 h-24 bg-indigo-50 rounded-full flex items-center justify-center shadow-md animate-bounce-slow">
              <svg xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-indigo-600"
                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5
                   M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17
                   m0 0a2 2 0 100 4 2 2 0 000-4
                   m-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>

          {/* Empty Cart Message */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 transition-colors duration-300 hover:text-indigo-600">
            Your Cart Is Empty
          </h1>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            You haven’t added any vehicles to your order yet. Explore our collection and find your dream ride.
          </p>

          {/* Call to Action Button */}
          <PrimaryButton
            label="Browse Inventory"
            onClick={onClose}
            intent="primary"
            size="lg"
            className="px-8 py-4 font-semibold rounded-full bg-gradient-to-r from-indigo-500 to-blue-600 
                     text-white shadow-md hover:shadow-xl hover:scale-105 hover:from-blue-600 hover:to-indigo-700
                     active:scale-95 border-2 border-indigo-600 transition-all duration-300 ease-in-out"
          />
        </div>
      </div>
    );
  }

  // Checkout page
  return (
    <div className="w-full py-12 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 
          transition-colors duration-300 hover:text-indigo-600"
        >
          Checkout
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form Section */}
          <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Delivery Details</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {['name', 'email', 'address'].map((field) => (
                <div key={field}>
                  <label className="block text-gray-700 mb-2 font-medium capitalize">
                    {field === 'address' ? 'Delivery Address' : field === 'email' ? 'Email Address' : 'Full Name'}
                  </label>
                  {field !== 'address' ? (
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      className={`w-full p-3 border rounded-2xl shadow-sm transition-all duration-300
                        focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent
                        hover:border-indigo-400
                        ${errors[field] ? 'border-red-500' : 'border-gray-300'}
                      `}
                    />
                  ) : (
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      rows="4"
                      className={`w-full p-3 border rounded-2xl shadow-sm transition-all duration-300
                        focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent
                        hover:border-indigo-400
                        ${errors.address ? 'border-red-500' : 'border-gray-300'}
                      `}
                    />
                  )}
                  {errors[field] && <p className="text-red-500 text-sm mt-1">{errors[field]}</p>}
                </div>
              ))}

              <PrimaryButton
                label={'Place Secure Order'}
                type="submit"
                intent="accent"
                size="lg"
                isLoading={isSubmitting}
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-indigo-500 to-blue-600 text-white 
                font-semibold py-4 rounded-full border-2 border-blue-600 
                shadow-md hover:shadow-xl hover:scale-105 hover:from-blue-600 hover:to-indigo-700
                active:scale-95 transition-all duration-300 ease-in-out"
              />
            </form>
          </div>

          {/* Order Summary Section */}
          <div className="bg-gray-50 p-8 rounded-3xl shadow-inner border border-gray-100 hover:border-indigo-300 transition-all duration-300">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>
            <div className="space-y-4 mb-6">
              {cartItems.map(item => (
                <div
                  key={item.id}
                  className="flex justify-between items-start pb-4 border-b border-gray-200 hover:bg-gray-100 rounded-2xl p-2 transition-colors"
                >
                  <div>
                    <p className="font-medium text-gray-900">{item.make} {item.model}</p>
                    <p className="text-sm text-gray-500">Year: {item.year}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-gray-900">${item.price.toLocaleString()}</span>
                    <button
                      onClick={() => onRemoveFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 font-medium text-sm transition-transform hover:scale-110"
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
