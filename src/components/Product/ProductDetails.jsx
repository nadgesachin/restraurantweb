import React from 'react';
import { FaStar, FaCartPlus } from 'react-icons/fa';

const ProductDetails = () => {
  return (
    <div className="container mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {/* Product Images Carousel */}
        <div>
          <img
            src="https://i.ibb.co/HD8sC6v/product1.jpg"
            alt="Product"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Product Information */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800">Product Title</h2>
          <p className="text-gray-600 mt-2">Brand: Nike</p>
          <div className="flex items-center mt-2">
            <span className="text-yellow-400 text-xl">★★★★☆</span>
            <span className="text-gray-600 ml-2">(120 Reviews)</span>
          </div>
          <p className="text-2xl font-bold text-gray-800 mt-4">$99.99</p>
          <p className="text-gray-600 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae
            libero a nisi luctus semper.
          </p>
          <div className="mt-6">
            <button className="bg-orange-500 text-white px-4 py-2 rounded-full flex items-center space-x-2">
              <FaCartPlus />
              <span>Add to Cart</span>
            </button>
            <button className="ml-4 bg-gray-800 text-white px-4 py-2 rounded-full">
              Buy Now
            </button>
          </div>
          <div className="mt-10">
            <h3 className="text-xl font-semibold text-gray-800">Related Products</h3>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <img
                  src="https://i.ibb.co/p4sg1cL/product2.jpg"
                  alt="Related Product"
                  className="w-full h-48 object-cover"
                />
                <h4 className="text-lg font-semibold text-gray-800 mt-2">
                  Related Product 1
                </h4>
                <p className="text-gray-600">$89.99</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <img
                  src="https://i.ibb.co/rMHnQV9/product3.jpg"
                  alt="Related Product"
                  className="w-full h-48 object-cover"
                />
                <h4 className="text-lg font-semibold text-gray-800 mt-2">
                  Related Product 2
                </h4>
                <p className="text-gray-600">$79.99</p>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <h3 className="text-xl font-semibold text-gray-800">Customer Reviews</h3>
            <div className="mt-4 space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                <p className="text-gray-600">
                  <span className="font-semibold">John Doe</span> - Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit.
                </p>
                <div className="flex items-center mt-2">
                  <span className="text-yellow-400">★★★★★</span>
                  <span className="text-gray-600 ml-2">2 days ago</span>
                </div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                <p className="text-gray-600">
                  <span className="font-semibold">Jane Smith</span> - Praesent
                  ultricies enim nec risus auctor, in faucibus nisl consequat.
                </p>
                <div className="flex items-center mt-2">
                  <span className="text-yellow-400">★★★★☆</span>
                  <span className="text-gray-600 ml-2">5 days ago</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <h3 className="text-xl font-semibold text-gray-800">Size Guide</h3>
            <table className="table-auto mt-4 w-full border-collapse">
              <thead>
                <tr>
                  <th className="border p-2 text-gray-600">Size</th>
                  <th className="border p-2 text-gray-600">Chest (in)</th>
                  <th className="border p-2 text-gray-600">Waist (in)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2 text-gray-600">S</td>
                  <td className="border p-2 text-gray-600">34-36</td>
                  <td className="border p-2 text-gray-600">28-30</td>
                </tr>
                <tr>
                  <td className="border p-2 text-gray-600">M</td>
                  <td className="border p-2 text-gray-600">38-40</td>
                  <td className="border p-2 text-gray-600">32-34</td>
                </tr>
                <tr>
                  <td className="border p-2 text-gray-600">L</td>
                  <td className="border p-2 text-gray-600">42-44</td>
                  <td className="border p-2 text-gray-600">36-38</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
