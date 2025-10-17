import React, { useState } from 'react';
import PrimaryButton from '../../../components/ui/primaryButton.jsx';

const mockOrderItems = [
  { id: 1, name: 'Toyota Camry', price: 25000 },
  { id: 2, name: 'Honda Civic', price: 22000 },
];

const Order = () => {
  const [formData, setFormData] = useState({ name: '', email: '', address: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Order placed:', formData);
  };

  const total = mockOrderItems.reduce((sum, item) => sum + item.price, 0);

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
            <PrimaryButton label="Place Order" onClick={handleSubmit} type="primary" />
          </form>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Order Summary</h2>
          {mockOrderItems.map(item => (
            <div key={item.id} className="flex justify-between mb-4 text-gray-700">
              <span>{item.name}</span>
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