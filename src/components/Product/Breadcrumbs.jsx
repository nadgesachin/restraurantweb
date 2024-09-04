import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumbs = () => {
  return (
    <nav className="container mx-auto my-4 text-gray-600">
      <ol className="list-reset flex">
        <li>
          <Link to="/" className="hover:text-gray-800">Home</Link>
        </li>
        <li className="mx-2">/</li>
        <li>
          <Link to="/shop" className="hover:text-gray-800">Shop</Link>
        </li>
        <li className="mx-2">/</li>
        <li>
          <span className="text-gray-800">Product</span>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
