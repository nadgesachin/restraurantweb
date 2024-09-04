import React from 'react';
import { FaEdit, FaHeart, FaListAlt, FaCreditCard } from 'react-icons/fa';

const UserAccountDashboard = () => {
  return (
    <div className="container mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">My Account</h2>

      {/* Profile Information */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Profile Information</h3>
        <div className="flex items-center space-x-4">
          <img
            src="https://i.ibb.co/5b4dR6s/user-profile.jpg"
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover"
          />
          <div>
            <h4 className="text-xl font-semibold text-gray-800">John Doe</h4>
            <p className="text-gray-600">johndoe@example.com</p>
            <button className="mt-2 text-blue-500 hover:underline flex items-center">
              <FaEdit className="mr-2" /> Edit Profile
            </button>
          </div>
        </div>
      </div>

      {/* Order History */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Order History</h3>
        <ul className="space-y-4">
          <li className="border-b border-gray-200 pb-2">
            <h4 className="text-gray-800">Order #12345</h4>
            <p className="text-gray-600">Date: 01/01/2024</p>
            <p className="text-gray-600">Total: $99.99</p>
            <button className="text-blue-500 hover:underline">
              View Details
            </button>
          </li>
          {/* Add more orders here */}
        </ul>
      </div>

      {/* Wishlist */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Wishlist</h3>
        <ul className="space-y-4">
          <li className="border-b border-gray-200 pb-2">
            <div className="flex items-center space-x-4">
              <img
                src="https://i.ibb.co/HD8sC6v/product1.jpg"
                alt="Product"
                className="w-16 h-16 object-cover rounded-lg"
              />
              <div>
                <h4 className="text-gray-800">Product Name</h4>
                <p className="text-gray-600">$99.99</p>
              </div>
            </div>
          </li>
          {/* Add more wishlist items here */}
        </ul>
      </div>

      {/* Address Book */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Address Book</h3>
        <ul className="space-y-4">
          <li className="border-b border-gray-200 pb-2">
            <h4 className="text-gray-800">Home Address</h4>
            <p className="text-gray-600">123 Main St, New York, NY 10001</p>
          </li>
          {/* Add more addresses here */}
        </ul>
      </div>

      {/* Saved Payment Methods */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Saved Payment Methods</h3>
        <ul className="space-y-4">
          <li className="border-b border-gray-200 pb-2">
            <div className="flex items-center space-x-4">
              <FaCreditCard className="text-gray-800 text-2xl" />
              <div>
                <h4 className="text-gray-800">Visa **** 1234</h4>
                <p className="text-gray-600">Expires: 12/2024</p>
              </div>
            </div>
          </li>
          {/* Add more payment methods here */}
        </ul>
      </div>
    </div>
  );
};

export default UserAccountDashboard;
