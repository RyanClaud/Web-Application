import React from 'react';
import { useNavigate } from 'react-router-dom';
import PrimaryButton from '../../../components/ui/primaryButton.jsx';
import Card from '../../../components/ui/card.jsx';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero Section */}
      <section className="w-full flex flex-col md:flex-row items-center justify-center px-6 md:px-12 lg:px-20 py-32 md:py-12 lg:py-32 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">Build Modern Web Apps with Us</h2>
          <p className="text-gray-600 leading-relaxed mb-8">Create fast, responsive, and modern web applications using React and Tailwind CSS. Get started in minutes with our flexible UI components and streamlined workflow.</p>
          <PrimaryButton label="Order Now" onClick={() => navigate('/order')} type="primary" />
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <img src="https://via.placeholder.com/600x400?text=Modern+Web+Design" alt="Modern web design" className="rounded-3xl shadow-2xl w-full hover:scale-105 transition-transform duration-500" />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="w-full px-6 md:px-12 lg:px-20">
          <div className="w-full px-6 md:px-12 lg:px-32">
            <h3 className="text-center mb-16 text-4xl font-bold text-gray-800">Why Choose Us</h3>
            <p className="text-gray-600 text-lg mb-12">Powerful features designed to accelerate your development process</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card icon="⚡" title="Fast Performance" description="Experience lightning-fast load times and optimized components that deliver seamless user experiences." />
            <Card icon="🎨" title="Responsive Design" description="Your website looks stunning on all devices, from mobile to desktop, with adaptive layouts." />
            <Card icon="🔧" title="Easy Customization" description="Tailwind's utility-first classes make styling fast, flexible, and maintainable at scale." />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 px-6 md:px-12 lg:px-20 text-center">
        <h3 className="text-4xl font-bold mb-6">Ready to Launch Your Next Project?</h3>
        <p className="mb-10 text-lg text-indigo-100">Join thousands of developers who trust our modern UI components</p>
        <PrimaryButton label="Get Started" onClick={() => navigate('/listing')} type="outline" />
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-900 text-gray-400 py-8 text-center">
        <p className="text-sm">&copy; 2025 CarDeal. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;