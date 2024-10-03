import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios untuk membuat request
import Navbar from '../components/container/Navbar';
import DividerWithText from '../components/container/DividerWithText';
import PasswordInput from '../components/container/PasswordInput';
import 'flowbite';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // Hook untuk mengarahkan ke halaman lain

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Mengirim permintaan POST ke backend dengan email dan password
      const response = await axios.post('http://localhost:8080/login', formData);

      // Simpan token JWT di localStorage
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('role', response.data.role);

      // Arahkan pengguna ke halaman lain
      navigate('/');
    } catch (error) {
      // Tampilkan pesan kesalahan jika login gagal
      setErrorMessage(error.response?.data?.message || 'Login failed. Please try again.');
    }
  };

  return (
    <div className="mt-9 bg-bgc">
      <Navbar />
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-3xl text-center font-semibold">Masuk Akun</h1>
          <h3 className="text-base text-center font-normal mb-6">Silakan masuk ke akunmu sekarang!</h3>
          {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="email">
                E-mail
              </label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" required />
            </div>
            <PasswordInput label="Kata Sandi" id="password" name="password" value={formData.password} onChange={handleChange} />
            <a href="" className="flex text-sm font-medium justify-end mt-[-15px] mb-4">
              lupa password?
            </a>
            <div className="my-2 flex flex-col gap-2">
              <button type="submit" className="w-full py-2 px-4 bg-primary text-white rounded-lg transition duration-300 ease-in-out transform hover:bg-primary600 hover:scale-95">
                Masuk
              </button>
              <Link to="/register" className="w-full py-2 px-4 bg-primary100 text-primary rounded-lg transition duration-300 ease-in-out transform hover:bg-primary hover:text-white hover:scale-95 text-center">
                Daftar
              </Link>
            </div>
          </form>
          <DividerWithText text="atau" />
          <div className="flex flex-col">
            <button className="flex items-center justify-center py-2 px-4 bg-white border border-gray-300 rounded-lg hover:bg-gray-100">
              <img src="/src/assets/img/logo/google-icon.png" alt="Google" className="w-4 h-4 mr-2" />
              Masuk dengan Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
