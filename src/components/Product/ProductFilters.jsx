import React from 'react';

const ProductFilters = () => {
  return (
    <aside className="w-full sm:w-1/4 bg-white p-4 rounded-lg shadow-md">
      {/* Categories */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-gray-800 mb-3">Categories</h4>
        <ul className="space-y-2">
          <li><a href="#" className="text-gray-600 hover:text-gray-800">Electronics</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-800">Fashion</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-800">Home & Kitchen</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-800">Sports & Outdoors</a></li>
        </ul>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-gray-800 mb-3">Price Range</h4>
        <input
          type="range"
          min="0"
          max="1000"
          step="10"
          className="w-full"
        />
        <div className="flex justify-between text-gray-600 mt-2">
          <span>$0</span>
          <span>$1000</span>
        </div>
      </div>

      {/* Brand */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-gray-800 mb-3">Brand</h4>
        <ul className="space-y-2">
          <li><a href="#" className="text-gray-600 hover:text-gray-800">Nike</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-800">Adidas</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-800">Samsung</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-800">Apple</a></li>
        </ul>
      </div>

      {/* Ratings */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-gray-800 mb-3">Ratings</h4>
        <div className="space-y-2">
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox" />
            <span className="ml-2 text-yellow-400">★★★★☆</span>
            <span className="ml-2 text-gray-600">& Up</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox" />
            <span className="ml-2 text-yellow-400">★★★☆☆</span>
            <span className="ml-2 text-gray-600">& Up</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox" />
            <span className="ml-2 text-yellow-400">★★☆☆☆</span>
            <span className="ml-2 text-gray-600">& Up</span>
          </label>
        </div>
      </div>

      {/* Color/Size Options */}
      <div>
        <h4 className="text-lg font-semibold text-gray-800 mb-3">Color/Size</h4>
        <div className="flex flex-wrap space-x-2 space-y-2">
          <div className="w-6 h-6 bg-red-500 rounded-full"></div>
          <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
          <div className="w-6 h-6 bg-green-500 rounded-full"></div>
          <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
        </div>
        <select className="mt-4 w-full border rounded p-2">
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
          <option value="xl">Extra Large</option>
        </select>
      </div>
    </aside>
  );
};

export default ProductFilters;
