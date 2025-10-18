import React from 'react';
import { useNavigate } from 'react-router-dom';
import PrimaryButton from '../../components/ui/primarybutton.jsx';
import Card from '../../components/ui/card.jsx';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="w-full flex flex-col md:flex-row items-center justify-between gap-12 px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-28 lg:py-36 bg-gradient-to-br from-indigo-700 via-purple-700 to-indigo-800 text-white">
        <div className="w-full md:w-6/12 mb-10 md:mb-0 text-center md:text-left">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6">
            Find Your Next Car <br /> With Confidence
          </h2>
          <p className="text-indigo-100 text-lg lg:text-xl mb-10 max-w-xl leading-relaxed">
            Browse our curated inventory of high-quality, pre-owned vehicles. Trusted by thousands nationwide.
          </p>
          <PrimaryButton
            label="Browse Cars"
            onClick={() => navigate('/listing')}
            intent="primary"
            size="xl"
            className="mt-6 md:mt-8 px-10 py-5 text-xl font-semibold rounded-full border-2 border-red-600 text-bl-600 bg-red hover:bg-red-600 hover:text-white hover:scale-105 hover:shadow-[0_8px_30px_rgba(37,99,235,0.4)] transition-all duration-300 ease-in-out"
            aria-label="Browse available cars"
          />


        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://weburbanist.com/wp-content/uploads/2018/03/stylish-cars-main.jpg"
            alt="Modern car"
            className="rounded-3xl shadow-2xl w-full max-w-lg md:max-w-none object-cover transform transition-transform duration-500 hover:scale-105"
          />
        </div>
      </section>

      {/* Features */}
      <section className="w-full py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">Why Choose CarDeal?</h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Premium service, transparent pricing, and a seamless buying experience.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <Card icon="⚡" title="Instant Approval" description="Get pre-approved in minutes with our secure online system." />
            <Card icon="🛡️" title="7-Day Return" description="Not satisfied? Return your car within 7 days, no questions asked." />
            <Card icon="🔍" title="Vehicle History" description="Every car comes with a full Carfax report and inspection." />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-gradient-to-r from-gray-50 via-white to-gray-100 text-gray-800 py-20 px-4 sm:px-6 lg:px-8 text-center border-t border-gray-200">
        <h3 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-gray-900">
          Ready to Drive Home?
        </h3>
        <p className="mb-10 text-gray-600 max-w-2xl mx-auto leading-relaxed text-lg">
          Join thousands of happy customers who found their perfect car with us.
        </p>
        <PrimaryButton
          label="🚘 View Inventory"
          onClick={() => navigate('/listing')}
          intent="outline"
          size="xl"
          className="px-10 py-5 text-xl font-semibold rounded-full border-2 border-blue-600 text-blue-600 bg-white hover:bg-blue-600 hover:text-white hover:scale-105 hover:shadow-[0_8px_30px_rgba(37,99,235,0.4)] transition-all duration-300 ease-in-out shadow-lg"
        />
      </section>


      {/* Footer */}
      <footer className="w-full bg-gray-800 text-gray-400 py-8 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} RC CarDeal. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;