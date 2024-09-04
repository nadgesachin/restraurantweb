import React from 'react';

const ProductGrid = () => {
  return (
    <div className="container mx-auto my-10 bg-white">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((product, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={`https://i.ibb.co/${['HD8sC6v/product1.jpg', 'p4sg1cL/product2.jpg', 'rMHnQV9/product3.jpg', 'QrFd8k3/product4.jpg'][index % 4]}`}
              alt={`Product ${product}`}
              className="w-full h-48 object-cover"
            />
            <h3 className="text-lg font-semibold text-gray-800 mt-2">
              Product {product}
            </h3>
            <p className="text-gray-600">$ {25 + index * 5}.00</p>
            <div className="flex items-center mt-2">
              <span className="text-yellow-400">★★★★☆</span>
              <span className="text-gray-600 ml-2">(24)</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
