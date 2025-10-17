import React, { useState } from 'react';
import Card from '../../../components/ui/card.jsx';

const cars = [
  { id: 1, make: 'Toyota', model: 'Camry', year: 2022, price: 25000, image: 'https://via.placeholder.com/400x200?text=Toyota+Camry' },
  { id: 2, make: 'Honda', model: 'Civic', year: 2021, price: 22000, image: 'https://via.placeholder.com/400x200?text=Honda+Civic' },
  { id: 3, make: 'Ford', model: 'Mustang', year: 2023, price: 35000, image: 'https://via.placeholder.com/400x200?text=Ford+Mustang' },
  { id: 4, make: 'Tesla', model: 'Model 3', year: 2024, price: 40000, image: 'https://via.placeholder.com/400x200?text=Tesla+Model+3' },
  { id: 5, make: 'BMW', model: 'X5', year: 2022, price: 50000, image: 'https://via.placeholder.com/400x200?text=BMW+X5' },
  { id: 6, make: 'Audi', model: 'A4', year: 2021, price: 30000, image: 'https://via.placeholder.com/400x200?text=Audi+A4' },
  { id: 7, make: 'Mercedes', model: 'C-Class', year: 2023, price: 45000, image: 'https://via.placeholder.com/400x200?text=Mercedes+C-Class' },
  { id: 8, make: 'Chevrolet', model: 'Tahoe', year: 2022, price: 55000, image: 'https://via.placeholder.com/400x200?text=Chevrolet+Tahoe' },
  { id: 9, make: 'Nissan', model: 'Altima', year: 2021, price: 24000, image: 'https://via.placeholder.com/400x200?text=Nissan+Altima' },
  { id: 10, make: 'Hyundai', model: 'Sonata', year: 2024, price: 26000, image: 'https://via.placeholder.com/400x200?text=Hyundai+Sonata' },
];

const Listing = () => {
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

  const handleAddToCart = (car) => {
    console.log('Added to cart:', car);
  };

  return (
    <div className="w-full px-6 md:px-12 lg:px-20 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Car Listings</h1>
      <input
        type="text"
        placeholder="Search by make or model..."
        className="w-full max-w-lg mx-auto p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:border-indigo-600 mb-12"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentCars.map(car => (
          <Card key={car.id} car={car} onAddToCart={handleAddToCart} />
        ))}
      </div>
      <div className="flex justify-center mt-12">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-4 py-2 mx-2 rounded-xl ${currentPage === i + 1 ? 'bg-indigo-600 text-white shadow-md' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Listing;