import React from 'react'
import Header from './header'
import Footer from './footer'


const MainLayout = ({children}) => {
  return (
    <div className='flex flex-col h-[100vh]'>
      <Header/>
      <div className='flex-1'>{children}
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout
