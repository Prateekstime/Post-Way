import React from 'react'
import { Link } from "react-router-dom";
import Post from '../pages/post';
import LoginPage from '../pages/Login/LoginPage';


const header = () => {
  return (
    <div className ="fixed top-0  w-full h-16 grid grid-flow-col  justify-between px-4 bg-black gap">
      <div  className =" h-16  flex justify-center ">
        <img src="" alt="" />
       
        <Link
        to="/"
        className="mx-auto m-4 text-2xl flex items-center gap-x-2 font-bold text-primary   text-green-600 hover:text-green-500"
      >
        <span>Blog Sync</span>
       
      </Link>
        {/* <h1 className ="m-4 text-2xl font-bold ">Blog sync</h1> */}
        
      </div>
     
      <div className =" min-h-10  flex items-center gap-x-4 font-bold  
      ">
          <button className='text-sm  bg-black hover:bg-green-600 hover:text-black rounded-3xl transition-all duration-500'>All Blogs</button>
          <Link to='/post'>
         <button href="./post.jsx" className='text-white text-sm  bg-black hover:bg-green-600 hover:text-black rounded-3xl transition-all duration-500'>Add Blog</button>
         </Link>
         <Link to='/Login'>
         <button href="./post.jsx" className='text-sm border-white border-x-1 border-y-1 bg-black hover:bg-green-600 hover:text-black 
         text-white rounded-3xl transition-all duration-500'>Login/Sign-Up</button>
         </Link> 

      </div>
    </div>
  )
}

export default header
