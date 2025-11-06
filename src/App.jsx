import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import UserLayout from './page/user/UserLayout.jsx';
import LandingPage from './page/user/LandingPage.jsx';
import Listing from './page/user/Listing.jsx';
import About from './page/user/About.jsx';
import Contact from './page/user/Contact.jsx';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (car) => {
    setCartItems((prevItems) => {
      if (!prevItems.find(item => item.id === car.id)) {
        return [...prevItems, car];
      }
      return prevItems;
    });
  };

  const handleRemoveFromCart = (carId) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== carId));
  };

  const router = createBrowserRouter([
    {
      element: (
        <UserLayout
          cartItems={cartItems}
          onRemoveFromCart={handleRemoveFromCart}
          setCartItems={setCartItems}
        />
      ),
      children: [
        {
          path: '/',
          element: <LandingPage />,
        },
        {
          path: '/listing',
          element: <Listing onAddToCart={handleAddToCart} cartItems={cartItems} />,
        },
        { path: '/about', element: <About /> },
        { path: '/contact', element: <Contact /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
export default App;