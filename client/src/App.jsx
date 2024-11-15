
import { Route, Routes } from 'react-router-dom';
import  HomePage  from './pages/Home/homePage';
// import { Login } from './pages/Login'
import BlogPage from './pages/Blog/blogPage';
import CatogaryPage from './pages/Category/CategoryPage'
import Post from './pages/post'
import './App.css';
import LoginPage from './pages/Login/LoginPage';
import RegisterPage from './pages/Resgister/RegisterPage';


function App() {

  return (

    <div className='App '>
  
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/blog' element={<BlogPage/>}/>
        <Route path='/category' element={<CatogaryPage/>}></Route>
        <Route path='/post' element={<Post/>}></Route>
        <Route path='/Login' element={<LoginPage/>}></Route>
        <Route path='/Register' element={<RegisterPage/>}></Route>
      </Routes>
        
     
    </div>
  )
}

export default App
