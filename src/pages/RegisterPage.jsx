import React, { useState, useEffect } from 'react';
import Select, { components } from 'react-select';
import { Link } from 'react-router-dom';
import Navbar from '../components/container/Navbar';
import DividerWithText from '../components/container/DividerWithText';
import PasswordInput from '../components/container/PasswordInput';
import axios from 'axios';
import 'flowbite';

// Custom component for displaying country options
const customOption = ({ label, flag, value }) => (
  <div className="flex items-center" style={{ width: '20px' }}>
    <img src={flag} alt="flag" style={{ width: '20px', marginRight: '10px' }} />
    {value}
  </div>
);

// Component to render the selected country
const SingleValue = ({ data }) => (
  <div className="mb-5 flex items-center" style={{ width: '220px', height: '1px' }}>
    <img src={data.flag} alt="flag" className="w-6 mr-2" />
    <span>{data.value}</span>
  </div>
);

// Transform the country data to a format usable by react-select
const transformCountryData = (countries) => {
  return countries.map((country) => ({
    label: `${country.name.common} (${country.idd.root}${country.idd.suffixes ? country.idd.suffixes[0] : ''})`,
    value: `${country.idd.root}${country.idd.suffixes ? country.idd.suffixes[0] : ''}`,
    flag: country.flags.svg,
  }));
};

function Register() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    country: '',
    password: '',
    confirmPassword: '',
  });

  const [isSearchable, setIsSearchable] = useState(true);
  const [countries, setCountries] = useState([]);
  const [verificationSent, setVerificationSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Fetch country data on component mount
  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((response) => {
        setCountries(transformCountryData(response.data));
      })
      .catch((error) => {
        console.error('Error fetching country data:', error);
      });
  }, []);

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Handle phone number, ensuring it starts with country code
    if (name === 'phoneNumber') {
      const numericValue = value.replace(/[^\d+]/g, ''); // Allow only digits and '+'
      if (!numericValue.startsWith('+')) {
        setFormData({ ...formData, [name]: formData.country + numericValue });
      } else {
        setFormData({ ...formData, [name]: numericValue });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle country change
  const handleCountryChange = (selectedOption) => {
    const newPhoneNumber = formData.phoneNumber.replace(formData.country, ''); // Remove previous country code
    setFormData({
      ...formData,
      country: selectedOption.value,
      phoneNumber: selectedOption.value + newPhoneNumber, // Add new country code
    });
    setIsSearchable(false);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    setIsLoading(true); // Start loading
    setErrorMessage(''); // Reset error message

    try {
      // Register user
      const response = await axios.post('http://localhost:8080/register', {
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
        phone: formData.phoneNumber,
        country: formData.country,
      });

      // Check if registration was successful
      if (response.data.success) {
        alert('Registration successful! Please check your email to verify your account.');

        // Set verificationSent to true after email is sent
        setVerificationSent(true);
      } else {
        setErrorMessage('Registration failed: ' + response.data.message);
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('Registration failed. Please try again.');
    } finally {
      setIsLoading(false); // End loading
    }
  };

  return (
    <div className="mt-9 bg-bgc">
      <Navbar />
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-3xl text-center font-semibold">Pendaftaran Akun</h1>
          <h3 className="text-base text-center font-normal mb-6">Yuk, daftarkan akunmu sekarang juga!</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="fullName">
                Nama Lengkap
              </label>
              <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" required />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="email">
                E-mail
              </label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg" required />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="phoneNumber">
                No. Hp
              </label>
              <div className="flex gap-4">
                <Select options={countries} onChange={handleCountryChange} formatOptionLabel={customOption} components={{ SingleValue }} isSearchable={isSearchable} className="w-1/3" />
                <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="w-2/3 px-3 py-1 border border-gray-300 rounded-r-lg" required pattern="\+?[0-9]*" inputMode="numeric" />
              </div>
            </div>
            <PasswordInput label="Kata Sandi" id="password" name="password" value={formData.password} onChange={handleChange} />
            <PasswordInput label="Konfirmasi Kata Sandi" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
            <a href="" className="flex text-sm font-medium justify-end mt-[-15px]">
              lupa password?
            </a>
            <div className="my-2 flex flex-col gap-2">
              <button
                type="submit"
                className={`w-full py-2 px-4 bg-primary text-white rounded-lg transition duration-300 ease-in-out transform hover:bg-primary600 hover:scale-95 ${isLoading ? 'cursor-not-allowed opacity-50' : ''}`}
                disabled={isLoading}
              >
                {isLoading ? 'Processing...' : 'Daftar'}
              </button>

              <Link to="/login" className="w-full py-2 px-4 bg-primary100 text-primary rounded-lg transition duration-300 ease-in-out transform hover:bg-primary hover:text-white hover:scale-95 text-center">
                Masuk
              </Link>
            </div>
          </form>

          {/* Display verification message after the email is sent */}
          {verificationSent && <div className="mt-4 text-center text-green-500">A verification email has been sent. Please check your inbox.</div>}

          <DividerWithText text="atau" />
          <div className="flex flex-col">
            <button className="flex items-center justify-center py-2 px-4 bg-white border border-gray-300 rounded-lg hover:bg-gray-100">
              <img src="/src/assets/img/logo/google-icon.png" alt="Google" className="w-4 h-4 mr-2" />
              Daftar dengan Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
