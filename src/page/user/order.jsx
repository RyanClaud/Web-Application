import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PrimaryButton from '../../components/ui/primarybutton.jsx';

const Order = ({ cartItems, setCartItems }) => {
  const [formData, setFormData] = useState({ name: '', email: '', address: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log('Order placed:', { ...formData, items: cartItems, total });

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setOrderPlaced(true);
      setCartItems([]); // Clear cart after order
    }, 2000);
  };

  if (orderPlaced) {
    return (
      <div className="w-full px-6 md:px-12 lg:px-20 py-12 text-center">
        <h1 className="text-4xl font-bold text-green-600 mb-6">Order Placed Successfully!</h1>
        <p className="text-lg text-gray-700 mb-8">Thank you for your purchase. You will receive a confirmation email shortly.</p>
        <PrimaryButton label="Back to Listings" onClick={() => navigate('/listing')} intent="primary" />
      </div>
    );
  }

  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="w-full px-6 md:px-12 lg:px-20 py-12 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Your Cart is Empty</h1>
        <p className="text-lg text-gray-700 mb-8">You haven't added any cars to your order yet.</p>
        <PrimaryButton label="Browse Cars" onClick={() => navigate('/listing')} intent="primary" />
      </div>
    );
  }

  return (
    <div className="w-full px-6 md:px-12 lg:px-20 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Checkout</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">User Details</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2 font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:border-indigo-600"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:border-indigo-600"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2 font-medium">Address</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:border-indigo-600"
                rows="4"
                required
              />
            </div>
            <PrimaryButton
              label={isSubmitting ? 'Placing Order...' : 'Place Order'}
              type="submit"
              intent="primary"
              disabled={isSubmitting}
            />
          </form>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Order Summary</h2>
          {cartItems.map(item => (
            <div key={item.id} className="flex justify-between mb-4 text-gray-700">
              <span>{item.make} {item.model}</span>
              <span>${item.price.toLocaleString()}</span>
            </div>
          ))}
          <div className="flex justify-between font-bold text-gray-800 border-t pt-4">
            <span>Total</span>
            <span>${total.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;