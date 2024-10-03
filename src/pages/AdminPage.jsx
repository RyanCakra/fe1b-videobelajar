import React, { useState, useEffect } from 'react';
import Navbar from '../components/container/Navbar';
import { FaChevronRight, FaChevronLeft, FaEdit, FaTrash } from 'react-icons/fa';
import { ImPlus, ImMinus } from 'react-icons/im';
import Notification from '../components/container/Notification';
import useStore from '../store';
import { addProduct, updateProduct, deleteProduct } from '../services/api/productService';
import usePaginate from '../hooks/usePaginate';
import axios from 'axios';

function AdminPage() {
  const [data, setData] = useState([]);
  const [editId, setEditId] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [bannerImg, setBannerImg] = useState(null);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortBy, setSortBy] = useState('createdAt'); // Default sort by createdAt
  const [order, setOrder] = useState('desc'); // Default descending order

  const itemsPerPage = 5;
  const { currentPage, totalPages, currentData, changePage, resetPage } = usePaginate(data, itemsPerPage);
  const addNotification = useStore((state) => state.addNotification);

  // Fetch products with search, filter, and sort functionality
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/products', {
          params: {
            search: searchTerm,
            category: selectedCategory,
            sortBy,
            order,
          },
        });
        console.log('Response Data:', response.data);
        setData(Array.isArray(response.data) ? response.data : []); // Pasti array
        resetPage(); // Mengatur ulang halaman saat data baru diambil
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchData();
  }, [searchTerm, selectedCategory, sortBy, order]);

  const refreshData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/products');
      setData(Array.isArray(response.data) ? response.data : []); // Pasti array
      resetPage(); // Mengatur ulang halaman ke halaman pertama
    } catch (error) {
      console.error('Error refreshing data:', error);
    }
  };

  const [form, setForm] = useState({
    id: null,
    judul: '',
    desc: '',
    author: '',
    pekerjaan: '',
    harga: '',
    discount: '',
    category: '',
    durasi: '',
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file.size > 2 * 1024 * 1024) {
      addNotification('Image size exceeds 2MB!', 'error');
      return;
    }
    setBannerImg(URL.createObjectURL(file));
    setForm({
      ...form,
      bannerImg: file,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      for (const key in form) {
        formData.append(key, form[key]);
      }

      if (editId !== null) {
        await updateProduct(editId, formData);
        const updatedData = data.map((item) => (item.id === editId ? { ...form, id: editId } : item));
        setData(updatedData);
        addNotification('Product successfully updated!');
      } else {
        const newProduct = await addProduct(formData);
        setData([newProduct, ...data]);
        addNotification('Product successfully added!');
        refreshData(); // Mengambil data baru dan mengatur ulang halaman
      }
    } catch (error) {
      addNotification('Error saving product!', 'error');
    }
    handleCloseModal();
  };

  const handleEdit = (item) => {
    setEditId(item.id);
    setForm(item);
    setBannerImg(item.bannerImg);
    setIsFormVisible(true);
  };

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);
      const updatedData = data.filter((item) => item.id !== id);
      setData(updatedData);
      addNotification('Product successfully deleted!');
      refreshData(); // Mengambil data baru dan mengatur ulang halaman
    } catch (error) {
      addNotification('Error deleting product!', 'error');
    }
  };

  const handleAddNew = () => {
    setEditId(null);
    setForm({
      id: null,
      judul: '',
      desc: '',
      author: '',
      pekerjaan: '',
      harga: '',
      discount: '',
      category: '',
      durasi: '',
    });
    setBannerImg(null);
    setIsFormVisible(true);
  };

  const handleCloseModal = () => {
    setIsFormVisible(false);
    setEditId(null);
    setForm({
      id: null,
      judul: '',
      desc: '',
      author: '',
      pekerjaan: '',
      harga: '',
      discount: '',
      category: '',
      durasi: '',
    });
    setBannerImg(null);
  };

  return (
    <div className="bg-bgc min-h-screen">
      <Navbar />
      <Notification />
      <main className="container mx-auto py-8 pt-32">
        <div className="mt-1 flex justify-between items-center">
          <h2 className="text-3xl font-bold mb-4">Product List</h2>
          <button onClick={handleAddNew} className="text-gray-800 hover:text-gray-900 px-4 py-2">
            {isFormVisible ? <ImMinus size={20} /> : <ImPlus size={20} />}
          </button>
        </div>

        {/* Search, Filter, and Sort UI */}
        <div className="mb-4 flex space-x-4">
          <input type="text" placeholder="Search products" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="px-4 py-2 border rounded w-1/3" />
          <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="px-4 py-2 border rounded w-1/3">
            <option value="">All Categories</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            {/* Add more categories as needed */}
          </select>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="px-4 py-2 border rounded w-1/4">
            <option value="createdAt">Created Date</option> // Sort by createdAt
            <option value="harga">Price</option>
            <option value="judul">Title</option>
            <option value="author">Author</option>
            <option value="category">Category</option>
          </select>
          <select value={order} onChange={(e) => setOrder(e.target.value)} className="px-4 py-2 border rounded w-1/4">
            <option value="asc">Asc</option>
            <option value="desc">Desc</option>
          </select>
        </div>

        {/* Modal for Form */}
        {isFormVisible && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 overflow-hidden">
            <form onSubmit={handleSubmit} className="bg-white min-w-[400px] p-6 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl mb-4">{editId !== null ? 'Edit Product' : 'Add Product'}</h2>
              <div className="mb-4">
                <label className="block text-gray-700">Title</label>
                <input type="text" name="judul" value={form.judul} onChange={handleChange} className="w-full px-3 py-2 border rounded" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Banner Image</label>
                <input type="file" accept="image/*" onChange={handleImageChange} className="w-full px-3 py-2 border rounded" />
                {bannerImg && <img src={bannerImg} alt="Preview" className="mt-2 h-32 w-full object-cover" />}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Description</label>
                <input type="text" name="desc" value={form.desc} onChange={handleChange} className="w-full px-3 py-2 border rounded" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Author</label>
                <input type="text" name="author" value={form.author} onChange={handleChange} className="w-full px-3 py-2 border rounded" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Category</label>
                <input type="text" name="category" value={form.category} onChange={handleChange} className="w-full px-3 py-2 border rounded" />
              </div>
              <div className="flex justify-end">
                <button type="button" onClick={handleCloseModal} className="mr-4 py-2 px-4 bg-gray-500 text-white rounded">
                  Cancel
                </button>
                <button type="submit" className="py-2 px-4 bg-blue-500 text-white rounded">
                  {editId !== null ? 'Update' : 'Add'}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Product Table */}
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-lg shadow">
            <thead>
              <tr className="bg-green-300">
                <th className="p-4 text-left whitespace-nowrap">Banner Image</th>
                <th className="p-4 text-left">Title</th>
                <th className="p-4 text-left">Author</th>
                <th className="p-4 text-left">Category</th>
                <th className="p-4 text-left">Price</th>
                <th className="p-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(currentData) && currentData.length > 0 ? (
                currentData.map((item) => (
                  <tr key={item.id} className="border-t bg-green-100">
                    <td className="flex-none w-32 h-32 overflow-hidden mr-4">
                      <img src={item.bannerImg} alt={item.judul} className="w-full h-full object-cover" />
                    </td>
                    <td className="p-4">{item.judul}</td>
                    <td className="p-4">{item.author}</td>
                    <td className="p-4">{item.category}</td>
                    <td className="p-4">{item.harga}</td>
                    <td className="p-4 flex ">
                      <div className="w-full flex justify-evenly items-center py-6">
                        <button onClick={() => handleEdit(item)} className="flex items-center justify-center text-blue-500 rounded-full p-2 hover:bg-blue-100 transition duration-200">
                          <FaEdit size={20} />
                        </button>
                        <button onClick={() => handleDelete(item.id)} className="flex items-center justify-center text-red-500 rounded-full p-2 hover:bg-red-100 transition duration-200">
                          <FaTrash size={20} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center py-4">
                    No data found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="mt-10 flex justify-center items-center">
          <button className="px-4 py-3 mx-1 bg-gray-100 rounded" onClick={() => changePage(currentPage - 1)} disabled={currentPage === 1}>
            <FaChevronLeft />
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button key={page} className={`px-4 py-2 mx-1 ${currentPage === page ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`} onClick={() => changePage(page)}>
              {page}
            </button>
          ))}

          <button className="px-4 py-3 mx-1 bg-gray-100 rounded" onClick={() => changePage(currentPage + 1)} disabled={currentPage === totalPages}>
            <FaChevronRight />
          </button>
        </div>
      </main>
    </div>
  );
}

export default AdminPage;
