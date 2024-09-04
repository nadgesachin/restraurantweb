import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="flex justify-center my-8">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        className={`px-4 py-2 ${currentPage === 1 ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'bg-red-500 text-white'} rounded-lg`}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span className="mx-4">{currentPage} / {totalPages}</span>
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        className={`px-4 py-2 ${currentPage === totalPages ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'bg-red-500 text-white'} rounded-lg`}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
