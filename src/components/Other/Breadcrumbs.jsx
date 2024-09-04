import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumbs = ({ path }) => {
  const breadcrumbs = path.split('/').filter(Boolean);

  return (
    <nav className="bg-gray-200 py-3 px-5 rounded-lg mb-6">
      <ol className="flex items-center space-x-2">
        <li>
          <Link to="/" className="text-blue-500 hover:text-blue-600">Home</Link>
        </li>
        {breadcrumbs.map((crumb, index) => (
          <li key={index} className="flex items-center">
            <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M6.293 9.293a1 1 0 011.414 0L10 10.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            <Link to={`/${crumb}`} className="ml-2 text-blue-500 hover:text-blue-600 capitalize">{crumb}</Link>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
