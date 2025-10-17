import React from 'react';

const About = () => {
  return (
    <div className="w-full px-6 md:px-12 lg:px-20 py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">About CarDeal</h1>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Welcome to CarDeal, your number one source for the best used cars. We're dedicated to giving you the very best of pre-owned vehicles, with a focus on quality, customer service, and value.
        </p>
        <img src="https://via.placeholder.com/800x400?text=Our+Awesome+Team" alt="Our Team" className="rounded-xl shadow-lg mb-8" />
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h2>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Founded in 2025, CarDeal has come a long way from its beginnings. When we first started out, our passion for providing clean, reliable, and affordable cars drove us to do intense research, and gave us the impetus to turn hard work and inspiration into a booming online store. We now serve customers all over the country and are thrilled to be a part of the fair-trade wing of the automotive industry.
        </p>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Why Us?</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us. Our team is committed to ensuring you have a seamless and trustworthy car buying experience.
        </p>
      </div>
    </div>
  );
};

export default About;