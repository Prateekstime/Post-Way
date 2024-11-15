import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../../components/MainLayout';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Form data:', formData);
  };

  return (
    <MainLayout>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 pt-20">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className=' flex justify-center items-baseline'>
          <img src="../../../public/imgs/dummy-profile.png"  alt="add-profile" className='bg-blue-400 rounded-full h-24 w-24  ' />
          {/* <p className='text-blue-500 text-6xl font-sans -m-7'>+</p> */}
          </div>
          <h2 className="text-2xl font-bold mb-2 text-center text-green-500 font-mono text-pretty">Welcome to Login Page</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-gray-100 focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-100 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Login
              </button>
              <Link to='/Register' className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                Register
              </Link>
            </div>
          </form>
        </div>
      </div>
    </MainLayout>
  );
}
