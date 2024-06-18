import React, { useState } from 'react';
import Navbar from '../components/container/Navbar';
import Footer from '../components/container/Footer';
import Card from '../components/container/Card';
import HeroSection from '../components/Home/HeroSection';
import OuterSection from '../components/Home/OuterSection';
import { card } from '/src/Data';

const categories = ['Semua Kelas', 'Pemasaran', 'Desain', 'Pengembangan Diri', 'Bisnis'];

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Semua Kelas');

  return (
    <div className="bg-bgc">
      <Navbar />
      <main className="home pt-20">
        <HeroSection />
        <section className="course-collection px-16 sm:px-28 md:px-28 py-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1">Koleksi Video Pembelajaran Unggulan</h2>
          <h3 className="text-base sm:text-lg font-normal opacity-70 mb-10">Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</h3>
          <div className="flex flex-wrap justify-start mb-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`mx-1 sm:mx-2 md:mx-3 mb-2 py-2 px-2 border-b-2 transition duration-300 hover:text-orange-500 hover:border-orange-500 ${
                  selectedCategory === category ? 'border-orange-500 text-orange-500 font-bold' : 'border-transparent text-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Card selectedCategory={selectedCategory} card={card} />
          </div>
        </section>
      </main>
      <OuterSection />
      <Footer />
    </div>
  );
};

export default HomePage;
