import React from 'react';
import PrimaryButton from './primarybutton.jsx';

const Card = ({ icon, title, description, car, onAddToCart, isAdded }) => {
  const isCarCard = !!car;

  // Base classes are the same, but padding and border differ.
  const cardClasses = `bg-white rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 ${
    isCarCard
      ? 'border border-gray-200 p-4 cursor-pointer group'
      : 'p-6'
  }`;

  return (
    <div className={cardClasses}>
      {isCarCard ? (
        <>
          <img src={car.image} alt={`${car.make} ${car.model}`} className="w-full h-48 object-cover rounded-md mb-4" />
          <h4 className="text-xl font-semibold text-gray-800 mb-2">{car.make} {car.model}</h4>
          <p className="text-gray-600 mb-2">Year: {car.year}</p>
          <p className="text-indigo-600 font-bold mb-4">${car.price.toLocaleString()}</p>
          <PrimaryButton
            label={isAdded ? 'Added to Cart' : 'Add to Cart'}
            onClick={() => onAddToCart(car)}
            intent="primary"
            disabled={isAdded}
          />
        </>
      ) : (
        <>
          {icon && <div className="text-4xl mb-4">{icon}</div>}
          <h4 className="text-xl font-semibold text-gray-800 mb-2">{title}</h4>
          <p className="text-gray-600">{description}</p>
        </>
      )}
    </div>
  );
};

export default Card;