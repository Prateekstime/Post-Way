import React, { useState } from 'react';
import MainLayout from '../components/MainLayout';
import { RiArrowDropDownLine } from "react-icons/ri";

export default function Post() {
  const [fileName, setFileName] = useState("");
  const [dropdown, setDropdown] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const deleteFile = () => {
    setFileName("");
  };

  const toggleDropdownHandler = () => {
    setDropdown((currState) => !currState);
  };

  return (
    <MainLayout>
      <div className='bg-white pt-20 pb-10 px-6 sm:px-10 lg:px-20 flex flex-col items-center'>
        <input
          type="file"
          accept='image/*'
          onChange={handleFileChange}
          className="border border-gray-300 text-black p-2 w-full max-w-md mb-4 rounded-lg hover:cursor-pointer"
        />
        {fileName && (
          <p className="mt-2 text-gray-700">Selected File: {fileName}</p>
        )}
        <button onClick={deleteFile} className='bg-red-600 text-white py-2 px-4 mt-4 rounded-lg hover:bg-red-700 transition'>
          Delete Image
        </button>
        
        <div className='w-full max-w-2xl flex flex-col p-6 mt-10 border rounded-lg shadow-md'>
          <label htmlFor="blogTitle" className='font-semibold mt-3 text-lg text-black'>Title</label>
          <input type="text" id="blogTitle" name="blogTitle" className='rounded-lg w-full p-2 mt-1 border bg-white text-black' />

          <label htmlFor="blogType" className='font-semibold mt-3 text-lg text-black'>Type</label>
          <div className='flex items-center'>
            <input type="text" id="blogType" name="blogType" className='rounded-lg w-full p-2 mt-1 border bg-white text-black' />
            <button
              className="ml-2 text-black bg-white flex items-center p-2 rounded-lg border border-gray-300"
              onClick={toggleDropdownHandler}
            >
              <RiArrowDropDownLine className='text-2xl' />
            </button>
          </div>

          <label htmlFor="blogCaption" className='font-semibold mt-3 text-lg text-black'>Caption</label>
          <input type="text" id="blogCaption" name="blogCaption" className='rounded-lg w-full p-2 mt-1 border bg-white text-black' />

          <label htmlFor="blogDescription" className='font-semibold mt-3 text-lg text-black'>Description</label>
          <textarea name="blogDescription" id="blogDescription" className='h-40 w-full p-4 mt-1 border bg-white text-black rounded-lg' />

          <button className='bg-blue-500 text-white py-2 px-4 mt-6 rounded-lg hover:bg-blue-600 transition'>
            Post
          </button>
        </div>
      </div>
    </MainLayout>
  );
}
