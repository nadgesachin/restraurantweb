import React from 'react';

const NewsletterModal = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Newsletter Signup</h2>
        <p className="text-gray-600 mb-4">
          Sign up for our newsletter to receive the latest updates and exclusive offers.
        </p>
        <form className="flex">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
          <button className="bg-orange-500 text-white px-4 py-2 rounded-lg ml-2">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterModal;
