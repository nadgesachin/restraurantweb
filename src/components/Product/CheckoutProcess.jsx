import React from 'react';

const CheckoutProcess = () => {
  return (
    <div className="container mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Checkout</h2>

      {/* Shipping Address Form */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Shipping Address</h3>
        <form className="space-y-4">
          <div className="flex flex-col">
            <label className="text-gray-600">Full Name</label>
            <input
              type="text"
              className="w-full p-2 border rounded-lg"
              placeholder="John Doe"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-600">Address Line 1</label>
            <input
              type="text"
              className="w-full p-2 border rounded-lg"
              placeholder="123 Main St"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-600">City</label>
            <input
              type="text"
              className="w-full p-2 border rounded-lg"
              placeholder="New York"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-600">Zip/Postal Code</label>
            <input
              type="text"
              className="w-full p-2 border rounded-lg"
              placeholder="10001"
            />
          </div>
        </form>
      </div>

      {/* Payment Method Selection */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Payment Method</h3>
        <div className="flex space-x-4">
          <label className="flex items-center">
            <input type="radio" name="payment-method" className="form-radio" />
            <span className="ml-2 text-gray-600">Credit Card</span>
          </label>
          <label className="flex items-center">
            <input type="radio" name="payment-method" className="form-radio" />
            <span className="ml-2 text-gray-600">PayPal</span>
          </label>
          <label className="flex items-center">
            <input type="radio" name="payment-method" className="form-radio" />
            <span className="ml-2 text-gray-600">Bank Transfer</span>
          </label>
        </div>
      </div>

      {/* Order Summary */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Order Summary</h3>
        <div className="flex justify-between">
          <p className="text-gray-600">Subtotal</p>
          <p className="text-gray-800">$99.99</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-600">Shipping</p>
          <p className="text-gray-800">$5.00</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-600">Total</p>
          <p className="text-gray-800 font-bold">$104.99</p>
        </div>
      </div>

      {/* Place Order Button */}
      <div className="flex justify-end">
        <button className="bg-green-500 text-white px-6 py-2 rounded-lg">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default CheckoutProcess;
