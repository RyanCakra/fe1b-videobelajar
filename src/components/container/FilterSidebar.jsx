import React, { useState } from 'react';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';

const FilterSidebar = ({ setSelectedCategory }) => {
  const [showBidangStudi, setShowBidangStudi] = useState(true);
  const [showHarga, setShowHarga] = useState(true);
  const [showDurasi, setShowDurasi] = useState(true);

  const toggleBidangStudi = () => setShowBidangStudi(!showBidangStudi);
  const toggleHarga = () => setShowHarga(!showHarga);
  const toggleDurasi = () => setShowDurasi(!showDurasi);

  return (
    <div className="w-96 flex flex-col h-max p-4 bg-white rounded-lg shadow-md border border-gray-200 rounded-lg overflow-auto">
      <div className="flex justify-between">
        <h3 className="text-lg font-semibold mb-4">Filter</h3>
        <button className="text-red-500 mb-4">Reset</button>
      </div>

      <div className="mb-4 border border-gray-200 rounded-lg p-2">
        <div className="flex justify-between items-center mb-2">
          <h4 className="text-md font-medium">Bidang Studi</h4>
          <button onClick={toggleBidangStudi}>{showBidangStudi ? <HiChevronUp /> : <HiChevronDown />}</button>
        </div>
        {showBidangStudi && (
          <div>
            <label className="flex items-center mb-2">
              <input type="checkbox" className="mr-2" onChange={() => setSelectedCategory('Pemasaran')} />
              Pemasaran
            </label>
            <label className="flex items-center mb-2">
              <input type="checkbox" className="mr-2" onChange={() => setSelectedCategory('Digital & Teknologi')} />
              Digital & Teknologi
            </label>
            <label className="flex items-center mb-2">
              <input type="checkbox" className="mr-2" onChange={() => setSelectedCategory('Pengembangan Diri')} />
              Pengembangan Diri
            </label>
            <label className="flex items-center mb-2">
              <input type="checkbox" className="mr-2" onChange={() => setSelectedCategory('Bisnis & Manajemen')} />
              Bisnis & Manajemen
            </label>
          </div>
        )}
      </div>

      <div className="mb-4 border border-gray-200 rounded-lg p-2">
        <div className="flex justify-between items-center mb-2">
          <h4 className="text-md font-medium">Harga</h4>
          <button onClick={toggleHarga}>{showHarga ? <HiChevronUp /> : <HiChevronDown />}</button>
        </div>
        {showHarga && (
          <div>
            <label className="flex items-center mb-2">
              <input type="checkbox" className="mr-2" />
              Kurang dari Rp 100k
            </label>
            <label className="flex items-center mb-2">
              <input type="checkbox" className="mr-2" />
              Rp 100k - Rp 200k
            </label>
            <label className="flex items-center mb-2">
              <input type="checkbox" className="mr-2" />
              Lebih dari Rp 200k
            </label>
          </div>
        )}
      </div>

      <div className="mb-4 border border-gray-200 rounded-lg p-2">
        <div className="flex justify-between items-center mb-2">
          <h4 className="text-md font-medium">Durasi</h4>
          <button onClick={toggleDurasi}>{showDurasi ? <HiChevronUp /> : <HiChevronDown />}</button>
        </div>
        {showDurasi && (
          <div>
            <label className="flex items-center mb-2">
              <input type="checkbox" className="mr-2 text-primary" />
              Kurang dari 4 Jam
            </label>
            <label className="flex items-center mb-2">
              <input type="checkbox" className="mr-2" />4 - 8 Jam
            </label>
            <label className="flex items-center mb-2">
              <input type="checkbox" className="mr-2" />
              Lebih dari 8 Jam
            </label>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterSidebar;
