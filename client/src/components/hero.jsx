import React from 'react'


const intro = () => {
  return (
  <div className='mt-10 mb-10'> 
  <div className=' flex flex-row bg- '> 
    <div className=''>
      <h1 className='m-6 text-gray-500 font-serif'>Welcome to Your <br /> Daily Dose of Insight</h1>

      <h2 className='w-2/3 p-6 text-gray-800'>Discover engaging stories, insightful articles, and the latest trends in one place. Whether you're looking to broaden your horizons or just in need of some inspiration, our blog is your go-to destination for all things thought-provoking and entertaining. Dive in and explore a world of knowledge at your fingertips.</h2>
    </div>
    <div>
      <img src="../imgs/intro-img.jpg" className='p-4 h-auto max-w-screen-xl overflow-visible -ml-64 '></img>
    </div>
    </div>
  </div>

  )
}

export default intro
