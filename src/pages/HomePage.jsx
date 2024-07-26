import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/container/Navbar';
import Footer from '../components/container/Footer';
import Card from '../components/container/Card';
import HeroSection from '../components/Home/HeroSection';
import OuterSection from '../components/Home/OuterSection';
import { card as cardData } from '../Data';
import useFilteredAndPaginate from '../hooks/useFilteredAndPaginate';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const categories = ['Semua Kelas', 'Pemasaran', 'Desain', 'Pengembangan Diri', 'Bisnis'];

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Semua Kelas');
  const filters = { category: selectedCategory === 'Semua Kelas' ? '' : selectedCategory };

  const itemsPerPage = 9;
  const { currentPage, totalPages, currentData, changePage, resetPage } = useFilteredAndPaginate(cardData, filters, itemsPerPage);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://66a313e444aa6370457fbc3e.mockapi.io/products');
        setCards(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    window.scrollTo(0, 0);
    fetchData();
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    resetPage(); // Reset page number to 1 when category changes
  };

  return (
    <div className="bg-bgc font-Lato max-w-screen-xl sm:max-w-screen-2xl md:max-w-screen-3xl lg:max-w-screen-4xl xl:max-w-screen-5xl mx-auto">
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
                onClick={() => handleCategoryChange(category)}
                className={`mx-1 sm:mx-2 md:mx-3 mb-2 py-2 px-2 border-b-2 transition duration-300 hover:text-orange-500 hover:border-orange-500 ${
                  selectedCategory === category ? 'border-orange-500 text-orange-500 font-bold' : 'border-transparent text-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {currentData.map((item) => (
              <Link to={`/product/${item.id}`}>
                <Card key={item.id} card={item} />
              </Link>
            ))}
          </div>
          <div className="flex justify-end mt-8">
            <button className="px-4 py-2 mx-1 bg-gray-100 rounded" onClick={() => changePage(currentPage - 1)} disabled={currentPage === 1}>
              <FaChevronLeft />
            </button>
            {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
              <button key={page} className={`px-4 py-2 mx-1 ${page === currentPage ? 'bg-secondary rounded text-white' : 'bg-transparent hover:bg-secondary hover:text-white rounded'}`} onClick={() => changePage(page)}>
                {page}
              </button>
            ))}
            <button className="px-4 py-2 mx-1 bg-gray-100 rounded" onClick={() => changePage(currentPage + 1)} disabled={currentPage === totalPages}>
              <FaChevronRight />
            </button>
          </div>
        </section>
      </main>
      <OuterSection />
      <Footer />
    </div>
  );
};

export default HomePage;
