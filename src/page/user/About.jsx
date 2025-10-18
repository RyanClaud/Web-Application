import React from 'react';

const About = () => {
  return (
    <div className="w-full bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About CarDeal</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your trusted partner for premium pre-owned vehicles since 2025.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src=""
              alt="CarDeal Team"
              className="rounded-2xl shadow-lg w-full"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We’re dedicated to transforming the used car buying experience through transparency, quality, and exceptional service.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Customers Trust Us</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2">✓</span>
                <span>150-point vehicle inspection</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2">✓</span>
                <span>Free nationwide delivery</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2">✓</span>
                <span>7-day return policy</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;