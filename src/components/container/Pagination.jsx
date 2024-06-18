import React from 'react';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  // Array untuk menampilkan tombol halaman
  const pages = [...Array(totalPages).keys()].map((i) => i + 1);

  return (
    <div className="flex justify-center mt-8">
      <button className="px-4 py-2 mx-1 bg-gray-100 rounded" onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
        <FaChevronLeft />
      </button>
      {pages.map((page) => (
        <button key={page} className={`px-4 py-2 mx-1 ${page === currentPage ? 'bg-secondary rounded text-white' : 'bg-transparent hover:bg-secondary hover:text-white rounded'}`} onClick={() => onPageChange(page)}>
          {page}
        </button>
      ))}
      <button className="px-4 py-2 mx-1 bg-gray-100 rounded" onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Pagination;
