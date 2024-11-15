import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Card = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('../../public/data.json');
         
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError('Cannot fetch data');
        console.error("error: ",error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='flex flex-col items-center  min-h-fit '>
     
      <div className="flex flex-row flex-nowrap overflow-scroll hide-scrollbar">
        {data.map((item) => (
           <Link to='/category'>
          <div className='m-4 p-2 w-72 h-80 rounded-xl  border border-gray-400 hover:shadow-xl hover:bg-slate-100 text-wrap ' key={item.id}>
            <p>{error}</p>

            <h2 className='h-10 text-gray-800 font-semibold text-lg  truncate '>{item.title}</h2>
            
            <img src={item.images} alt={item.title} className='h-52 p-2 hover:p-0 transition-all duration-500'/>
  
            <span className='p-2 text-sm  text-gray-800'>{item.user_name}</span>

            <h2 className='text-gray-800 font-semibold text-xl text-center hover:text-2xl transition-all duration-300 '>{item.category}</h2>
          </div>
          </Link>
        ))}
      </div>
      <Link to='/category'>
      <div className=' bg-green-500 text-white hover:shadow-xl hover:border-none flex justify-center px-4 border text-lg  rounded-xl border-black hover:bg-green-600 transition-all duration-500 '>
      <span className=' font-semibold self-center  '>More</span>
      <div className='flex w-8 hover:justify-end  transition-all duration-500 '>
          <FaArrowRight className= " self-center  h-3  "/> </div>
       
      </div>
      </Link>
     
    
    </div>
  );
};

export default Card;
