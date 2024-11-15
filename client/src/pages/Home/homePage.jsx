import React from 'react'
import Hero from '../../components/hero'
import Card from '../../components/Card'
import Catogary from '../../components/category'
import MainLayout from '../../components/MainLayout'


const home = () => {
  return (
  <MainLayout className=''>
   
        <div className='py-16 bg-slate-100'>
          <Hero />

          <Card /> 
          
          <Catogary /> 
          
        </div>
  </MainLayout>
  
  )
}

export default home
