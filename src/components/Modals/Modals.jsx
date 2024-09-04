import React, { useState } from 'react';

const Modals = () => {
  const [isOpen, setIsOpen] = useState({
    reservation: false,
    newsletter: false,
    offers: false,
  });

  const openModal = (type) => setIsOpen({ ...isOpen, [type]: true });
  const closeModal = (type) => setIsOpen({ ...isOpen, [type]: false });

  return (
    <div>
      {/* Reservation Confirmation Modal */}
      {isOpen.reservation && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Reservation Confirmed</h3>
            <p className="mb-4">Your reservation has been successfully made. We look forward to seeing you!</p>
            <button onClick={() => closeModal('reservation')} className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg">Close</button>
          </div>
        </div>
      )}

      {/* Newsletter Signup Modal */}
      {isOpen.newsletter && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h3>
            <form>
              <input type="email" placeholder="Enter your email" className="w-full p-3 border border-gray-300 rounded-lg mb-4" />
              <button type="submit" className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg">Subscribe</button>
            </form>
            <button onClick={() => closeModal('newsletter')} className="mt-4 text-red-500 hover:text-red-600">Close</button>
          </div>
        </div>
      )}

      {/* Special Offers Modal */}
      {isOpen.offers && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Special Offers</h3>
            <p className="mb-4">Check out our latest special offers and promotions!</p>
            {/* Add offers details here */}
            <button onClick={() => closeModal('offers')} className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modals;
