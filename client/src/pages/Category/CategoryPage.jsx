import React from 'react'
import { useState,useEffect } from 'react';
import MainLayout from '../../components/MainLayout'
import { Link } from 'react-router-dom';

const CatogaryPage = () => {
  

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
   <MainLayout>
   
    <div className="blog-page bg-white ">
      <h1 className='pt-20 px-8 font-serif  text-gray-900'>Catogary Page</h1>


    <div >
        {data.map((item) => (
         
        <div className='pt-8 flex  flex-col justify-between  rounded-xl hover:shadow-xl hover:shadow-gray-600 shadow-md  '>
           <h2 className='pl-8 text-gray-900 text-4xl font-semibold'>{item.title}</h2>
           <div className='flex mt-4 self-center w-11/12 border-gray-600 border '></div>
           <h2 className='text-gray-800 font-semibold text-xl pt-4 text-center hover:text-2xl transition-all duration-300 '>{item.category}</h2>
             
          <p>{error}</p>
            <img src={item.images} alt={item.title} className='self-center h-auto w-5/6 p-10'/>
            <div>

           
            <div className=' h-auto '>
              <p className='p-4 ml-6 text-black '>{item.description}</p>
              </div>
           
               
              <div className=" mx-6 border-t-2 flex  justify-between border-gray-300 p-4  ">
                    <h2 className='text-gray-800 font-semibold pl-10 text-sm'>By- {item.user_name}</h2>
                    <h2 className='text-gray-800 font-semibold pl-10 text-sm'>Date:{item.date}</h2>
                  
                </div>
              </div>
            

          </div>
        ))}
      </div>
    
    </div>
    
   </MainLayout>
  )
}

export default CatogaryPage
