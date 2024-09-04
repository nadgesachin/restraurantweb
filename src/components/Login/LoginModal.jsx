import React from 'react';

const LoginModal = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Login</h2>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full">
            Login
          </button>
        </form>
        <div className="text-center mt-4">
          <a href="#" className="text-blue-500 hover:underline">
            Forgot your password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
