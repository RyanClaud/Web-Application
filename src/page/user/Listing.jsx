import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/ui/card.jsx';
import PrimaryButton from '../../components/ui/primarybutton.jsx';

const cars = [
  { id: 1, make: 'Toyota', model: 'Camry', year: 2022, price: 25000, image: 'https://hips.hearstapps.com/hmg-prod/images/2025-toyota-camry-xse-awd-123-66993cc94cc40.jpg?crop=0.580xw:0.489xh;0.137xw,0.397xh&resize=1200:*' },
  { id: 2, make: 'Honda', model: 'Civic', year: 2021, price: 22000, image: 'https://www.topgear.com/sites/default/files/2023/06/04%202022%20Honda%20Civic%20Si.jpg?w=640&h=360' },
  { id: 3, make: 'Ford', model: 'Mustang', year: 2023, price: 35000, image: 'https://static.overfuel.com/dealers/trust-auto/image/2020-ford-mustang-shelby-gt350-heritage-edition-3-1024x640.jpg' },
  { id: 4, make: 'Tesla', model: 'Model 3', year: 2024, price: 40000, image: 'https://www.carscoops.com/wp-content/uploads/2023/04/Tesla-Model-3-Facelift-1111-1024x576.jpg' },
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
  const currentCars = filteredCars.slice(
    (currentPage - 1) * carsPerPage,
    currentPage * carsPerPage
  );

  return (
    <div className="w-full py-12 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 tracking-tight hover:text-indigo-600 transition-colors duration-300">
          Browse Our Inventory
        </h1>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-12">
          <input
            type="text"
            placeholder="Search by make or model..."
            className="w-full p-4 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 hover:shadow-md"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Car Grid */}
        {currentCars.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-600 text-lg">No cars match your search.</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
              {currentCars.map(car => (
                <Card
                  key={car.id}
                  car={car}
                  onAddToCart={onAddToCart}
                  isAdded={cartItems.some(item => item.id === car.id)}
                />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <nav className="flex flex-wrap justify-center items-center gap-2">
                <button
                  onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 rounded-xl bg-white text-gray-700 border border-gray-300 hover:bg-gray-100 hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  Prev
                </button>
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`px-4 py-2 rounded-xl transition-all duration-300 ${currentPage === i + 1
                        ? 'bg-indigo-600 text-white shadow-md hover:bg-indigo-700'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-sm'
                      }`}
                  >
                    {i + 1}
                  </button>
                ))}
                <button
                  onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 rounded-xl bg-white text-gray-700 border border-gray-300 hover:bg-gray-100 hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  Next
                </button>
              </nav>
            )}
          </>
        )}

        {/* Floating Go to Cart Button */}
        {cartItems.length > 0 && (
          <div className="fixed bottom-6 right-6 z-50">
            <div className="relative group">
              <PrimaryButton
                label={`🛒 Go to Cart (${cartItems.length})`}
                onClick={() => navigate('/order')}
                intent="accent"
                size="lg"
                className="border-2 border-indigo-600 bg-indigo-600 text-white font-semibold rounded-full px-8 py-4 shadow-[0_8px_25px_rgba(37,99,235,0.4)] 
                           hover:bg-white hover:text-indigo-600 hover:scale-105 hover:shadow-[0_10px_40px_rgba(37,99,235,0.5)] transition-all duration-300"
              />
              {/* Glowing indicator */}
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping opacity-80"></span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Listing;
