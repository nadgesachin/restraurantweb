import React, { useState } from 'react';

const OnlineOrdering = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const handleCheckout = () => {
    // Integrate with payment gateway here
    alert('Proceeding to checkout!');
  };

  return (
    <section id="order" className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-center mb-12">Online Ordering</h2>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-2/3 pr-6">
            <h3 className="text-3xl font-semibold mb-6">Menu</h3>
            {/* Render menu items here */}
            <div className="space-y-6">
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <h4 className="text-2xl font-semibold mb-2">Dish Name</h4>
                <p className="text-gray-700 mb-2">Description of the dish.</p>
                <p className="text-gray-700 mb-4">$10.00</p>
                <button onClick={() => addToCart('Dish Name')} className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg">Add to Cart</button>
              </div>
              {/* Add more dishes */}
            </div>
          </div>
          <div className="w-full md:w-1/3 mt-12 md:mt-0">
            <h3 className="text-3xl font-semibold mb-6">Cart</h3>
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <ul className="space-y-4">
                {cart.map((item, index) => (
                  <li key={index} className="flex justify-between">
                    <span>{item}</span>
                    <span>$10.00</span>
                  </li>
                ))}
              </ul>
              <button onClick={handleCheckout} className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg mt-4 w-full">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnlineOrdering;
