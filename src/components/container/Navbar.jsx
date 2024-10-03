import React, { useState, useEffect, useRef } from 'react';
import logoImg from '/src/assets/img/logo/logo.png';
import profileImg from '/src/assets/img/logo/avatar.png';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Status login dinamis
  const [userRole, setUserRole] = useState('user'); // Role pengguna dinamis
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    // Cek token di localStorage untuk autentikasi
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role'); // Simpan role saat login di localStorage
    if (token) {
      setIsAuthenticated(true);
      setUserRole(role); // Setel role pengguna
    }
  }, []); // Dijalan hanya ketika komponen dipasang pertama kali

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const closeDropdown = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', closeDropdown);
    return () => {
      document.removeEventListener('mousedown', closeDropdown);
    };
  }, []);

  const handleLogout = () => {
    // Hapus token dari localStorage dan reset status autentikasi
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    setIsAuthenticated(false); // Set status login jadi false setelah logout
    console.log('Logged out');
  };

  return (
    <div className="header flex justify-between items-center p-3 px-16 sm:px-28 md:px-28 lg:px-28 bg-white shadow-md fixed top-0 w-full z-50">
      <a className="logo" href="/">
        <img src={logoImg} alt="Logo" className="mt-2 w-30 h-6" />
      </a>
      <div className="flex items-center gap-4">
        <Link to={'/product'} className="text-primary600 hover:text-green-800 transition duration-100 text-sm sm:text-base">
          Kategori
        </Link>

        {/* Link admin hanya tampil jika user role adalah admin */}
        {userRole === 'admin' && (
          <Link to={'/admin'} className="text-primary600 hover:text-green-800 transition duration-100 text-sm sm:text-base">
            Admin
          </Link>
        )}

        {/* Jika pengguna sudah login, tampilkan dropdown, jika belum login, tampilkan link login & register */}
        {isAuthenticated ? (
          <div className="relative" ref={dropdownRef}>
            <button onClick={toggleDropdown} className="focus:outline-none">
              <img src={profileImg} alt="Profile" className="rounded-full w-8 h-8 sm:w-10 sm:h-10" />
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 sm:w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                <Link to={'/profile'} className="block px-4 py-2 text-gray-800 hover:bg-gray-100 border-b transition duration-300">
                  Profil Saya
                </Link>
                <Link to={'/kelas-saya'} className="block px-4 py-2 text-gray-800 hover:bg-gray-100 border-b transition duration-300">
                  Kelas Saya
                </Link>
                <Link to={'/pesanan-saya'} className="block px-4 py-2 text-gray-800 hover:bg-gray-100 border-b transition duration-300">
                  Pesanan Saya
                </Link>
                <button onClick={handleLogout} className="flex items-center block w-full text-left px-4 py-2 text-orange-500 hover:bg-gray-100 border-b transition duration-300">
                  Keluar
                  <FaArrowRight className="ml-2" />
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="flex gap-4">
            <Link to={'/login'} className="text-primary600 hover:text-green-800 transition duration-100 text-sm sm:text-base">
              Login
            </Link>
            <Link to={'/register'} className="text-primary600 hover:text-green-800 transition duration-100 text-sm sm:text-base">
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
