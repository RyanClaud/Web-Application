import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/ui/card.jsx';
import PrimaryButton from '../../components/ui/primarybutton.jsx';

const cars = [
  { id: 1, make: 'Toyota', model: 'Camry', year: 2022, price: 25000, image: 'https://hips.hearstapps.com/hmg-prod/images/2025-toyota-camry-xse-awd-123-66993cc94cc40.jpg?crop=0.580xw:0.489xh;0.137xw,0.397xh&resize=1200:*' },
  { id: 2, make: 'Honda', model: 'Civic', year: 2021, price: 22000, image: 'https://www.topgear.com/sites/default/files/2023/06/04%202022%20Honda%20Civic%20Si.jpg?w=640&h=360' },
  { id: 3, make: 'Ford', model: 'Mustang', year: 2023, price: 35000, image: 'https://static.overfuel.com/dealers/trust-auto/image/2020-ford-mustang-shelby-gt350-heritage-edition-3-1024x640.jpg' },
  { id: 4, make: 'Tesla', model: 'Model 3', year: 2024, price: 40000, image: 'data:image/jpeg;base64,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' },
  { id: 5, make: 'BMW', model: 'X5', year: 2022, price: 50000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUF7fyASuNrGe1q2aM24LvTVEjjWxRqjTXHA&s' },
  { id: 6, make: 'Audi', model: 'A4', year: 2021, price: 30000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTamfjYPdsoYnd9VtbnIVooG8iDe5kXKcx70A&s' },
  { id: 7, make: 'Mercedes', model: 'C-Class', year: 2023, price: 45000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS-VtaijJcNvH9Z6m2fzazs4rH4Pgw_YD4LQ&s' },
  { id: 8, make: 'Chevrolet', model: 'Tahoe', year: 2022, price: 55000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw4CVFqy6AzFh6Twxu95ppzotPchIclaGkuw&s' },
  { id: 9, make: 'Nissan', model: 'Altima', year: 2021, price: 24000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQC4Z4xKbDcHOYtk-Ow9E4sO_pLYLfRtnP7w&s' },
  { id: 10, make: 'Hyundai', model: 'Sonata', year: 2024, price: 26000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAIY_yRwM01P30h1JTVoGwpULPs0SyfAoa_A&s' },
];

const Listing = ({ onAddToCart, cartItems }) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 6;

  const filteredCars = cars.filter(car =>
    car.make.toLowerCase().includes(search.toLowerCase()) ||
    car.model.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredCars.length / carsPerPage);
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <div className="w-full px-6 md:px-12 lg:px-20 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Car Listings</h1>
      <input
        type="text"
        placeholder="Search by make or model..."
        className="w-full max-w-lg mx-auto block p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:border-indigo-600 mb-12"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentCars.map(car => (
          <Card
            key={car.id}
            car={car}
            onAddToCart={onAddToCart}
            isAdded={cartItems.some(item => item.id === car.id)}
          />
        ))}
      </div>
      {totalPages > 1 && (
        <nav aria-label="pagination" className="flex justify-center items-center mt-12 space-x-2">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded-xl bg-gray-200 text-gray-800 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Go to previous page"
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 rounded-xl ${currentPage === i + 1 ? 'bg-indigo-600 text-white shadow-md' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
              aria-label={`Go to page ${i + 1}`}
              aria-current={currentPage === i + 1 ? 'page' : undefined}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded-xl bg-gray-200 text-gray-800 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Go to next page"
          >
            Next
          </button>
        </nav>
      )}
      {cartItems.length > 0 && (
        <div className="fixed bottom-8 right-8 z-50">
          <PrimaryButton
            label={`Checkout (${cartItems.length} item${cartItems.length > 1 ? 's' : ''})`}
            onClick={() => navigate('/order')}
            intent="primary"
            className="shadow-lg text-lg"
          />
        </div>
      )}
    </div>
  );
};

export default Listing;