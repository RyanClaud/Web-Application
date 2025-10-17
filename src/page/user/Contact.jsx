import React, { useState } from 'react';
import PrimaryButton from '../../components/ui/primarybutton.jsx';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log('Contact form submitted:', formData);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setMessageSent(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setMessageSent(false), 4000); // Hide message after 4 seconds
    }, 1500);
  };

  return (
    <div className="w-full px-6 md:px-12 lg:px-20 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">Contact Us</h1>
        <p className="text-center text-gray-600 mb-12">Have questions? We'd love to hear from you.</p>
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md">
          {messageSent && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-xl relative mb-6" role="alert">
              <strong className="font-bold">Success!</strong>
              <span className="block sm:inline"> Your message has been sent. We'll get back to you soon.</span>
            </div>
          )}
          <div className="mb-6">
            <label className="block text-gray-700 mb-2 font-medium">Name</label>
            <input
              type="text" name="name" value={formData.name} onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:border-indigo-600" required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2 font-medium">Email</label>
            <input
              type="email" name="email" value={formData.email} onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:border-indigo-600" required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2 font-medium">Message</label>
            <textarea
              name="message" value={formData.message} onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:border-indigo-600" rows="5" required
            />
          </div>
          <PrimaryButton
            label={isSubmitting ? 'Sending...' : 'Send Message'}
            type="submit"
            intent="primary"
            disabled={isSubmitting}
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;