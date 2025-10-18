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

    setTimeout(() => {
      setIsSubmitting(false);
      setMessageSent(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setMessageSent(false), 4000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 py-16 px-6 animate-fade-in">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight hover:text-indigo-600 transition-colors duration-300">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about a vehicle or need assistance? Our team is here to help you.
          </p>
        </div>

        {/* Form Section */}
        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:border-indigo-200">
          {messageSent && (
            <div
              className="mb-6 p-4 bg-green-50 text-green-700 rounded-2xl flex items-center gap-3 animate-fade-in"
              role="alert"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-green-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>
                <strong>Success!</strong> Your message has been sent. We’ll reply within 24 hours.
              </span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 hover:shadow-md"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 hover:shadow-md"
                required
              />
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full p-3 border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 hover:shadow-md"
                required
              />
            </div>

            {/* Submit Button */}
            <PrimaryButton
              label={isSubmitting ? 'Sending...' : 'Send Message'}
              type="submit"
              intent="accent"
              size="lg"
              disabled={isSubmitting}
              className="w-full py-4 text-lg font-semibold rounded-3xl bg-gradient-to-r from-indigo-600 to-indigo-500 border border-indigo-600 text-white 
              hover:from-indigo-700 hover:to-indigo-600 hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 
              focus:ring-4 focus:ring-indigo-300 active:scale-95"
            />
          </form>
        </div>

        {/* Contact Info Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              iconColor: 'indigo',
              title: 'Call Us',
              text: '(1234) 123-456',
              svg: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.74 21 3 14.26 3 6V5z"
                />
              ),
              bg: 'from-indigo-50 to-white',
            },
            {
              iconColor: 'purple',
              title: 'Email',
              text: 'support@rccardeal.com',
              svg: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              ),
              bg: 'from-purple-50 to-white',
            },
            {
              iconColor: 'gray',
              title: 'Visit Us',
              text: '123 Labasan Bongabong Oriental Mindoro, Philippines 5211',
              svg: (
                <>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </>
              ),
              bg: 'from-gray-50 to-white',
            },
          ].map((info, index) => (
            <div
              key={index}
              className={`text-center p-8 bg-gradient-to-br ${info.bg} rounded-3xl shadow-md border border-gray-100 
              transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:border-${info.iconColor}-300`}
            >
              <div
                className={`w-14 h-14 bg-${info.iconColor}-100 rounded-full flex items-center justify-center mx-auto mb-5 transition-all duration-300 hover:bg-${info.iconColor}-200`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-7 w-7 text-${info.iconColor}-600`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {info.svg}
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-lg">{info.title}</h3>
              <p className="text-gray-600">{info.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
