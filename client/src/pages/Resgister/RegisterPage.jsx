import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactDom from 'react-dom';
import MainLayout from '../../components/MainLayout';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [formErrors, setFormErrors] = useState({
    username: '',
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

  const validateForm = () => {
    const errors = {};
    if (!formData.username) {
      errors.username = 'Username is required';
    }
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!formData.password) {
      errors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      // Handle form submission
      console.log('Form data:', formData);
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <MainLayout >
    <div className="min-h-screen flex items-center justify-center pt-20 bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mb-10">
        <div className=' flex justify-center items-baseline '>
            <img src="../../../public/imgs/dummy-profile.png"  alt="add-profile" className='bg-blue-400 rounded-full h-24 w-24  ' />
            
          <p className='text-green-500 text-6xl font-sans -m-7'>+</p>
        </div>
        {/* <h2 className="text-2xl font-bold mb-6 text-center">Register</h2> */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block  text-gray-700 text-sm font-bold mb-2 hover:underline " htmlFor="username">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              value={formData.username}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-100 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {formErrors.username && <p className="text-red-500 text-xs italic">{formErrors.username}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2  hover:underline" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-100 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {formErrors.email && <p className="text-red-500 text-xs italic">{formErrors.email}</p>}
          </div>
          <div className="mb-6">
            <label className="block  text-gray-700 text-sm font-bold mb-2  hover:underline" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="shadow  bg-gray-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            />
            {formErrors.password && <p className="text-red-500 text-xs italic">{formErrors.password}</p>}
           
          </div>
          <div className="flex items-center justify-between flex-col">

            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline"
            >
              Register
            </button>
            <p className='text-gray-500 self-center font-serif'>Already have a account! <span><Link to="/Login">Login</Link></span></p>
           
           
          </div>
          
        </form>
      </div>
    </div>
    </MainLayout>
  );
}
