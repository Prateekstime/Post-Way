import React from 'react'
import { useState,useEffect } from 'react';
import MainLayout from '../../components/MainLayout'

const blogPage = () => {
  

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
      <h1 className='pt-20 px-8 font-serif  text-gray-900'>Blogs Page</h1>


    <div className="">
        {data.map((item) => (
         
        <div className='border-t-2 flex justify-between m-8 rounded-xl  hover:shadow-xl hover:shadow-gray-600 shadow-md h-72 '>
             
          <p>{error}</p>
            <img src={item.images} alt={item.title} className='h-auto p-4'/>
            <div>

            <h2 className='p-4 text-gray-600 text-2xl font-semibold' href="./fullCard.jsx">{item.title}</h2>
            <div className=' h-40 text-wrap truncate '>
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
      Blog
    </div>
   </MainLayout>
  )
}

export default blogPage
