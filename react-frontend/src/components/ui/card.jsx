import React from "react";
import PrimaryButton from "./primarybutton.jsx";

const Card = ({
  icon,
  title,
  description,
  car,
  onAddToCart,
  isAdded,
}) => {
  // Feature Card variant
  if (icon) {
    return (
      <div className="bg-white p-8 rounded-2xl shadow-md text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
          {icon}
        </div>
        <h3 className="font-bold text-xl text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    );
  }

  // Car Card variant
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <img src={car.image} alt={`${car.make} ${car.model}`} className="w-full h-48 object-cover" />
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="font-bold text-xl text-gray-900 mb-1">{car.make} {car.model}</h3>
        <p className="text-sm text-gray-500 mb-4">Year: {car.year}</p>
        <p className="text-2xl font-bold text-indigo-600 mb-6">${car.price.toLocaleString()}</p>
        <div className="mt-auto">
          <PrimaryButton
            label={isAdded ? "Added to Cart" : "Add to Cart"}
            onClick={() => onAddToCart(car)}
            intent="primary"
            size="md"
            disabled={isAdded}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
