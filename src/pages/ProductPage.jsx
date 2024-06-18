import React, { useState } from 'react';
import Navbar from '../components/container/Navbar';
import Footer from '../components/container/Footer';
import FilterSidebar from '../components/container/FilterSidebar';
import Card from '../components/container/Card';
import Pagination from '../components/container/Pagination';
import { card } from '../Data';

function ProductPage() {
  const [selectedCategory, setSelectedCategory] = useState('Semua Kelas');

  return (
    <div className="bg-bgc">
      <Navbar />
      <main className="py-32">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">Koleksi Video Pembelajaran Unggulan</h1>
          <h2 className="text-base sm:text-lg font-normal opacity-80">Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</h2>
          <div className="flex flex-col md:flex-row mt-10 gap-4">
            <FilterSidebar setSelectedCategory={setSelectedCategory} />
            <div className="w-full md:pl-4">
              <div className="flex flex-col md:flex-row justify-end items-center mb-4">
                <div className="flex w-full md:w-auto">
                  <select className="form-select mr-2 p-2 bg-white border border-gray-200 rounded-md w-full md:w-auto">
                    <option>Rating Tertinggi</option>
                    <option>Harga Rendah</option>
                    <option>Harga Tinggi</option>
                    <option>A to Z</option>
                    <option>Z to A</option>
                    <option>Rating Terendah</option>
                  </select>
                  <input type="text" placeholder="Cari Kelas" className="form-input p-2 bg-white border border-gray-200 rounded-md w-full md:w-auto" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card selectedCategory={selectedCategory} card={card} />
              </div>
            </div>
          </div>
          <div className="flex justify-center md:justify-end mt-4">
            <Pagination totalPages={3} currentPage={1} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ProductPage;
