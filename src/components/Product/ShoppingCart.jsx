import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const ShoppingCart = () => {
  return (
    <div className="container mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Shopping Cart</h2>
      <div className="space-y-6">
        {/* Cart Item */}
        <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm">
          <img
            src="https://i.ibb.co/HD8sC6v/product1.jpg"
            alt="Product"
            className="w-20 h-20 object-cover rounded-lg"
          />
          <div className="flex-1 ml-4">
            <h4 className="text-lg font-semibold text-gray-800">Product Name</h4>
            <p className="text-gray-600">$99.99</p>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="number"
              min="1"
              value="1"
              className="w-16 p-2 border rounded-lg text-center"
            />
            <button className="text-red-500 hover:text-red-700">
              <FaTrashAlt />
            </button>
          </div>
        </div>
        
        {/* Additional Cart Items */}
        {/* Repeat the above structure for more items */}

        {/* Apply Discount Code */}
        <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm">
          <input
            type="text"
            placeholder="Enter discount code"
            className="w-full p-2 border rounded-lg"
          />
          <button className="ml-4 bg-orange-500 text-white px-4 py-2 rounded-lg">
            Apply
          </button>
        </div>

        {/* Estimated Total */}
        <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm">
          <h4 className="text-lg font-semibold text-gray-800">Estimated Total:</h4>
          <p className="text-xl font-bold text-gray-800">$99.99</p>
        </div>

        {/* Checkout Button */}
        <div className="flex justify-end">
          <button className="bg-green-500 text-white px-6 py-2 rounded-lg">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
